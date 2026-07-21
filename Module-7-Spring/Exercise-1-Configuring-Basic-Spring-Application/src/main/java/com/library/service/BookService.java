package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    // Setter for dependency injection via XML config
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
