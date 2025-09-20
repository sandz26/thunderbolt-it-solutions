package com.itbusiness.backend.controller;

import com.itbusiness.backend.model.ContactMessage;
import com.itbusiness.backend.service.ContactService;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactController {
    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping 
    public ContactMessage sendContactMessage(@RequestBody @Valid ContactMessage contactMessage) {

        return contactService.saveMessage(contactMessage);


}
}
