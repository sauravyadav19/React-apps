import { useParams } from "react-router-dom";
import "./detailpage.css"

function DetailProduct({products}){
    const {id } = useParams();
    const product = products[id];
    return <div id="detailProductContainer">
        <div id="imageAndNameProductContainer">
                <div id="productImageContainer">
                    <img id= "productImag_D" src={product.image}/>
                </div>
                <div id="productNameAndRatingContainer">
                    <span id = "productName_D">{product.title}</span>
                    <span id='productRating'>{`${product.rating.rate} (${product.rating.count})`}</span>
                </div>
        </div>
        <div id="otherDetailContainer">
                <span id = "productCategory">{product.category}</span>
                <span id = "productDescription">{product.description}</span>
        </div>
    </div>

}
export default DetailProduct;