import { SwiperSlide } from "swiper/react";
import Carousel from "@/components/ui/Carousel";
import CategoryCard from "@/components/Cards/CategoryCard";

export default function CategoriesCarousel({ heading, categories }) {
	return (
		<Carousel heading={heading}>
			{categories.map((category) => (
				<SwiperSlide key={category._id}>
					<CategoryCard category={category} />
				</SwiperSlide>
			))}
		</Carousel>
	);
}
