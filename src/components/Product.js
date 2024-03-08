import {Link, Outlet} from "react-router-dom";
import "../components/styles.css"

const Product = (props) => {
    return (
        <div className="product" id="product">
        {/* height={220} */}
            <img src={require(`/public/images/${props.image}`)} alt={props.name} id="product-img"/>
            <p id="product-name"><h6>Название: </h6>{props.nameproduct}</p>
            <p><h6>Краткое описание: </h6>{props.description}</p>
            <p>Цена: {props.price} руб.</p>
            <p>Осталось: {props.quantity} шт.</p>
            {/* <button className="btn btn-primary my-1" >Добавить в корзину</button> */}
            <p>
                <Link className="btn btn-primary my-1" to={`./shoppingbasket/${props._id}`}>Купить</Link>
            </p>
            {/* <Outlet /> */}
        </div>
    );
};

export default Product;
