import { SwiperSlide } from "swiper/react";
import Carousel from "@/components/ui/Carousel";
import ToolCard from "@/components/Cards/ToolCard";

export default function ToolsCarousel({ heading, tools, childrenSlides, setActiveSlideIdx }) {
	if(childrenSlides && childrenSlides.length > 0){
		return (
			<Carousel heading={heading} setActiveSlideIdx={setActiveSlideIdx}>
				{childrenSlides.map((slide,idx) => {
					return (
						<SwiperSlide key={'1'+idx}>
							{slide}
						</SwiperSlide>
					)
				})}
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
