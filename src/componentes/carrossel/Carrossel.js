import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.css';
import { A11y, Navigation, Pagination, Scroolbar } from 'swiper/modules';

export const Carrossel = ({slides}) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{clickable: true }}
      scroolbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
          <img src={slide.image} alt={slide.title}/>
        </SwiperSlide>
      ))}
      
      
    </Swiper>
  );
};


export default Carrossel;
