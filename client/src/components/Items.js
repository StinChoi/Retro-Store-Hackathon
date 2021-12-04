import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import { useLocation, useParams } from "react-router";

const Items = () => {
  const [items, setItems] = useState([]);
  const [currentCategory, setCategory] = useState({});
  const { id } = useParams();
  //const location = useLocation();
  //const {category} = location.state;
  
  useEffect(() => {
    console.log("mounted");
    getData();
    // setCategory(category);
  }, []);

  const getData = async () => {
    let response = await axios.get(`/api/categories/${id}/items`);
    let catResponse = await axios.get(`/api/categories/${id}`);
    setItems(response.data);
    setCategory(catResponse.data)
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
          {/* <Item key={item.id} {...item} /> */}
          <h3>{item.name}</h3>
          <Link to={`/categories/${id}/items/${item.id}`}>View Item</Link>
        </div>
      )
    });
  };

  return (
    <div>
      <h1>{currentCategory.name}</h1>
      <h2>Items</h2>
      <Link to={`/categories/${currentCategory.id}/edit`} state={{currentCategory}}>Edit this category</Link>
      {renderItems()}
    </div>
  )
}

export default Items;