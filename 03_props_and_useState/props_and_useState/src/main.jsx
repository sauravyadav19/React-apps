import ReactDOM from 'react-dom/client';
import Video from './Video';

// For React to do anything on our behalf, we need it to tell what element we want as the Root element
// We are simply selecting the Element that we have created in the `index.html` using our age old document.getElementById()
const root = ReactDOM.createRoot(document.getElementById('root'));
// The "root" element selected by us, we are now asking it to render a component called "Video" in it.
// The `Video` is simply a piece of code that returns a jsx element (basically a js + html kinnda code)
// just like we pass parameter to a function we pass something called props to our jsx components, help us to make it dynamic.
root.render(<Video title="React Props" description = "tutorial to use props in React" />);