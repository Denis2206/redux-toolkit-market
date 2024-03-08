import ProductList from "./ProductList";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {fetchProducts, addProduct, updateProduct, deleteProduct} from "../features/products/productSlice";

const CatalogPage = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.list);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    return (
        <div className="" id="catalog-list">
        {Array.isArray(products) && products.length > 0 ? (
            <ProductList productList={products}/>
        ) : (
            <p>Нет доступных товаров</p>
        )}
            
        </div>
    )
}

export default CatalogPage;