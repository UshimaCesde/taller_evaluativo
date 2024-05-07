import React from "react";
import "./productCard.css";

const defaultImage = "https://placehold.co/300x150";

function ProductCard(props) {
  const { product } = props;
  const { id, name, description, price, image } = product;

  const productImage = image || defaultImage;

  return (
    <div className="card">
      <img src={productImage} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <span>
        <h2>Precio: ${price}</h2>
      </span>
      <a href="#" className="btn-comprar">
        Comprar
      </a>
    </div>
  );
}

export default ProductCard;
