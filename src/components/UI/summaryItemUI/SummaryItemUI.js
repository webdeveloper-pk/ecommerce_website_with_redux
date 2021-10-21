import React from "react";
import DelFromCartButton from "../../buttons/DelFromCartButton";
import styles from "./SummaryItemUI.module.css";

const SummaryItemUI = ({ cartItems }) => {
  return (
    <>
      {cartItems ? (
        cartItems.map((item) => (
          <div key={item.id} className={styles.product_wrapper}>
            <div className={styles.inner_wrapper}>
              <p>{item.title}</p>
              <p>{item.price}$</p>
              <DelFromCartButton product={item}>Delete</DelFromCartButton>
            </div>
          </div>
        ))
      ) : (
        <div>
          <h3>Empty Cart! Maybe Shop?</h3>
        </div>
      )}
    </>
  );
};

export default SummaryItemUI;
