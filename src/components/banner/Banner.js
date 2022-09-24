import './Banner.css'
import React, {useState} from 'react'
import dataSlider from './dataSlider'
import BtnSlider from './BtnBanner'



const Banner = () => {

    const [bannerIndex, setBannerIndex] = useState(1)

    const nextBanner = () => {
        if(bannerIndex !== dataSlider.length){
        setBannerIndex(bannerIndex + 1)
        }
        else if(bannerIndex === dataSlider.length){
            setBannerIndex(1)
        }
    }
    const prevBanner = () => {
        
    }
    
    
  return (
    <div className='banner_container'>
        {dataSlider.map((obj, index) => {
            return (
                <div>
                    key = {obj.id}
                    <img className={bannerIndex === index + 1 ? 'slide-active-anim' : "banner"} src={process.env.PUBLIC_URL + `/imgs/img${index + 1}.webp`} />
                </div>
            )
        })}
        <BtnSlider moveSlide= {nextBanner} direction = {"next"}/>
        <BtnSlider moveSlide= {prevBanner} direction = {"prev"}/>
    </div>
  )
}

export default Banner

