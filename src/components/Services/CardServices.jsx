import ThirdTitle from "../ThirdTitle"
import { ContentCardServices } from "./CardServicesStyle"
import Finish from "./Finish"
import Installation from "./Installation"
import Staircases from "./Staircases"

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { useLayoutEffect, useRef } from "react"

const CardServices = ({id,titleCard, imgCard}) => {

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
    <ContentCardServices ref={el} id={id}>
        <Installation />
        <Finish />
        <Staircases />
    </ContentCardServices>
  )
}

export default CardServices