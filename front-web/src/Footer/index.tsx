//Primeiro componente do site
import './styles.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg';
import { ReactComponent as LinkedInIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';
function  Footer(){
    return(
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/channel/UC3twHmWQwtqEO7u-gB_2f7g" target="_new">
                    <YouTubeIcon />
                </a>
                <a href="https://br.linkedin.com/in/cloves-jos%C3%A9-duarte-silva-18360918b/en-us" target="_new">
                    <LinkedInIcon />
                </a>
                <a href="https://www.instagram.com/clovesjds/" target="_new">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;