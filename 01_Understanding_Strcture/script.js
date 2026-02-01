// Our custom H1 Component
function H1Component(){
    return (<h1>Hello From React!</h1>);
}
// Selecting The root element from HTML using getElemetById
const root = ReactDOM.createRoot(document.getElementById('root'));
// Rendering our H1Component in root element
root.render(<H1Component />);