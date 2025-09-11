import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  CardElement,
  CardNumberElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Form = () => {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements({});
  const [loading, setLoading] = useState(false);
  const [currency, setCurrency] = useState("usd");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!stripe || !elements) {
      return;
    }

    const name = event.target.name.value;
    const email = event.target.email.value;
    const amount = event.target.amount.value;

    await axios.post("https://cortexsoft-backend.vercel.app/api/invoice", {
      name,
      email,
      amount,
      currency,
    });

    const response = await axios.post(
      "https://cortexsoft-backend.vercel.app/api/stripe/create-payment-intent",
      {
        amount: amount * 100,
        currency,
      }
    );
    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      response.data.clientSecret,
      {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: name,
            email: email,
          },
        },
      }
    );
    event.target.reset();
    if (error) {
      console.log("error: ", error);
      setLoading(false);
    } else {
      if (paymentIntent.status === "succeeded") {
        toast("Payment Successfully Added");
        router.push("/");
        setLoading(false);
      }
    }
  };

  return (
    <div className='border-4 border-cyan-500 sm:w-[500px] m-auto  py-5'>
      <h1 className='animatetext text-center sm:w-[500px]  text-4xl font-bold pb-5  p-3'>
        Checkout
      </h1>
      <div className='sm:flex justify-center w-full p-3'>
        <form onSubmit={handleSubmit} className=''>
          <label className='block'>
            <input
              className='py-0 px-2 border-b-2 mb-8 sm:w-[450px] w-full'
              name='name'
              placeholder='Full Name'
              required
            />
          </label>
          <label className='block'>
            <input
              className='py-0 px-2 border-b-2 mb-8 sm:w-[450px] w-full'
              name='email'
              type='email'
              placeholder='Email'
              required
            />
          </label>

          <label className='block'>
            <input
              className='py-0 px-2 border-b-2 mb-8 sm:w-[450px] w-full'
              name='amount'
              placeholder='Enter Amount'
              type='number'
              required
              step='0.01'
            />
          </label>

          <CardElement
            className='border-b-2'
            options={{
              style: {
                base: {
                  iconColor: "#FF6922",
                  color: "#000",
                  fontWeight: "500",
                  fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                  fontSize: "16px",
                  padding: "5px",
                  fontSmoothing: "antialiased",
                  ":-webkit-autofill": {
                    color: "#fce883",
                    borderRadius: "10px",
                  },
                  "::placeholder": {
                    backgroundColor: "#fff",
                    color: "#87BBFD",
                    borderRadius: "10px",
                    padding: "10px",
                  },
                },

                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <br />
          {loading ? (
            <button disabled className={"purchageButton"}>
              Wait...
            </button>
          ) : (
            <button
              type='submit'
              disabled={!stripe}
              className={"purchageButton"}
            >
              Pay
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
