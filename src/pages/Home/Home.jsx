import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import { Parallax } from 'react-parallax'
import { motion } from 'framer-motion'

import { MMainForm } from 'components/MainForm'

import image from 'assets/images/image.jpg'
import bgImage from 'assets/images/bg.jpg'

import 'swiper/css'
import 'swiper/css/pagination'
import './styles.scss'

const Home = () => {
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  }
  const textAnimation2 = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  }

  return (
    <>
      <Parallax bgImage={bgImage} strength={500} bgImageStyle={{ left: '700px', top: '-100px' }}>
        <motion.section initial='hidden' whileInView='visible' className='section-1'>
          <div className='container'>
            <div className='section-1-content'>
              <motion.h1 custom={1} variants={textAnimation}>
                PRESIDENt CAR
              </motion.h1>
              <motion.p custom={2} variants={textAnimation}>
                Our business of individual transfer of tourists around the island of Thailand is not only convenience
                and comfort for customers, but also the opportunity to immerse yourself in the local culture and enjoy
                an unforgettable travel experience. We offer the ideal solution for those who want to avoid the
                inconvenience of public transport and relax as much as possible during their holidays.
              </motion.p>
            </div>
            <div className='main-form _form'>
              <motion.p custom={3} variants={textAnimation}>
                Call Back
              </motion.p>
              <MMainForm custom={4} variants={textAnimation} buttonName={'Call Back Now'} />
            </div>
          </div>
        </motion.section>
      </Parallax>
      <motion.section
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.2, once: true }}
        className='section-2'
      >
        <div className='container'>
          <div className='section-2-content'>
            <motion.h2 custom={1} variants={textAnimation2}>
              impressions of our clients
            </motion.h2>
            <motion.div custom={2} variants={textAnimation2} className='images-block'>
              <Swiper
                className='swiper-container'
                slidesPerView={1}
                speed={2000}
                loop={true}
                pagination={true}
                autoplay={{ delay: 3000 }}
                modules={[Autoplay, Pagination]}
                breakpoints={{
                  // when window width is >= 640px
                  488: {
                    width: 488,
                    slidesPerView: 1,
                  },
                  640: {
                    width: 640,
                    slidesPerView: 1,
                  },
                  // when window width is >= 768px
                  768: {
                    width: 768,
                    slidesPerView: 2,
                  },
                }}
              >
                <SwiperSlide>
                  <img src={image} alt='image' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image} alt='image' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image} alt='image' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image} alt='image' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image} alt='image' />
                </SwiperSlide>
              </Swiper>
            </motion.div>
          </div>
          <MMainForm custom={3} variants={textAnimation2} buttonName={'Join Us'} />
        </div>
      </motion.section>
      <Parallax bgImage={bgImage} strength={300} bgClassName='bgImage'>
        <motion.section
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.4, once: true }}
          className='section-1'
        >
          <div className='container'>
            <div className='section-1-content'>
              <motion.h1 custom={1} variants={textAnimation2}>
                successful choose us
              </motion.h1>
              <motion.p custom={2} variants={textAnimation2}>
                Become successful with us and our supporters!
              </motion.p>
            </div>
            <motion.div custom={3} variants={textAnimation2} className='main-form _form'>
              <motion.p custom={4} variants={textAnimation2}>
                Call Back
              </motion.p>
              <MMainForm custom={5} variants={textAnimation2} buttonName={'Call Back Now'} />
            </motion.div>
          </div>
        </motion.section>
      </Parallax>
    </>
  )
}

export default Home
