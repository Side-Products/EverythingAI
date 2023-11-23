import { useReducer, useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import MarketplaceNav from "./MarketplaceNav";
import MarketplaceBody from "./MarketplaceBody";
import Pager from "@/components/ui/Pagination/Pager";
import { useSelector } from "react-redux";
import { ToolContext } from "@/store/ToolContextProvider";
import { LoadingContext } from "@/store/LoadingContextProvider";
import axios from "axios";
import { useCallback } from "react";

const initFilterState = {
  subcategories: [],
  category: {
    _id: null,
    name: null,
  },
  sortingFilter: "Newest",
  pricing: {
    _id: null,
    name: null,
    meta: null,
  },
};

const reducerFn = (state, action) => {
  switch (action.type) {
    case "CATEGORY":
      return {
        ...state,
        category: {
          _id: action._id,
          name: action.name,
        },
      };
    case "SUBCATEGORY":
      return {
        ...state,
        subcategories: action.selectedSubcategories,
      };
    case "PRICING":
      return {
        ...state,
        pricing: {
          _id: action._id,
          name: action.name,
          meta: action.meta,
        },
      };
    case "SORTINGFILTER":
      return { ...state, sortingFilter: action.name };
    case "reset":
      return initFilterState;
    default:
      return state;
  }
};

export default function Marketplace({ tools }) {
  // Will be maintaining a state here for the type of marketplace (currentSelection (Integer))
  // Initially set to load the newly released nfts first
  const [currentSelection, setCurrentSelection] = useState(1);
  const [filter, setFilter] = useReducer(reducerFn, initFilterState);

  const { toolsCount, resultsPerPage, filteredToolsCount } = useSelector(
    (state) => state.allTools
  );

  const router = useRouter();
  // Pagination
  let { sortby, pricing, category, subcategories, page = 1 } = router.query;
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

  let count = toolsCount;
  if (pricing || category || subcategories) {
    count = filteredToolsCount;
  }

  const { setLoading } = useContext(LoadingContext);
  const { setFilteredTools } = useContext(ToolContext);
  const getAllTools = useCallback(async () => {
    const subcategoryNames = filter.subcategories.map(
      (subcategory) => subcategory.name
    );
    const sanitizedSubcategoryNames = subcategoryNames.join(",");

    const queryParams = {
      search: router.query.search,
      category: filter.category.name,
      subcategories: sanitizedSubcategoryNames,
      sortby: filter.sortingFilter,
      pricing: filter.pricing.name,
      meta: filter.pricing.meta,
    };

    // Remove null or undefined values from queryParams
    Object.keys(queryParams).forEach((key) => {
      if (
        queryParams[key] === null ||
        queryParams[key] === "null" ||
        queryParams[key] === undefined ||
        queryParams[key] === "undefined" ||
        queryParams[key] === ""
      ) {
        delete queryParams[key];
      }
    });

    // Merge the new query parameters with the existing ones
    const updatedQuery = { ...queryParams };
    // Convert the updated query object to a search string
    const search = new URLSearchParams(updatedQuery).toString();
    // Push the updated search string to the router
    router.replace({ search }, undefined, { shallow: true });

    const { data } = await axios.get(`/api/tools`, {
      params: updatedQuery,
    });

    setFilteredTools(data?.tools);

    // if (data?.tools?.length === 0) {
    // 	router.replace("/tools", undefined, { shallow: true });
    // }
    setLoading({
      status: false,
    });
  }, [
    filter.category.name,
    filter.pricing.meta,
    filter.pricing.name,
    filter.sortingFilter,
    filter.subcategories,
    router,
    setFilteredTools,
    setLoading,
  ]);

  const [hasLoadedOnce, setLoadedOnce] = useState(false);
  useEffect(() => {
    if (hasLoadedOnce) {
      setLoading({
        status: true,
        title: "Applying Filt...",
      });
      getAllTools();
    } else {
      setLoadedOnce(true);
    }
  }, [filter, getAllTools, hasLoadedOnce, setLoading]);

  return (
    <>
      <MarketplaceNav {...{ currentSelection, setCurrentSelection }} />
      <MarketplaceBody
        currentSelection={currentSelection}
        filter={filter}
        setFilter={setFilter}
        tools={tools}
      />
      <div className="w-full flex justify-center pb-20 -mt-6">
        {resultsPerPage < count && (
          <Pager
            activePage={page}
            onPageChange={handlePagination}
            itemsCountPerPage={resultsPerPage}
            totalPagesCount={count}
          />
        )}
      </div>
    </>
  );
}
