import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section  className={layout.section}>

      
       <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Expertise in Full-Stack Development <br className='sm:block hidden'/>for Your Projects.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Need help with full-stack projects? 
          Our team of experts specializes in both front-end and back-end development, providing comprehensive solutions tailored to your academic requirements. 
          From designing user interfaces to implementing server-side functionalities, we've got you covered.
        </p>
        {/* <Button styles='mt-10'/> */}
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
