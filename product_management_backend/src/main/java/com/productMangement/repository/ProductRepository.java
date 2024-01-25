package com.productMangement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.productMangement.model.Product;

public interface ProductRepository extends JpaRepository<Product,Integer>{

}
 // JpaRepository is a generic interface that provides CRUD (Create, Read, Update, Delete) operations for JPA entities.
// Product is Model and Integer is primary key.