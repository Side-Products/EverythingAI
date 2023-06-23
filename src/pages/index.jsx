import PageWrapper from "@/layout/PageWrapper";
import HeroSection from "@/components/Home/HeroSection";
import ToolsCarousel from "@/components/Tools/ToolsCarousel";
import CategoriesCarousel from "@/components/Categories/CategoriesCarousel";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToolsForHomepage } from "@/redux/actions/toolActions";
import { getAllCategories } from "@/redux/actions/categoryActions";

export default function HomePage() {
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
		<PageWrapper>
			<HeroSection />
			{trendingToolsOfTheWeek && trendingToolsOfTheWeek.length > 0 && (
				<ToolsCarousel heading={"Trending Tools of the Week"} tools={trendingToolsOfTheWeek} />
			)}
			{topToolsOfTheMonth && topToolsOfTheMonth.length > 0 && <ToolsCarousel heading={"Top Tools of the Month"} tools={topToolsOfTheMonth} />}
			{marketingTools && marketingTools.length > 0 && <ToolsCarousel heading={"Top Tools in Marketing"} tools={marketingTools} />}
			{imagesTools && imagesTools.length > 0 && <ToolsCarousel heading={"Trending in Images"} tools={imagesTools} />}
			{designTools && designTools.length > 0 && <ToolsCarousel heading={"Trending in Design"} tools={designTools} />}
			{productTools && productTools.length > 0 && <ToolsCarousel heading={"Trending in Product"} tools={productTools} />}
			{developerTools && developerTools.length > 0 && <ToolsCarousel heading={"Trending in Developer"} tools={developerTools} />}
			{videoTools && videoTools.length > 0 && <ToolsCarousel heading={"Trending in Video"} tools={videoTools} />}
			{productivityTools && productivityTools.length > 0 && <ToolsCarousel heading={"Trending in Productivity"} tools={productivityTools} />}
			{salesTools && salesTools.length > 0 && <ToolsCarousel heading={"Trending in Sales"} tools={salesTools} />}
			{promptsTools && promptsTools.length > 0 && <ToolsCarousel heading={"Trending in Prompts"} tools={promptsTools} />}
			{categories && categories.length > 0 && <CategoriesCarousel heading={"Explore Categories"} categories={categories} />}
		</PageWrapper>
	);
}
