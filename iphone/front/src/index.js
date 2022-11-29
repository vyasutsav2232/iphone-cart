import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import ProductReducer,{ProductsFetch} from "./fetures/Productslice";
import { productApi } from "./fetures/productApi";
import cartReducer  from './fetures/cartSlice';

const store = configureStore({
  reducer: {
    products: ProductReducer,
    cart: cartReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
    middleware:(getDefaultMiddleware) =>  getDefaultMiddleware().concat
    (productApi.middleware)
  });

store.dispatch(ProductsFetch())

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
