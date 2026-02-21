import { useState } from "react"
import "./formcreation.css"


function CreationForm({addPost}){
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    
    //  Showing the current time as placeholder for the title input
    // and in case the user do not specifiy any title and title is blank
    // we are simply adding the current time as title.
    const time = new Date()
    const currentTime = time.toLocaleTimeString()
    const currentDate = time.toDateString()
    const tempTitlePlaceholder = `${currentDate} (${currentTime})`

    function formSubmitHandler(event){
        // Handling the submitted form
        event.preventDefault();
        const finalTitle = title === "" ? tempTitlePlaceholder : title
        addPost(finalTitle,content);
        setTitle('');
        setContent('');
    }

    return (
        <div id = "rootPostCreationContainer">
            <form id="postCreationForm" onSubmit={(event)=>{formSubmitHandler(event)}}>
                <div id = "titleContainer">
                    <label htmlFor="title">Title</label>
                    <input 
                        id= "titleInput"
                        type="text" 
                        name="title" 
                        value={title} 
                        placeholder={tempTitlePlaceholder}
                        onChange={(event)=>{setTitle(event.target.value);}}
                    />
                </div>
                <div id = "contentContainer">
                    <label htmlFor="content">Content</label>
                    <textarea
                        id = "contentInput"
                        name = "content"
                        value = {content}
                        placeholder="Start Writing.."
                        required
                        onChange={(event) =>{setContent(event.target.value);}}
                    />
                </div>
                <div id = "buttonContainer">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default CreationForm;