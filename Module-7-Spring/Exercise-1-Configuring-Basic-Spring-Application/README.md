# Configuring a Basic Spring Application

## Objective
Set up a Spring Core project for a library management system using XML-based configuration and dependency injection.

## Steps
1. Create a Maven project with Spring Core dependency
2. Define BookService and BookRepository classes
3. Configure beans and wire dependencies in applicationContext.xml
4. Load the Spring context in MainApp and test the configuration

## Files
- pom.xml - Maven dependency for Spring Context
- src/main/java/com/library/repository/BookRepository.java
- src/main/java/com/library/service/BookService.java
- src/main/resources/applicationContext.xml - bean definitions and dependency injection
- MainApp.java - loads the Spring context and tests the beans

## Output 
BookService: Adding a new book...
Book saved to repository.
BookService: Listing all books...
Fetching all books from repository.
