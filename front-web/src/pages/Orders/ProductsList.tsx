import ProductCard from "../../components/ProductCard/ProductCard"
import { Product } from "../../models/ProductModel";
import { checkedIsSelect } from "./helpers";

type Props = {
    products: Product[];
    selectedProducts: Product[];
    onSelectProduct: (product: Product) => void;
}

function ProductsList({products, onSelectProduct, selectedProducts}: Props) {
    return(
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map( product => (
                    <ProductCard 
                    key={product.id}
                     product={product}
                     onSelectProduct={onSelectProduct}
                     isSelected={checkedIsSelect(selectedProducts, product)}
                     />
                ))}
            </div>
        </div>
    )
}

export default ProductsList; 