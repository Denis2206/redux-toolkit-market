import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "./api";

// получаем методы, отправляющие запросы к серверу, создаём из них действия, которые будем использовать в срезе и компонентах
export const fetchProducts = createAsyncThunk("products/fetchProducts", api.getProducts);
export const addProduct = createAsyncThunk("product/addProduct", api.addProduct);
export const updateProduct = createAsyncThunk("product/updateProduct", api.updateProduct);
export const deleteProduct = createAsyncThunk("product/deleteProduct", api.deleteProduct);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        list: [],
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.list = action.payload;
                // state.list.forEach(item => {
                //     console.log("name " + item.name);
                // })
                // console.log(action.payload);
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.list.push(action.payload);
            //     console.log("action.payload -- " + action.payload.name);
            //     state.list.forEach(item => {
            //         console.log("name " + item.name);
            //     })
            // //     , payload: {_id: "", name: "", description: "", price: 0,
            // // image: null, quantity: 0}
            //     console.log("action.payload -- " + action.payload);
                // console.log("action.payload -- " + action.payload.test);
                // console.log("action.payload.... -- " + action.payload.name);
                // console.log("state.list -- " + state.list);
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                // const{id, data} = action.payload;
                const prod = action.payload;
                const existingProductIndex = state.list.findIndex(product => product._id === prod._id);
                // console.log("id = " + id);
                // console.log("data = " + data.name);
                // console.log("id = " + prod._id);
                // console.log("name = " + prod.name);
                if(existingProductIndex !== -1) {
                    state.list[existingProductIndex] = {...state.list[existingProductIndex], ...prod};
                }
                // const updatedProduct = action.payload;
                // console.log("action.payload = " + action.payload);
                // console.log("_id = " + updateProduct._id);
                // const existingProductIndex = state.list.findIndex(
                //     (product) => product._id === updatedProduct._id
                // );
                // console.log("index = " + existingProductIndex);
                // //создание копии объекта
                // // if (existingProduct) {
                // //     Object.assign(existingProduct, updatedProduct);
                // // }
                // if(existingProductIndex !== -1) {
                //     state.list[existingProductIndex] = {...state.list[existingProductIndex], ...updateProduct};
                // }
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                // console.log("deleteAction ID: " + action.payload);
                state.list = state.list.filter(product => product._id !== action.payload);
            })
    },
});

// селекторы для извлечения данных из стора и доступа к данным состояния products в сторе
// первый - возвращает список всех товаров
// второй - возвращает товар по идентификатору
export const selectAllProducts = state => state.products.list;
export const selectProductById = (state, productId) => state.products.list.find(product => product._id === productId);

export default productsSlice.reducer;