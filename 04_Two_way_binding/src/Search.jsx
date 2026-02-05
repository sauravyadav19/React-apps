import { useEffect, useState } from "react"
import fruits from "./fruits";
import FruitCard from "./FruitCard";
import "./search.css";

// in our vanilla development we use to handle the UI and JS variable ourselfs but in
// Two way binding we automatically syn the state and UI
// for example here we have a input of type text and its corresponding state is 'search'
// they are both in syn due the fact that we have onChange put a handler that is responsible for
// setting the state of 'search' thus both of them pointing to same value all the time
function Search(){
    const [search ,setSearch] = useState('');
    const [foundFruits, setFoundFruits] = useState([]);

    function textHandler(event){
        setSearch(event.target.value);
    }

    // UseEffect is called every time state change for the value in the dependecy array
    useEffect(()=>{
        if(search.trim() == ""){
            setFoundFruits([]);
            return;
        }
        const result = searchFruits(search);
        setFoundFruits(result);
    },[search]) // dependency array (so wherever state of a "search" changes this useEffect would be called)
    
    return <div id="searchContainer">
        <input 
            id = "searchBar"
            type="text" 
            value={search}
            placeholder= "Search for Fruits"
            onChange={(event)=>{
                textHandler(event);
            }}
        />
        <div id = "searchResult" >
            {foundFruits.map((fruit,index) => (
                <FruitCard key = {fruit.id} fruit = {fruit}/>))}
        </div>
    </div>

}


// function that returns the array of found fruits from fruit.js
function searchFruits(query) {
    query = query.trim();
    const normalizedQuery = query.toLowerCase();
    const fruitObject =  fruits.filter(fruit =>fruit.name.toLowerCase().includes(normalizedQuery));
    return fruitObject;
}


export default Search
