import React from "react";
import axios from "axios";
const BASE_URL = "http://localhost:8080";

// class ProductService {
//   saveProduct(product) {
//     // return axios.post(API_URL + "/saveProduct", product);
//     return axios.post(`${API_URL}/saveProduct`, product);
//   }
//   getAllProduct() {
//     // return axios.get(API_URL + "/");
//     return axios.get(API_URL);
//   }
//   getProductById(id) {
//     // return axios.get(API_URL + "/" + id);
//     return axios.get(`${API_URL}/${id}`);
//   }
//   deleteProduct(id) {
//     // return axios.get(API_URL + "/deleteProduct/" + id);
//     return axios.get(`${API_URL}/deleteProduct/${id}`);
//   }
//   editProduct(product) {
//     // return axios.post(API_URL + "/editProduct/" + product.id, product);
//     return axios.post(`${API_URL}/editProduct/${product.id}`, product);
//   }
// }
// export default new ProductService();

const productApiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // You can add any other headers here
  },
});

const ENDPOINTS = {
  GET: "/",
  POST: "/saveProduct",
  PUT: "/editProduct/",
  DELETE: "/deleteProduct/",
  // Add more endpoints as needed
};

export const getById = async (id) => {
  try {
    const response = await productApiService.get(`${ENDPOINTS.GET + id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getAll = async (id) => {
  try {
    const response = await productApiService.get(`${ENDPOINTS.GET}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const createProduct = async (product) => {
  try {
    const response = await productApiService.post(`${ENDPOINTS.POST}`, product);
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateProduct = async (product) => {
  try {
    const response = await productApiService.put(
      `${ENDPOINTS.PUT + product.id}`,
      product
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await productApiService.delete(`${ENDPOINTS.DELETE + id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

// export default product.service
