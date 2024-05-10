// import '../styles/Contact.css';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => {
  toast.success(' Message sent successfully!✌🏻', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
};

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_kxnc2s9', 'contact_form', form.current, {
        publicKey: 'tkX8DGWQM4n_lp3aP',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contact'>
      <section className="contact-box">

        <h2 className="h1-responsive font-weight-bold text-center" id='contact-me'>Contact Me :) </h2>

        <p className="text-center w-responsive mx-auto mb-5" id='contact-text'>Do you have any questions? Please do not hesitate to contact me directly. I'd love to hear from you! I will respond within 3 business days.</p>

        <div className="row" id='form-section'>
          <div className="col-md-9 mb-md-0 mb-5">
            <form ref={form} onSubmit={sendEmail} id="contact-form" name="contact-form" action="mail.php" method="POST">
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text" id="name" name="name" className="form-control"></input>
                    <label className="">Your name</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text" id="email" name="email" className="form-control"></input>
                    <label className="">Your email</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input type="text" id="subject" name="subject" className="form-control"></input>
                    <label className="">Subject</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea type="text" id="message" name="message" rows="1" className="form-control md-textarea"></textarea>
                    <label >Your message</label>
                  </div>
                </div>
              </div>


              <div className="text-center text-md-left">
                <button className="btn btn-primary" type="submit" value="Send" onClick={notify}>Send</button>


              </div>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}