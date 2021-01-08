import { ReactComponent as Livro} from '../../assets/livro.svg';

const ProductCard = () => {
    return(
        <div className="order-card-container">
            <h3 className="order-card-title">
                Deuses Americanos
            </h3>
            <Livro className="order-card-image"/>
            <h3 className="order-card-price">
                R$35,00
            </h3>
            <div className="order-card-description">
                <h3>
                    Descrição
                </h3>
                <p>
                Descrição Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial.
                </p>
            </div>

         
        </div>
    )
}

export default ProductCard; 