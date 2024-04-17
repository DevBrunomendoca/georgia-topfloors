import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Button from "../Button";
import ButtonRout from "../ButtonRout";
import Title from "../Title";
import { ContainerHome, ContentHome } from "./HomeStyle";

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Home = () => {

  const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: '#ontainer-home',
          start: "300px bottom"
        }
      })
      .fromTo('#sub-title', {
          opacity: 0,
          y: 160,
        }, {
          opacity: 1,
          duration: 1.4,
          y: 0
        })
      .fromTo('#title-home', {
          opacity: 0,
          y: 80,
        }, {
          opacity: 1,
          duration: 1.4,
          y: 0
        })
      .fromTo('#button-route-home', {
          opacity: 0,
          y: 80,
        }, {
          opacity: 1,
          duration: 1,
          y: 0
        })
        
    })
    return () => {
      gsap.killTweensOf("#ontainer-home")
    }
  },[])

  const [bannerMobile, setbannerMobile] = useState(false)

  useEffect(() => {
    function handleResize() {
      window.innerWidth < 480
      ? setbannerMobile(true)
      : setbannerMobile(false)
    }
    handleResize()
    window.addEventListener('resize' , handleResize)
    return() => {
      window.removeEventListener('resize' , handleResize)
    }
  }, [])

  return (
    <ContainerHome id="container-home" ref={el} bannerMobile={bannerMobile}>
      <ContentHome  >
        <h3 id="sub-title">Welcome Georgia Top Floors</h3>
        <Title id={"title-home"} textTitle="Dream it up and we will make it a reality!" />
        <ButtonRout id='button-route-home' textButton='Contact Us' link='/contact'/>
      </ContentHome>
    </ContainerHome>
  );
};

export default Home;
