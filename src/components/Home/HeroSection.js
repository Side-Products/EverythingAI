import { useState } from "react";
import ToolsCarousel from "../Tools/ToolsCarousel";
import HeroCard from "../Cards/HeroCard";
import Image from "next/image";

export default function HeroSection({ featuredTools }) {
	const [activeSlideIdx, setActiveSlideIdx] = useState(0);

	const heroTools = featuredTools.map((tool, idx) => {
		return <HeroCard key={idx} tool={tool} />;
	});

	const heroBgStyles = {
		objectFit: "cover cover",
	};

	return (
		<div className="relative">
			{/* <div className="absolute z-[0] w-full h-full">
				{tools[activeSlideIdx]?.logo && <Image src={tools[activeSlideIdx].logo} alt="tool" fill style={heroBgStyles} />}
			</div> */}
			<div className="mb-6 z-[2] backdrop-blur-2xl">
				<h1 className="mb-4 px-2 sm:px-8 md:px-16 text-[48px] sm:text-[50px] md:text-[80px] lg:text-[100px] leading-[120px] text-center font-extrabold tracking-[-2.5px] text-gradient-primary-tr">
					EverythingAI
				</h1>
				<div>
					<ToolsCarousel childrenSlides={heroTools} setActiveSlideIdx={setActiveSlideIdx} />
				</div>
			</div>
		</div>
	);
}
