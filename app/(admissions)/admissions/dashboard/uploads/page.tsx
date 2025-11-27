"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AdmissionsSidebar from "@/components/AdmissionsSidebar";
import Image from "next/image";

type UploadItem = {
  id: string;
  name: string;
  size: number;
  type: string;
  status?: "verified" | "pending" | "missing";
};

export default function AdmissionsUploadsPage() {
  const [uploads, setUploads] = useState<UploadItem[]>([]);
  const [selectedView, setSelectedView] = useState<
    "record" | "verified" | "pending" | "missing"
  >("record");

  useEffect(() => {
    try {
      const raw = localStorage.getItem("admissions_uploads");
      if (raw) setUploads(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("admissions_uploads", JSON.stringify(uploads));
    } catch {
      // ignore
    }
  }, [uploads]);

  function handleFiles(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files) return;

    const next: UploadItem[] = Array.from(files).map((f, i) => ({
      id: `${Date.now()}-${i}`,
      name: f.name,
      size: f.size,
      type: f.type,
      status: "pending",
    }));

    setUploads((s) => [...next, ...s]);
    // reset input value so same file can be selected again
    e.currentTarget.value = "";
  }

  function removeUpload(id: string) {
    setUploads((s) => s.filter((u) => u.id !== id));
  }

  function updateStatus(id: string, status: UploadItem["status"]) {
    setUploads((s) => s.map((u) => (u.id === id ? { ...u, status } : u)));
  }

  return (
    <>
      <Navbar />

      <div className="bg-[#61213C] text-white p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center  text-xs sm:text-sm">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>Admissions</span>
            <span className="mx-2">›</span>
            <span className="text-[#FFB800]">Uploads</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-12 gap-6">
        <AdmissionsSidebar />

        <main className="md:col-span-4">
          <div className="bg-white border rounded shadow-sm p-6">
            <h3 className="text-gray-800 font-medium mb-4">
              Upload required documents
            </h3>
            <div className="bg-white border border-dashed border-[#8B1C3D] rounded-lg p-6 flex flex-col items-center justify-center">
              <div className="w-14 h-14 flex items-center justify-center mb-3">
                <Image
                  src="/icons/cloud-plus.svg"
                  alt="Upload Icon"
                  width={56}
                  height={56}
                />
              </div>
              <p className="text-[#1C1F22] text-center">
                Drag & drop to upload
              </p>
              <p className="text-[#A73966]">or browse</p>
              <label className="mt-3 inline-flex items-center px-3 py-2 bg-[#61213C] text-white rounded cursor-pointer">
                <input
                  type="file"
                  multiple
                  onChange={handleFiles}
                  className="hidden"
                />
                Choose files
              </label>
            </div>

            <ul className="flex flex-col gap-4 p-2 text-[16px] text-gray-700 mt-4">
              <li
                role="button"
                tabIndex={0}
                onClick={() => setSelectedView("record")}
                onKeyDown={(e) =>
                  e.key === "Enter" && setSelectedView("record")
                }
                className={`flex items-center justify-between py-2 rounded cursor-pointer ${
                  selectedView === "record" ? "bg-gray-50" : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/file-text.svg"
                    width={24}
                    height={24}
                    alt="file"
                  />
                  <p className="text-sm">Upload record</p>
                </div>
                <Image
                  src="/icons/right-arrow.svg"
                  width={8}
                  height={8}
                  alt="arrow"
                />
              </li>

              <li
                role="button"
                tabIndex={0}
                onClick={() => setSelectedView("verified")}
                onKeyDown={(e) =>
                  e.key === "Enter" && setSelectedView("verified")
                }
                className={`flex items-center justify-between py-2 rounded cursor-pointer ${
                  selectedView === "verified"
                    ? "bg-gray-50"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/checkcircle3.svg"
                    width={24}
                    height={24}
                    alt="Verified"
                  />
                  <p className="text-sm">Verified</p>
                </div>
                <Image
                  src="/icons/right-arrow.svg"
                  width={8}
                  height={8}
                  alt="arrow"
                />
              </li>

              <li
                role="button"
                tabIndex={0}
                onClick={() => setSelectedView("pending")}
                onKeyDown={(e) =>
                  e.key === "Enter" && setSelectedView("pending")
                }
                className={`flex items-center justify-between py-2 rounded cursor-pointer ${
                  selectedView === "pending" ? "bg-gray-50" : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/timer.svg"
                    width={24}
                    height={24}
                    alt="Pending Verification"
                  />
                  <p className="text-sm">Pending Verification</p>
                </div>
                <Image
                  src="/icons/right-arrow.svg"
                  width={8}
                  height={8}
                  alt="arrow"
                />
              </li>

              <li
                role="button"
                tabIndex={0}
                onClick={() => setSelectedView("missing")}
                onKeyDown={(e) =>
                  e.key === "Enter" && setSelectedView("missing")
                }
                className={`flex items-center justify-between py-2 rounded cursor-pointer ${
                  selectedView === "missing" ? "bg-gray-50" : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/missing.svg"
                    width={24}
                    height={24}
                    alt="Missing"
                  />
                  <p className="text-sm">Missing Uploads</p>
                </div>
                <Image
                  src="/icons/right-arrow.svg"
                  width={8}
                  height={8}
                  alt="arrow"
                />
              </li>
            </ul>
          </div>
        </main>

        <aside className="md:col-span-6">
          <div className="bg-white border rounded shadow-sm p-6 h-full">
            {selectedView === "record" ? (
              <>
                <h3 className="text-gray-800 font-medium mb-4">
                  Upload record
                </h3>
                <hr className="my-4" />
                <div className="space-y-3">
                  {uploads.length === 0 ? (
                    <p className="text-sm text-gray-500">
                      No uploads yet. Use the upload area to add documents.
                    </p>
                  ) : (
                    uploads.map((u) => (
                      <div
                        key={u.id}
                        className="flex items-center justify-between text-sm"
                      >
                        <div className="flex items-center gap-2">
                          <Image
                            src="/icons/pdf1.svg"
                            alt="Uploaded File"
                            width={35}
                            height={35}
                          />
                          <div>
                            <p className="text-gray-700">{u.name}</p>
                            <p className="text-gray-600 text-xs">
                              {(u.size / 1024).toFixed(0)} KB •{" "}
                              {u.type || "unknown"}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              alert("Preview not implemented in demo")
                            }
                            className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-1 text-sm text-gray-700 hover:bg-gray-50"
                          >
                            Preview
                          </button>
                          <button
                            onClick={() => removeUpload(u.id)}
                          >
                            {" "}
                            <Image
                              src="/icons/trash.svg"
                              alt="Uploaded File"
                              width={25}
                              height={25}
                            />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </>
            ) : selectedView === "verified" ? (
              <>
                <h3 className="text-gray-800 font-medium mb-4">
                  Verified uploads
                </h3>
                <hr className="my-4" />
                {uploads.filter((u) => u.status === "verified").length === 0 ? (
                  <p className="text-sm text-gray-500">
                    No verified uploads yet.
                  </p>
                ) : (
                  <div className="space-y-3">
                    {uploads
                      .filter((u) => u.status === "verified")
                      .map((u) => (
                        <div
                          key={u.id}
                          className="flex items-center justify-between text-sm"
                        >
                          <div className="flex items-center gap-2">
                            <Image
                              src="/icons/pdf1.svg"
                              alt="Uploaded File"
                              width={35}
                              height={35}
                            />
                            <div>
                              <p className="text-gray-700">{u.name}</p>
                              <p className="text-gray-600 text-xs">
                                {(u.size / 1024).toFixed(0)} KB
                              </p>
                            </div>
                          </div>
                          <div className="text-sm text-green-700 px-3 py-1 bg-green-100 rounded">
                            Verified
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </>
            ) : selectedView === "pending" ? (
              <>
                <h3 className="text-gray-800 font-medium mb-4">
                  Pending verification
                </h3>
                <hr className="my-4" />
                {uploads.filter((u) => u.status === "pending").length === 0 ? (
                  <p className="text-sm text-gray-500">No pending uploads.</p>
                ) : (
                  <div className="space-y-3">
                    {uploads
                      .filter((u) => u.status === "pending")
                      .map((u) => (
                        <div
                          key={u.id}
                          className="flex items-center justify-between text-sm"
                        >
                          <div className="flex items-center gap-2">
                            <Image
                              src="/icons/pdf1.svg"
                              alt="Uploaded File"
                              width={35}
                              height={35}
                            />
                            <div>
                              <p className="text-gray-700">{u.name}</p>
                              <p className="text-gray-600 text-xs">
                                {(u.size / 1024).toFixed(0)} KB
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateStatus(u.id, "verified")}
                              className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded"
                            >
                              Mark Verified
                            </button>
                            <button
                              onClick={() => updateStatus(u.id, "missing")}
                              className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded"
                            >
                              Mark Missing
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </>
            ) : (
              <>
                <h3 className="text-gray-800 font-medium mb-4">
                  Missing uploads
                </h3>
                <hr className="my-4" />
                {uploads.filter((u) => u.status === "missing").length === 0 ? (
                  <p className="text-sm text-gray-500">No missing uploads.</p>
                ) : (
                  <div className="space-y-3">
                    {uploads
                      .filter((u) => u.status === "missing")
                      .map((u) => (
                        <div
                          key={u.id}
                          className="flex items-center justify-between text-sm"
                        >
                          <div className="flex items-center gap-2">
                            <Image
                              src="/icons/pdf1.svg"
                              alt="Uploaded File"
                              width={35}
                              height={35}
                            />
                            <div>
                              <p className="text-gray-700">{u.name}</p>
                              <p className="text-gray-600 text-xs">
                                {(u.size / 1024).toFixed(0)} KB
                              </p>
                            </div>
                          </div>
                          <div className="text-sm text-red-700 px-3 py-1 bg-red-100 rounded">
                            Missing
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </>
            )}
          </div>
        </aside>
      </div>

      <Footer />
      
    </>
  );
}
