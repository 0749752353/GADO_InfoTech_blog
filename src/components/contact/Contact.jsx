import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
 const map = "https://www.google.com/maps?q=Tambukareli,+Dodoma,+Tanzania&output=embed";

  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe
            src={map}
            title="GADO InfoTech Location Map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Medeli, Tambukareli, DODOMA - TANZANIA</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> edgarnyambo2@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> + 25574 9752 353</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>
               <a
    href="https://www.facebook.com/edgarnyamboinstagram"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <i className="fab fa-facebook-f icon"></i>
  </a>

  <a
    href="https://www.instagram.com/mr.epo_official"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <i className="fab fa-instagram icon"></i>
  </a>

  <a
    href="https://wa.me/255749752353"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
  >
    <i className="fab fa-whatsapp icon"></i>
  </a>

  <a
    href="mailto:edgarnyambo2@gmail.com"
    aria-label="Email"
  >
    <i className="fa fa-envelope icon"></i>
  </a>
            </span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
