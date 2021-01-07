import './styles.css';
import { ReactComponent as InstagramLogo} from '../../assets/Instagram.svg';
import { ReactComponent as LinkedinLogo} from '../../assets/Linkedin.svg';
import { ReactComponent as YoutubeLogo } from '../../assets/youtube.svg';


const Footer = () => {
    return(
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="#" target="_new">
                    <InstagramLogo />
                </a>
                <a href="#" target="_new">
                    <LinkedinLogo />
                </a>
                <a href="#" target="_new">
                    <YoutubeLogo />
                </a>
            </div>
        </footer>
    );
}

export default Footer; 