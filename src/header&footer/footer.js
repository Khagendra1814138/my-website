import './footer.css';
import Logo from './logo.png'
import {FaFacebookSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaYoutubeSquare} from 'react-icons/fa';

// import {IconContex} from 'react-icons';

export const Footer = () => {
    return (
      // <IconContex.Provider value={{ color:"aliceblue", size:"3em"}}>
        <div>
          <footer className="footerMainFrame">
            <logo className="logo2" > 
              <img src={Logo} alt="logo"/>
            </logo>
            <box id ="socialMediaLinks">

              <a href="https://www.youtube.com/c/jamesqquick" id="link">
                <FaFacebookSquare size="3em" color="lightblue"/>
              </a>

              <a href="https://www.youtube.com/c/jamesqquick" id="link">
                <FaTwitterSquare size="3em" color="lightblue"/>
              </a>

              <a href="https://www.youtube.com/c/jamesqquick" id="link">
                <FaInstagramSquare size="3em" color="lightblue"/>
              </a>
              
              <a href="https://www.youtube.com/c/jamesqquick" id="link">
                <FaYoutubeSquare size="3em" color="lightblue"/>
              </a>

            </box>
          </footer>
        </div>
      // </IconContex.Provider>
    );
  }