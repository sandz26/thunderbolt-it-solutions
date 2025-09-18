package com.itbusiness.backend;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000") // allow React app during dev
public class ProductController {

    @GetMapping
    public List<String> getProducts() {
        return List.of("Shoes", "Bags", "Hats");
    }
}

