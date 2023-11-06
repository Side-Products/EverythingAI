import { wrapper } from "@/redux/redux-store";
import { getSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getTool } from "@/redux/actions/toolActions";
import PageWrapper from "@/layout/PageWrapper";
import SubmitTool from "@/components/SubmitTool";
import { getPurchaseTermsById } from "@/redux/actions/purchaseTermsActions";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, query }) => {
      const session = await getSession({ req: req });

      if (!session || session.user.role !== "admin") {
        return {
          redirect: {
            destination: "/?login",
            permanent: false,
          },
        };
      }

      console.log(query.id);

      await store.dispatch(getTool(req, query.id));
      await store.dispatch(getPurchaseTermsById(req, query.id));

      return {
        props: { session },
      };
    }
);

export default function Tools() {
  const { tool } = useSelector((state) => state.tool);
  const { purchaseTerms } = useSelector((state) => state.allPurchaseTerms);

  const router = useRouter();
  const { query } = router;

  return (
    <PageWrapper>
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center tracking-[-1px] text-gradient-primary-tr">
          {query?.feature == "true" ? "Feature Tool" : "Edit Tool"}
        </h1>
        <SubmitTool toolToEdit={tool} purchaseTermsToEdit={purchaseTerms} />
      </div>
    </PageWrapper>
  );
}
