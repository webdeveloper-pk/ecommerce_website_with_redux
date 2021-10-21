import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartUI from "../../components/UI/cartUI/CartUI";

const CartList = () => {
  const [cartList, setCartList] = useState([]);
  const [total, setTotal] = useState(0);

  const { cartItems } = useSelector((state) => state.cartReducer);
  const { subTotal } = useSelector((state) => state.cartReducer);

  useEffect(() => {
    setCartList(cartItems);
    setTotal(subTotal);
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [cartItems]);

  return <CartUI cartList={cartList} total={total} />;
};

export default CartList;
