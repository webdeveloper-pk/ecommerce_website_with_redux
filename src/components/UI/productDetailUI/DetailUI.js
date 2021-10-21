import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import AddToCartButton from "../../buttons/AddToCartButton.js";
import styles from "./Product.module.css";

const DetailUI = ({ product }) => {
  return (
    <div>
      {product ? (
        <div className={styles.wrapper}>
          <div className={styles.product_wrapper}>
            <div className={styles.image_wrapper}>
              <img alt={product.title} src={product.image} />
            </div>
            <div className={styles.image_bottom_wrapper}>
              <img alt={product.title} src={product.image} />
              <img alt={product.title} src={product.image} />
              <img alt={product.title} src={product.image} />
              <img alt={product.title} src={product.image} />
            </div>
          </div>
          <div className={styles.detail_wrapper}>
            <div className={styles.title_wrapper}>
              <h1>{product?.title?.substring(0, 15)}</h1>
              <p className={styles.rating}>{product?.rating?.rate} RATING</p>
            </div>
            <h4 className={styles.category}>{product.category}</h4>
            <h3>
              <span className={styles.price}>
                <del>{parseInt(product.price) + 10}$</del>
              </span>
              {product.price}$
            </h3>
            <h5>DESCRIPTION</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes
            </p>
            <div className={styles.colors}>
              <h4>COLOURS</h4>
              <button> </button>
              <button> </button>
              <button> </button>
              <button> </button>
            </div>
            <div className={styles.sizes}>
              <h4>SIZES</h4>
              <span>8 </span>
              <span> 9</span>
              <span> 10</span>
              <span> 11</span>
            </div>
            <div>
              <AddToCartButton product={product}>
                <div className={styles.btn}>Add to Cart</div>
              </AddToCartButton>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <FontAwesomeIcon icon={faSpinner} className={styles.icon} />
        </div>
      )}
    </div>
  );
};

export default DetailUI;
