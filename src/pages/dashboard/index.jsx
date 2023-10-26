import PageWrapper from "@/layout/PageWrapper";
import { getSession } from "next-auth/react";
import { wrapper } from "@/redux/redux-store";
import { useSelector } from "react-redux";
import { getMyLikedTools } from "@/redux/actions/likedToolActions";
import UserDetails from "@/components/Dashboard/UserDetails";
import ToolsWithPagination from "@/components/Dashboard/Search/ToolsWithPagination";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, query }) => {
      const session = await getSession({ req: req });
      if (!session) {
        return {
          redirect: {
            destination: "/?login",
            permanent: false,
          },
        };
      }

      await store.dispatch(getMyLikedTools(req, query.page, query.search));

      return {
        props: { session },
      };
    }
);

export default function Dashboard() {
  const { likedTools, resultsPerPage, likedToolsCount, filteredToolsCount } =
    useSelector((state) => state.myLikedTools);

  return (
    <PageWrapper
      title={"My Tools - Keep All Your Favorite AI Tools In One Place"}
      description={
        "Browse 4,000+ AI tools to find the ones for you. Save and organize your favorites in one place, and easily share with friends, colleagues, and your community."
      }
    >
      <UserDetails count={likedToolsCount} />
      <div className="w-full flex flex-col mt-20">
        <h1 className="text-[60px] font-bold text-center tracking-[-2.5px] text-gradient-primary-tr leading-[70px]">
          My Tools
        </h1>
        <ToolsWithPagination
          options={likedTools}
          resultsPerPage={resultsPerPage}
          totalCount={likedToolsCount}
          filteredTotalCount={filteredToolsCount}
          shareMyFavouriteTools={true}
        />
      </div>
    </PageWrapper>
  );
}
