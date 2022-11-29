import { useDispatch } from "react-redux";
import React from "react";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../fetures/productApi";
import { addToCart } from "../../fetures/cartSlice";
const Home = () => {
  const { data, error, isLoading, } = useGetProductsQuery();
  const dispatch = useDispatch();
  const history = useNavigate()
  
  const handleAddCart = (product) => {
    dispatch(addToCart(product));
    History.push("/cart");
  };

  return (
    <div className="home-container">
      {isLoading ? (
        <p>loading</p>
      ) : error ? (
        <p>error </p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data?.map((Products) => (
              <div key={Products.id} className="product">
                <h3>{Products.name}</h3>
                <img src={Products.image} alt={Products.name} />
                 <div className="details">
                  <span>{Products.desc}</span>
                  <span className="price">${Products.price}</span>
                </div>
                <button onClick= {() => handleAddCart(Products)}> Add to Cart</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;