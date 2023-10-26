import { wrapper } from "@/redux/redux-store";
import { getSession } from "next-auth/react";
import { adminGetAllCollections } from "@/redux/actions/collectionActions";
import PageWrapper from "@/layout/PageWrapper";
import AllCollections from "@/components/Admin/AllCollections";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      const session = await getSession({ req: req });

      if (!session || session.user.role !== "admin") {
        return {
          redirect: {
            destination: "/?login",
            permanent: false,
          },
        };
      }

      await store.dispatch(adminGetAllCollections(req));

      return {
        props: { session },
      };
    }
);

export default function Users() {
  return (
    <PageWrapper>
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-[60px] font-bold text-center tracking-[-1px] leading-[70px] text-gradient-primary-tr">
          All Collections
        </h1>
        <AllCollections />
      </div>
    </PageWrapper>
  );
}
