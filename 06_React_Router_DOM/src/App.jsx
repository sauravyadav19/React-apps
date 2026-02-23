import { useEffect, useState } from "react";
import axios from "axios";
import AllProductsContainer from "./Components/AllProducts";
import "./app.css"
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import categorySeparator from "./helperFunctions/categorySeparator";
import DetailProduct from "./Components/DetailedProductPage";


function App(){
    const [products,setProducts] = useState([]);
    const [mensProduct,setMensClothing] = useState([]);
    const [womensProduct,setWomenClothing] = useState([])
    // fetching Product data from a API using Axios
    async function fetchData(){
        const fetchedProducts = await axios.get('https://fakestoreapi.com/products') 
        console.log(fetchedProducts.data)
        // populating the products array with fetched Data from API Call       
        setProducts(fetchedProducts.data);
    }   

    // since we have passed on an empty array as dependecy this runs once when our app is loaded/
    // we are running our fetch function then.
    useEffect(()=>{
        fetchData();
    },[])
    // when the data is populated in the produts array we are creating two array with men's and women's clothing using a function
    // this only runs if there is a changes in the products array.
    useEffect(()=>{

       setMensClothing(categorySeparator(products,"men's clothing"));
       setWomenClothing(categorySeparator(products,"women's clothing"));

    },[products])
    
    return (
        // if the Products array is empty, Rendering a button to fetch the products using API Call
        // or else showing all the products.
        <div id="mainAppContainer">
            {/* navbar would be rendered regardless of which page we are on */}
            <Navbar/>
            {/* our routes, the elements would be rendered in this <routes>'s place once we are trying to access a path*/}
            <Routes>
                <Route  path = {"/"} element={<AllProductsContainer products={products}/>}/>
                <Route  path = {"/allProducts"} element={<AllProductsContainer products={products}/>}/>
                <Route  path = {"/mensProducts"} element={<AllProductsContainer products={mensProduct}/>}/>
                <Route path = {"/womensProducts"} element = {<AllProductsContainer products={womensProduct}/>}/>
                <Route path = {"/products/:id"} element = {<DetailProduct products={products}/>}/>
            </Routes>
        </div>

    )
}

export default App;