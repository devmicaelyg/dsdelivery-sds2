import './style.css'
import { ReactComponent as Landing } from '../../assets/landing3 .svg';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <>
        <div className="home-container">
            <div className="home-content">
                <div className="home-actions">  
                    <h1 className="home-title">Faça seu pedido <br/>que entregamos <br/>pra você!!!</h1>
                    <h3 className="home-subtitle">Escolha a sua camisa e em poucos minutos<br/> levaremos na sua porta</h3>
                    <Link to="/orders" className="home-btn-order">
                        FAZER PEDIDO
                    </Link>
                </div>
                       
                <div className="home-image">
                    <Landing />
                </div>
            </div>
        </div>
       
        </>
    );
}

export default Home; 