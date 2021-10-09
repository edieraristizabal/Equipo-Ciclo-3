import React from "react";
import { Button } from "@mui/material";
import "../styles/Card.css";
const Card = ({ data }) => {
  return (
    <div className="card">
      <img
        src={
          data.image ||
          "http://scanivalve.com/wp-content/plugins/lightbox/images/No-image-found.jpg"
        }
        alt={data.description}
      />
      <h1>{data.description}</h1>
      <h2>{data.status}</h2>
      <strong>{data.price}</strong>
      <Button color="success" variant="contained">
        buy
      </Button>
    </div>
  );
};

export default Card;
