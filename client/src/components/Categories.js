import React, { useEffect, useState } from "react";
import axios from "axios";

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

  const deleteCategory = async (id) => {
    await axios.delete(`/api/categories/${id}`);
    setCategories(categories.filter((c) => c.id !== id));
  }

  const toggleNewForm = () => {
    setShowNewForm(!showNewForm);
  };

  // const addCategory = (category) => {
  //   setCategories([category, ...categories]);
  // };

  const renderCategories = () => {
    if(categories.length === 0){
      return <h2>No Categories</h2>
    }
    else {
      return categories.map((category) => {
        const renderItems = () => {
          return category.items.map((item) => 
            // <p key = {item.id}>Item: {item.name}</p>
            item.name
          );
        };
        return(
          <div key = {category.id}>
            <p>Name: {category.name}</p>
            {renderItems()}
            <br />
            <button onClick = {() => deleteCategory(category.id)}>DELETE</button>
          </div>
          );
      });
    }
  };

  return (
    <div>
      <h1>Categories</h1>
      <button onClick = {toggleNewForm}>{showNewForm ? "Cancel" : "New Category"}</button>
      {/* {showNewForm && <CateAddForm addCategory = {addCategory}/>} */}
      {renderCategories()}
    </div>
  );
};

export default Categories;