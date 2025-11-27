"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Stepper from "@/reuseComponents/Stepper";
import { getPaymentGateways, initializePayment, getApplicationSummary } from "@/services/api/admissionsService";

export default function AdmissionsFormStep5() {

  const [method, setMethod] = useState("card");
  
  const router = useRouter();
  const [gateways, setGateways] = useState<Record<string, string> | null>(null);
  const [loadingGateways, setLoadingGateways] = useState(false);
  const [initializing, setInitializing] = useState<string | null>(null);
  const [applicationId, setApplicationId] = useState<string | null>(null);
  const [program, setProgram] = useState<string | null>(null);
  const [feeDisplay, setFeeDisplay] = useState<string | null>(null);
  // const [feeAmount, setFeeAmount] = useState<number | null>(null);
  const [deadlineDisplay, setDeadlineDisplay] = useState<string | null>(null);

  // Fetch application summary (application_id, fee, deadline, program)
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await getApplicationSummary();
        if (!mounted) return;
        const obj = res as Record<string, unknown> | null;
        if (!obj) return;
        const appId = obj['application_id'] as string | undefined;
        const prog = obj['program'] as string | undefined;
        // const fAmt = (obj['fee_amount'] as number) ?? (obj['fee'] as number) ?? null;
        const fDisplay = obj['fee_display'] as string | undefined;
        const dDisplay = obj['deadline_display'] as string | undefined;

        if (appId) setApplicationId(appId);
        if (prog) setProgram(prog.replace(/_/g, ' '));
        // if (typeof fAmt === 'number') setFeeAmount(fAmt);
        if (fDisplay) setFeeDisplay(fDisplay);
        if (dDisplay) setDeadlineDisplay(dDisplay);
      } catch (err) {
        // keep fallbacks if API fails
        console.warn('Failed to load application summary', err);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

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
      <div className="bg-[#61213C] text-white p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center text-xs sm:text-sm">
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
                  Pay Now ({feeDisplay ?? '₦10,000'})
                </button>
              </div>
            )}

            {method === "bank" && (
              <div className="mt-6 space-y-4">
                <div className="p-3 border border-blue-200 bg-blue-50 text-[#1E3356] text-sm rounded">
                  Make transfer of {" "}
                  <span className="font-semibold">{feeDisplay ?? '₦10,000'}</span> to the account
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
                    <p className="text-gray-800">{feeDisplay ?? '₦10,000'}</p>
                  </div>
                  <div>
                    <p className="font-medium">Reference</p>
                    <p className="text-gray-800">{applicationId ?? '—'}</p>
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
                        credo: "/credoBlack.svg",
                      };
                      const logo = logoMap[key] || "/paystack.svg";
                      // Disable these gateways
                      const disabledGateways = ["paystack", "flutterwave", "etranzact"];
                      const isDisabled = disabledGateways.includes(key);
                      return (
                        <div key={key} className="flex-1">
                          <button
                            disabled={!!initializing || isDisabled}
                            onClick={async () => {
                              if (isDisabled) return;
                              try {
                                setInitializing(key);

                                const secureUrl = url.startsWith('http://') ? url.replace('http://', 'https://') : url;

                                // payload depends on backend; include amount and application id
                                const payload = {
                                amount: 100,
                                // amount: feeAmount ?? 10000,
                                payment_type: "full",
                                payment_method_id: 3, // Replace with actual method ID if dynamic
                                purpose: "Admission Application Fee",
                                provider: key, // Use the gateway key (e.g., "credo")
                                callback_url: "https://nacu-lms-ae2a4ae13fbe.herokuapp.com/admissions/payment/callback",
                                miscellaneous_fee_id: null,
                              };
                                const resp = await initializePayment(secureUrl, payload);
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
                           className={`w-full border rounded-md flex items-center justify-center py-4 px-3 hover:border-[#8B1C3D] bg-white
                            ${isDisabled ? "opacity-50 pointer-events-none" : "cursor-pointer"}
                          `}
                          >
                             <div className="relative flex items-center justify-center w-full h-6">
                            <Image src={logo} alt={key} height={40} width={160} className="object-cover max-w-full max-h-full" priority />
                            </div>
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
                <p className="text-gray-800 text-sm">{program ?? '—'}</p>
              </div>
              <div>
                <span className="text-gray-600 text-sm">Application ID</span>
                <p className="text-gray-800 text-sm">{applicationId ?? '—'}</p>
              </div>
              <div>
                <span className="text-gray-600 text-sm">Fee Amount</span>
                <p className="text-gray-800 text-sm">{feeDisplay ?? '₦10,000'}</p>
              </div>
              <div>
                <span className="text-gray-600 text-sm">Deadline</span>
                <p className="text-[#D97706] text-sm">{deadlineDisplay ?? '—'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
