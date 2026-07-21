package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    // Setter method for Dependency Injection - Spring calls this
    // automatically when wiring beans defined in applicationContext.xml
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook() {
        System.out.println("BookService: Adding a new book...");
        bookRepository.save();
    }

    public void listBooks() {
        System.out.println("BookService: Listing all books...");
        bookRepository.findAll();
    }
}
