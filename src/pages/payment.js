import { useState, useRef } from "react";
import Layout from "@/components/shared/layout/layout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import PaymentForm from "@/components/compo/paymentForm/PaymentForm";
import ExpressCheckout from "@/components/compo/paymentForm/ExpressCheckout";

const stripePromise = loadStripe(
  "pk_live_51OVHkXARFHiAoV7CnULXyfisj2WR4FCpVyOnNv3h7kDHHHJNMesjQiRPhIkuRryKCwTlw5U7jK8GcVRnrVPZitry00D9uH7WWz",
);

export default function Payment() {
  const router = useRouter();
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [elementsKey, setElementsKey] = useState(null);
  const debounceRef = useRef(null);

  const handleAmountChange = (e) => {
    const val = e.target.value;
    setAmount(val);
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      if (val && parseFloat(val) > 0) {
        setElementsKey(Math.round(parseFloat(val) * 100));
      } else {
        setElementsKey(null);
      }
    }, 600);
  };

  const handleSuccess = () => {
    toast.success("Payment Successful!");
    router.push("/");
  };

  const amountInCents = elementsKey;
  const elementsOptions = amountInCents
    ? {
        mode: "payment",
        amount: amountInCents,
        currency: "usd",
        appearance: {
          theme: "stripe",
          variables: {
            colorPrimary: "#2563eb",
            colorBackground: "#ffffff",
            colorText: "#1e293b",
            colorDanger: "#ef4444",
            colorTextSecondary: "#64748b",
            colorTextPlaceholder: "#94a3b8",
            fontFamily: "'Poppins', system-ui, sans-serif",
            fontSizeBase: "15px",
            fontWeightNormal: "400",
            fontWeightMedium: "500",
            fontWeightBold: "600",
            borderRadius: "10px",
            spacingUnit: "4px",
            focusBoxShadow: "0 0 0 3px rgba(37,99,235,0.15)",
            focusOutline: "none",
          },
          rules: {
            ".Tab": {
              border: "1.5px solid #e2e8f0",
              borderRadius: "10px",
              backgroundColor: "#f8fafc",
              padding: "10px 16px",
              color: "#475569",
              fontWeight: "500",
              transition: "border-color 0.18s, background 0.18s, box-shadow 0.18s",
            },
            ".Tab:hover": {
              border: "1.5px solid #93c5fd",
              backgroundColor: "#eff6ff",
              color: "#1d4ed8",
            },
            ".Tab--selected": {
              border: "2px solid #2563eb",
              backgroundColor: "#eff6ff",
              color: "#2563eb",
              boxShadow: "0 0 0 3px rgba(37,99,235,0.12)",
            },
            ".TabIcon--selected": { fill: "#2563eb" },
            ".TabLabel--selected": { color: "#2563eb", fontWeight: "600" },
            ".Input": {
              border: "1.5px solid #e2e8f0",
              borderRadius: "8px",
              padding: "11px 14px",
              boxShadow: "none",
              backgroundColor: "#fff",
              color: "#1e293b",
              fontSize: "15px",
            },
            ".Input:focus": {
              border: "1.5px solid #2563eb",
              boxShadow: "0 0 0 3px rgba(37,99,235,0.13)",
            },
            ".Input--invalid": { border: "1.5px solid #ef4444" },
            ".Label": {
              fontWeight: "500",
              fontSize: "13px",
              color: "#475569",
              marginBottom: "6px",
            },
            ".Error": { color: "#ef4444", fontSize: "12px", marginTop: "4px" },
            ".Block": { borderRadius: "10px" },
            ".TermsText": { fontSize: "11px", color: "#94a3b8" },
          },
        },
      }
    : null;

  return (
    <Layout>
      <div className="min-h-screen bg-[#f6f9fc] py-12 px-4">
        <div className="max-w-[900px] mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="flex flex-col md:flex-row min-h-[580px]">

            {/* LEFT PANEL */}
            <div className="md:w-[38%] border-b md:border-b-0 md:border-r border-gray-100 p-10 flex flex-col">
              <div className="flex items-center gap-3 mb-12">
                <img src="/logo.png" alt="cortex soft llc" className="h-9 w-auto object-contain" />
              </div>
              <div className="flex-1">
                <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-3">
                  Payment amount
                </p>
                <div className="relative mb-2">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-light text-gray-400">
                    $
                  </span>
                  <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="0.00"
                    className="payment-amount-input w-full border-2 border-blue-400 focus:border-blue-600 rounded-xl pl-10 pr-4 py-4 text-3xl font-semibold text-gray-800 transition-colors outline-none"
                  />
                </div>
                <p className="text-gray-500 text-sm mt-5 leading-relaxed">good</p>
              </div>
              <div className="mt-auto pt-8 border-t border-gray-100">
                <p className="text-xs text-gray-400 flex items-center gap-1.5">
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                    <rect x="1" y="5" width="10" height="9" rx="1.5" stroke="#9CA3AF" strokeWidth="1.5" />
                    <path d="M3.5 5V3.5a2.5 2.5 0 015 0V5" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  Secured by Stripe
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="md:w-[62%] p-10">
              {elementsOptions ? (
                <Elements stripe={stripePromise} options={elementsOptions} key={elementsKey}>

                  {/* Official Stripe Express Buttons (Link, Amazon Pay, Apple Pay, Google Pay) */}
                  <div className="mb-6">
                    <ExpressCheckout email={email} amount={amount} onSuccess={handleSuccess} />
                  </div>

                  {/* OR Divider */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="text-gray-400 text-xs font-semibold tracking-widest uppercase">or</span>
                    <div className="flex-1 h-px bg-gray-200" />
                  </div>

                  {/* Contact info + Payment Element */}
                  <div id="payment-method-section">
                    <p className="text-sm font-semibold text-gray-800 mb-3">Contact &amp; Payment</p>
                    <PaymentForm
                      defaultEmail={email}
                      amount={amount}
                      onEmailChange={setEmail}
                      onSuccess={handleSuccess}
                    />
                  </div>

                </Elements>
              ) : (
                /* Placeholder when no amount entered */
                <div className="flex flex-col h-full justify-center">
                  <div className="flex gap-3 mb-6">
                    <div className="flex-1 h-12 bg-gray-100 rounded-xl" />
                    <div className="flex-1 h-12 bg-gray-100 rounded-xl" />
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="text-gray-400 text-xs font-semibold tracking-widest uppercase">or</span>
                    <div className="flex-1 h-px bg-gray-200" />
                  </div>
                  <div className="border-2 border-dashed border-gray-200 rounded-xl py-12 text-center">
                    <svg className="w-8 h-8 text-gray-300 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                    <p className="text-gray-400 text-sm">Enter an amount to see payment options</p>
                  </div>
                </div>
              )}

              {/* Save Info */}
              {elementsOptions && (
                <div className="flex items-start gap-3 mt-5 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <input type="checkbox" id="saveInfo" className="mt-0.5 accent-blue-500 w-4 h-4 cursor-pointer" />
                  <label htmlFor="saveInfo" className="text-xs text-gray-600 cursor-pointer leading-relaxed">
                    Save my information for faster checkout
                    <span className="block text-blue-500 mt-0.5 font-medium">
                      Pay securely at cortex soft llc and everywhere Link is accepted.
                    </span>
                  </label>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
