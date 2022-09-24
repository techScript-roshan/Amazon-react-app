import './BtnBanner.css'
import React from 'react'
import leftArrow from './Icons/left_arrow.svg'
import rightArrow from './Icons/right_arrow.svg'

const BtnBanner = (direction, moveSlide) => {

    return (
        <button onClick={moveSlide} className={direction === 'next' ? 'btn-slide next' : "btn-slide-prev"} >

            <img className='right_btn' src={direction === 'next' ? rightArrow : leftArrow} />
        </button>

    )
}

export default BtnBanner