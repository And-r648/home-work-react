import React from "react";

const ListItem = (props) => {
  return <li key={`${props.element}`}>{props.element}</li>;
};

export default ListItem;
