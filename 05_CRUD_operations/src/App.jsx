import { useState } from "react";
import CreationForm from "./CreationForm";
import Post from "./Post";

function App(){

    // This is data strcture holding all the post
    const [posts, setPost] = useState([]);

    // We need to explicitly create this function, because we have two components here
    // => CreationForm: Responsible for creating a post
    // => A div that renders all the Post (a Component in itself)

    // Now here we have two problems: In react Data should always flow in downward direction, but when we are creating 
    // a Post using CreationForm component, but our posts are rendered by a different component, a sibling component
    // so we needed to store all our posts in a shared space where both of these component can acesses it, that space is our
    // App Componnet (parent of both the components).
    // Great, now the second problem was that whosoever is the owner of a variable should be the only one that can make changes
    // to that variable, and since posts array is owned by App we need to create addPost() since its going to make changes to the 
    // posts array, we are then passing this CreationForm and we call it whenever a new post is added to the posts array.

    function addPost(title,content){
        setPost(prev=>([...prev,{title,content}]))
    }

    return (<div>
    {/* form to Create new Post */}
        <CreationForm addPost={addPost}/>
        {/* Rendering all the post */}
        <div>
            {posts.map((post, idx)=>(
                <Post key = {idx} title = {post.title} content = {post.content} />
        ))}
        </div>  
        
    </div>)

}

export default App;