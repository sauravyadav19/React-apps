import { useState } from "react";

function Post(props){ 

    return (<div style={{border:"solid red 2px"}}>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        {/* passing the index to the removePost function, thus telling react which component to delete */}
        <button onClick={()=>{props.removePost(props.index)}}>Delete</button>
    </div>)

}
export default Post;