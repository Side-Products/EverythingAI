// components/CheckoutButton.js
import { loadStripe } from "@stripe/stripe-js";
import Button from "../ui/Button";
import { useSession } from "next-auth/react";
import { AuthModalContext } from "@/store/AuthModalContextProvider";
import { useContext } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function CheckoutButton({ term, name, image }) {
  const { setAuthModalOpen } = useContext(AuthModalContext);

  const { data } = useSession();

  const body = {
    price: parseInt(term?.discountedPrice),
    name: `${name} - ${term?.termLength} Plan`,
    toolImageURL: image,
    userEmail: data?.user?.email,
  };

  console.log(body);

  async function handleClick() {
    if (!data || !data?.user?.email) {
      setAuthModalOpen(true);
      return;
    } else {
      const stripe = await stripePromise;
      const response = await fetch("/api/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const session = await response.json();
      console.log(session.id);
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        // Handle error here
        console.log(result.error.message);
      }
    }
  }

  return (
    <Button role="link" onClick={handleClick}>
      Checkout
    </Button>
  );
}
