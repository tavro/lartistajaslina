import { FaFacebookSquare,FaInstagramSquare,FaLinkedin,FaWhatsappSquare,FaPhoneSquareAlt,FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <div className="Contact" id="contact">
        <h2>Contact</h2>
        <div className="icons">
          <span className="icon"><FaFacebookSquare size={32}/></span>
          <span className="icon"><FaInstagramSquare size={32}/></span>
          <span className="icon"><FaLinkedin size={32}/></span>
          <span className="icon"><FaWhatsappSquare size={32}/></span>
          <span className="icon"><FaPhoneSquareAlt size={32}/></span>
        </div>
    </div>
  );
}

export default Contact;
