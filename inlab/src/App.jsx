import { useState } from "react";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Mouse",
      price: "$20",
      shortDesc: "Ergonomic design with smooth tracking.",
      fullDesc: "This wireless mouse offers ergonomic comfort, long battery life, and precise tracking for everyday tasks.",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: "$60",
      shortDesc: "RGB backlit keys and fast response.",
      fullDesc: "This keyboard features customizable RGB lighting and tactile switches for a satisfying typing experience.",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 3,
      name: "Bluetooth Headphones",
      price: "$45",
      shortDesc: "Noise-cancelling and comfortable.",
      fullDesc: "Enjoy crystal-clear sound and comfort with these Bluetooth headphones that provide long battery life.",
      image: "https://via.placeholder.com/200"
    }
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="container">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((p) => (
          <div key={p.id} className="product-card" onClick={() => setSelectedProduct(p)}>
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <p>{p.shortDesc}</p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="popup">
          <div className="popup-content">
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.fullDesc}</p>
            <button onClick={() => setSelectedProduct(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
