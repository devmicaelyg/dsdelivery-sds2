import './style.css'
import { ReactComponent as Landing } from '../../assets/landing2.svg';
import Footer from '../../components/Footer';

const Home = () => {
    return(
        <>
        <div className="home-container">
            <div className="home-content">
                <div className="home-actions">  
                    <h1 className="home-title">Faça seu pedido <br/>que entregamos <br/>pra você!!!</h1>
                    <h3 className="home-subtitle">Escolha o seu pedido e em poucos minutos<br/> levaremoss na sua porta</h3>
                    <a href="#" className="home-btn-order">
                        FAZER PEDIDO
                    </a>
                </div>
                <div className="home-image">
                    <Landing />
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Home; 