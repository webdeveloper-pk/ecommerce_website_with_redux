import React from "react";
import styles from "./HomeCategoriesUI.module.css";

import { Link } from "react-router-dom";
import ProductCardUI from "../productCardUI/ProductCardUI";

const HomeCategoriesUI = ({ category, products }) => {
  return (
    <div className={styles.collection}>
      <div className={styles.inner_collection_wrapper}>
        <Link to={`/categories/${category}`} className={styles.collection_link}>
          <h1>{category} COLLECTION </h1>
        </Link>
        <p>Top Rated Category</p>
      </div>
      <div className={styles.card_wrapper}>
        { products ? (products.map((prod) => (
          <ProductCardUI key={prod.id} prod={prod} />
        ))
        ): <div></div>}
      </div>
    </div>
  );
};

export default HomeCategoriesUI;
