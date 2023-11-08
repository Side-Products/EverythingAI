// pages/cancelled.js

import PageWrapper from "@/layout/PageWrapper";
import Link from "node_modules/next/link";

const Failure = () => {
  return (
    <PageWrapper
      title="Payment Failure"
      useDefaultContainer={false}
      classes="bg-red-100"
    >
      <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
        <div className="bg-white p-8 rounded shadow-md text-center">
          <h1 className="text-2xl my-4 font-bold text-red-800">
            Payment Failed or Cancelled
          </h1>
          <p className="text-red-600 mb-3">
            Your transaction did not go through. Please try again or contact
            support.
          </p>
          <Link href="/" className="text-blue-600 hover:underline">
            Go Back to Home
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Failure;
