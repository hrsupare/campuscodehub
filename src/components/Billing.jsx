import React from 'react'
import { apple, bill, google  , } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Comprehensive Solutions for Web & Mobile Applications.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Transform your ideas into reality with our expertise in developing web applications, 
          mobile applications, chatbots, full-fledged websites, landing pages, and more. 
          Our team ensures innovative, user-friendly, and scalable solutions tailored to your needs.
        </p> 
      </div>  
    </section>
  )
}

export default Billing
