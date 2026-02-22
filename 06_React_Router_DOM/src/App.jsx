import { useState } from "react";
import axios from "axios";
import AllProductsContainer from "./Components/AllProducts";
import "./app.css"


function App(){
    const [products,setProducts] = useState([]);
    // fetching Product data from a API using Axios
    async function fetchData(){
        const fetchedProducts = await axios.get('https://fakestoreapi.com/products') 
        // populating the products array with fetched Data from API Call       
        setProducts(fetchedProducts.data);
    }   
    
    return (
        // if the Products array is empty, Rendering a button to fetch the products using API Call
        // or else showing all the products.
        <div id = "mainContainer">
            {products.length === 0 ? <button id = "fetchButton" onClick={fetchData}>Fetch products</button>
                           :<AllProductsContainer products={products}/>}
        </div>
    )
}

export default App;