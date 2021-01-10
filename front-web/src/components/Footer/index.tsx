import { ReactComponent as InstagramLogo} from '../../assets/Instagram.svg';
import { ReactComponent as LinkedinLogo} from '../../assets/Linkedin.svg';
import { ReactComponent as YoutubeLogo } from '../../assets/youtube.svg';
import './styles.css';


const Footer = () => {
    return(
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.instagram.com/devmicaelyg" target="_new">
                    <InstagramLogo />
                </a>
                <a href="https://www.linkedin.com/in/micaely-gusm%C3%A3o-23b8641b0/" target="_new">
                    <LinkedinLogo />
                </a>
                <a href="https://www.youtube.com" target="_new">
                    <YoutubeLogo />
                </a>
            </div>
        </footer>
    );
}

export default Footer; 