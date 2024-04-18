import { SlideInstallation } from "./InstallatiionStyle"
import ThirdTitle from "../ThirdTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Installation = () => {

  const installation = [
    {id: '1', img: 'installation1.png' },
    {id: '2', img: 'installation2.png' },
    {id: '3', img: 'installation3.png' },
  ]

  return (
    <SlideInstallation>
      <ThirdTitle textThirdTitle='Installation'/>
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
        {installation.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.img} alt="Image Card Installation" />
          </SwiperSlide>
        ))}
      </Swiper>
    </SlideInstallation>
  )
}

export default Installation