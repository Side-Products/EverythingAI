import { useState } from "react";
import ToolsCarousel from "../Tools/ToolsCarousel";
import HeroCard from "../Cards/HeroCard";
import Image from "next/image";
import TopGradient from "@/components/ui/BgGradient/TopGradient";
import BottomGradient from "@/components/ui/BgGradient/BottomGradient";

export default function HeroSection({ featuredTools }) {
	const [activeSlideIdx, setActiveSlideIdx] = useState(0);

	const heroTools = featuredTools.map((tool, idx) => {
		return <HeroCard key={idx} tool={tool} />;
	});

	const heroBgStyles = {
		objectFit: "cover",
	};

	return (
		<div className="relative">
			{/* <div className="absolute z-[0] w-full h-full">
				{featuredTools[activeSlideIdx]?.logo && <Image src={featuredTools[activeSlideIdx].logo} alt="tool" fill style={heroBgStyles} />}
			</div> */}
			<div className="mb-6 z-[2] backdrop-blur-2xl">
				<TopGradient />

				<h1 className="mt-6 px-2 sm:px-8 md:px-16 text-[48px] sm:text-[50px] md:text-[80px] lg:text-[100px] leading-[120px] text-center font-extrabold tracking-[-2.5px] text-black">
					The Future of
					<br />
					Growth is AI
				</h1>

				<div className="w-full flex justify-center mt-10 mb-8">
					<div className="text-center rounded-full w-fit px-8 py-3 border border-zinc-300 text-zinc-500">
						Discover AI tools that fit like a glove: handpicked for your industry and goals.
					</div>
				</div>

				<div>
					<ToolsCarousel childrenSlides={heroTools} setActiveSlideIdx={setActiveSlideIdx} />
				</div>

				<BottomGradient />
			</div>
		</div>
	);
}
