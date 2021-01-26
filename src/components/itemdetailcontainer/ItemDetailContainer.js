import React, { useState, useEffect } from "react";
import ItemDetail from "./itemDetail/ItemDetail.js";

const items = [
  {
    id: 1546,
    title: "Random1",
    description: "Random1",
    price: "80",
    pictureUrl: "http://www.google.com/logo.png",
  },

  {
    id: 65454,
    title: "Random2",
    description: "Random2",
    price: "90",
    pictureUrl: "http://www.google.com/logo.png",
  },

  {
    id: 165126,
    title: "Random3",
    description: "Random3",
    price: "180",
    pictureUrl: "http://www.google.com/logo.png",
  },
];

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const call = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(items);
      }, 2000);
    });

    call.then((response) => {
      setProduct(response[0]);
    });
  }, []);

  return (
    <div className="Container">
      <h2>Aqui estaran los Productos</h2>
      <ItemDetail getItem={product} />
    </div>
  );
}

export default ItemDetailContainer;
