import React, { useState } from 'react';
import styles from '../style';
import emailjs from 'emailjs-com';  

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [showMessage, setShowMessage] = useState(false);  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      client_name: formData.name,
      client_email: formData.email,
      client_mobile: formData.phone,
    };

    emailjs.send('service_28gq9jb', 'template_6bf0lq8', templateParams, 'U2A62rjn7shsWzRkP')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setShowMessage(true); 
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
  };

  return (
    <section id='contactUs' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col items-center justify-center text-white'>
        <h2 className={`${styles.heading2} text-2xl mb-4 text-center`}>Get Expert Help for Your Projects!</h2>
        <p className={`${styles.paragraph} max-w-[470px] text-center mb-6`}>
          Just send us your details, and our dedicated team will reach out to you shortly. Discuss your project ideas with our experts and navigate your academic journey with confidence.
        </p>
        {!showMessage ? (
          <form onSubmit={handleSubmit} className="w-full max-w-md px-4">
            <input
              type="text"
              name="name"
              placeholder="Enter your name..."
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mb-4 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email..."
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mb-4 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-500"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number..."
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 mb-4 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-500"
              required
            />
            <button type="submit" className="py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px]">
              Submit
            </button>
          </form>
        ) : (
          <p className="text-center text-gray-600 mb-4 py-2 px-4 bg-blue-gradient rounded-md shadow-md border border-green-500">
            <span className="text-lg font-semibold font-poppins mr-2">&#x2714;</span>
            We will get back to you soon!
          </p>

        )}
      </div>
    </section>
  );
};

export default CTA;
