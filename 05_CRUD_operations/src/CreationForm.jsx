import { useState } from "react"


function CreationForm({addPost}){
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    function formSubmitHandler(event){
        // Handling the submitted form
        event.preventDefault();
        addPost(title,content);
        setTitle('');
        setContent('');
    }

    return (
        <div>
            <form id="postCreationForm" onSubmit={(event)=>{formSubmitHandler(event)}}>
                <label htmlFor="title">Title</label>
                <input 
                    id= "title"
                    type="text" 
                    name="title" 
                    value={title} 
                    onChange={(event)=>{setTitle(event.target.value);}}
                />

                <label htmlFor="content">Content</label>
                <textarea
                    id = "content"
                    name = "content"
                    value = {content}
                    onChange={(event) =>{setContent(event.target.value);}}
                />

                <button>Submit</button>
            </form>
        </div>
    )
}
export default CreationForm;