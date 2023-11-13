import React, { useRef, useState } from 'react';
import './globalStyles.css';
import './Contact.css'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState(false);
const [failureMessage, setFailureMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rkqrf1u', 'template_5ei94zn', form.current, 'Bjg4OY0cncPgthRpi')
        .then((result) => {
            console.log(result.text);
            form.current.reset();

            setSuccessMessage(true);
            setTimeout(() => {
                setSuccessMessage(false);
            }, 5000);

        }, (error) => {
            console.log(error.text);

            setFailureMessage(true);
            setTimeout(() => {
                setFailureMessage(false);
            }, 5000);
        });
  };

  return (
    <div className='contact-container' id='contact'>
        <h1>Contact Me</h1>
    
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="user_name" required/>

            <label>Your Email</label>
            <input type="email" name="user_email" required/>

            <label>A Message</label>
            <textarea name="message" required/>

            <input type="submit" value="Send" id='contact-send'/>
        </form>

        <div className={`popup ${successMessage ? 'show' : ''}`}>
            Thank you for your message! I'll try to get back to you within 48 hours. Have a great day!
        </div>
        <div className={`popup ${failureMessage ? 'show' : ''}`}>
            Something went wrong sending your e-mail. Please try again later.
        </div>
    </div>
  );
}

export default Contact;