import React from 'react';
import './Footer.css';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';


function Footer() {
  return (
    <footer className="footerPage">
        <hr/>
        <div className='contactInfos'>
          <span className="contactIcon">
              <PhoneInTalkIcon/> 
              <p className="contactInfo">09771025244</p>
              </span>
           
          <span className="contactIcon">
              <EmailIcon/>
               <p className="contactInfo">ichigo13.rm@gmail.com</p>
               </span>
             
          <span className="contactIcon">
              <LocationOnIcon/>
              <p className="contactInfo">Lipa,Batangas</p>
              </span></div>

    </footer>
  )
}

export default Footer
