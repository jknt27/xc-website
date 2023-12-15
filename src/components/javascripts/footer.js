import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Footer() {
  return (
    <footer className="bg-slate-600 p-6 text-white footer" >
      <div className="text-center">
        <div className='mb-2'>
        <h3 className="text-lg font-bold mb-2">Visit Us</h3>
        <p><a href='https://www.google.com/maps/dir//10243+12th+Ave+S,+Burien,+WA+98168/@47.5108742,-122.3210801,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x549043caf9e88991:0x3c73a415c494dd48!2m2!1d-122.3185052!2d47.5108742!3e0?entry=ttu'>10243 12th Ave S, Seattle, WA 98168</a></p>
        </div>
        <div className='mb-2'>
          <h3 className='text-lg font-bold mb-2'>Connect With Us</h3>
          <a href='https://www.facebook.com/Xaviecan'><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
          <a href='https://www.instagram.com/tnttxaviecan/' className='mr-5 ml-5'><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
          <a href='http://www.youtube.com/@xaviecan'><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
        </div>
        <p>&copy; 2023 Xavie Can. All rights reserved.</p>
      </div>
    </footer>
  );
}