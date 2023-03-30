import React from 'react'
import { Parallax } from 'react-parallax'
import { motion } from 'framer-motion'

import MMainForm from 'components/MainForm'
import imageAbout1 from 'assets/images-for-cubes/1.png'
import imageAbout2 from 'assets/images-for-cubes/2.png'
import imageAbout3 from 'assets/images-for-cubes/3.png'
import imageAbout4 from 'assets/images-for-cubes/4.png'
import imageAbout5 from 'assets/images-for-cubes/5.png'
import imageAbout6 from 'assets/images-for-cubes/6.png'
import imageAbout7 from 'assets/images-for-cubes/7.png'
import imageAbout8 from 'assets/images-for-cubes/8.png'
import bgImage from 'assets/images/about-bg.jpg'
import bgImage1 from 'assets/images/about-bg2.jpg'

import './styles.scss'
import SwiperCube from 'components/SwiperCube'
const arr1 = [
  { img: imageAbout1, id: 1 },
  { img: imageAbout2, id: 2 },
  { img: imageAbout3, id: 3 },
  { img: imageAbout4, id: 4 },
]
const arr2 = [
  { img: imageAbout5, id: 5 },
  { img: imageAbout6, id: 6 },
  { img: imageAbout7, id: 7 },
  { img: imageAbout8, id: 8 },
]

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
    x: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
}

