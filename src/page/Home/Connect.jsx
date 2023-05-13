import React, { useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Connect = () => {
  const formRef = useRef()
  const sendMail = (e) => {
    e.preventDefault()
    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formRef.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then(() => {
        e.target.reset()
        toast.success('Email has sent')
      }, () => {
        toast('something went wrong')
      });
  }

  return (




    <div className='md:w-1/2 w-4/5 mx-auto relative md:h-screen md:flex items-center'>
      <div className="md:absolute md:-left-1/4 font-semibold top-1/2 md:-translate-y-1/2 ">CONTACT</div>

      <div className='md:w-[400px] md:my-20 my-5 mx-auto  rounded-xl py-5 px-6 border-4 border-main'>
        <form ref={formRef} onSubmit={sendMail}>
          <div className='flex flex-col'>
            <input className='border-b-2  border-main  outline-none p-2 font-semibold' type="email" name='email' placeholder='enter your email' />
          </div>
          <div className='mt-4'>
            <textarea className=' w-full p-2 outline-none font-semibold' name="message" id="" rows="3" placeholder='write your text'></textarea>
          </div>
          <div className='w-fit ml-auto '>
            <button>
              <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="23.5" cy="23.5" r="23.5" fill='black' />
                <path d="M27 21.4L18.125 30.3C17.925 30.5 17.6874 30.6 17.412 30.6C17.1367 30.6 16.8994 30.5 16.7 30.3C16.5 30.1 16.4 29.8623 16.4 29.587C16.4 29.3117 16.5 29.0743 16.7 28.875L25.6 20H18C17.7167 20 17.479 19.904 17.287 19.712C17.095 19.52 16.9994 19.2827 17 19C17 18.7167 17.096 18.479 17.288 18.287C17.48 18.095 17.7174 17.9993 18 18H28C28.2834 18 28.521 18.096 28.713 18.288C28.905 18.48 29.0007 18.7173 29 19V29C29 29.2833 28.904 29.521 28.712 29.713C28.52 29.905 28.2827 30.0007 28 30C27.7167 30 27.479 29.904 27.287 29.712C27.095 29.52 26.9994 29.2827 27 29V21.4Z" fill="white" />
              </svg>
            </button>
          </div>
        </form>
      </div>

    </div>



  )
}

export default Connect