
import StepHeader from '../../components/StepHeader/StepHeader';
import ProductsList from './ProductsList';
import './styles.css';

const Orders = () => {
    return(
        <div className="orders-container">
            <StepHeader />
            <ProductsList />
        </div>
    );
}

export default Orders; 