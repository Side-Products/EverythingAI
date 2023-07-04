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
				<div className="isolate bg-white dark:bg-gray-900">
					<div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
						<svg
							className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
							viewBox="0 0 1155 678"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
								fillOpacity=".3"
								d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
							/>
							<defs>
								<linearGradient
									id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
									x1="1155.49"
									x2="-78.208"
									y1=".177"
									y2="474.645"
									gradientUnits="userSpaceOnUse"
								>
									<stop stopColor="#9089FC" />
									<stop offset={1} stopColor="#FF80B5" />
								</linearGradient>
							</defs>
						</svg>
					</div>
				</div>

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

				<div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
					<svg
						className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
						viewBox="0 0 1155 678"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
							fillOpacity=".3"
							d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
						/>
						<defs>
							<linearGradient
								id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
								x1="1155.49"
								x2="-78.208"
								y1=".177"
								y2="474.645"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#9089FC" />
								<stop offset={1} stopColor="#FF80B5" />
							</linearGradient>
						</defs>
					</svg>
				</div>
			</div>
		</div>
	);
}
