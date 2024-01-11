import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const ProjectsCard = ({ content, name, title, img, onImageClick }) => {
  return (
    <div className='flex flex-col p-3 bg-gradient-to-br from-stone-800 via-stone-900 to-slate-800 rounded-lg shadow-md hover:shadow-lg dark:bg-gray-900 dark:border-gray-800 w-full md:w-72 h-[420px] md:h-[400px] overflow-hidden transition duration-300 ease-in-out transform hover:scale-105'>
      <div className='relative h-[200px] md:h-[180px]'>
        <img
          src={img}
          alt={name}
          className='w-full h-full object-cover rounded-t-lg cursor-pointer'
          onClick={() => onImageClick(img)} // Open full-screen preview on image click
        />
        <button 
          className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition duration-300"
          onClick={(e) => {
            e.stopPropagation(); // Prevent image click event from triggering
            onImageClick(img); // Open full-screen preview on button click
          }}
        >
          <FontAwesomeIcon icon={faEye} /> {/* FontAwesome Eye icon */}
        </button>
      </div>
      <div className='p-3'>
        <p className='font-poppins font-normal text-sm text-white'>
          {content}
        </p>
      </div>
      <div className='flex items-center p-5 border-t border-gray-500 dark:border-gray-800'>
        <img
          src={img}
          alt={name}
          className='w-12 h-12 rounded-full shadow-md'
        />
        <div className='flex flex-col ml-4'>
          <h4 className='font-poppins font-semibold text-lg text-white mb-1'>{name}</h4>
          <p className='font-poppins font-normal text-sm text-gray-400 dark:text-gray-300'>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
