import {
  useStripe,
  useElements,
  PaymentElement,
  LinkAuthenticationElement,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import axios from "axios";

const BACKEND = "https://cortexsoft-backend.vercel.app";

const PaymentForm = ({ defaultEmail, amount, onEmailChange, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${BACKEND}/api/stripe/create-multi-payment-intent`,
        { amount: Math.round(parseFloat(amount) * 100), currency: "usd" },
      );
      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret: data.clientSecret,
        confirmParams: {
          return_url:
            typeof window !== "undefined" ? `${window.location.origin}/` : "/",
        },
        redirect: "if_required",
      });
      if (error) {
        console.error(error);
      } else {
        onSuccess();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-4' id='link-auth-element'>
        <LinkAuthenticationElement
          options={{ defaultValues: { email: defaultEmail } }}
          onChange={(e) => e.value?.email && onEmailChange?.(e.value.email)}
        />
      </div>
      <PaymentElement />
      <button
        type='submit'
        disabled={!stripe || loading}
        className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg mt-6 transition-colors disabled:opacity-50'
      >
        {loading
          ? "Processing..."
          : `Pay $${parseFloat(amount || 0).toFixed(2)}`}
      </button>
    </form>
  );
};

export default PaymentForm;
