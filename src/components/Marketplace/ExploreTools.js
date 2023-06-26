import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { LoadingContext } from "@/store/LoadingContextProvider";
import ToolCard from "@/components/Cards/ToolCard";
import { useRouter } from "next/router";

const ExploreTools = ({ filter, tools, setTools }) => {
	const { setLoading } = useContext(LoadingContext);
	const [hasLoadedOnce, setLoadedOnce] = useState(false);

	const router = useRouter();

	const getAllTools = async () => {
		const subcategoryNames = filter.subcategories.map((subcategory) => subcategory.name);
		const sanitizedSubcategoryNames = subcategoryNames.join(",");

		const queryParams = {
			category: filter.category.name,
			subcategories: sanitizedSubcategoryNames,
			sortby: filter.sortingFilter,
			pricing: filter.pricing.name,
			meta: filter.pricing.meta,
		};
		// Remove null or undefined values from queryParams
		Object.keys(queryParams).forEach((key) => {
			if (queryParams[key] === null || queryParams[key] === undefined || queryParams[key] === "") {
				delete queryParams[key];
			}
		});
		// Merge the new query parameters with the existing ones
		const updatedQuery = { ...router.query, ...queryParams };
		// Convert the updated query object to a search string
		const search = new URLSearchParams(updatedQuery).toString();
		// Push the updated search string to the router
		router.replace({ search }, undefined, { shallow: true });

		const { data } = await axios.get(`/api/tools`, {
			params: updatedQuery,
		});

		setTools(data?.tools);
		setLoading({
			status: false,
		});
	};

	useEffect(() => {
		if (hasLoadedOnce) {
			setLoading({
				status: true,
				title: "Applying Filter...",
			});
			getAllTools();
		} else {
			setLoadedOnce(true);
		}
	}, [filter]);

	return tools && tools.length > 0 && tools.map((tool) => <ToolCard key={tool._id} tool={tool} />);
};

export default ExploreTools;
