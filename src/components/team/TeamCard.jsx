import React from "react"
import { team } from "../../dummydata"

const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <div className='items shadow'>
          <div className='img'>
            <img src={val.cover} alt='' />
            <div className='overlay'>
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
            </div>
          </div>
          <div className='details'>
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default TeamCard
