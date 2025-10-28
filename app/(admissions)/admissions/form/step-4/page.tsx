"use client";

import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Stepper from "@/reuseComponents/Stepper";
import { useCallback, useRef, useState, useEffect } from "react";
import { uploadDocuments } from "@/services/api/admissionsService";

export default function AdmissionsFormStep4() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<{
    id: string;
    name: string;
    size: number;
    file?: File;
    url?: string;
    documentType?: string;
    status?: 'local' | 'uploaded';
  }[]>([]);

  // helper: convert File to preview URL
  const makePreview = (file: File) => URL.createObjectURL(file);

  // Open file picker
  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  // Upload files to backend endpoint (uses centralized service)
  const uploadFiles = useCallback(async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploading(true);
    try {
      const formData = new FormData();
      for (const file of Array.from(files)) {
        formData.append("documents", file);
      }

      // Use the service wrapper which will attach Authorization if present.
      const json = await uploadDocuments(formData);

      // If API returns documents array, use it to populate uploaded list
      if (json && Array.isArray(json.documents)) {
        const docs = json.documents as Array<Record<string, unknown>>;
        const newFiles = docs.map((d, idx) => {
          const fileName = (d["file_name"] || d["fileName"] || `uploaded-${idx}`) as string;
          const fileSize = (d["file_size"] as number) || 0;
          const fileField = d["file"];
          const url = typeof fileField === "string" && (fileField as string).startsWith("http") ? (fileField as string) : undefined;
          return {
            id: `${Date.now()}-${idx}`,
            name: fileName,
            size: fileSize,
            url,
          };
        });
        setUploadedFiles((prev) => [...newFiles, ...prev]);
      } else {
        // fallback: use the local File objects for display
        const localFiles = Array.from(files).map((f) => ({
          id: `${Date.now()}-${f.name}`,
          name: f.name,
          size: f.size,
          file: f,
          url: makePreview(f),
        }));
        setUploadedFiles((prev) => [...localFiles, ...prev]);
      }
    } catch (err: unknown) {
      console.error(err);
      const msg = err instanceof Error ? err.message : String(err);
      alert(msg || "Upload failed");
    } finally {
      setUploading(false);
    }
  }, []);

  // Cleanup preview URLs on unmount
  useEffect(() => {
    return () => {
      uploadedFiles.forEach((f) => {
        if (f.url) URL.revokeObjectURL(f.url);
      });
    };
  }, [uploadedFiles]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    // add as local pending files (user must choose document_type before upload)
    const localFiles = Array.from(files).map((f) => ({
      id: `${Date.now()}-${f.name}`,
      name: f.name,
      size: f.size,
      file: f,
      url: makePreview(f),
      documentType: "",
      status: "local" as const,
    }));
    setUploadedFiles((prev) => [...localFiles, ...prev]);
    // reset input so same file can be re-selected later
    e.currentTarget.value = "";
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    uploadFiles(e.dataTransfer.files);
  };

  const handleDelete = (id: string) => {
    setUploadedFiles((prev) => prev.filter((p) => p.id !== id));
    // NOTE: server-side delete is not implemented because API details were not provided.
  };

  const handlePreview = (file: { file?: File; url?: string; name: string }) => {
    if (file.url) {
      window.open(file.url, "_blank");
      return;
    }
    if (file.file) {
      const blobUrl = URL.createObjectURL(file.file);
      window.open(blobUrl, "_blank");
      // allow later cleanup by revoking after short delay
      setTimeout(() => URL.revokeObjectURL(blobUrl), 10000);
      return;
    }
    alert("Preview not available for this file");
  };

  // Upload only pending local files. Each must have documentType set.
  const uploadPendingFiles = async () => {
    const pending = uploadedFiles.filter((f) => f.status === "local" && f.file) as (typeof uploadedFiles[number])[];
    if (pending.length === 0) {
      alert("No files to upload");
      return;
    }
    // validation: ensure every pending file has a document type
    const missing = pending.find((p) => !p.documentType || p.documentType.trim() === "");
    if (missing) {
      alert(`Please select a document type for ${missing.name}`);
      return;
    }

    setUploading(true);
    try {
      const formData = new FormData();
      // Append files and corresponding document_type fields in same order
      for (const p of pending) {
        formData.append("documents", p.file as File);
        // append document_type for this file; server should read them in same order
        formData.append("document_type", p.documentType as string);
      }

      const json = await uploadDocuments(formData);

      // Replace pending entries with server-returned documents when available
      if (json && Array.isArray(json.documents)) {
        const docs = json.documents as Array<Record<string, unknown>>;
        const newFiles = docs.map((d, idx) => {
          const fileName = (d["file_name"] || d["fileName"] || `uploaded-${idx}`) as string;
          const fileSize = (d["file_size"] as number) || 0;
          const fileField = d["file"];
          const url = typeof fileField === "string" && (fileField as string).startsWith("http") ? (fileField as string) : undefined;
          return {
            id: `${Date.now()}-${idx}`,
            name: fileName,
            size: fileSize,
            url,
            documentType: (d["document_type"] as string) || undefined,
            status: "uploaded" as const,
          };
        });

        // remove pending ones we just uploaded (match by id)
        const remaining = uploadedFiles.filter((f) => !(f.status === "local" && pending.some((p) => p.id === f.id)));
        setUploadedFiles([...newFiles, ...remaining]);
      } else {
        // fallback: mark pending files as uploaded
        setUploadedFiles((prev) => prev.map((f) => (f.status === "local" ? { ...f, status: "uploaded" } : f)));
      }
    } catch (err: unknown) {
      console.error(err);
      const msg = err instanceof Error ? err.message : String(err);
      alert(msg || "Upload failed");
    } finally {
      setUploading(false);
    }
  };
  return (
    <>
      <Navbar />

      {/* Top Breadcrumb */}
      <div className="bg-[#61213C] text-white p-2">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-4 text-xs sm:text-sm">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>Admissions</span>
            <span className="mx-2">›</span>
            <span className="text-[#FFB800]">Application Form</span>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-5xl mx-auto py-12 px-4">
        <Stepper current={3} />

        {/* Step Title */}
        <h2 className="text-3xl text-black font-bold mb-2">
          Step 4: Document Upload
        </h2>
        <p className="text-gray-600 mb-8">
          Supported file formats: PDF, JPG, PNG (max 5MB each)
        </p>

        {/* Upload Section */}
        <div className="grid grid-cols-1 md:grid-cols-[208px_1fr_1fr] gap-6 ">
          {/* Upload Box */}
          <div className="bg-white border rounded-lg p-6 md:w-[208px]">
            <h3 className="text-gray-800 font-medium mb-4">
              Upload required documents
            </h3>
            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onDragEnter={(e) => e.preventDefault()}
              className="bg-white border border-dashed border-[#8B1C3D] rounded-lg p-6 flex flex-col items-center justify-center"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-3">
                <Image
                  src="/icons/cloud-plus.svg"
                  alt="Upload Icon"
                  width={56}
                  height={56}
                />
              </div>
              <p className="text-[#1C1F22] text-center">Drag & drop to upload</p>
              <p
                className="text-[#A73966] cursor-pointer"
                onClick={openFilePicker}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") openFilePicker();
                }}
              >
                or browse
              </p>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
                multiple
                accept=".pdf,image/*"
              />
              {uploading && <p className="text-sm text-gray-500 mt-2">Uploading...</p>}
              <button
                type="button"
                onClick={uploadPendingFiles}
                disabled={uploading}
                className="mt-3 bg-[#8B1C3D] text-white px-4 py-2 rounded-md text-sm hover:bg-[#702136]"
              >
                Upload selected
              </button>
            </div>
          </div>

          {/* Upload Record */}
          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-gray-800 font-medium mb-4">Upload record</h3>
            <hr className="my-4" />
            <div className="space-y-3">
              {uploadedFiles.length === 0 ? (
                <p className="text-gray-600">No uploaded files yet.</p>
              ) : (
                uploadedFiles.map((f) => {
                  const lower = f.name.toLowerCase();
                  const iconSrc = lower.endsWith(".pdf") ? "/icons/pdf1.svg" : "/icons/jpeg.svg";
                  return (
                    <div key={f.id} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Image src={iconSrc} alt="Uploaded File" width={35} height={35} />
                        <div>
                          <p className="text-gray-700">{f.name}</p>
                          <p className="text-gray-600 text-xs">{f.size ? `${Math.round(f.size / 1024)}kb` : "-"}</p>
                          {f.status === 'local' && (
                            <div className="mt-2">
                              <label className="text-xs text-gray-600 mr-2">Document type</label>
                              <select
                                value={f.documentType || ""}
                                onChange={(e) =>
                                  setUploadedFiles((prev) => prev.map((p) => (p.id === f.id ? { ...p, documentType: e.target.value } : p)))
                                }
                                className="border rounded-md text-sm p-1"
                              >
                                <option value="">Select type</option>
                                <option value="waec_certificate">WAEC Certificate</option>
                                <option value="jamb_result">JAMB Result</option>
                                <option value="birth_certificate">Birth Certificate</option>
                                <option value="secondary_school_certificate">Secondary School Certificate</option>
                              </select>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handlePreview(f)}
                          className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-1 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          Preview
                        </button>
                        <button onClick={() => handleDelete(f.id)} aria-label="Delete" className="">
                          <Image src="/icons/trash.svg" alt="Delete" width={25} height={25} />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Attach Documents */}
          <div className="bg-white border rounded-lg p-6 col-span-1 md:col-span-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-800 font-medium">
                Attach the following documents
              </h3>
              <p className="text-gray-600">2/4</p>
            </div>
            <hr className="my-4" />
            <div className="space-y-4">
              {/* Uploaded */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/checkcircle.svg"
                    alt="checkcircle"
                    width={25}
                    height={25}
                  />
                  <div>
                    <p className="text-[#1C1F22]">WAEC Result</p>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/icons/pdf.svg"
                        alt="pdf"
                        width={16}
                        height={16}
                      />
                      <p className="text-[#6F7C89]">Joshua-WAEC.pdf</p>
                    </div>
                  </div>
                </div>
                <button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-1 text-sm text-gray-700 hover:bg-gray-50">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                  </svg>
                  Edit
                </button>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/checkcircle.svg"
                    alt="checkcircle"
                    width={25}
                    height={25}
                  />
                  <div>
                    <p className="text-[#1C1F22]">NIN Result</p>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/icons/pdf.svg"
                        alt="pdf"
                        width={16}
                        height={16}
                      />
                      <p className="text-[#6F7C89]">Joshua-WAEC.pdf</p>
                    </div>
                  </div>
                </div>
                <button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-1 text-sm text-gray-700 hover:bg-gray-50">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                  </svg>
                  Edit
                </button>
              </div>
              {/* Pending */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/checkcircle2.svg"
                    alt="checkcircle"
                    width={25}
                    height={25}
                  />
                  <span className="text-gray-700">Jamb Result</span>
                </div>
                <button className="bg-[#F4C2C2] text-white px-5 py-1 rounded-md text-sm">
                  Upload
                </button>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/checkcircle2.svg"
                    alt="checkcircle"
                    width={25}
                    height={25}
                  />
                  <span className="text-gray-700">Just a filler</span>
                </div>
                <button className="bg-[#F4C2C2] text-white px-5 py-1 rounded-md text-sm">
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Save Draft + Buttons */}
        <div className="bg-white border rounded-lg p-4 flex items-center justify-between mt-6">
          <button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
            <svg
              className="w-4 h-4 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2z"></path>
              <polyline points="17 21 17 13 7 13 7 21"></polyline>
              <path d="M7 3v4"></path>
            </svg>
            Save to Drafts
          </button>

          <div className="flex items-center gap-3">
            <Link
              href="/admissions/form/step-3"
              className="border border-[#8B1C3D] text-[#8B1C3D] px-6 py-2 rounded-md hover:bg-gray-50"
            >
              Go back
            </Link>
            <Link
              href="/admissions/form/step-5"
              className="bg-[#F4C2C2] text-white px-6 py-2 rounded-md hover:bg-[#e6a8a8]"
            >
              Proceed to Pay
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
