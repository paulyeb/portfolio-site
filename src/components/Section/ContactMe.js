import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SuccessModal from '../Modals/SuccessModal';
import ErrorModal from '../Modals/ErrorModal';

export default () => {
    const form = useRef();
    const [success, setSuccess] = useState(false);
    const [errorState, setError] = useState(false);

    const secret_key = process.env.REACT_APP_SECRET_KEY;
    const service_id = process.env.REACT_APP_SERVICE_ID; 
    const  template_id = process.env.REACT_APP_TEMPLATE_ID;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                service_id, 
                template_id, 
                form.current, 
                secret_key
            )
            .then((result) => {
                e.target.reset();
                {result && setSuccess(true)}  
            }, (error) => {
                setError(true)
            });
    };

  return (
    <div className="flex lg:flex-row justify-center flex-cols items-center px-4" id="contact_me">
        <form onSubmit={sendEmail} ref={form}>
            <p className="text-center text-2xl font-bold underline p-2 mt-5 ">Want to get in touch? Leave a message</p>
            <div className="">
                <label className="block text-center text-xl font-medium p-2">Name</label>
                <input 
                    className="border border-gray-600 text-center w-full p-4 rounded-full text-lg" 
                    type="text" 
                    name="name" 
                    id="name" 
                    required
                    placeholder="Please enter your name" 
                />
            </div>
            <div className="">
                <label className="block text-center text-xl font-medium p-2">Email</label>
                <input 
                    className="border border-gray-600 text-center w-full p-4 rounded-full text-lg" 
                    type="email" 
                    name="email" 
                    id="email" 
                    required
                    placeholder="Please enter your email" 
                />
            </div>
           <div className="mt-8">
                <label className="block text-center text-xl font-medium p-2">Message</label>
                <textarea 
                    name="message" 
                    className="w-full border border-gray-600 text-center p-4 text-xl rounded-xl" 
                    id="message" 
                    cols="30" 
                    rows="7" 
                    required
                    placeholder="Type your message here"
                />
           </div>
            <button type='submit' className="w-full border p-3 my-5 rounded-full hover:bg-gray-800 hover:text-gray-300 font-medium text-lg bg-gray-700 text-gray-100">Send</button>
        </form>
        {success ? <SuccessModal dismiss={() => setSuccess(false)} /> : errorState ? <ErrorModal dismiss={() => setError(false)} /> : null}
    </div>
  );
};