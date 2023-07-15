import { SwiperSlide } from "swiper/react";
import Carousel from "@/components/ui/Carousel";
import ToolCard from "@/components/Cards/ToolCard";

export default function ToolsCarousel({ heading, tools, childrenSlides, setActiveSlideIdx }) {
	if (childrenSlides && childrenSlides.length > 0) {
		const breakpoints = {
			320: {
				slidesPerView: 1,
				spaceBetween: 5,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1380: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			1800: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
		};

		return (
			<Carousel setActiveSlideIdx={setActiveSlideIdx} breakpoints={breakpoints} classes={"featured-carousel"}>
				{childrenSlides && childrenSlides.length > 0 ? (
					childrenSlides.map((slide, idx) => <SwiperSlide key={"1" + idx}>{slide}</SwiperSlide>)
				) : (
					<>
						<SwiperSlide>
							<ToolCard />
						</SwiperSlide>
						<SwiperSlide>
							<ToolCard />
						</SwiperSlide>
						<SwiperSlide>
							<ToolCard />
						</SwiperSlide>
						<SwiperSlide>
							<ToolCard />
						</SwiperSlide>
					</>
				)}
			</Carousel>
		);
	}

	return (
		<Carousel heading={heading}>
			{tools && tools.length > 0 ? (
				tools.map((tool) => (
					<SwiperSlide key={tool._id}>
						<ToolCard tool={tool} />
					</SwiperSlide>
				))
			) : (
				<>
					<SwiperSlide>
						<ToolCard />
					</SwiperSlide>
					<SwiperSlide>
						<ToolCard />
					</SwiperSlide>
					<SwiperSlide>
						<ToolCard />
					</SwiperSlide>
					<SwiperSlide>
						<ToolCard />
					</SwiperSlide>
				</>
			)}
		</Carousel>
	);
}
