import React from "react";

const Item = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Price: {props.price}</p>
      <p>Description: {props.Description}</p>
    </div>
  );
};

export default Item