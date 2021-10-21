import axios from "axios";

export class productApi {
  async getAllProducts() {
    let result = await axios.get(`https://fakestoreapi.com/products`);
    if (result && result.data) {
      return result.data;
    }
  }

  async getProductDetails(id) {
    let result = await axios.get(`https://fakestoreapi.com/products/${id}`);
    if (result && result.data) {
      return result.data;
    }
  }

  async getAllCategories() {
    let result = await axios.get(
      `https://fakestoreapi.com/products/categories`
    );
    if (result && result.data) {
      return result.data;
    }
  }

  async getSpecificCategory(category) {
    let result = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
    if (result && result.data) {
      return result.data;
    }
  }
}
