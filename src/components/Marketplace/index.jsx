import { useReducer, useState } from "react";
import { useRouter } from "next/router";
import MarketplaceNav from "./MarketplaceNav";
import MarketplaceBody from "./MarketplaceBody";
import Pager from "@/components/ui/Pagination/Pager";
import { useSelector } from "react-redux";

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

	const { toolsCount, resultsPerPage, filteredToolsCount } = useSelector((state) => state.allTools);

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

	return (
		<>
			<MarketplaceNav {...{ currentSelection, setCurrentSelection }} />
			<MarketplaceBody currentSelection={currentSelection} filter={filter} setFilter={setFilter} tools={tools} />
			<div className="w-full flex justify-center pb-20 -mt-6">
				{resultsPerPage < count && (
					<Pager activePage={page} onPageChange={handlePagination} itemsCountPerPage={resultsPerPage} totalPagesCount={count} />
				)}
			</div>
		</>
	);
}
