// This is our `Video` component that simply returns a div with some children inside it

import { useState } from "react";
import "./video.css"; // Css file to give our `Video` component a good strcture. 
// here we can see that a parameter `props` is passed,this is where we can access the values that will be passed while calling our component
function Video(props){
    // using useState() we are creating a variable isLiked
    // only setIsLiked() function can be used to change its value
    const [isLiked ,setIsLiked] = useState(false);

    function toggleLike(){
        // Changing the state of the variable
        if(isLiked == true){
            setIsLiked(false);
        }else{
            setIsLiked(true);
        }
    }
    return(
        <div className = "container">
            <div id = "imageContainer">
                <img src = "./assets/stockPhoto.jpg" alt="video Image" id="image" />
            </div>
            <div id = "detailContainer">
                {/* acessing the props */}
                <p id= "title"><b>{props.title}</b></p>
                <p id = "description">{props.description}</p>
            </div>
            <div id = "likeContainer">
                {/*  based on the state of isLiked we are rendering different hearts */}
                <span onClick={toggleLike} id="heart">{isLiked ? "❤️" : "🤍"}</span>
            </div>
        </div>
    )
}

export default Video;