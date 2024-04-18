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
          trigger: '#container-servises',
          start: "300px bottom"
        }
      })
      .fromTo('#slider-instalation', {
          opacity: 0,
          x: -100,
        }, {
          opacity: 1,
          duration: 1.4,
          x: 0
        })
      .fromTo('#slider-finish', {
          opacity: 0,
          x: -100,
        }, {
          opacity: 1,
          duration: 1.4,
          x: 0
        })
      .fromTo('#slider-staircases', {
          opacity: 0,
          x: -100,
        }, {
          opacity: 1,
          duration: 1.4,
          x: 0
        })
        
    })
    return () => {
      gsap.killTweensOf("#container-servises")
    }
  },[])


  return(
    <ContentCardServices ref={el} id='container-servises'>
        <Installation id='slider-instalation'/>
        <Finish id='slider-finish'/>
        <Staircases id='slider-staircases'/>
    </ContentCardServices>
  )
}

export default CardServices