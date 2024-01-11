import React, { useState } from 'react';
import styles from '../style';
import Button from './Button';

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission logic here
  };

  return (
    <section   id='contactUs'  className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col items-center justify-center text-white'>
        <h2 className={`${styles.heading2} text-2xl mb-4 text-center`}>Get Expert Help for Your Projects!</h2>
        <p className={`${styles.paragraph} max-w-[470px] text-center mb-6`}>
          Simplify your academic life with our specialized assistance for college projects. Achieve top grades and focus on what matters most to you.
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-md px-4">
          <input 
            type="text" 
            name="name" 
            placeholder="Enter your name..." 
            value={formData.name} 
            onChange={handleChange}
            className={`${styles.input} w-full p-3 mb-4 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            required
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Enter your email..." 
            value={formData.email} 
            onChange={handleChange}
            className={`${styles.input} w-full p-3 mb-4 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            required
          />
          <input 
            type="tel" 
            name="phone" 
            placeholder="Enter your phone number..." 
            value={formData.phone} 
            onChange={handleChange}
            className={`${styles.input} w-full p-3 mb-4 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            required
          />
          <textarea 
            name="message" 
            placeholder="Enter your message..." 
            value={formData.message} 
            onChange={handleChange}
            className={`${styles.input} w-full p-3 mb-4 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            rows="4"
            required
          />
          <Button type="submit" className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out py-2 px-6 rounded-md shadow-md">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CTA;
