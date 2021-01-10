import { ReactComponent as Livro} from '../../assets/livro.svg';
import { ProductModel } from '../../models/ProductModel';

type Props = {
    product: ProductModel;
}

const formatPrice = (price: number) => {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
    return formatter.format(price);
} 

const ProductCard = ({product}: Props) => {
    return(
        <div className="order-card-container">
            <h3 className="order-card-title">
                { product.name }
            </h3>
            <img src={product.imageUri} className="order-card-image" alt={product.name}/>
            <h3 className="order-card-price">
                 {formatPrice(product.price) } 
            </h3>
            <div className="order-card-description">
                <h3>
                    Descrição
                </h3>
                <p>
                { product.description } 
                </p>
            </div>

         
        </div>
    )
}

export default ProductCard; 