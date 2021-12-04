import React, { useEffect, useState } from "react";
import axios from "axios";
import CateAddForm from "./CateAddForm";
import { Link } from "react-router-dom";

const Categories = () => {
  const [showNewForm, setShowNewForm] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  },[]);

  const getCategories = async () => {
    let res = await axios.get("/api/categories");
    setCategories(res.data)
  };

  const toggleNewForm = () => {
    setShowNewForm(!showNewForm);
  };

  const addCategory = (category) => {
    setCategories([category, ...categories]);
  };

  const renderCategories = () => {
    if(categories.length === 0){
      return <h2>No Categories</h2>
    }
    else {
      return categories.map((category) => {
        const renderItems = () => {
          return category.items.map((item) => 
            item.name
          );
        };
        return(
          <div key = {category.id} className= "cate-container">
            <h3>{category.name}</h3>
            <p><b>Items: </b>{renderItems()}</p>
            <Link to={`/categories/${category.id}/items`} state={{category}}>Shop this category</Link>
          </div>
          );
      });
    }
  };

  return (
    <div>
      <h1>Categories</h1>
      <button onClick = {toggleNewForm}>{showNewForm ? "Cancel" : "New Category"}</button>
      {showNewForm && <CateAddForm addCategory = {addCategory}/>}
      {renderCategories()}
    </div>
  );
};

export default Categories;