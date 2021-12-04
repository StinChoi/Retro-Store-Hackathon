import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";

const Items = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    console.log("mounted");
    getItems();
  }, []);

  const getItems = async () => {
    let response = await axios.get("/api/items");
    setItems(response.data);
  };

  // const addItem = (item) => {
  //   setItems([...items, item]);
  // };

  const renderItems = () => {
    if (items.length === 0) {
      return <p>No Items</p>;
    }
    return items.map((item) => {
      return (
        <div>
          <Item key={item.id} {...item} />
          <Link to={`/items/${item.id}`}>View Item</Link>
        </div>
      )
    });
  };

  return (
    <div>
      <h1>Items</h1>
    </div>
  )
}

export default Items;