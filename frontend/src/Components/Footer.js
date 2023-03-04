

import github from './icons/github.svg'
import whatsapp from './icons/whatsapp.svg'
import linkedin from './icons/linkedin.svg'


const Footer = () => {

    return (
        <footer className="footer">
            <div className="contato-div">
                <ul>
                    <li>
                        <strong>Made By:</strong> Gefferson T. Souza
                    </li>
                    <li>
                        <strong>
                            Contato:<a href="tel:62994357455">+55 (62) 994357455 </a>
                        </strong>
                    </li>
                </ul>
            </div>
            <div className="social-div">
                <ul className='footer-list'>
                    <li>
                        <a href='https://github.com/Gefferson-Souza/Gefferson-Portifolio' target="_blank" rel="noopener noreferrer"><span><img width='20' alt="icon" src={github} /> Github</span></a> 
                    </li>
                    <li>
                        <a href='#' target="_blank" rel="noopener noreferrer"><span><img width='20' alt="icon" src={linkedin} /> Linkedin</span></a> 
                    </li>
                    <li>
                        <a href='https://wa.me/5562994357455' target="_blank" rel="noopener noreferrer"><span><img width='20' alt="icon" src={whatsapp} /> Whatsapp</span></a> 
                    </li>
                </ul>             
            </div>
        </footer>
    )
}

export default Footer;