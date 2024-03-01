// import { application } from "express";

const api_url = "http://localhost:8888/products";

export async function getProducts() {
    const response = await fetch(api_url);
    if(!response.ok) {
        throw new Error("Ошибка при получении товаров");
    }
    return response.json();
}

export async function getProductById(productId) {
    const response = await fetch(`${api_url}/${productId}`);
    if(!response.ok) {
        throw new Error("Ошибка при получении товара по Id");
    }
    // return response.json();
    return productId;
}

export async function addProduct(productData) {
    const response = await fetch(api_url, {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(productData)
    });
    if(!response.ok) {
        throw new Error("Ошибка при добавлении товара");
    }
    return response.json();
}

export async function updateProduct(productData) {
    const response = await fetch(`${api_url}/${productData._id}`, {
        method: "PUT",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(productData)
    });
    if(!response.ok) {
        throw new Error("Ошибка при обновлении товара");
    }
    return response.json();
}

export async function deleteProduct(productId) {
    const response = await fetch(`${api_url}/${productId}`, {
        method: "DELETE"
    });
    if(!response.ok) {
        throw new Error("Ошибка при удалении товара");
    }
    // return response.json();
    return productId;
}