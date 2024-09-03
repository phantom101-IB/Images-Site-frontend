import { FaFacebook, FaTwitter, FaLinkedin, FaGlobe } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";


const Footer = () => {
    return <footer className="footer">
        <div className="footer-div">
            <div className="contact-div">
                <h3>Contact Dev:</h3>
                <div className="contact-item-div">
                    <a href="" target="blank"><FaFacebook /></a>
                    <a href="" target="blank"><IoLogoWhatsapp /></a>
                    <a href="" target="blank"><BsTwitterX /></a>
                    <a href="https://github.com/phantom101-IB" target="blank"><FaGithub /></a>
                    <a href="www.linkedin.com/in/mohammed-ibrahim-00589b312" target="blank"><FaLinkedin /></a>
                    <a href="https://phantomportfolio.netlify.app/" target="blank"><FaGlobe /></a>
                </div>
            </div>
            <div className="copyright-div">
                <h3>{String.fromCodePoint(169)} Phantom@2024</h3>
            </div>
            <div></div>

        </div>
    </footer>
}

export default Footer