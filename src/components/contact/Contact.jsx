import React from 'react'
import './Contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

function Contact(props) {
 const form = useRef();
 
 const sendEmail = (e) => {
   props.showAlert("Message Sent Successfully","success")
  e.preventDefault();

  emailjs.sendForm('service_goonqvw', 'template_adnhlow', form.current, 'zUs7t2tu4WSeBjiO8')
    e.target.reset()
    console.log("Message sent")

};


  return (
   <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
            <MdOutlineMail  className='contact__icon'/>
            <h4>Email</h4>
            <h5>rcoder00@gmail.com</h5>
            <a href="mailto:rishabhpratap008@gmail.com" target="_blank">Send a Message</a>
            </article>

            <article className="contact__option">
            <RiMessengerLine  className='contact__icon'/>
            <h4>Messanger</h4>
            <h5>Rishabh Pratap</h5>
            <a href="https://www.messenger.com/t/100027182889191/" target="_blank">Send a Message</a>
            </article>

            <article className="contact__option">
            <BsWhatsapp className='contact__icon'/>
            <h4>Whatsapp</h4>
            <h5>+91-7542-003-073</h5>
            <a href="https://api.whatsapp.com/send?phone=+917542003073" target="_blank">Send a Message</a>
            </article>
        </div>

        <form ref ={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Enter Your Email' required />
          <textarea name="message" placeholder='Your Messege' rows="7"></textarea>
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
    </div>
   </section>
  )
}

export default Contact
