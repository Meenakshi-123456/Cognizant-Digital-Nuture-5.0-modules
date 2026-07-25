# Spring Data JPA - Quick Example

## Objective
Build a Spring Boot application using Spring Data JPA and Hibernate to connect to a MySQL database and perform basic CRUD-style read operations on a Country entity.

## Software Pre-requisites
- MySQL Server 8.0
- MySQL Workbench 8
- Eclipse IDE for Enterprise Java Developers
- Maven 3.6.2

## Project Setup
- Generated via Spring Initializr (start.spring.io)
- Group: com.cognizant, Artifact: orm-learn
- Dependencies: Spring Boot DevTools, Spring Data JPA, MySQL Driver

## Database Setup
Run database/setup.sql to create the `ormlearn` schema, the `country` table, and insert sample records (IN - India, US - United States of America).

## Project Structure
- src/main/java - application code (model, repository, service, main class)
- src/main/resources - application.properties (database and logging configuration)
- src/test/java - test code (not used in this exercise)

## Key Components
- **Country.java** - JPA entity mapped to the `country` table using @Entity, @Table, @Id, and @Column annotations
- **CountryRepository.java** - Spring Data JPA repository interface extending JpaRepository<Country, String>
- **CountryService.java** - service layer with @Autowired repository and a @Transactional getAllCountries() method
- **OrmLearnApplication.java** - main class; loads the Spring context, retrieves CountryService as a bean, and tests fetching all countries

## Key Concepts
- @SpringBootApplication combines @Configuration, @EnableAutoConfiguration, and @ComponentScan
- @Entity marks a class as a JPA entity
- @Table maps the entity to a specific database table
- @Id marks the primary key field
- @Column maps a field to a specific database column
- @Repository marks the interface as a Spring-managed data access component
- @Service marks the class as a Spring-managed service component
- @Transactional ensures the database operation runs within a transaction

## Output 
Log output shows "Inside main", followed by "Start", the list of Country objects fetched from the database, and "End".
<img width="1024" height="521" alt="image" src="https://github.com/user-attachments/assets/2efa24b8-0058-459f-8436-58f0c9a328a6" />

<img width="1525" height="780" alt="image" src="https://github.com/user-attachments/assets/95253aad-e575-4efc-8022-2cf8586aea22" />
<img width="1518" height="742" alt="image" src="https://github.com/user-attachments/assets/b9047a15-7b5a-4e61-af4a-bb4124e8d948" />
<img width="1546" height="811" alt="image" src="https://github.com/user-attachments/assets/b92ab63b-2469-4600-aa7b-9e8d3a0e0378" />

