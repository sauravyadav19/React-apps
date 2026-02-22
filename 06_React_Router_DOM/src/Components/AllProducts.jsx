import Product from "./Product";
import "./allproducts.css"

function AllProductsContainer({products}){

    // Rendering each Product
    return(
        <div id="allProductsContainer">
            {products.map((product,index)=>(
                <Product product={product} key={index} />
            ))}
        </div>
    )

}

export default AllProductsContainer;