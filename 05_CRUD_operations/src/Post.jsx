import { useState } from "react";
import "./post.css"
function Post(props){ 

    // These variable are used to handle in case the user tries to edit a Post
    const [isBeingEdited, setIsBeingEdited] = useState(false);
    const [tempTitle, setTempTitle] = useState(props.title);
    const [tempContent,setTempContent] = useState(props.content);
    
    // Double clicking a Post turns it into Editing mode.
    function doubleClickHandler(){
        setIsBeingEdited(true);
    }
    // Two way binding for the Title and Content input's that appears after user double click's a post
    function onChangeTitle(event){
        setTempTitle(event.target.value);
    }

    function onChangeContent(event){
        setTempContent(event.target.value);
    }

    // Once the edit is done, and user wants to save it we are sending it to the App.jsx (parent component and Owner of Posts)
    function editHandler(){
        props.editPost(props.index,tempTitle,tempContent);
        // Exiting out of the edit mode
        setIsBeingEdited(false);
    }

    // in Case the user wants to discard changes.
    // We are setting all the values as before 
    // and exit the edit mode.
    function discardHandler(){
        setTempContent(props.content);
        setTempTitle(props.title);
        setIsBeingEdited(false);
    }

// Rendering based on the Mode
    // Edit mode
    if(isBeingEdited){
        return(
            <div id= "postEditMode" onDoubleClick={doubleClickHandler}>
                <div id="postEditModeTextContainer">
                    <input id = "postEditModeTitle" type="text" value={tempTitle} onChange={(event=>{onChangeTitle(event)})}/>
                    <textarea id = "postEditModeContent" value={tempContent} onChange={(event)=>{onChangeContent(event)}}/>
                </div>
                <div id="postEditModeButtonContainer">
                    <button onClick={editHandler}>Save</button>
                    <button onClick={discardHandler}>Discard</button>
                </div>
            </div>
        )
        // Regular Mode
    }else{
        return (<div id ="postReadMode"onDoubleClick = {doubleClickHandler}>
            <div id= "postReadModeTextContainer">
                <span id="title">{props.title}</span>
                <span id="content">{props.content}</span>
            </div>
            {/* passing the index to the removePost function, thus telling react which component to delete */}
            <div id="postReadModeDeleteButtonContainer">
                <button id="postDeleteButton" onClick={()=>{props.removePost(props.index)}}>X</button>
            </div>
        </div>)
    }


}
export default Post;