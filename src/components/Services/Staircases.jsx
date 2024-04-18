import { SlideStaircases } from "./StaircasesStyle"
import ThirdTitle from "../ThirdTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Staircases = () => {

  const staircases = [
    {id: '1', img: 'staircases1.png'},
    {id: '2', img: 'staircases2.png'},
    {id: '3', img: 'staircases3.png'}
  ]

  return(
    <SlideStaircases> 
      <ThirdTitle textThirdTitle='Staircases'/>
      <Swiper 
        loop={true}
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={10}
        autoplay={{
          delay: 3800,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {staircases.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.img} alt="Image Card Installation" />
          </SwiperSlide>
        ))}
      </Swiper>
    </SlideStaircases>
  ) 
}

export default Staircases