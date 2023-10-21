import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Keyboard } from "swiper";

export default function Carousel({
  heading,
  children,
  setActiveSlideIdx = null,
  breakpoints = null,
  classes,
}) {
  return (
    <div>
      {heading && (
        <h1 className="text-xl font-semibold sm:text-2xl lg:text-3xl -mb-7">
          {heading}
        </h1>
      )}
      <div className={"swiper-container " + classes}>
        <Swiper
          breakpoints={
            breakpoints
              ? breakpoints
              : {
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
                  1380: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                  },
                  1800: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }
          }
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
          onSlideChange={(e) => {
            if (setActiveSlideIdx) setActiveSlideIdx(e.activeIndex);
          }}
        >
          {children}
        </Swiper>
      </div>
    </div>
  );
}
