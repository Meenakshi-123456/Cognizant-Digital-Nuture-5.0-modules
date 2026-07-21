# Spring Core – Load Country from Spring Configuration XML

## Objective
Configure a Country bean using a Spring XML configuration file and load it into the application using Spring Core's IoC container.

## Steps
1. Create a Maven project with Spring Context and SLF4J dependencies.
2. Create a Spring configuration file named `country.xml`.
3. Configure a `country` bean with code and name properties.
4. Create the `Country` class with:
   - Instance variables: code and name
   - Default constructor with debug logging
   - Getters and setters with debug logging
   - toString() method
5. Create the `displayCountry()` method in `SpringLearnApplication.java`.
6. Load the Spring configuration using `ClassPathXmlApplicationContext`.
7. Retrieve the bean using `context.getBean("country", Country.class)`.
8. Display the country details using the logger.
9. Execute the application and verify the constructor, setter, and getter logs.

## Project Structure
- src/main/java
  - Country.java
  - SpringLearnApplication.java
- src/main/resources
  - country.xml
- pom.xml
- README.md

## Key Concepts

### Country Bean Configuration
The `country.xml` file stores the bean definition for the Country object. The `<bean>` tag instructs Spring to create an object, while the `<property>` tags inject values into the object's fields.

### Bean Tag
Defines an object that will be managed by the Spring IoC Container.

### id Attribute
Provides a unique identifier for the bean. This identifier is used while retrieving the object using `getBean()`.

### class Attribute
Specifies the fully qualified class name of the object to be created by Spring.

### property Tag
Injects values into the bean's properties using setter methods.

### name Attribute
Represents the property name (instance variable) for which the value should be assigned.

### value Attribute
Represents the actual value injected into the property.

### ApplicationContext
The central interface of the Spring IoC Container. It reads the configuration file, creates objects (beans), performs dependency injection, and manages the complete lifecycle of the beans.

### ClassPathXmlApplicationContext
An implementation of `ApplicationContext` that loads Spring configuration files from the application's classpath.

### context.getBean()
Retrieves the required bean from the Spring IoC Container. When `getBean()` is invoked, Spring returns the already-created bean instance if it exists, otherwise it creates the bean, injects all configured property values, and then returns the object.

### Constructor and Setter Invocation
When the Spring container starts, it first invokes the default constructor to create the object. Then it calls the setter methods to inject the values defined in `country.xml`. This sequence can be verified using the debug log messages.

## Output 
Inside Country Constructor.
Inside setCode()
Inside setName()
Country : Country [code=IN, name=India]
