import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import ToolCard from "@/components/Tools/ToolCard";

export default function ToolsCarousel({tools}) {
	return (
		<div className="swiper-container">
			<Swiper
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					1280: {
						slidesPerView: 4,
						spaceBetween: 40,
					},
					1440: {
						slidesPerView: 4,
						spaceBetween: 20,
					},
					1800: {
						slidesPerView: 5,
						spaceBetween: 20,
					},
				}}
				autoHeight={false}
				autowidth={"false"}
				enabled={true}
				cssMode={true}
				centerInsufficientSlides={true}
				navigation={true}
				mousewheel={true}
				keyboard={true}
				modules={[Navigation, Mousewheel, Keyboard]}
				className="absolute mx-10 bottom-32"
			>
                {tools.map((tool) => (
                    <SwiperSlide key={tool._id}>
                        <ToolCard tool={tool} onClick={() => router.push(`/tools/${tool._id}`)} />
                    </SwiperSlide>
                ))}
			</Swiper>
		</div>
	);
}
