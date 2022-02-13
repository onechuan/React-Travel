import React from "react"
import {Carousel as AntCarousel, Image} from "antd"
import styles from "./Carousel.module.css"

import carouselImage01 from "../../assets/images/carousel_1.jpg"
import carouselImage02 from "../../assets/images/carousel_2.jpg"
import carouselImage03 from "../../assets/images/carousel_3.jpg"

export const Carousel: React.FC = ()=>{
  return <AntCarousel autoplay className={styles.slider}>
    <Image src={carouselImage01}/>
    <Image src={carouselImage02}/>
    <Image src={carouselImage03}/>
  </AntCarousel>
}