import Layout from "@/components/shared/layout/layout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Form from "@/components/compo/checkoutForm/Form";
import Link from "next/link";
import { FaLock } from "react-icons/fa";
const stripePromise = loadStripe(
  "pk_live_51OVHkXARFHiAoV7CnULXyfisj2WR4FCpVyOnNv3h7kDHHHJNMesjQiRPhIkuRryKCwTlw5U7jK8GcVRnrVPZitry00D9uH7WWz",
);

const Checkout = () => {
  return (
    <Layout>
      <div className='bg-blue-100 pb-10'>
        <br />
        <div className=' sm:w-[1200px] m-auto bg-white sm:p-10'>
          <div>
            <Elements stripe={stripePromise}>
              <Form />
            </Elements>
          </div>
          {/* Accepted cards */}
          <div className='flex items-center justify-center gap-2 mt-6 flex-wrap'>
            <FaLock className='text-green-600 text-lg' />
            <span className='text-sm text-gray-500 mr-1'>Secure checkout — accepted cards:</span>
            <img src="https://cdn.jsdelivr.net/npm/payment-icons@latest/min/flat/visa.svg" alt="Visa" className="h-9 rounded shadow-sm" />
            <img src="https://cdn.jsdelivr.net/npm/payment-icons@latest/min/flat/mastercard.svg" alt="Mastercard" className="h-9 rounded shadow-sm" />
            <img src="https://cdn.jsdelivr.net/npm/payment-icons@latest/min/flat/amex.svg" alt="American Express" className="h-9 rounded shadow-sm" />
            <img src="https://cdn.jsdelivr.net/npm/payment-icons@latest/min/flat/discover.svg" alt="Discover" className="h-9 rounded shadow-sm" />
          </div>

          <div className='text-center mt-4'>
            <p className='text-gray-500 mb-3'>Want more payment options?</p>
            <Link
              href='/payment'
              className='purchageButton2 inline-block w-[300px] text-center m-auto text-white no-underline'
            >
              Pay with All Methods →
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
