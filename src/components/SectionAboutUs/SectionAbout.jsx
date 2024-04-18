import ButtonRout from "../ButtonRout"
import Paragraph from "../Paragraph"
import SecondTitle from "../SecondTitle"
import { ContainerAbout, ContentAbout } from "./SectionAboutStyle"

import { useEffect, useLayoutEffect, useRef, useState } from "react"

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const SectionAbout = () => {
  const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: '#container-aboutus',
          start: "450px bottom"
        }
      })
      .fromTo('#content-aboutus', {
          opacity: 0,
          y: 160,
        }, {
          opacity: 1,
          duration: 1.6,
          y: 0
        })
    })
    return () => {
      gsap.killTweensOf("#container-aboutus")
    }
  },[])

  const [bannerMobile, setBannerMobile] = useState(false)

  useEffect(() => {
    function handleResize() {
      window.innerWidth < 768
      ? setBannerMobile(true)
      : setBannerMobile(false)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    
    return() => {
      window.removeEventListener('resize', handleResize)
    }
  })


  return(
    <ContainerAbout bannerMobile={bannerMobile} id="container-aboutus" ref={el}>
      <ContentAbout id="content-aboutus">
      <SecondTitle textSecondTitle='About Us'/>
      <Paragraph textParagraph='Georgia Top Floors is a Family owned business, that truly values our clients and our crews. They really are the company and we take pride in taking care of their needs. '/>
      <ButtonRout textButton='Learn More' link='/about'/>
      </ContentAbout>
    </ContainerAbout>
  )
}

export default SectionAbout