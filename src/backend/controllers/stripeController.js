// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

import stripe from "@/utils/stripePayments";
import ErrorHandler from "@/backend/utils/errorHandler";
import catchAsyncErrors from "@/backend/middlewares/catchAsyncErrors";

const createCheckoutSession = catchAsyncErrors(async (req, res) => {
  try {
    console.log(req.body);
    const { name, price, toolImageURL } = req.body;
    const session = await stripe.checkout.sessions.create({
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
      success_url: `http://localhost:3000/?success=true`,
      cancel_url: `http://localhost:3000/?canceled=true`,
    });
    res.status(200).json(session);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});
export { createCheckoutSession };
