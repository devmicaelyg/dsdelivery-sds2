import { Link } from "react-router-dom";
import { isExportDeclaration } from "typescript";

import { ReactComponent as Logo } from '../../assets/logo2.svg';
import './styles.css';

const Navbar = () => {
     return(
        <nav className="main-navbar">
            <Logo className="navbar-logo"/>
            <Link to="/" className="navbar-text">DS Delivery</Link>
        </nav>
     );
}
export default Navbar;