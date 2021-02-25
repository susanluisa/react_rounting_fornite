import React, { useState, useEffect } from 'react';
import './App.css';

function ItemDetail({match}) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState ({images: {}});

  const fetchItem = async () =>{
    const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);

    const item = await data.json();
    console.log(item.data);
    setItem(item.data.item);
  };

  return (
    <div> 
      <h1>{item.name}</h1> 
      <img src={item.images.background} />
    </div>
  );
}

export default ItemDetail;
