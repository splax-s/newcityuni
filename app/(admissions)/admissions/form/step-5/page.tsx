"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Stepper from "@/reuseComponents/Stepper";
import { getPaymentGateways, initializePayment } from "@/services/api/admissionsService";

export default function AdmissionsFormStep5() {

  const [method, setMethod] = useState("card");
  
  const router = useRouter();
  const [gateways, setGateways] = useState<Record<string, string> | null>(null);
  const [loadingGateways, setLoadingGateways] = useState(false);
  const [initializing, setInitializing] = useState<string | null>(null);
  const applicationId = "SJDxEn120"; // TODO: replace with real application id from state

  useEffect(() => {
    if (method !== "gateway") return;
    let mounted = true;
    setLoadingGateways(true);
    getPaymentGateways()
      .then((res) => {
        if (!mounted) return;
        // Expecting { payment_gateways: { paystack: url, flutterwave: url, ... } }
        if (res && res.payment_gateways) {
          setGateways(res.payment_gateways as Record<string, string>);
        } else {
          console.warn("Unexpected payment gateways response", res);
          setGateways(null);
        }
      })
      .catch((err) => {
        console.error("Failed to load payment gateways", err);
        setGateways(null);
      })
      .finally(() => setLoadingGateways(false));
    return () => {
      mounted = false;
    };
  }, [method]);

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
        <Stepper current={4} />

        {/* Step Title */}
        <h2 className="text-3xl text-black font-bold mb-2">
          Step 5: Application Fee Payment
        </h2>
        <p className="text-gray-600 mb-8">
          Securely complete your application fee to continue with your admission
          process.
        </p>

        {/* Payment Section */}
        <div className="flex flex-col items-start md:flex-row gap-6">
          {/* Payment Methods */}
          <div className="bg-white border w-[744px] rounded-lg p-6">
            <h3 className="text-gray-800 font-medium mb-4">Payment Methods</h3>

            <hr className="my-4" />

            {/* Payment Method Buttons */}
            <div className="flex gap-4 border-b pb-6">
              <button
                onClick={() => setMethod("card")}
                className={`flex-1 py-4 rounded-md flex flex-col items-center justify-center gap-2 border transition ${
                  method === "card"
                    ? "border-[#8B1C3D] bg-[#F4E6EA] text-[#8B1C3D]"
                    : "border-gray-300 bg-white text-gray-700"
                }`}
              >
                <Image
                  src="/icons/wallet.svg"
                  alt="wallet Icon"
                  width={24}
                  height={24}
                />
                <span className="text-sm font-medium">Debit/Credit Card</span>
              </button>

              <button
                onClick={() => setMethod("bank")}
                className={`flex-1 py-4 rounded-md flex flex-col items-center justify-center gap-2 border transition ${
                  method === "bank"
                    ? "border-[#8B1C3D] bg-[#F4E6EA] text-[#8B1C3D]"
                    : "border-gray-300 bg-white text-gray-700"
                }`}
              >
                <Image
                  src="/icons/bank.svg"
                  alt="bank Icon"
                  width={24}
                  height={24}
                />
                <span className="text-sm font-medium">
                  Bank Transfer / USSD
                </span>
              </button>

              <button
                onClick={() => setMethod("gateway")}
                className={`flex-1 py-4 rounded-md flex flex-col items-center justify-center gap-2 border transition ${
                  method === "gateway"
                    ? "border-[#8B1C3D] bg-[#F4E6EA] text-[#8B1C3D]"
                    : "border-gray-300 bg-white text-gray-700"
                }`}
              >
                <Image
                  src="/icons/link.svg"
                  alt="gateway Icon"
                  width={24}
                  height={24}
                />
                <span className="text-sm font-medium">Payment Gateway</span>
              </button>
            </div>

            {/* Conditional Rendering */}
            {method === "card" && (
              <div className="mt-6 space-y-4">
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="block text-sm text-gray-700">
                      Card Holder&apos;s Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Joshua Sam-Alade"
                      className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm text-gray-700">
                      Card Number
                    </label>
                    <input
                      type="text"
                      defaultValue="2134 2324 6797 2478"
                      className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="block text-sm text-gray-700">
                      Expiry Month
                    </label>
                    <select className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1">
                      <option value="12">12</option>
                    </select>
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm text-gray-700">
                      Expiry Year
                    </label>
                    <select className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1">
                      <option value="26">26</option>
                    </select>
                  </div>
                </div>
                <div className="w-1/2">
                  <label className="block text-sm text-gray-700">
                    CVV Number
                  </label>
                  <input
                    type="text"
                    defaultValue="742"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1"
                  />
                </div>
                <p className="text-sm text-[#F59E0B] mt-2">
                  Your payment is secure and encrypted. We do not store your
                  card details.
                </p>
                <button
                  onClick={() => router.push("/admissions/form/step-6")}
                  className="w-full bg-[#61213C] text-white font-semibold py-3 rounded-md mt-4"
                >
                  Pay Now (₦15,000)
                </button>
              </div>
            )}

            {method === "bank" && (
              <div className="mt-6 space-y-4">
                <div className="p-3 border border-blue-200 bg-blue-50 text-[#1E3356] text-sm rounded">
                  Make transfer of{" "}
                  <span className="font-semibold">₦15,000</span> to the account
                  below
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="font-medium">Bank Name</p>
                    <p className="text-gray-800">Keystone</p>
                  </div>
                  <div>
                    <p className="font-medium">Account Name</p>
                    <p className="text-gray-800">New City University</p>
                  </div>
                  <div>
                    <p className="font-medium">Account Number</p>
                    <p className="text-gray-800">1013859043</p>
                  </div>
                  <div>
                    <p className="font-medium">Amount</p>
                    <p className="text-gray-800">₦15,000</p>
                  </div>
                  <div>
                    <p className="font-medium">Reference</p>
                    <p className="text-gray-800">SJDxEn120</p>
                  </div>
                </div>
                <a
                  href={`mailto:Info@newcity.edu.ng?subject=${encodeURIComponent(
                    `Application Fee Receipt - ${applicationId}`
                  )}&body=${encodeURIComponent(
                    `Hello,\n\nI have attached my application fee receipt for application ID: ${applicationId}.\n\nPlease confirm receipt.\n\nThanks.`
                  )}`}
                  className="w-full inline-block bg-[#61213C] text-white font-semibold py-3 rounded-md mt-4 text-center"
                >
                  Submit Receipt
                </a>
                <p className="text-sm text-gray-600"> After paying and sending your receipt, Please <Link className="text-[#61213C] cursor-pointer" href="/admissions/form/step-6">click here</Link> to proceed.</p>
              </div>
            )}
            {method === "gateway" && (
              <div className="mt-6 space-y-4">
                <div className="p-3 border border-blue-200 bg-blue-50 text-[#1E3356] text-sm rounded">
                  Initiate transaction on one of the following payment gateways.
                  (Paystack, Remita, or Flutterwave)
                </div>

                <div className="flex gap-4 mb-6">
                  {loadingGateways ? (
                    <p className="text-sm text-gray-600">Loading payment gateways...</p>
                  ) : gateways ? (
                    Object.keys(gateways).map((key) => {
                      const url = gateways[key];
                      const logoMap: Record<string, string> = {
                        paystack: "/paystack.svg",
                        flutterwave: "/flutterwave.svg",
                        etranzact: "/etranzact.png",
                      };
                      const logo = logoMap[key] || "/paystack.svg";
                      return (
                        <div key={key} className="flex-1">
                          <button
                            disabled={!!initializing}
                            onClick={async () => {
                              try {
                                setInitializing(key);
                                // payload depends on backend; include amount and application id
                                const payload = { amount: 15000, application_id: applicationId };
                                const resp = await initializePayment(url, payload);
                                // try common fields for redirect URL
                                const redirectUrl = resp?.authorization_url || resp?.data?.authorization_url || resp?.url || resp?.redirect_url || resp?.payment_url || resp?.data?.link;
                                if (redirectUrl) {
                                  window.location.href = redirectUrl;
                                  return;
                                }
                                // fallback: open response in new tab for debugging
                                const w = window.open();
                                w?.document.write(`<pre>${JSON.stringify(resp, null, 2)}</pre>`);
                              } catch (err: unknown) {
                                console.error("Payment init failed", err);
                                alert(err instanceof Error ? err.message : String(err));
                              } finally {
                                setInitializing(null);
                              }
                            }}
                            className="w-full border rounded-md flex items-center justify-center p-4 hover:border-[#8B1C3D] bg-white"
                          >
                            <Image src={logo} alt={key} height={40} width={120} className="h-6" />
                          </button>
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-sm text-red-500">No payment gateways configured.</p>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => router.push("/admissions/form/step-6")}
                    className="w-full bg-[#61213C] text-white font-semibold py-3 rounded-md"
                  >
                    Proceed to pay
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Application Summary */}
          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-gray-800 font-medium mb-4">
              Application Summary
            </h3>
            <hr className="my-4" />
            <div className="space-y-4">
              <div>
                <span className="text-gray-600 text-sm">Program</span>
                <p className="text-gray-800 text-sm">MSc in Technology</p>
              </div>
              <div>
                <span className="text-gray-600 text-sm">Application ID</span>
                <p className="text-gray-800 text-sm">SJDxEn120</p>
              </div>
              <div>
                <span className="text-gray-600 text-sm">Fee Amount</span>
                <p className="text-gray-800 text-sm">₦15,000</p>
              </div>
              <div>
                <span className="text-gray-600 text-sm">Deadline</span>
                <p className="text-[#D97706] text-sm">August 30, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
