package com.itbusiness.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itbusiness.backend.model.Product;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    @GetMapping
    public List<Product> getProducts() {
        return List.of(
            new Product("Shoes", 50.0, "Footwear"),
            new Product("Bags", 30.0, "Accessories"),
            new Product("Hats", 20.0, "Headwear")
        );
    }
}
