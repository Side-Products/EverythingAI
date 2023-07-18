import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import { SwiperSlide } from "swiper/react";
import CollectionCard from "@/components/Cards/CollectionCard";

export default function CollectionsCarousel({ collections }) {
	return (
		<div className={"collection-swiper-container"}>
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
						slidesPerView: 2,
						spaceBetween: 30,
					},
					1380: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					1800: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
				}}
				autoHeight={false}
				autowidth={"false"}
				enabled={true}
				cssMode={true}
				parallax={true}
				freeMode={true}
				observer={true}
				observeParents={true}
				observeSlideChildren={true}
				watchSlidesVisibility={true}
				watchSlidesProgress={true}
				centeredSlides={false}
				centerInsufficientSlides={true}
				navigation={true}
				mousewheel={true}
				keyboard={true}
				modules={[Navigation, Mousewheel, Keyboard]}
			>
				{collections && collections.length > 0 ? (
					collections.map((collection) => (
						<SwiperSlide key={collection._id}>
							<CollectionCard collection={collection} toolPage={true} />
						</SwiperSlide>
					))
				) : (
					<>
						<SwiperSlide>
							<CollectionCard />
						</SwiperSlide>
						<SwiperSlide>
							<CollectionCard />
						</SwiperSlide>
						<SwiperSlide>
							<CollectionCard />
						</SwiperSlide>
						<SwiperSlide>
							<CollectionCard />
						</SwiperSlide>
					</>
				)}
			</Swiper>
		</div>
	);
}
