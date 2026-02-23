import { useNavigate } from "react-router-dom";
import "./product.css"

function Product({product}){
    // Rendering the Image and Name of the Product.
    const navigate = useNavigate();
    return(<div onClick ={()=>{
        navigate(`/products/${product.id - 1}`)
    }}id = "productContainer">
                <img id = "productImage" src={product.image}></img>
                <span id="productName">{product.title}</span>
            </div>
    )

}
export default Product;