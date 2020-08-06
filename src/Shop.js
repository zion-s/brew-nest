import React, {useState, useEffect} from 'react';

function Shop() {
    // const app_ID = '391d0a68';
    // const app_KEY = '16d2e548b6ab2de17518b2eade3837a0';

    useEffect(()=>{
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

const fetchItems = async ()=>{
    const data = await fetch('https://api.punkapi.com/v2/beers');
    const items = await data.json();
    console.log(items);
    setItems(items);
}

  return (
    <div>
        {items.map(item=><h3 key={item.id}>{item.name}</h3>)}
    </div>
  );
}

export default Shop;