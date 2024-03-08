import logo from "./logo.svg";
import "./App.css";
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";
import AdminPage from "./components/AdminPage";
import CatalogPage from "./components/CatalogPage";
import ShoppingBasket from "./components/ShoppingBasket";

function App() {
    // return (
    //     <div className="App">
    //         {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    //     </div>
    // );
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/catalog" element={<CatalogPage />}/>
                <Route path="/catalog/shoppingbasket" element={<ShoppingBasket />}>
                        <Route path=":id" element={<ShoppingBasket />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
