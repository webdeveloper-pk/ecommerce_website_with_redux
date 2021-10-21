import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../redux/actions/index.js";

import OurServices from "../../components/UI/ourServicesUI/OurServices";
import CarSlider from "../../components/UI/carouselUI";
import HomeCategoriesUI from "../../components/UI/homeCategoriesUI/HomeCategoriesUI.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import styles from "./Home.module.css";

const Home = () => {
  //Actions Area
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allActions.categoriesActions.fetchAllCategories());
    dispatch(allActions.productsActions.fetchAllProducts());
    // eslint-disable-next-line
  }, []);

  //Selectors
  const { products } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

  //Get Products of Respective Categories
  let firstRun = false;
  const getProducts = async (prods, category) => {
    let result = await prods.filter((item) => item.category === category);
    result = await result.slice(0, 4);
    return result;
  };

  //Get Initial Data when Component Renders
  const [homeData, setHomeData] = useState();
  const getInitialData = async () => {
    firstRun = true;

    for (let i = 0; i < categories.length; i++) {
      let prods = products;
      let result = await getProducts(prods, categories[i]);
      setHomeData((item) => {
        return { ...item, [categories[i]]: result };
      });
    }
  };

  useEffect(() => {
    if (categories.length > 0 && products.length > 0 && firstRun === false) {
      getInitialData();
    }

    // eslint-disable-next-line
  }, [categories, products]);

  return (
    <>
      <CarSlider />
      {homeData ? (
        Object.keys(homeData).map((key, index) => (
          <HomeCategoriesUI
            key={index}
            category={key}
            products={homeData[key]}
          />
        ))
      ) : (
        <div>
          <FontAwesomeIcon icon={faSpinner} className={styles.icon} />
        </div>
      )}
      <OurServices />
    </>
  );
};

export default Home;
