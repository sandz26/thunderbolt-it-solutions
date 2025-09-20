package com.itbusiness.backend.service;

import com.itbusiness.backend.model.ContactMessage;
import com.itbusiness.backend.repository.ContactRepository;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public ContactMessage saveMessage(ContactMessage contactMessage) {
        return contactRepository.save(contactMessage);
    }

}
