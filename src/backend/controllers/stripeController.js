// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

import stripe from "@/utils/stripePayments";
import ErrorHandler from "@/backend/utils/errorHandler";
import catchAsyncErrors from "@/backend/middlewares/catchAsyncErrors";

const createCheckoutSession = catchAsyncErrors(async (req, res) => {
  try {
    console.log(req.body);
    const originURL = req.headers.origin;
    const { name, price, toolImageURL, userEmail } = req.body;
    const session = await stripe.checkout.sessions.create({
      customer_email: userEmail,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: name,
              images: [toolImageURL],
            },
            unit_amount: price * 100,
          },
          quantity: 1,
        },
      ],

      mode: "payment",
      payment_method_types: ["card"],
      success_url: `${originURL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${originURL}/?canceled=true`,
    });
    res.status(200).json(session);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

const getCheckoutSession = catchAsyncErrors(async (req, res) => {
  try {
    const { sessionId } = req.query;

    // Retrieve the session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["payment_intent", "line_items.data.price.product"], // Optionally expand the payment_intent to include additional information
    });

    res.status(200).json({ session });
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: error.message });
  }
});

export { createCheckoutSession, getCheckoutSession };
