import React from "react";
import { useParams } from "react-router";
import Category from "../../components/category/Category";

const Categories = () => {
  const { category } = useParams();

  return <Category category={category} />;
};

export default Categories;
