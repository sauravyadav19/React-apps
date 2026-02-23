import { Link } from "react-router-dom";
import "./navbar.css"
function Navbar(){

    return (
        <div id = "navbarContainer">
            <div id="leftContainer">
                <input id= "searchField" type="text" placeholder="Find your Product"/>
            </div>
            <div id="rightContainer">
                <Link className="navbarLinks" to={"/allProducts"}>All Products</Link>
                <Link className="navbarLinks" to={"/mensProducts"}> Men's Product</Link>
                <Link className= "navbarLinks" to ={"/womensProducts"}>Women's Product</Link>  
            </div>   
        </div>
    )

}

export default Navbar;