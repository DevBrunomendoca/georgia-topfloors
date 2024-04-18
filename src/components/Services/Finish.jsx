import { SlideFinish } from "./FinishStyle"
import ThirdTitle from "../ThirdTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Finish = ({id}) => {

  const finish = [
    {id: '1', img: 'finish1.png' },
    {id: '2', img: 'finish2.png' },
    {id: '3', img: 'finish3.png' },
  ]

  return(
    <SlideFinish id={id}>  
      <ThirdTitle textThirdTitle='Sand and Finish'/>
      <Swiper 
        loop={true}
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={10}
        autoplay={{
          delay: 3600,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {finish.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.img} alt="Image Card Installation" />
          </SwiperSlide>
        ))}
      </Swiper>
    </SlideFinish>
  ) 
}

export default Finish