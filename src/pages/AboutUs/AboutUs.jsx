import Paragraph from "../../components/Paragraph";
import ThirdTitle from "../../components/ThirdTitle";
import Title from "../../components/Title";

import { ContainerAboutUs, ContentSliderAbout, ContentTextAbout } from "./AboutUsStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ContainerTeam, ContentTeam } from "./TeamStyle";
import SecondTitle from "../../components/SecondTitle";
import Team from "./Team";
import { useEffect, useState } from "react";

const AboutUs = () => {

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

  const sliderAbout = [
    { id: "1", imgSlider: "/vite-react-router/banner-about-us1.png" },
    { id: "2", imgSlider: "/vite-react-router/banner-about-us2.png" },
    { id: "3", imgSlider: "/vite-react-router/banner-about-us3.png" },
    { id: "4", imgSlider: "/vite-react-router/banner-about-us4.png" },
  ];

  return (
    <ContainerAboutUs>
      <Title textTitle="Our Story" />
      <ContentTextAbout>
        <ThirdTitle textThirdTitle="Georgia Top Floors started off with one man" />
        <Paragraph textParagraph="Cristiano Santos officially began the company in 2012. Originally from Brazil, he came to the US with very few possessions but a lot of determination. He worked as an apprentice for another company where he learned everything he needed to know to eventually branch out and begin his own company. He originally started the company in 2010 under a different name but it wasn’t until 2012 that the name Georgia Top Floors was born. The company is now made up of several teams of expert installers and craftsmen who refinish and take care of a wide range of flooring needs. We specialize in hardwood floor installation, laminate, LVP, and LVT as well as refinishing solid hardwoods. Our service area is Metro Atlanta and All of North Georgia. Get in touch with us and we will be happy to guide you through your flooring project" />
      </ContentTextAbout>
      <ContentSliderAbout>
        <Swiper
        loop={true}
        slidesPerView={sliderPerview}
        centeredSlides={false}
        spaceBetween={10}
        autoplay={{
          delay: 3800,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        >
          {sliderAbout.map((slider) => (
            <SwiperSlide key={slider.id}>
              <img src={slider.imgSlider} alt="Slide About Us" />
            </SwiperSlide>
          ))}
        </Swiper>
      </ContentSliderAbout>
      <ContainerTeam>
        <SecondTitle textSecondTitle='Meet The Team'/> 
        <ContentTeam>
        <Team 
          profile='/vite-react-router/profile1.png'
          name='Cristiano Santos'
          description='Chief Executive Officer'
        />
        <Team 
          profile='/vite-react-router/profile2.png'
          name='Alicia Santos'
          description='Chief Operating Officer'
        />
        <Team 
          profile='/vite-react-router/profile3.png'
          name='Andre Dias'
          description='Director of Operations'
        />
        <Team 
          profile='/vite-react-router/profile4.png'
          name='Isaque William'
          description='Team Leader'
        />
        <Team 
          profile='/vite-react-router/profile5.png'
          name='Carlos Costa'
          description='Team Leader'
        />
        <Team 
          profile='/vite-react-router/profile6.png'
          name='Camilla Vieira'
          description='Executive Secretary'
        />
        </ContentTeam>
      </ContainerTeam>
    </ContainerAboutUs>
  );
};

export default AboutUs;
