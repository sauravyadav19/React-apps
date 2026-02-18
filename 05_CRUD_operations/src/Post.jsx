import { useState } from "react";

function Post(props){ 

    return (<div style={{border:"solid red 2px"}}>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
    </div>)

}
export default Post;