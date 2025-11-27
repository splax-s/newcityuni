"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AdmissionsSidebar from "@/components/AdmissionsSidebar";
import Image from "next/image";
import { Send, ChevronRight } from "lucide-react";
import { getAdmissionPayments } from "@/services/api";

type PaymentRecord = {
  id: string;
  method: string;
  amount: number;
  date: string;
  status: "success" | "pending" | "failed";
};

type Payment = {
  id: number;
  amount: number;
  currency: string;
  payment_method: string;
  payment_method_display: string;
  status: "pending" | "completed" | "failed";
  status_display: string;
  transaction_id: string;
  payment_reference: string;
  payment_gateway: string;
  initiated_at: string;
  completed_at?: string;
  failed_at?: string;
  failure_reason: string;
  receipt_url: string;
  notes: string;
};



const TABS = [
  { label: "All", value: "all" },
  { label: "Completed", value: "completed" },
  { label: "Pending", value: "pending" },
  { label: "Failed", value: "failed" },
];

export default function AdmissionsPaymentPage() {
  const router = useRouter();
  const [records, setRecords] = useState<PaymentRecord[]>([]);
  const [selectedMethod, setSelectedMethod] = useState<string>("paystack");
  const [selectedPane, setSelectedPane] = useState<"transaction" | "method">(
    "transaction"
  );
  const [selectedPaymentType, setSelectedPaymentType] = useState<
    "gateway" | "bank"
  >("gateway");
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState<string>("all");

  useEffect(() => {
    try {
      const raw = localStorage.getItem("admissions_payments");
      if (raw) setRecords(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("admissions_payments", JSON.stringify(records));
    } catch {
      // ignore
    }
  }, [records]);

  
  useEffect(() => {
    setLoading(true);
    getAdmissionPayments()
      .then((res) => {
        // Handle single payment object or array
        if (Array.isArray(res)) {
          setPayments(res);
        } else if (res) {
          setPayments([res]);
        }
      })
      .catch(() => {
        setPayments([]);
      })
      .finally(() => setLoading(false));
  }, []);

  function addDemoPayment() {
    const p: PaymentRecord = {
      id: `${Date.now()}`,
      method: selectedMethod,
      amount: 50000,
      date: new Date().toISOString(),
      status: "pending",
    };
    setRecords((s) => [p, ...s]);
    // route to step-5 which is the payment flow placeholder
    router.push("/admissions/form/step-5");
  }


  const filteredPayments =
    selectedTab === "all"
      ? payments
      : payments.filter((p) => p.status === selectedTab);

  const formatAmount = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: currency || 'NGN'
    }).format(amount);
  };

  return (
    <>
      <Navbar />

      <div className="bg-[#61213C] text-white p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center text-xs sm:text-sm">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>Admissions</span>
            <span className="mx-2">›</span>
            <span className="text-[#FFB800]">Payments</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-12 gap-6">
        <AdmissionsSidebar />

        {/* Middle Section: Transaction & Payment Method */}
        <main className="md:col-span-4">
          <div className="bg-white border rounded shadow-sm">
            <h3 className="px-4 py-3 border-b font-semibold text-[#61213C]">
              Transaction
            </h3>
            <ul className="p-2 text-sm text-gray-700">
              <li
                role="button"
                tabIndex={0}
                onClick={() => setSelectedPane("transaction")}
                onKeyDown={(e) =>
                  e.key === "Enter" && setSelectedPane("transaction")
                }
                className={`flex items-center justify-between px-3 py-2 hover:bg-gray-50 rounded cursor-pointer ${
                  selectedPane === "transaction" ? "bg-gray-50" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <Send className="w-4 h-4 text-[#61213C]" />
                  <span>Transaction</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </li>

              <li
                role="button"
                tabIndex={0}
                onClick={() => setSelectedPane("method")}
                onKeyDown={(e) =>
                  e.key === "Enter" && setSelectedPane("method")
                }
                className={`flex items-center justify-between px-3 py-2 hover:bg-gray-50 rounded cursor-pointer ${
                  selectedPane === "method" ? "bg-gray-50" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center">
                    💳
                  </span>
                  <span>Payment Method</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </li>
            </ul>
          </div>
        </main>

        {/* Right Section: conditional aside */}
        <aside className="md:col-span-5">
          {selectedPane === "transaction" ? (
            <div className="bg-white border rounded shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-black">Payment history</h4>
                <button
                  className="text-sm text-red-600 hover:underline"
                  aria-label="Clear transactions"
                >
                  Clear
                </button>
              </div>

               {/* Tabs */}
              <div className="flex items-center gap-2 mb-4 text-sm">
                {TABS.map((tab) => (
                  <button
                    key={tab.value}
                    onClick={() => setSelectedTab(tab.value)}
                    className={`px-3 py-1 rounded cursor-pointer ${
                      selectedTab === tab.value
                        ? "bg-gray-100 text-gray-800 font-medium"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

                {/* Loading State */}
              {loading && (
                <div className="py-12 text-center text-sm text-gray-500">
                  Loading payments...
                </div>
              )}

              {/* Empty State */}
               {!loading && filteredPayments.length === 0 && (
                <div className="py-12 text-center text-sm text-gray-400">
                  No payments found.
                </div>
              )}
              {!loading && filteredPayments.length > 0 && (
                <ul className="space-y-4">
                  {filteredPayments.map((payment) => (
                    <li
                      key={payment.id}
                      className="flex items-center justify-between border-t pt-3 first:border-t-0 first:pt-0"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                          <Send className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            {payment.payment_method_display}{" "}
                            <span
                              className={
                                payment.status === "completed"
                                  ? "text-green-600 font-semibold"
                                  : payment.status === "pending"
                                  ? "text-yellow-600 font-semibold"
                                  : "text-red-600 font-semibold"
                              }
                            >
                              {formatAmount(payment.amount, payment.currency)}
                            </span>
                          </p>
                          <p className="text-xs text-gray-500">
                            {new Date(payment.initiated_at).toLocaleString()}
                          </p>
                          <p className="text-xs text-gray-400">
                            Status: {payment.status_display} via {payment.payment_gateway}
                          </p>
                          <p className="text-xs text-gray-400">
                            Ref: {payment.payment_reference}
                          </p>
                        </div>
                      </div>
                      {payment.receipt_url ? (
                        <a
                          href={payment.receipt_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 border rounded text-sm text-gray-700 hover:bg-gray-50"
                        >
                          Download receipt
                        </a>
                      ) : (
                        <button className="px-3 py-1 border rounded text-sm text-gray-400 cursor-not-allowed">
                          No receipt
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
           <div className="bg-white border rounded shadow-sm p-6">
      <h4 className="font-semibold text-[#61213C] mb-3">Payment Status</h4>
      {/* Check if user has a completed payment */}
      {payments.some((p) => p.status === "completed") ? (
        <div className="bg-green-50 border border-green-200 rounded p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-green-600 text-2xl">✔️</span>
            <div>
              <p className="font-semibold text-green-700 mb-1">Payment Completed</p>
              <p className="text-sm text-green-800">
                Thank you! Your payment has been received.
              </p>
              <div className="mt-2 text-xs text-gray-600">
                {payments
                  .filter((p) => p.status === "completed")
                  .map((p) => (
                    <div key={p.id} className="mb-2">
                      <div>
                        <span className="font-medium">{p.payment_method_display}</span>{" "}
                        • {formatAmount(p.amount, p.currency)}
                      </div>
                      <div>
                        Ref: <span className="text-gray-500">{p.payment_reference}</span>
                      </div>
                      <div>
                        Date:{" "}
                        <span className="text-gray-500">
                          {new Date(p.completed_at || p.initiated_at).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-2">
            <p className="text-gray-700 mb-3">Please select a payment method to complete your application fee:</p>
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setSelectedPaymentType("gateway")}
                className={`flex-1 px-3 py-2 rounded border ${
                  selectedPaymentType === "gateway"
                    ? "border-[#8B1C3D] bg-[#F4E6EA] text-[#8B1C3D]"
                    : "border-gray-300 bg-white text-gray-700"
                }`}
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  <Image src="/icons/link.svg" width={24} height={24} alt="Gateway icon" />
                  <span className="text-sm font-medium">Payment Gateway</span>
                </div>
              </button>
            </div>
           
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                <button
                  onClick={() => setSelectedMethod("paystack")}
                  className={`flex items-center gap-3 p-3 rounded border ${
                    selectedMethod === "paystack"
                      ? "border-[#61213C] bg-[#FFF7F7]"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <Image src="/paystack.svg" width={96} height={24} alt="Paystack" />
                </button>
                <button
                  onClick={() => setSelectedMethod("flutterwave")}
                  className={`flex items-center gap-3 p-3 rounded border ${
                    selectedMethod === "flutterwave"
                      ? "border-[#61213C] bg-[#FFF7F7]"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <Image src="/flutterwave.svg" width={96} height={24} alt="Flutterwave" />
                </button>
                <button
                  onClick={() => setSelectedMethod("remita")}
                  className={`flex items-center gap-3 p-3 rounded border ${
                    selectedMethod === "remita"
                      ? "border-[#61213C] bg-[#FFF7F7]"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <Image src="/remita.svg" width={96} height={24} alt="Remita" />
                </button>
              </div>
            
            <button
              onClick={addDemoPayment}
              className="w-full bg-[#61213C] mt-5 text-white font-semibold py-3 rounded-md"
            >
              Proceed to pay
            </button>
          </div>
        </>
      )}
    </div>
          )}
        </aside>
      </div>

      <Footer />
    </>
  );
}
