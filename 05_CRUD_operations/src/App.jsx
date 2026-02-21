import { useEffect, useState } from "react";
import CreationForm from "./CreationForm";
import Post from "./Post";
import "./app.css"

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
        // we are now not relaying on index rather we are now adding another property called id which gives a unique id everytime
        // this is better than indices system and much more reilabe,especially now that we could delete a post.
        setPost(prev=>([{id: crypto.randomUUID(),title,content},...prev]))
    }

    // Just like we are passing addPost to our form 
    // We are passing removePost to our Post component so that we can delete each post if we want to
    function removePost(key){
        const newPosts = posts.filter((post)=>{
            if(post.id === key){
                return false;
            }
            return post;
        })
        setPost(newPosts);
    }

    // Just for the same reason we have passed addPost to the formCreation we would be passing editPost to Post component
    // App.jsx is the parent and owner of post and all that stuff.
    // In here we are recreating the array mannually, we are updating the element whose id matches with the key.
    function editPost(key,title,content){

        let updatePosts = [];

        setPost((prev)=>{
            for(let i = 0; i< prev.length; i++){

                if(key === prev[i].id){
                    updatePosts.push({id:prev[i].id,title,content});
                    continue;
                }
                updatePosts.push(prev[i]);

            }
            return updatePosts;

        })
    }
    const [showCreateNewPostButton, setShowCreateNewPostButton] = useState(false);

    function showCreationButtonToggler(){
        setShowCreateNewPostButton(prev => !prev);
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
        {showCreateNewPostButton ? <CreationForm addPost={addPost} hideForm = {showCreationButtonToggler}/> : <button id= "CreateNewPostButton" onClick={showCreationButtonToggler}>+ Create New </button>}
        {/* Rendering all the post */}
        <div id="allPostContainer">
            {posts.map((post, idx)=>(
                // Passing id as index so we can uniquely identify and perform deletion, updation of a post
                // We are passing removePost and editPost to it so we can perform those action with same architeture flow as waterfall direction.
                <Post key = {post.id} title = {post.title} content = {post.content} index = {post.id} removePost = {removePost} editPost = {editPost} />
        ))}
        </div>     
    </div>)

}

export default App;