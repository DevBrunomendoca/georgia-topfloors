import Paragraph from "../../components/Paragraph";
import SecondTitle from "../../components/SecondTitle";
import ThirdTitle from "../../components/ThirdTitle";
import Title from "../../components/Title";
import { ContainerAddress, ContainerContactUs, ContainerLocation, ContentBannerAddress, ContentTextAddress } from "./ContactUsStyle";

import { useLayoutEffect, useRef } from "react";

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ContactUs = () => {

  const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: '#container-contact',
          start: "300px bottom"
        }
      })
      .fromTo('#title-contact', {
          opacity: 0,
          y: 160,
        }, {
          opacity: 1,
          duration: 1.4,
          y: 0
        })
      .fromTo('#container-address', {
          opacity: 0,
          y: 80,
        }, {
          opacity: 1,
          duration: 1.4,
          y: 0
        })
        
    })
    return () => {
      gsap.killTweensOf("#container-contact")
    }
  },[])

  return (
    <ContainerContactUs id="container-contact" ref={el}>
      <Title id='title-contact' textTitle='Contact Us'/>
      <ContainerAddress id="container-address">
        <ContentTextAddress>
          <div>
            <ThirdTitle textThirdTitle='Address'/>
            <Paragraph textParagraph='1710 Cumberland Point Dr Suite 15, Marietta, GA 30067, Estados Unidos'/>
          </div>
          <div>
            <ThirdTitle textThirdTitle='Hours'/>
            <Paragraph textParagraph='Monday to Friday  7 AM–4 PM'/>
            <Paragraph textParagraph='Saturday 7 AM–12 PM'/>
            <Paragraph textParagraph='Sunday  Closed'/>
          </div>
        </ContentTextAddress>
        <ContentBannerAddress>
        </ContentBannerAddress>
      </ContainerAddress>
      <ContainerLocation>
        <SecondTitle textSecondTitle='Where we are located'/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13244.734733609594!2d-84.4918445!3d33.9106718!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f513b0f89fd1bd%3A0x2271ab2949daa697!2sGeorgia%20Top%20Floors!5e0!3m2!1spt-BR!2sbr!4v1712850756059!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </ContainerLocation>
    </ContainerContactUs>
  );
};

export default ContactUs