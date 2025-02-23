import { useState } from "react";
import { useRouter } from "next/router";
import Pager from "@/components/ui/Pagination/Pager";
import Button from "@/components/ui/Button";
import ToolCard from "@/components/Cards/ToolCard";
import Search from "./Search";
import ShareModal from "@/components/ui/ShareModal";

export default function ToolsWithPagination({
  options,
  resultsPerPage,
  totalCount,
  filteredTotalCount,
  shareableDashboardUser,
  shareMyFavouriteTools,
}) {
  const router = useRouter();
  let { search, page = 1 } = router.query;
  page = Number(page);

  let queryParams;
  if (typeof window !== "undefined") {
    queryParams = new URLSearchParams(window.location.search);
  }

  const handlePagination = (pageNumber) => {
    if (queryParams.has("page")) {
      queryParams.set("page", pageNumber + 1);
    } else {
      queryParams.append("page", pageNumber + 1);
    }

    router.replace({
      search: queryParams.toString(),
    });
  };

  let count = totalCount;
  if (search) {
    count = filteredTotalCount;
  }

  const [isShareModalOpen, setShareModalOpen] = useState(false);

  return (
    <>
      <div className="w-full flex justify-between mt-10">
        <div className="flex flex-col xl:w-1/3 lg:w-9/12 md:w-1/2">
          {!shareableDashboardUser && <Search />}
          {search && (
            <div className="text-sm mt-2 ml-2">
              Showing results for: {search}
            </div>
          )}
        </div>
        <div>
          <Button
            type="button"
            variant="classic-100"
            onClick={() => setShareModalOpen(true)}
          >
            <div className="flex items-center justify-center space-x-2">
              <i className="text-xs sm:text-sm md:text-lg fa-solid fa-share-nodes"></i>
              <span className="text-xs sm:text-sm md:text-base">Share</span>
            </div>
          </Button>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center mt-14">
        {options && options.length === 0 ? (
          <div>
            <p className="text-2xl font-medium text-dark-300 text-center mt-12">
              No liked tools yet
            </p>
            <div className="mt-5">
              <Button
                variant={"primary"}
                outline={true}
                rounded={true}
                classes="px-[2px] py-[2px]"
                onClick={() => {
                  router.push("/tools");
                }}
              >
                <div className="px-4 text-sm font-normal">
                  Check out some tools now
                  <span className="ml-2 text-sm">
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </span>
                </div>
              </Button>
            </div>
          </div>
        ) : (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {options &&
              options.map((option) => (
                <ToolCard key={option._id} tool={option} />
              ))}
          </div>
        )}
      </div>

      <ShareModal
        isOpen={isShareModalOpen}
        setOpen={setShareModalOpen}
        shareableDashboardUser={shareableDashboardUser}
        shareMyFavouriteTools={shareMyFavouriteTools}
      />

      {/* <div className="mt-12">
				{resultsPerPage < count && (
					<Pager activePage={page} onPageChange={handlePagination} itemsCountPerPage={resultsPerPage} totalPagesCount={count} />
				)}
			</div> */}
    </>
  );
}
