import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";

const ItemNew = (props) => {
  const {addItem, toggleNewForm} = props;
  const {id} = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItem = {
      name: name,
      price: price,
      description: description,
    };
    await axios.post(`/api/categories/${id}/items`, newItem);
    // navigate("/items");
    addItem(newItem);
    toggleNewForm();
  };

  return (
    <div>
      <h1>Add New Item Below</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <p>Item Name:</p>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <p>Item Price:</p>
          <input value={price} onChange={(e) => setPrice(e.target.value)} />
          <p>Item Description:</p>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          <br />
          <br />
          <button>Create New Item</button>
          <hr />
        </form>
      </div>
    </div>
  );
};

export default ItemNew;