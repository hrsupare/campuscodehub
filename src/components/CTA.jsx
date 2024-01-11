import React from 'react';
import styles from '../style';
import Button from './Button';

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Get Expert Help for Your Projects!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Simplify your academic life with our specialized assistance for college projects. Achieve top grades and focus on what matters most to you.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button/>
      </div>
    </section>
  );
};

export default CTA;
