import React from "react";
import { useDispatch } from "react-redux";
import allActions from "../../redux/actions/index.js";
import styles from "./Button.module.css";

const DelFromCartButton = ({ children, product }) => {
  //Actions Area
  const dispatch = useDispatch();

  const delHandler = () => {
    dispatch(allActions.cartActions.delItemFromCart(product));
  };

  return (
    <button className={styles.customButton} onClick={delHandler}>
      {children}
    </button>
  );
};

export default DelFromCartButton;
