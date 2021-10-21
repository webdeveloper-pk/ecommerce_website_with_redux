import React from "react";
import SummaryItemUI from "../summaryItemUI/SummaryItemUI.js";
import styles from "./OrderSummaryUI.module.css";

import { useDispatch } from "react-redux";
import allActions from "../../../redux/actions/index.js";

const OrderSummaryUI = ({ cartItems, subTotal }) => {
  //Actions Area
  const dispatch = useDispatch();

  const emptyCartHandler = () => {
    dispatch(allActions.cartActions.emptyCart());
    alert("Order Confirmed")
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.left_wrapper}>
        <h1>DELIVERY DETAILS</h1>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Email Address" />
        <input type="text" placeholder="City Name" />
        <textarea placeholder="Address" cols="30" rows="8"></textarea>
        <button className={styles.submit_button}>SUMBIT</button>
      </div>
      <div className={styles.right_wrapper}>
        <h1>PRODUCT SUMMARY</h1>
        <div className={styles.summaryItemContainer}>
          <SummaryItemUI cartItems={cartItems} />
        </div>
        <h4>Sub Total : {subTotal}$ </h4>
          <button onClick={emptyCartHandler} className={styles.confirm_button}>
            CONFIRM
          </button>
      </div>
    </div>
  );
};

export default OrderSummaryUI;
