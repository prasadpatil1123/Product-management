package com.productMangement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.productMangement.model.Product;
import com.productMangement.repository.ProductRepository;

// Annotates the class as a Spring service, 
//making it eligible for automatic component scanning and
// dependency injection.
@Service 
public class ProductServiceImpl implements ProductService {
	
	//used for data access operations on the Product entity.
	@Autowired // for dependency injection.
	private ProductRepository productRepo;
	
	
	@Override
	public Product saveProduct(Product product) {
		return productRepo.save(product);
	}

	@Override
	public List<Product> getAllProduct() {
		return productRepo.findAll();
	}

	@Override
	public Product getProductById(Integer id) {
		return productRepo.findById(id).get();
	}

	@Override
	public String deleteProduct(Integer id) {
		Product product = productRepo.findById(id).get();
		if(product != null) {
			productRepo.delete(product);
			return "Product Delete Successfully";
		}
		return "Someting wrong on server";
	}

	@Override
	public Product editProduct(Product p, Integer id) {
		Product op = productRepo.findById(id).get();
		
		op.setProductName(p.getProductName());
		op.setDescription(p.getDescription());
		op.setPrice(p.getPrice());
		op.setStatus(p.getStatus());
		
		return productRepo.save(op);
	}

}

//This service class acts as a bridge between the controller (or any other client) and the data access layer (repository). 
//It encapsulates business logic related to managing products and delegates data access operations to the ProductRepository. 
//The use of the @Service annotation also allows it to be automatically discovered and instantiated by the Spring container.
