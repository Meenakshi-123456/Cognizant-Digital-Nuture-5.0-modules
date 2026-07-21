# Implementing Dependency Injection

## Objective
Manage dependencies between BookService and BookRepository using Spring's IoC and Dependency Injection.

## Steps
1. Update applicationContext.xml to wire BookRepository into BookService
2. Ensure BookService has a setter method for BookRepository (setter injection)
3. Run LibraryManagementApplication to verify the dependency injection works

## Files
- pom.xml - Maven dependency for Spring Context
- src/main/java/com/library/repository/BookRepository.java
- src/main/java/com/library/service/BookService.java - has setBookRepository() for DI
- src/main/resources/applicationContext.xml - wires BookRepository into BookService
- LibraryManagementApplication.java - loads context and verifies DI

## Output (expected)
BookService: Adding a new book...
Book saved to repository.
BookService: Listing all books...
Fetching all books from repository.
