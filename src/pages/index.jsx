import PageWrapper from "@/layout/PageWrapper";
import HeroSection from "@/components/Home/HeroSection";
import ToolsCarousel from "@/components/ui/Carousel/ToolsCarousel";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTools } from "@/redux/actions/toolActions";

export default function HomePage() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllTools());
	}, [dispatch]);

	const { tools } = useSelector((state) => state.allTools);

	return (
		<PageWrapper>
			<HeroSection />
			{tools && tools.length > 0 && <ToolsCarousel heading={"Marketing"} tools={tools} />}
			Explore Categories (Categories Carousel)
		</PageWrapper>
	);
}
