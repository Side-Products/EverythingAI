import PageWrapper from "@/layout/PageWrapper";
import { getSession } from "next-auth/react";
import { wrapper } from "@/redux/redux-store";
import { useSelector } from "react-redux";
import { getLikedTools } from "@/redux/actions/likedToolActions";
import UserDetails from "@/components/Dashboard/UserDetails";
import ToolsWithPagination from "@/components/Dashboard/Search/ToolsWithPagination";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, query }) => {
      const session = await getSession({ req: req });

      await store.dispatch(getLikedTools(req, query.id));

      return {
        props: { session },
      };
    }
);

export default function Dashboard() {
  const {
    likedTools,
    resultsPerPage,
    likedToolsCount,
    filteredToolsCount,
    user,
  } = useSelector((state) => state.myLikedTools);

  return (
    <PageWrapper
      title={"My Tools - Keep All Your Favorite AI Tools In One Place"}
      description={
        "Browse 4,000+ AI tools to find the ones for you. Save and organize your favorites in one place, and easily share with friends, colleagues, and your community."
      }
    >
      <UserDetails count={likedToolsCount} shareableDashboardUser={user} />
      <div className={"w-full flex flex-col " + (user ? "mt-8" : "mt-20")}>
        {/* <h1 className="text-6xl font-bold text-center tracking-[-2.5px] text-gradient-primary-tr">
          {getFirstName(user?.name)}&apos;s Favourite Tools
        </h1> */}
        <ToolsWithPagination
          options={likedTools}
          resultsPerPage={resultsPerPage}
          totalCount={likedToolsCount}
          filteredTotalCount={filteredToolsCount}
          shareableDashboard={true}
        />
      </div>
    </PageWrapper>
  );
}
