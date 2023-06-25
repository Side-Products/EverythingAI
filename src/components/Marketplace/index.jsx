import { useReducer, useState } from "react";
import MarketplaceNav from "./MarketplaceNav";
import MarketplaceBody from "./MarketplaceBody";

const initFilterState = {
	subcategories: [],
	category: {
		_id: null,
		name: null,
	},
	sortingFilter: "Newest",
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

	return (
		<>
			<MarketplaceNav {...{ currentSelection, setCurrentSelection }} />
			<MarketplaceBody currentSelection={currentSelection} filter={filter} setFilter={setFilter} tools={tools} />
		</>
	);
}
