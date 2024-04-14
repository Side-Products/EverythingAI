import { useContext, useEffect } from "react";
import dynamic from "next/dynamic";
const Partners = dynamic(() => import("./Partners"));
import { LoadingContext } from "@/store/LoadingContextProvider";
import LoadingToolCards from "@/components/Cards/LoadingToolCards";
import NoResultsFound from "@/components/Marketplace/NoResultsFound";
import { ToolContext } from "@/store/ToolContextProvider";

export default function GenAIPartnersBody({ genAIPartners }) {
	let marketplaceType = "EXPLORE ALL PARTNERS";

	const { filteredTools, setFilteredTools } = useContext(ToolContext);
	useEffect(() => {
		setFilteredTools(genAIPartners);
	}, [genAIPartners]);

	const { loading } = useContext(LoadingContext);

	return (
		<div className="flex flex-col items-center justify-center w-full">
			<div className="w-full max-w-[1920px] px-6 pt-16 pb-28 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
				<div className="flex flex-col items-center w-full">
					<div className="flex mb-[16px] items-center space-x-2 sm:text-4xl text-3xl font-secondary">
						<p className="text-dark-800 font-semibold">{marketplaceType}</p>
					</div>

					<div className="flex items-start justify-between w-full lg:space-x-10">
						{!loading.status && filteredTools && filteredTools.length === 0 ? (
							<NoResultsFound type={"partners"} />
						) : (
							<div className="grid grid-cols-1 gap-12 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
								{loading.status ? <LoadingToolCards /> : <Partners genAIPartners={filteredTools} />}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
