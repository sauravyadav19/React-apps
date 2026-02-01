// This is our `Video` component that simply returns a div with some children inside it
// here we can see that a parameter `props` is passed this is where we can access the values that will be passed while calling our component
function Video(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Video;