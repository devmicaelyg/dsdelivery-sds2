import ProductCard from "../../components/ProductCard/ProductCard"
import { ProductModel } from "../../models/ProductModel";

type Props = {
    products: ProductModel[];
}

function ProductsList({products}: Props) {
    return(
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map( product => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    )
}

export default ProductsList; 