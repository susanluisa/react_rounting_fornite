import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import './App.css';

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState ([]);

  const fetchItems = async () =>{
    const data = await fetch('https://fortnite-api.theapinetwork.com/store/get');

    const items = await data.json();
    setItems(items.data);
  };

  return (
    <div> 
      {items.map(obj => (
        <Link to={`/shop/${obj.itemId}`}>
          <h1>{obj.item.name}</h1>
        </Link>
        ))}
    </div>
  );
}

export default Shop;
