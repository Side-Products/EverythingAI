import { SwiperSlide } from "swiper/react";
import Carousel from "@/components/ui/Carousel";
import ToolCard from "@/components/Cards/ToolCard";

export default function ToolsCarousel({ heading, tools }) {
	return (
		<Carousel heading={heading}>
			{tools.map((tool) => (
				<SwiperSlide key={tool._id}>
					<ToolCard tool={tool} />
				</SwiperSlide>
			))}
		</Carousel>
	);
}
