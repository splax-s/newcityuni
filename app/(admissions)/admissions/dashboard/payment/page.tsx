"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AdmissionsSidebar from "@/components/AdmissionsSidebar";
import Image from "next/image";
import { Send, ChevronRight } from "lucide-react";
import { getAdmissionTransactions } from "@/services/api";

type PaymentRecord = {
  id: string;
  method: string;
  amount: number;
  date: string;
  status: "success" | "pending" | "failed";
};

type Transaction = {
  id: string | number;
  transaction_type: string;
  type_display: string;
  amount: string;
  amount_display: string;
  description: string;
  status: "success" | "pending" | "failed";
  status_display: string;
  reference: string;
  created_at: string;
};

const TABS = [
  { label: "All", value: "all" },
  { label: "Deposits", value: "deposit" },
  { label: "Withdrawals", value: "withdrawal" },
  { label: "Payments", value: "payment" },
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
  >("bank");
  const [transactions, setTransactions] = useState<Transaction[]>([]);
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
    getAdmissionTransactions()
      .then((res) => {
        setTransactions(res?.transactions || []);
      })
      .catch(() => setTransactions([]))
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

  function clearRecords() {
    setRecords([]);
  }

  const filteredTransactions =
    selectedTab === "all"
      ? transactions
      : transactions.filter((t) => t.transaction_type === selectedTab);

  return (
    <>
      <Navbar />

      <div className="bg-[#61213C] text-white p-2">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-4 text-xs sm:text-sm">
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
                    👤
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
                <h4 className="font-semibold text-black">Transactions history</h4>
                <button
                  onClick={clearRecords}
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
                <div className="py-12 text-center text-gray-500">
                  Loading transactions...
                </div>
              )}

              {/* Empty State */}
              {!loading && filteredTransactions.length === 0 && (
                <div className="py-12 text-center text-gray-400">
                  No transactions found.
                </div>
              )}

              {/* Transaction list */}
              {!loading && filteredTransactions.length > 0 && (
                <ul className="space-y-4">
                  {filteredTransactions.map((t) => (
                    <li
                      key={t.id}
                      className="flex items-center justify-between border-t pt-3 first:border-t-0 first:pt-0"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                          <Send className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            {t.description || t.type_display}{" "}
                            <span
                              className={
                                t.status === "success"
                                  ? "text-green-600 font-semibold"
                                  : t.status === "pending"
                                  ? "text-yellow-600 font-semibold"
                                  : "text-red-600 font-semibold"
                              }
                            >
                              {t.amount_display || t.amount}
                            </span>
                          </p>
                          <p className="text-xs text-gray-500">
                            {new Date(t.created_at).toLocaleString()}
                          </p>
                          <p className="text-xs text-gray-400">
                            Status: {t.status_display || t.status}
                          </p>
                        </div>
                      </div>
                      <button className="px-3 py-1 border rounded text-sm text-gray-700 hover:bg-gray-50">
                        Download receipt
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <div className="bg-white border rounded shadow-sm p-6">
              <div className="mb-6">
                <h4 className="font-semibold text-[#61213C] mb-2">Wallet</h4>
                <div className="bg-[#61213C] text-white rounded-lg p-4 mb-4">
                  <p className="text-sm opacity-80">Balance</p>
                  <p className="text-2xl font-semibold mt-1">₦2,420,049.00</p>
                </div>

                <div className="flex gap-2 mb-4">
                  <button
                    onClick={() => setSelectedPaymentType("bank")}
                    className={`flex-1 px-3 py-2 rounded ${
                      selectedPaymentType === "bank"
                        ? "border-[#8B1C3D] bg-[#F4E6EA] text-[#8B1C3D]"
                        : "border-gray-300 bg-white text-gray-700"
                    }`}
                  >
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Image
                        src="/icons/bank.svg"
                        width={24}
                        height={24}
                        alt="Bank icon"
                      />
                      <span className="text-sm font-medium">
                        Bank Transfer / USSD
                      </span>
                    </div>
                  </button>
                  <button
                    onClick={() => setSelectedPaymentType("gateway")}
                    className={`flex-1 px-3 py-2 rounded ${
                      selectedPaymentType === "gateway"
                        ? "border-[#8B1C3D] bg-[#F4E6EA] text-[#8B1C3D]"
                        : "border-gray-300 bg-white text-gray-700"
                    }`}
                  >
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Image
                        src="/icons/link.svg"
                        width={24}
                        height={24}
                        alt="Gateway icon"
                      />
                      <span className="text-sm font-medium">
                        Payment Gateway
                      </span>
                    </div>
                  </button>
                </div>

                {selectedPaymentType === "bank" ? (
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Account Number</span>
                      <div className="flex gap-2 items-center">
                        <span className="font-medium text-gray-800">
                          2211777650
                        </span>
                        <button
                          onClick={() => {
                            try {
                              navigator.clipboard.writeText("2211777650");
                              alert("Account number copied");
                            } catch {
                              /* ignore */
                            }
                          }}
                          className="text-sm text-[#61213C]"
                        >
                          Copy
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-500">Bank Name</span>
                      <span className="font-medium text-gray-800">
                        Zenith Bank
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-500">Account Name</span>
                      <span className="font-medium text-gray-800">
                        Joshua Sam-Alade / New City
                      </span>
                    </div>

                    <div className="pt-3">
                      <p className="text-sm text-gray-500">
                        After transfer, click{" "}
                        <span className="font-medium">I&apos;ve paid</span> to
                        mark the payment (demo).
                      </p>
                      <div className="mt-3">
                        <button
                          onClick={addDemoPayment}
                          className="px-4 py-2 bg-[#61213C] text-white rounded"
                        >
                          I&apos;ve paid
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                      <button
                        onClick={() => setSelectedMethod("paystack")}
                        className={`flex items-center gap-3 p-3 rounded border ${
                          selectedMethod === "paystack"
                            ? "border-[#61213C] bg-[#FFF7F7]"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <Image
                          src="/paystack.svg"
                          width={96}
                          height={24}
                          alt="Paystack"
                        />
                      </button>
                      <button
                        onClick={() => setSelectedMethod("flutterwave")}
                        className={`flex items-center gap-3 p-3 rounded border ${
                          selectedMethod === "flutterwave"
                            ? "border-[#61213C] bg-[#FFF7F7]"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <Image
                          src="/flutterwave.svg"
                          width={96}
                          height={24}
                          alt="Flutterwave"
                        />
                      </button>
                      <button
                        onClick={() => setSelectedMethod("remita")}
                        className={`flex items-center gap-3 p-3 rounded border ${
                          selectedMethod === "remita"
                            ? "border-[#61213C] bg-[#FFF7F7]"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <Image
                          src="/remita.svg"
                          width={96}
                          height={24}
                          alt="Remita"
                        />
                      </button>
                    </div>

                    <button
                      onClick={addDemoPayment}
                      className="w-full bg-[#61213C] text-white font-semibold py-3 rounded-md"
                    >
                      Proceed to pay
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </aside>
      </div>

      <Footer />
    </>
  );
}
