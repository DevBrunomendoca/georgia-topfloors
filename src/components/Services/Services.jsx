import { useLayoutEffect, useRef } from "react"
import CardServices from "./CardServices"
import { ContainerServices, ContentServices } from "./ServicesStyle"

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Services = () => {

  const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: '#container-services',
          start: "300px bottom"
        }
      })
      .fromTo('#card-one', {
          opacity: 0,
          x: -100,
        }, {
          opacity: 1,
          duration: 1.4,
          x: 0
        })
      .fromTo('#card-two', {
          opacity: 0,
          x: -100,
        }, {
          opacity: 1,
          duration: 1.4,
          x: 0
        })
      .fromTo('#card-three', {
          opacity: 0,
          x: -100,
        }, {
          opacity: 1,
          duration: 1.4,
          x: 0
        })
        
    })
    return () => {
      gsap.killTweensOf("#container-services")
    }
  },[])

  return(
    <ContainerServices>
      <ContentServices id="container-services" ref={el}>
        <CardServices
          id='card-one'
          titleCard='Installation'
          imgCard='/banner-services1.png'
        />
        <CardServices
          id='card-two'
          titleCard='Sand and Finish'
          imgCard='/banner-services2.png'
        />
        <CardServices
          id='card-three'
          titleCard='Staircases'
          imgCard='/banner-services3.png'
        />

      </ContentServices>
    </ContainerServices>
  )
}

export default Services