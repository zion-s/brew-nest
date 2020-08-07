import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Shop() {

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
    <div className="boozeList">
        <p>Click any to know more:</p>
        {items.map((item,i)=><p key={item.id}><Link to={`/shop/${item.id}`}>{i+1}.&nbsp;&nbsp;{item.name}</Link></p>)}
    </div>
  );
}

export default Shop;