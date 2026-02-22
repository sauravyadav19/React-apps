import "./product.css"

function Product({product}){
    // Rendering the Image and Name of the Product.
    return(<div id = "productContainer">
                <img id = "productImage" src={product.image}></img>
                <span id="productName">{product.title}</span>
            </div>
    )

}
export default Product;