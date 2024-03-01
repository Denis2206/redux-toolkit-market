import {useDispatch, useSelector} from "react-redux";
import {fetchProducts, addProduct, updateProduct, deleteProduct} from "../features/products/productSlice";

const Table = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.list);

// удаление товара
const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
};
    
    return (
        <table className="table table-striped table-hover align-middle text-center">
        <thead>
            <tr>
                <th>Изображение</th>
                <th>Название</th>
                <th>Описание</th>
                <th>Цена</th>
                <th>Количество</th>
                <th>Действия</th>
            </tr>
        </thead>

        {/* <tbody>
            {Array.isArray(products) && products.length > 0 ? (
                products.map((product) => (
                    <React.Fragment key={product._id}>
                        <tr key={product._id}>
                            <td>
                                <img src={require(`/public/images/${product.image}`)} alt={product.name} height={70} />
                            </td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price} руб.</td>
                            <td>{product.quantity}</td>
                            <td>
                                <button type="button" className="btn btn-outline-warning me-4" onClick={() => handleEditProduct(product)}>
                                    Изменить
                                </button>
                                <button type="button" className="btn btn-outline-danger" onClick={() => handleDeleteProduct(product._id)}>
                                    Удалить
                                </button>
                            </td>
                        </tr>
                        {editingProductId === product._id && (
                            <tr>
                                <td colSpan="6">
                                    <EditPopup product={product} onSave={handleSaveEdit} onClose={handleCancelEdit} />
                                </td>
                            </tr>
                        )}
                    </React.Fragment>
                ))
            ) : (
                <tr>
                    <td colSpan="6">Нет доступных товаров</td>
                </tr>
            )}
        </tbody> */}

        <tbody>
            {Array.isArray(products) && products.length > 0 ? (
                products.map(product => (
                    <tr className="m-0 p-0" key={product._id}>
                        {/* <tr> */}
                            <td>
                                <img src={require(`/public/images/${product.image}`)} alt={product.name} height={70} />
                            </td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price} руб.</td>
                            <td>{product.quantity}</td>
                            <td>
                                {/* <button type="button" className="btn btn-outline-warning me-4" onClick={() => handleEditProduct(product)}>
                                    Изменить
                                </button> */}
                                <button type="button" className="btn btn-outline-danger" onClick={() => handleDeleteProduct(product._id)}>
                                    Удалить
                                </button>
                            </td>
                        {/* </tr> */}
                        {/* {editingProductId === product._id && (
                            <tr>
                                <td colSpan="6">
                                    <EditPopup product={product} onSave={handleSaveEdit} onClose={handleCancelEdit}/>
                                </td>
                            </tr>
                        )} */}
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan="6">
                        Нет доступных товаров
                    </td>
                </tr>
            )}
        </tbody>
    </table>
    )
}

export default Table;