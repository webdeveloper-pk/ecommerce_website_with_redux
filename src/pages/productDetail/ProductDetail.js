import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import allActions from "../../redux/actions/index.js";
import DetailUI from "../../components/UI/productDetailUI/DetailUI.js";

const ProductDetail = () => {
  const { id } = useParams();

  //Actions Area
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allActions.productsActions.fetchProductDetails(id));
    // eslint-disable-next-line
  }, []);

  //Select State from Redux
  const { productDetails } = useSelector((state) => state.productDetails);

  const [product, setProduct] = useState();
  const getProduct = () => {
    if (productDetails !== null) {
      setProduct(productDetails);
    }
  };

  useEffect(() => {
    getProduct();
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [productDetails]);

  return (
    <div>
      <DetailUI product={product} />
    </div>
  );
};

export default ProductDetail;
