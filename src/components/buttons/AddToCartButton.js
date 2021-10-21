import React from "react";
import { useDispatch } from "react-redux";
import allActions from "../../redux/actions/index.js";
import styles from "./Button.module.css";

const AddToCartButton = ({ children, product }) => {
  //Actions Area
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(allActions.cartActions.addItemToCart(product));
  };

  return (
    <button className={styles.customButton} onClick={addHandler}>
      {children}
    </button>
  );
};

export default AddToCartButton;
