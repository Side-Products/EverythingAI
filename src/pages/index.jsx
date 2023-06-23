import PageWrapper from "@/layout/PageWrapper";
import HeroSection from "@/components/Home/HeroSection";
import ToolsCarousel from "@/components/Tools/ToolsCarousel";
import CategoriesCarousel from "@/components/Categories/CategoriesCarousel";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTools } from "@/redux/actions/toolActions";
import { getAllCategories } from "@/redux/actions/categoryActions";

export default function HomePage() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllTools());
		dispatch(getAllCategories(10));
		// dispatch(getToolsByCategory("marketing"));
	}, [dispatch]);

	const { tools } = useSelector((state) => state.allTools);
	const { categories } = useSelector((state) => state.allCategories);

	return (
		<PageWrapper>
			<HeroSection />
			{tools && tools.length > 0 && <ToolsCarousel heading={"Top Tools in Marketing"} tools={tools} />}
			{categories && categories.length > 0 && <CategoriesCarousel heading={"Explore Categories"} categories={categories} />}
		</PageWrapper>
	);
}
