import {
  ExpressCheckoutElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import axios from "axios";

const BACKEND = "https://cortexsoft-backend.vercel.app";

const ExpressCheckout = ({ email, amount, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [available, setAvailable] = useState(null); // null=loading, false=none, true=has methods

  const handleReady = ({ availablePaymentMethods }) => {
    setAvailable(!!availablePaymentMethods);
  };

  const handleConfirm = async () => {
    try {
      const { data } = await axios.post(
        `${BACKEND}/api/stripe/create-multi-payment-intent`,
        { amount: Math.round(parseFloat(amount) * 100), currency: "usd" },
      );
      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret: data.clientSecret,
        confirmParams: { return_url: `${window.location.origin}/` },
        redirect: "if_required",
      });
      if (!error) {
        await axios.post(`${BACKEND}/api/invoice`, {
          name: email || "Customer",
          email: email || "",
          amount,
          currency: "usd",
        });
        onSuccess();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <ExpressCheckoutElement
        onConfirm={handleConfirm}
        onReady={handleReady}
        options={{
          paymentMethods: {
            link: "auto",
            amazonPay: "auto",
            googlePay: "auto",
            applePay: "auto",
          },
          layout: { maxColumns: 2, maxRows: 1, overflow: "never" },
        }}
      />
      {available === false && (
        <div className='flex gap-3'>
          <div className='flex-1 flex items-center justify-center gap-2 bg-[#30D158] text-white font-semibold py-3.5 rounded-xl text-sm opacity-50 cursor-not-allowed'>
            <svg width='10' height='12' viewBox='0 0 10 12' fill='currentColor'>
              <polygon points='0,0 10,6 0,12' />
            </svg>
            Pay with Link
          </div>
          <div className='flex-1 flex items-center justify-center gap-1.5 bg-[#FFD814] text-gray-900 font-semibold py-3.5 rounded-xl text-sm opacity-50 cursor-not-allowed'>
            <span className='font-extrabold italic'>amazon</span>
            <span>pay</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpressCheckout;
