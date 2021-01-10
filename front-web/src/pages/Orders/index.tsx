
import { useEffect, useState } from 'react';
import OrderLocation from '../../components/OrderLocation/OrderLocation';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import StepHeader from '../../components/StepHeader/StepHeader';
import { OrderLocationData } from '../../models/OrderLocationData';
import { Product } from '../../models/ProductModel';
import { fetchProducts, saveOrder } from '../../service/api';
import { checkedIsSelect } from './helpers';
import ProductsList from './ProductsList';

import { toast } from 'react-toastify';


import './styles.css';

const Orders = () => {
const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    
    const totalPrice = selectedProducts.reduce((sum, item) => {
        return sum + item.price
    }, 0);
    
    useEffect(() => {
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => {
          toast.warning('Erro ao listar produtos');
        })
    }, [])

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkedIsSelect(selectedProducts, product);
      
        if (isAlreadySelected) {
          const selected = selectedProducts.filter(item => item.id !== product.id);
          setSelectedProducts(selected);
        } else {
          setSelectedProducts(previous => [...previous, product]);
        }
      }

      const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
          ...orderLocation!,
          products: productsIds
        }
      
        saveOrder(payload).then(() => {
          toast.error('Pedido enviado com sucesso!');
          setSelectedProducts([]);
        })
          .catch(() => {
            toast.warning('Erro ao enviar pedido');
          })
      }

    return(
            <div className="orders-container">
                <StepHeader />
                <ProductsList products={products}
                onSelectProduct={handleSelectProduct}
                selectedProducts = {selectedProducts}
                />
                <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
                <OrderSummary
                amount={selectedProducts.length}
                totalPrice={totalPrice}
                onSubmit={handleSubmit}
                />
            </div>
    );
}

export default Orders; 