# Create a Spring Web Project using Maven

## Objective
Set up a basic Spring Boot Web project using Spring Initializr, with Spring Boot DevTools and Spring Web dependencies.

## Steps
1. Generate the project via Spring Initializr (start.spring.io)
   - Group: com.cognizant, Artifact: spring-learn
   - Dependencies: Spring Boot DevTools, Spring Web
2. Extract and import the project into Eclipse as an existing Maven project
3. Include logging in the main() method to verify execution
4. Run SpringLearnApplication and confirm the log output

## Project Structure
- src/main/java - application code (SpringLearnApplication.java)
- src/main/resources - application configuration (application.properties)
- src/test/java - test code (auto-generated context load test)

## Key Concepts

### main() method walkthrough
SpringApplication.run() bootstraps the Spring Boot application - it starts the embedded web server (Tomcat, via spring-boot-starter-web), initializes the Spring application context, and performs component scanning. The LOGGER.info("Inside main") line confirms the method executed successfully after the context has started.

### @SpringBootApplication annotation
A meta-annotation combining three annotations:
- @Configuration - marks the class as a source of bean definitions
- @EnableAutoConfiguration - enables Spring Boot's auto-configuration based on dependencies present on the classpath (e.g., auto-configures an embedded Tomcat server because spring-boot-starter-web is included)
- @ComponentScan - scans the package and sub-packages for Spring-managed components

### pom.xml walkthrough
- spring-boot-starter-parent - parent POM that manages dependency versions
- spring-boot-starter-web - brings in Spring MVC, embedded Tomcat, and JSON support (Jackson) for building web applications
- spring-boot-devtools - enables automatic restarts and live reload during development
- spring-boot-starter-test - testing dependencies (JUnit, Mockito, Spring Test)
- spring-boot-maven-plugin - packages the app as an executable JAR and enables running via mvn spring-boot:run

### Dependency Hierarchy
Opening pom.xml in Eclipse and viewing the "Dependency Hierarchy" tab shows the full tree of transitive dependencies pulled in by spring-boot-starter-web, including Tomcat, Jackson, and Spring MVC - useful for understanding the complete set of libraries included in the build.

## Output (expected)
Log output includes "Inside main" after the Spring Boot application context has started successfully.