const About = () => {
  return (
    <>
      <Parallax bgImage={bgImage} strength={300}>
        <motion.section
          initial='hidden'
          whileInView='visible'
          className='section-1-about'
        >
          <div className='container'>
            <div className='section-1-about'>
              <motion.h1 custom={1} variants={textAnimation}>
                About us
              </motion.h1>
            </div>
          </div>
        </motion.section>
      </Parallax>
      <section className='section-2-about '>
        <div className='container'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.2 }}
            className='about-facts'
          >
            <motion.div
              initial='hidden'
              whileInView='visible'
              custom={1}
              variants={textAnimation}
              viewport={{ amount: 0.2 }}
              className='about-facts__item about-facts__item-first'
            >
              <SwiperCube arr={arr1} />
              <motion.div
                initial='hidden'
                whileInView='visible'
                custom={1}
                viewport={{ amount: 0.2 }}
                variants={textAnimation}
                className='about-facts__text'
              >
                <h3>Fact №1</h3>
                <p>
                  Our business of individual transfer of tourists around the
                  island of Thailand is not only convenience and comfort for
                  clients, but also the opportunity to immerse yourself in the
                  local culture and enjoy an unforgettable travel experience. We
                  offer the ideal solution for those who want to avoid the
                  inconvenience of public transport and relax as much as
                  possible during their holidays.
                </p>
                <p>
                  Our services include not only transfers from the airport to
                  the hotel and back, but also excursions, trips around the
                  island, which allows tourists to get real pleasure from their
                  trip. In addition, providing car rental without a driver is
                  another convenient service that helps tourists explore the
                  island on their own and enjoy their trip.
                </p>
                <p>
                  The Fast Track service th offer is really invaluable for those
                  who appreciate and value their time and comfort. Passing
                  queues quickly at airports in Thailand and Russia is a
                  guaranteed way to save time and avoid the stress of long
                  queues.
                </p>
                <p>
                  Our business not only provides quality and convenient
                  services, but also creates unforgettable experiences for
                  tourists who will stay with them for a lifetime. Our
                  professional attitude to work and sincerity with which we
                  approach each client help to create the ideal atmosphere for
                  travel and recreation.
                </p>
                <p>
                  Everything that our company does for tourists on the island of
                  Thailand is not only unique, but also an unforgettable
                  experience for every tourist!
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              initial='hidden'
              whileInView='visible'
              custom={1}
              variants={textAnimation}
              viewport={{ amount: 0.2 }}
              className='about-facts__item about-facts__item-second'
            >
              <motion.div
                initial='hidden'
                whileInView='visible'
                custom={1}
                viewport={{ amount: 0.2 }}
                variants={textAnimation}
                className='about-facts__text'
              >
                <h3>Fact №2</h3>
                <p>
                  In addition to providing services for individual transfer of
                  tourists around the island of Thailand in minivans,
                  excursions, trips and renting minivans without a driver, we
                  also offer the opportunity to travel outside the island. This
                  means that our cars can be rented and used for trips
                  throughout the Thai territory.
                </p>
                <p>
                  Thanks to this, tourists can fully enjoy the beauty of the
                  island and the views, as well as discover secret corners that
                  are unknown to a wide range of people. With our cars you can
                  travel both independently and with a personal driver, which
                  gives you more freedom in choosing a route and travel time.
                </p>
                <p>
                  We guarantee that our cars are in excellent technical
                  condition and are regularly checked, which ensures safety and
                  comfort while traveling.
                </p>
                <p>
                  In addition, our experienced drivers have extensive experience
                  driving in Thailand, which ensures maximum safety and comfort
                  while traveling.
                </p>
                <p>
                  Thus, we offer a unique opportunity not only to enjoy the
                  beauty of the island, but also to see all that the Island has
                  to offer, thanks to the opportunity to travel with our cars
                  beyond its borders.
                </p>
                <p>
                  This is a great way to spend your vacation in Thailand with
                  maximum benefit and convenience for yourself and your
                  travelers.
                </p>
              </motion.div>
              <SwiperCube arr={arr2} />
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className='section-terms'>
        <div className='container'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.1 }}
            className='section-terms-content'
          >
            <motion.h2 custom={1} variants={textAnimation}>
              Terms and Conditions
            </motion.h2>
            <motion.div
              custom={2}
              variants={textAnimation}
              className='terms-block'
            >
              <h3>Documents</h3>
              <p>For foreign citizens</p>
              <ul className='ul'>
                <li>• national passport</li>
                <li>• driver's license</li>
                <li>• migration card or entry visa</li>
                <li>• registration (for CIS citizens).</li>
              </ul>
              <p>For citizens of Russia</p>
              <ul>
                <li>• general passport</li>
                <li>• driver's license</li>
              </ul>
            </motion.div>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ amount: 0.1 }}
              className='terms-goods'
            >
              <motion.div
                custom={1}
                variants={textAnimation}
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.7 }}
                className='terms-goods-item'
              >
                <h3>21</h3>
                <p>minimum age of renter</p>
              </motion.div>
              <motion.div
                custom={1}
                variants={textAnimation2}
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.7 }}
                className='terms-goods-item'
              >
                <h3>1</h3>
                <p>driving experience 1 year</p>
              </motion.div>
              <motion.div
                custom={1}
                variants={textAnimation}
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.7 }}
                className='terms-goods-item'
              >
                <h3>3</h3>
                <p>minimum rental period in hours</p>
              </motion.div>
              <motion.div
                custom={1}
                variants={textAnimation2}
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.7 }}
                className='terms-goods-item'
              >
                <h3>30</h3>
                <p>Minutes of bonus time</p>
              </motion.div>
              <motion.div
                custom={1}
                variants={textAnimation}
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.7 }}
                className='terms-goods-item'
              >
                <h3>∞</h3>
                <p>no mileage limit</p>
              </motion.div>
              <motion.div
                custom={1}
                variants={textAnimation2}
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.7 }}
                className='terms-goods-item'
              >
                <h3>11</h3>
                <p>vehicle capacity</p>
              </motion.div>
            </motion.div>

            <motion.div
              custom={1}
              variants={textAnimation}
              initial='hidden'
              whileInView='visible'
              viewport={{ amount: 0.1 }}
              className='terms-block'
            >
              <h3>Available payment options</h3>
              <ul className='ul'>
                <li>• national passport</li>
                <li>• driver's license</li>
                <li>• migration card or entry visa</li>
                <li>• registration (for CIS citizens).</li>
              </ul>
              <p>For citizens of Russia</p>
              <ul>
                <li>• general passport</li>
                <li>• driver's license</li>
                <li>• general passport</li>
                <li>• driver's license</li>
                <li>• driver's license</li>
              </ul>
              <p>
                It is paid by the client in cash in the amount of about 2 days
                (from 15,000 to 30,000 rubles), depending on the brand of the
                car.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Parallax
        bgImage={bgImage1}
        strength={300}
        bgImageStyle={{ left: '1000px' }}
      >
        <motion.section
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.3 }}
          className='book'
        >
          <div className='container'>
            <div className='book-content'>
              <motion.h2 custom={1} variants={textAnimation}>
                book a trip
              </motion.h2>
              <MMainForm buttonName={'Call Back Now'} />
            </div>
          </div>
        </motion.section>
      </Parallax>
    </>
  )
}

export default About
