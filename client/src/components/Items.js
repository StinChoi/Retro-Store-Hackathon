import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import ItemNew from "./NewItemForm";

const Items = () => {
  const [items, setItems] = useState([]);
  const [showNewForm, setShowNewForm] = useState(false);
  const [currentCategory, setCategory] = useState({});
  const { id } = useParams();
  //const location = useLocation();
  //const {category} = location.state;
  
  useEffect(() => {
    console.log("mounted");
    getData();
    // setCategory(category);
  },[]);

  const toggleNewForm = () => {
    setShowNewForm(!showNewForm);
  };

  const getData = async () => {
    let response = await axios.get(`/api/categories/${id}/items`);
    let catResponse = await axios.get(`/api/categories/${id}`);
    setItems(response.data);
    setCategory(catResponse.data)
  };

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const renderItems = () => {
    if (items.length === 0) {
      return <p>No Items</p>;
    }
    return items.map((item) => {
      return (
        <div key = {item.id} className="item-container">
          {/* <Item key={item.id} {...item} /> */}
          <h3>{item.name}</h3>
          <Link to={`/categories/${id}/items/${item.id}`} state={{item}}>View Item</Link>
        </div>
      )
    });
  };

  return (
    <div>
      <Link to={"/categories"}>Back to Shop</Link>
      <h1>{currentCategory.name}</h1>
      <Link to={`/categories/${currentCategory.id}/edit`} state={{currentCategory}}>Edit this category</Link>
      <br/>
      <button onClick = {toggleNewForm}>{showNewForm ? "Cancel" : "Add New Item"}</button>
      {showNewForm && <ItemNew addItem = {addItem} toggleNewForm={toggleNewForm}/>}
      <h2>Items</h2>
      {renderItems()}
    </div>
  )
}

export default Items;