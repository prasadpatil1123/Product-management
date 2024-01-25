package com.productMangement.service;

import java.util.List;

import com.productMangement.model.Product;

public interface ProductService {

    // Method to save a product
    public Product saveProduct(Product product);

    // Method to retrieve all products
    public List<Product> getAllProduct();

    // Method to retrieve a product by its ID
    public Product getProductById(Integer id);

    // Method to delete a product by its ID
    public String deleteProduct(Integer id);

    // Method to edit/update a product
    public Product editProduct(Product product, Integer id);
}
