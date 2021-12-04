import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const ItemNew = () => {

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
    await axios.post("/api/items", newItem);
    navigate("/items");
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
          <input value={description} onChange={(e) => setDescription(e.target.value)} />
          <button>Create New Item</button>
        </form>
      </div>
    </div>
  );
};

export default ItemNew;