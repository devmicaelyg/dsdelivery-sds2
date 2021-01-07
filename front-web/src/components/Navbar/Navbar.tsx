import { isExportDeclaration } from "typescript";

import { ReactComponent as Logo } from '../../assets/logo.svg';
import './styles.css';

const Navbar = () => {
     return(
        <nav className="main-navbar">
            <Logo className="navbar-logo"/>
            <a href="#" className="navbar-text">DS Delivery</a>
        </nav>
     );
}

export default Navbar;