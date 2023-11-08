// pages/success.js
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import PageWrapper from "@/layout/PageWrapper";
import { faL } from "node_modules/@fortawesome/free-solid-svg-icons/index";
import Link from "node_modules/next/link";

const Success = () => {
  const router = useRouter();
  const [session, setSession] = useState();

  useEffect(() => {
    // Fetch the session from your API or Stripe
    const { session_id } = router.query;

    if (session_id) {
      const fetchSession = async () => {
        const res = await fetch(`/api/stripe?sessionId=${session_id}`);
        const { session } = await res.json();
        console.log(session);
        setSession(session);
      };

      fetchSession();
    }
  }, [router.query.session_id]);

  return (
    <PageWrapper
      useDefaultContainer={false}
      classes="min-w-screen bg-green-100"
      blog={false}
    >
      <div className="bg-green-100 min-h-screen flex flex-col justify-center items-center">
        <div className="bg-white p-8 rounded shadow-md text-center">
          <h1 className="text-3xl font-bold text-green-800">
            Payment Successful!
          </h1>
          <p className="text-green-600">Thank you for your purchase.</p>
          {session && (
            <>
              <div className="mt-4">
                <h2 className="text-lg font-semibold">Purchased Items:</h2>
                <ul>
                  {session.line_items.data.map((item) => (
                    <li key={item.id} className="text-sm">
                      {item.description} - {item.quantity} x $
                      {item.amount_total / 100}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <p>Total Amount: ${session.amount_total / 100}</p>
              </div>
            </>
          )}
          {/* Continue Shopping */}
          <Link
            className="text-green-600 font-semibold my-2 underline"
            href="/tools"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Success;
