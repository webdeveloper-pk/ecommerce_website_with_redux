import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../redux/actions/index.js";

import CategoryUI from "../UI/categoryUI/CategoryUI.js";

const Category = ({ category }) => {
  //Redux Actions Area
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allActions.categoriesActions.fetchSpecificCategory(category));
    // eslint-disable-next-line
  }, []);

  const { specificCategory } = useSelector((state) => state.specificCategory);

  //Component State and Methods
  const [products, setProducts] = useState([]);

  const getData = async () => {
    if (specificCategory.length > 0) {
      setProducts(specificCategory);
    }
  };

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [specificCategory]);

  return (
    <>{products ? <CategoryUI products={products} /> : <div>Loading</div>}</>
  );
};

export default Category;
