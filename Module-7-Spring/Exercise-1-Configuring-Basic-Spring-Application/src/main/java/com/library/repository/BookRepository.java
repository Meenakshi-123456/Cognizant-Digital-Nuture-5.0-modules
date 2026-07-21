package com.library.repository;

public class BookRepository {

    public void save() {
        System.out.println("Book saved to repository.");
    }

    public void findAll() {
        System.out.println("Fetching all books from repository.");
    }
}
