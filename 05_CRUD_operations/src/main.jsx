import {createRoot} from "react-dom/client"

// Getting the HTML element with id `root` and making it as our root Element in react using `createRoot()` function
// Act as Gateway for our React app
const root = createRoot(document.getElementById('root'));

// Rendering element in that root element
root.render(
    <h1>Hello</h1>
)