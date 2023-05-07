import React from "react";
import ProductsGenerator from "../components/product/ProductsGenerator";
import AdminNavBar from "../components/dashboard/AdminNavBar";
import AdminMenu from "../components/dashboard/AdminMenu";

function ProductsGeneratorPage() {
    return (
        <>
            <AdminNavBar/>
            <div className="columns" id="app-content">
                <AdminMenu/>
                <div className="product-generator-block"><ProductsGenerator/></div>
            </div>
        </>
    );
}

export default ProductsGeneratorPage;
