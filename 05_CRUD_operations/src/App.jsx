import { useEffect, useState } from "react";
import CreationForm from "./CreationForm";
import Post from "./Post";

function App(){

    // This is data strcture holding all the post
    // We are using localstorage to maintain some kind of persistence
    // Here, if some post are already in localstorage in the browser we are reterving that posts
    // and initallising it as the intial value of the posts array, else we are simplying returning an empty array
    const [posts, setPost] = useState(()=>{
        const previouslyStoredPosts = localStorage.getItem('posts');
        return previouslyStoredPosts ? JSON.parse(previouslyStoredPosts) : []
    });

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
        setPost(prev=>([{title,content},...prev]))
    }

    // Just like we are passing addPost to our form 
    // We are passing removePost to our Post component so that we can delete each post if we want to
    function removePost(key){
        const newPosts = posts.filter((element,index)=>{
            if(index === key){
                return false;
            }
            return element;
        })
        setPost(newPosts);
    }

    // We are using useEffect to store the new value of the post into the localstorage
    // just to recall, useEffect is called whenever the dependicies array undergo state change
    // in this case our posts array, whenever there is a state change it is called.
    // we are storing the new value of the posts into the localstorage.
    /*  
        function addPost(title,content){
            setPost(prev =>([{title,content},...prev]))
            locaStorage.setItem("posts", JSON.stringify(posts));
        }
    */
   // The above function would have NOT worked properly. Why?
   // setPost() does not instantly changes the value of posts, think of it like a async kinda function; it takes a sometime to resolve

    useEffect(()=>{
        localStorage.setItem("posts",JSON.stringify(posts));
    },[posts])

    return (<div>
    {/* form to Create new Post */}
        <CreationForm addPost={addPost}/>
        {/* Rendering all the post */}
        <div>
            {posts.map((post, idx)=>(
                // Passing index explicitly to the component so we can remove the post when button is clicked
                <Post key = {idx} title = {post.title} content = {post.content} index = {idx} removePost = {removePost} />
        ))}
        </div>     
    </div>)

}

export default App;