import React from "react";
import OrderSummaryUI from "../UI/orderSummaryUI/OrderSummaryUI";

import { useSelector } from "react-redux";

const OrderSummary = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const { subTotal } = useSelector((state) => state.cartReducer);

  return <OrderSummaryUI cartItems={cartItems} subTotal={subTotal} />;
};

export default OrderSummary;
