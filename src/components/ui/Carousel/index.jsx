import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Keyboard } from "swiper";

export default function Carousel({ heading, children }) {
	return (
		<div>
			{heading && <h1 className="text-3xl font-semibold -mb-7">{heading}</h1>}
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
							spaceBetween: 40,
						},
						1800: {
							slidesPerView: 5,
							spaceBetween: 40,
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
				>
					{children}
				</Swiper>
			</div>
		</div>
	);
}
