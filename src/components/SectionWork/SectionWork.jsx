import Paragraph from "../Paragraph"
import SecondTitle from "../SecondTitle"
import { ContainerSliderWork, ContainerWork, ContentSliderWork, ContentTextWork } from "./SectionWorkStyle"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const SectionWork = () => {

  const [sliderPerview, setSliderPerview] = useState(2)
  useEffect(() => {
    function handleResize() {
      window.innerWidth < 768
      ? setSliderPerview(1)
      : setSliderPerview(2)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return() => {
      window.removeEventListener('resize', handleResize)
    }
  },[])
  
  const data = [
    {id: '1', img: '/slider-work1.png' },
    {id: '2', img: '/slider-work2.png' },
    {id: '3', img: '/slider-work3.png' },
    {id: '4', img: '/slider-work4.png' },
    {id: '5', img: '/slider-work5.png' },
    {id: '6', img: '/slider-work6.png' },

  ] 

  return(
    <ContainerWork>
      <ContentTextWork>
        <SecondTitle textSecondTitle='What we love to do'/>
        <Paragraph textParagraph='We install unfinished and prefinished hardwoods, luxury vinyl Plank (LVP), luxury vinyl tile (LVT), laminate, and engineered floors. In addition, we refinish all types of hardwood floors. Our expert team is also specialized in installing and refinishing staircases.'/>
      </ContentTextWork>
      <ContainerSliderWork>
      <Swiper
        loop={true}
        slidesPerView={sliderPerview}
        pagination={true}
        centeredSlides={false}
        spaceBetween={10}
        autoplay={{
          delay: 3800,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination ]}
        className="mySwiper"
      >
      {data.map((slider) => (
        <SwiperSlide key={slider.id}>
          <ContentSliderWork>
            <img src={slider.img} alt="Image Banner Work" />
          </ContentSliderWork>
        </SwiperSlide>
      ))}
      </Swiper>
      </ContainerSliderWork>
    </ContainerWork>
  )
}


export default SectionWork