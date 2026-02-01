import ReactDOM from 'react-dom/client';
import Video from './Video';

// For React to do anything on our behalf, we need it to tell what element we want as the Root element
// We are simply selecting the Element that we have created in the `index.html` using our age old document.getElementById()
const root = ReactDOM.createRoot(document.getElementById('root'));
// The "root" element selected by us, we are now asking it to render a component called "Video" in it.
// The `Video` is simply a piece of code that returns a jsx element (basically a js + html kinnda code)
// just like we pass parameter to a function we pass something called props to our jsx components, help us to make it dynamic.
root .render(
  <div>
    <Video title="Modern India" description = "Understanding the making of modern India"/>
    <Video title="World After Covid-19" description= "Dr. Grace talks about life after deadly pandemic" />
    <Video title = "The Picture of Dorian Gray" description = "Oscar wilde's most loved book, understanding it"/>
    <Video title = "Detox from Social Media" description = "Social Media experts talk about to get detox form social media"/>
    <Video title = "Spotify : A Case study" description = "Analayzing the growth of Spotify"/>
  </div>
)