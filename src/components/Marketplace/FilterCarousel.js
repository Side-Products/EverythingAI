import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Keyboard } from "swiper";

export default function FilterCarousel({ options, setFilter, type }) {
	const router = useRouter();
	const { subcategories } = router.query;
	let subcategoriesArray = [];
	if (subcategories) subcategoriesArray = subcategories.split(",");

	return (
		<div className="filter-swiper-container">
			<Swiper
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					640: {
						slidesPerView: 3,
						spaceBetween: 16,
					},
					768: {
						slidesPerView: 4,
						spaceBetween: 16,
					},
					1024: {
						slidesPerView: 5,
						spaceBetween: 20,
					},
					1280: {
						slidesPerView: 6,
						spaceBetween: 20,
					},
					1440: {
						slidesPerView: 8,
						spaceBetween: 22,
					},
					1800: {
						slidesPerView: 8,
						spaceBetween: 26,
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
				{options &&
					options.length > 0 &&
					options.map((option) => (
						<SwiperSlide key={option._id} onClick={() => setFilter({ type, selectedSubcategories: [option] })}>
							<div
								className={`flex flex-col text-center text-sm px-3 py-2 bg-light-100 rounded-full hover:bg-primary-100 transition duration-300 cursor-pointer ${
									subcategoriesArray.includes(option.name) ? "bg-primary-100" : ""
								}`}
							>
								{option?.name}
							</div>
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
}
