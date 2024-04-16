// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams } from "react-router-dom";
function Tom() {
  const { id } = useParams();
  return <div>{id}</div>;
}

export default Tom;
