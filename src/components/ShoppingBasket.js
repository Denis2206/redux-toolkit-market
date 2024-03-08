import { useParams, Link } from "react-router-dom";
import "../components/basket.css";

const ShoppingBasket = () => {
    const params = useParams();
    const productId = params.id;
    return (
        <div id="basket">
            <h2>shoppingbasket</h2>
            <p>id: {productId}</p>
            <br/>
            <br/>
            <Link to="/catalog">Назад</Link>
        </div>
    )
}

export default ShoppingBasket;