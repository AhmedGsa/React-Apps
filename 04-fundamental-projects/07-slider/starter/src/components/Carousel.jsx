import React from 'react'
import { shortList, list, longList } from '../data'
import { useState } from 'react'
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from 'react-icons/md'
import Slide from './Slide'

const Carousel = () => {
    const [slides, setSlides] = useState(list)
    const [currentSlide, setCurrentSlide] = useState(0)
    const perviousSlide = () => {
        let newSlide = currentSlide-1;
        if(newSlide===-1) {
            newSlide = list.length-1
        } 
        setCurrentSlide(newSlide)
    }
    const nextSlide = () => {
        let newSlide = currentSlide+1;
        if(newSlide===list.length) {
            newSlide = 0;
        } 
        setCurrentSlide(newSlide)
    }
  return (
    <div className='slider-container'>
        {slides.map((slide) => <Slide key={slide.id} person={slide} currentSlide={currentSlide} />)}
        {/* <Slide person={list[0]} /> */}
        <MdOutlineKeyboardArrowLeft className='prev' onClick={perviousSlide} />
        <MdOutlineKeyboardArrowRight className='next' onClick={nextSlide} />
    </div>
  )
}

export default Carousel