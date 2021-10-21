import React from "react";
import styles from "./CartUI.module.css";

import AddToCartButton from "../../buttons/AddToCartButton";
import DelFromCartButton from "../../buttons/DelFromCartButton";

const CartItem = ({ item }) => {
  return (
    <div className={styles.left_inner_wrapper}>
      <div className={styles.image_wrapper}>
        <img src={item.image} alt={item.title} />
      </div>
      <div className={styles.title_wrapper}> {item.title.substring(0, 15)}</div>
      <div className={styles.title_wrapper}>{item.category}</div>
      <div className={styles.counter_wrapper}>
        <DelFromCartButton product={item}>
          <p className={styles.counter_wrapper_dec}>-</p>
        </DelFromCartButton>
        <span>{item.quantity}</span>
        <AddToCartButton product={item}>
          <p className={styles.counter_wrapper_inc}>+</p>
        </AddToCartButton>
      </div>
      <div className={styles.price_wrapper}>{item.price * item.quantity}$</div>
    </div>
  );
};

export default CartItem;
