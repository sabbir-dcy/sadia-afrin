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

      <div className=' md:my-20 my-5 mx-auto rounded-xl py-5 '>

        <form ref={formRef} onSubmit={sendMail} className='space-y-6'>

          {/* grid start */}
          <div className='grid md:grid-cols-2 gap-x-10 gap-y-6'>

            <div className='flex flex-col gap-y-2'>
              <label htmlFor="name" className='font-medium text-lg'>Your name</label>
              <input type="text" name='name' placeholder='John Doe' className='font-medium bg-neutral-50 outline-none h-9 p-4 rounded' required />
            </div>

            <div className='flex flex-col gap-y-2'>
              <label htmlFor="email" className='font-medium text-lg'>Your email</label>
              <input type="email" name='email' placeholder='johndoe@gmail.com' className='font-medium bg-neutral-50 outline-none h-9 rounded p-4' required />
            </div>

            <div className='flex flex-col gap-y-2'>
              <label htmlFor="subject" className='font-medium text-lg'>Subject</label>
              <input type="text" name='subject' placeholder='fulltime job' className='font-medium bg-neutral-50 outline-none h-9 rounded p-4' required />
            </div>
          </div>

          {/* grid end */}

          <div className='flex flex-col gap-y-2'>
            <label htmlFor="message" className='font-medium text-lg'>Message</label>
            <textarea className='bg-neutral-50 w-full outline-none font-medium p-4 rounded' name="message" id="" rows="3" placeholder='you can write something briefly' required></textarea>
          </div>

          <input type="submit" value="send" className='bg-main px-7 py-1 rounded-md text-white font-medium text-lg cursor-pointer hover:bg-purple-500 transition-colors' />

        </form>
      </div>

    </div>



  )
}

export default Connect