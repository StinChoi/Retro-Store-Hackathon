import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import { useLocation } from "react-router";

const Items = () => {
  const [items, setItems] = useState([]);
  const [currentCategory, setCategory] = useState({});
  const location = useLocation();
  const {category} = location.state;
  
  useEffect(() => {
    console.log("mounted");
    getItems();
    setCategory(category);
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
      <h1>{currentCategory.name}</h1>
      <h2>Items</h2>
      <Link to={`/categories/${currentCategory.id}/edit`}>Edit this category</Link>
    </div>
  )
}

export default Items;