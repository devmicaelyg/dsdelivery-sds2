
import { useEffect, useState } from 'react';
import OrderLocation from '../../components/OrderLocation/OrderLocation';
import StepHeader from '../../components/StepHeader/StepHeader';
import { OrderLocationData } from '../../models/OrderLocationData';
import { ProductModel } from '../../models/ProductModel';
import { fetchProducts } from '../../service/api';
import ProductsList from './ProductsList';
import './styles.css';

const Orders = () => {
    const [products, setProducts] = useState<ProductModel[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

    useEffect(() => {
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
    }, [])
    return(
        <div className="orders-container">
            <StepHeader />
            <ProductsList products={products}/>
            <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
        </div>
    );
}

export default Orders; 