import Product from "./Product";

const ProductList = (props) => {
    return (
        <div className="product-list d-flex justify-content-center flex-row">
            {props.productList.map((product, index) => (
                <Product
                    key={index}
                    _id={product._id}
                    image={product.image}
                    nameproduct={product.name}
                    description={product.description}
                    price={product.price}
                    quantity={product.quantity}
                />
            ))}
        </div>
    );
};

export default ProductList;
