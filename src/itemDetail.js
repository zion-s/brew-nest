import React, {useState, useEffect} from 'react';

function Item({match}) {

    useEffect(()=>{
        fetchItem();
        console.log(match);
    },[]);

    const [drink, setItem] = useState({
        food_pairing:[]
    });

const fetchItem = async ()=>{
    const fetchItem = await fetch(`https://api.punkapi.com/v2/beers/${match.params.id}`);
    const drink = await fetchItem.json();
    setItem(drink[0]);
    console.log(drink[0]);
                        
}

  return (
    <div>
        <h1>{drink.name}</h1>
        <h3>{drink.tagline}</h3>
        <img src={drink.image_url} width={'auto'} height={250}></img>
        <h4>{drink.description}</h4>
        <h4>Goes well with - {drink.food_pairing.map((food,i)=>(
            <li key={i}>{food}</li>
        ))}</h4>
    </div>
  );
}

export default Item;