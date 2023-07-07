import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageWrapper from "@/layout/PageWrapper";
import HeroSection from "@/components/Home/HeroSection";
import ToolsCarousel from "@/components/Tools/ToolsCarousel";
import CategoriesCarousel from "@/components/Categories/CategoriesCarousel";
import { getToolsForHomepage } from "@/redux/actions/toolActions";
import { getAllCategories } from "@/redux/actions/categoryActions";
import TrendTable from "@/components/Home/TrendTable";

export async function getStaticProps() {
	try {
		// Make the HTTP request to the endpoint
		const featuredResponse = await axios.get(`${process.env.NEXTAUTH_URL}/api/tools/featured`);
		const leaderboardResponse = await axios.get(`${process.env.NEXTAUTH_URL}/api/tools/leaderboard`);

		// Retrieve the data from the featuredResponse
		const featuredTools = featuredResponse.data.tools;
		const trendingToolsOfTheWeek = leaderboardResponse.data.trendingToolsOfTheWeek;
		const topToolsOfTheMonth = leaderboardResponse.data.topToolsOfTheMonth;

		// Return the data as props
		return {
			props: {
				featuredTools,
				trendingToolsOfTheWeek,
				topToolsOfTheMonth,
			},
		};
	} catch (error) {
		console.error("Error fetching data:", error);
		// You can handle errors here and return an error message or appropriate fallback data
		return {
			props: {
				featuredTools: [],
				trendingToolsOfTheWeek: [],
				topToolsOfTheMonth: [],
			},
		};
	}
}

export default function HomePage({ featuredTools, trendingToolsOfTheWeek, topToolsOfTheMonth }) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getToolsForHomepage());
		dispatch(getAllCategories(10));
	}, [dispatch]);

	const { marketingTools, designTools, developerTools, productivityTools, imagesTools, promptsTools, videoTools, productTools, salesTools } = useSelector(
		(state) => state.toolsForHomepage
	);
	const { categories } = useSelector((state) => state.allCategories);

	const [selectedTrendingOption, setSelectedTrendingOption] = useState("7d");
	const [leaderboardTools, setLeaderboardTools] = useState(trendingToolsOfTheWeek);
	const handleTrendingOptionClick = (option) => {
		setSelectedTrendingOption(option);
		if (option == "7d") {
			setLeaderboardTools(trendingToolsOfTheWeek);
		} else if (option == "30d") {
			setLeaderboardTools(topToolsOfTheMonth);
		}
	};

	return (
		<PageWrapper classes="w-full max-w-[1920px] pt-32 pb-32 px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-20">
			<HeroSection featuredTools={featuredTools} />

			<div className="bg-white py-10 px-8 rounded-2xl mb-24">
				<div className="flex justify-between">
					<h2 className="font-semibold text-3xl mb-12 ml-4">Trending Tools {selectedTrendingOption == "7d" ? "of the week" : "of the month"}</h2>
					<div className="flex h-fit text-sm bg-gray-200 p-1 rounded-xl z-10">
						<div
							className={`px-4 py-2 rounded-xl cursor-pointer ${selectedTrendingOption == "7d" ? "bg-light-200" : "bg-gray-200"}`}
							onClick={() => handleTrendingOptionClick("7d")}
						>
							7d
						</div>
						<div
							className={`px-4 py-2 rounded-xl cursor-pointer ${selectedTrendingOption == "30d" ? "bg-light-200" : "bg-gray-200"}`}
							onClick={() => handleTrendingOptionClick("30d")}
						>
							30d
						</div>
					</div>
				</div>
				<div className="flex space-x-8">
					<TrendTable tools={leaderboardTools} limit={5} startIdx={0} />
					<TrendTable tools={leaderboardTools} limit={5} startIdx={5} />
				</div>
			</div>

			<ToolsCarousel heading={"Top Tools in Marketing"} tools={marketingTools} />
			<ToolsCarousel heading={"Trending in Images"} tools={imagesTools} />
			<ToolsCarousel heading={"Trending in Design"} tools={designTools} />
			<ToolsCarousel heading={"Trending in Product"} tools={productTools} />
			<ToolsCarousel heading={"Trending in Developer"} tools={developerTools} />
			<ToolsCarousel heading={"Trending in Video"} tools={videoTools} />
			<ToolsCarousel heading={"Trending in Productivity"} tools={productivityTools} />
			<ToolsCarousel heading={"Trending in Sales"} tools={salesTools} />
			<ToolsCarousel heading={"Trending in Prompts"} tools={promptsTools} />
			{categories && categories.length > 0 && <CategoriesCarousel heading={"Explore Categories"} categories={categories} />}
		</PageWrapper>
	);
}
