import { useState, useContext } from "react";
import dynamic from "next/dynamic";
const ExploreTools = dynamic(() => import("./ExploreTools"));
const NewTools = dynamic(() => import("./NewTools"));
const TrendingTools = dynamic(() => import("./TrendingTools"));
import Filter from "./Filter";
import { LoadingContext } from "@/store/LoadingContextProvider";
import LoadingToolCards from "@/components/Cards/LoadingToolCards";
import NoResultsFound from "@/components/Marketplace/NoResultsFound";

export default function MarketplaceBody({ currentSelection, filter, setFilter, tools }) {
	let marketplaceType = "EXPLORE ALL TOOLS";
	if (currentSelection === 2) marketplaceType = "TRENDING TOOLS";
	else if (currentSelection === 3) marketplaceType = "NEW TOOLS";

	const [filteredTools, setFilteredTools] = useState(tools);

	const { loading } = useContext(LoadingContext);

	return (
		<div className="flex flex-col items-center justify-center w-full">
			<div className="w-full max-w-[1920px] px-6 pt-16 pb-28 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
				<div className="flex flex-col items-center w-full">
					<div className="flex mb-[35px] items-center space-x-2 sm:text-4xl text-3xl font-secondary">
						<p className="text-dark-800 font-semibold">{marketplaceType}</p>
					</div>

					{currentSelection === 1 && <Filter filter={filter} setFilter={setFilter} />}

					<div className="flex items-start justify-between w-full lg:space-x-10">
						{!loading.status && filteredTools && filteredTools.length === 0 ? (
							<NoResultsFound />
						) : (
							<div className="grid grid-cols-1 gap-12 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
								{loading.status ? (
									<LoadingToolCards />
								) : currentSelection === 1 ? (
									<ExploreTools tools={filteredTools} setTools={setFilteredTools} filter={filter} />
								) : currentSelection === 2 ? (
									<TrendingTools tools={filteredTools} setTools={setFilteredTools} filter={filter} />
								) : currentSelection === 3 ? (
									<NewTools tools={filteredTools} setTools={setFilteredTools} filter={filter} />
								) : null}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
