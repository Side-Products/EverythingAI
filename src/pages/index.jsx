import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageWrapper from "@/layout/PageWrapper";
import HeroSection from "@/components/Home/HeroSection";
import ToolsCarousel from "@/components/Tools/ToolsCarousel";
import CategoriesCarousel from "@/components/Categories/CategoriesCarousel";
import { getToolsForHomepage } from "@/redux/actions/toolActions";
import { getAllCategories } from "@/redux/actions/categoryActions";

export async function getStaticProps() {
	try {
		// Make the HTTP request to the endpoint
		const response = await axios.get(`${process.env.NEXTAUTH_URL}/api/tools/featured`);

		// Retrieve the data from the response
		const featuredTools = response.data.tools;

		// Return the data as props
		return {
			props: {
				featuredTools,
			},
		};
	} catch (error) {
		console.error("Error fetching data:", error);
		// You can handle errors here and return an error message or appropriate fallback data
		return {
			props: {
				featuredTools: [],
			},
		};
	}
}

export default function HomePage({ featuredTools }) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getToolsForHomepage());
		dispatch(getAllCategories(10));
	}, [dispatch]);

	const {
		trendingToolsOfTheWeek,
		topToolsOfTheMonth,
		marketingTools,
		designTools,
		developerTools,
		productivityTools,
		imagesTools,
		promptsTools,
		videoTools,
		productTools,
		salesTools,
	} = useSelector((state) => state.toolsForHomepage);
	const { categories } = useSelector((state) => state.allCategories);

	return (
		<PageWrapper classes="w-full max-w-[1920px] pt-32 pb-32 px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-20">
			<HeroSection featuredTools={featuredTools} />
			<ToolsCarousel heading={"Trending Tools of the Week"} tools={trendingToolsOfTheWeek} />
			<ToolsCarousel heading={"Top Tools of the Month"} tools={topToolsOfTheMonth} />
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
