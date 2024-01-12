import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img
        src={icon}
        alt='icon'
        className='w-[50%] h-[50%] object-contain'
      />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
) 
const Business = () => {
  return (
    <section id='features' className={`${layout.section}`}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-center mb-8`}>
          Focus on your studies, <br className='sm:block hidden'/>we'll handle the projects.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mx-auto text-center mb-10`}>
          With our expert assistance, you can excel in your academic life by receiving tailored guidance, achieving top grades, and saving time. But with numerous assignments and deadlines to meet, let us simplify your journey to academic success.
        </p>
        <h6 className={`${styles.heading3} text-center mb-8`}>
          We also help for, 
        </h6>
        {/* New Section for Services */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
          {/* Presentation */}
          <div className="text-center p-6 rounded-[20px] bg-dimBlue feature-card">
            <h3 className="text-xl font-semibold mb-2 font-poppins text-white">Presentation</h3>
            <p className="text-sm text-gray-400">We help craft compelling presentations that captivate your audience.</p>
          </div>

          {/* Synopsis */}
          <div className="text-center p-6 rounded-[20px] bg-dimBlue feature-card ">
            <h3 className="text-xl font-semibold mb-2 font-poppins text-white">Synopsis</h3>
            <p className="text-sm text-gray-400">Craft concise and informative synopses that convey your research effectively.</p>
          </div>

          {/* Thesis */}
          <div className="text-center p-6 rounded-[20px] bg-dimBlue feature-card">
            <h3 className="text-xl font-semibold mb-2 font-poppins text-white">Thesis</h3>
            <p className="text-sm text-gray-400">Guidance and support for comprehensive and well-structured thesis writing.</p>
          </div>
        </div>
        {/* End of Services Section */}
        
      </div>
      <div className={`${layout.sectionImg} flex-col mt-12`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  );
};

export default Business;
