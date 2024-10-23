import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DessertList.css'; 

function DessertList() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const desserts = [
    { id: 1, name: 'Chocolate Cake', price: 120, image: 'https://iambaker.net/wp-content/uploads/2013/11/chocolate-cake-slice-e1562794545746.jpg' },
    { id: 2, name: 'Ice Cream', price: 110, image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg' },
    {id:3,name:' Color Macarons',price:110,image:'https://www.whatchefswant.com/wp-content/uploads/2019/06/Vive-Color-Macarons-500x394.jpg'},
    {id:4,name:'Tres Leches Cake',price:40,image:'https://www.whatchefswant.com/wp-content/uploads/2019/06/16705.jpg'},
    {id:5,name:' Puddings',price:80,image:'https://ediblebloglive.wpengine.com/wp-content/uploads/2022/03/Pudding-min-300x200.jpg'},
    {id:6,name:'Jellied desserts ',price:75,image:'https://ediblebloglive.wpengine.com/wp-content/uploads/2022/03/Gelatin-min-300x300.jpg'},
    {id:7,name:'Blueberry Cake',price:60,image:'https://livetosweet.com/wp-content/uploads/2022/05/Blueberry-Angel-Food-Cake.jpg'},
    {id:8,name:'Mousse',price:100,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVeunqkmtd_McRIycEKgiXu2hAOAyACERkUg&s'},
    {id:9,name:'Triple Chocolate',price:90,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMZF6gmTposc5SFZBxKM5tdHxO9D9BERu0qQ&s'},
    {id:10,name:'Fudgy Brownies ',price:120,image:'https://www.inspiredtaste.net/wp-content/uploads/2024/01/Brownies-Recipe-Video.jpg'},
  ];

  const addToCart = (dessert) => {
    setCartItems([...cartItems, dessert]);
  };

  return (
    <div className="dessert-list">
      <div className="header-container">
      <h1>Dessert Shop</h1>
    <button onClick={() => navigate('/cart', { state: { cartItems } })} className="go-to-cart">
      Go to Cart
    </button>
    </div>
    <div className="grid-container">
      {desserts.map((dessert) => (
        <div key={dessert.id} className="grid-item">
          <img src={dessert.image} alt={dessert.name} className="dessert-image" />
          <h2>{dessert.name}</h2>
          <p>${dessert.price}</p>
          <button onClick={() => addToCart(dessert)}>Add to Cart</button>
        </div>
      ))}
    </div>
  </div>
  );
}

export default DessertList;
