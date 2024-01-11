import React, { useState } from 'react';
import { projects } from '../constants';
import styles from '../style';
import ProjectsCard from './ProjectsCard'; 

const OurProjects = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowPreview(true);
  };

  const closePreview = () => {
    setShowPreview(false);
  };

  return (
    <section id='product' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40' />
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={styles.heading2}>Our Featured Projects</h2>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Discover some of our recent projects showcasing innovation, creativity, and quality.
          </p>
        </div>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center w-full project-container relative z-[1]'>
        {projects.map((project) => (
          <div key={project.id} className='mb-8 md:mb-0 md:mr-8'>
            <ProjectsCard {...project} onImageClick={handleImageClick} />
          </div>
        ))}
      </div>
      {showPreview && <ImagePreview imageSrc={selectedImage} onClose={closePreview} />}
    </section>
  );
}; 

const ImagePreview = ({ imageSrc, onClose }) => {
  const handleClickOutside = (e) => {
    // Close the image preview if clicked outside the image
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleClickOutside}>
      <div className="relative">
        <button 
          className="absolute top-4 right-4 text-white bg-red-500 rounded-full p-2 hover:bg-red-600 transition duration-300"
          onClick={onClose}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
        <img src={imageSrc} alt="Preview" className="max-w-full max-h-full" />
      </div>
    </div>
  );
};
 

export default OurProjects;
