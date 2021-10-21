import React from "react";
import ProductCardUI from "../productCardUI/ProductCardUI";
import styles from "./CategoryUI.module.css";

const CategoryUI = ({ products }) => {
  return (
    <div className={styles.collection}>
      <div className={styles.inner_collection_wrapper}>
        <h1>CATEGORY DETAIL </h1>
        <p>Top Rated Category</p>
      </div>
      <div className={styles.card_wrapper}>
        {products.map((prod) => (
          <ProductCardUI key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default CategoryUI;
