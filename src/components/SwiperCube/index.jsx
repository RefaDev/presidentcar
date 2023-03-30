import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-cube'
// import required modules
import { EffectCube, Autoplay } from 'swiper'

const SwiperCube = ({ arr }) => {
  return (
    <>
      <Swiper
        modules={[EffectCube, Autoplay]}
        autoplay={{
          delay: 3000,
        }}
        effect='cube'
        className='mySwiper'
        loop={true}
        speed={2000}
      >
        {arr.map((el) => (
          <SwiperSlide className='mySwiperSlide' id={el.id}>
            <img src={el.img} alt='image' />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default SwiperCube
