// components/CheckoutButton.js
import { loadStripe } from "@stripe/stripe-js";
import Button from "../ui/Button";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function CheckoutButton({ term, name, image }) {
  const body = {
    price: parseInt(term?.discountedPrice),
    name: `${name} - ${term?.termLength} Plan`,
    toolImageURL: image,
  };

  async function handleClick() {
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

  return (
    <Button role="link" onClick={handleClick}>
      Checkout
    </Button>
  );
}
