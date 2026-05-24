import Layout from "@/components/shared/layout/layout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Form from "@/components/compo/checkoutForm/Form";
import Link from "next/link";
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
          <div className='text-center mt-6'>
            <p className='text-gray-500 mb-3'>Want more payment options?</p>
            <Link
              href='/payment'
              className='purchageButton2 inline-block w-[200px] text-center m-auto text-white no-underline'
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
