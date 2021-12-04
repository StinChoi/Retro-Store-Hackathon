import React from "react";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";

const Item = () => {

  const location = useLocation();
  const {item} = location.state;
  const {category_id, id} = useParams();

  return (
    <div>
      <Link to={`/categories/${category_id}/items`}>Back to category</Link>
      <p>Name: {item.name}</p>
      <p>Price: {item.price}</p>
      <p>Description: {item.description}</p>
    </div>
  );
};

export default Item