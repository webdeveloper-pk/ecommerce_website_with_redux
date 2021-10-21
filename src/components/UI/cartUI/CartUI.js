import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import styles from "./CartUI.module.css";

const CartUI = ({ cartList, total }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner_wrapper}>
        <div className={styles.left_flex}>
          <div className={styles.heading}>
            <h2>Your Shopping Cart</h2>
          </div>
          <div className={styles.product}>
            {cartList.length ? (
              cartList.map((item) => <CartItem key={item.id} item={item} />)
            ) : (
              <div>No Product Added yet to cart </div>
            )}
          </div>
          <div className={styles.heading}>
            <Link to="/home" className={styles.link}>
              Back to Shop
            </Link>
            <p className={styles.price}>Sub Total : {total} $</p>
          </div>
        </div>
        <div className={styles.right_flex}>
          <h2>Payment Methods</h2>
          <div className={styles.rightTop_flex}>
            <div className={styles.payment_wrapper}>
              <h3>Card Details</h3>
              <h3>/</h3>
              <h3>Cash Details</h3>
            </div>
            <div className={styles.payment_details}>
              <h5>Card Number</h5>
              <input />
              <h5>Expiry Date</h5>
              <input />
            </div>
          </div>
          <div className={styles.rightBottom_flex}>
            {cartList.length ? (
              <Link to="/summary" className={styles.checkout_link}>
                Checkout
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartUI;
