# Hello World RESTful Web Service

## Objective
Write a REST service using Spring Web Framework that returns the text "Hello World!!" via a GET endpoint.

## Details
- Method: GET
- URL: /hello
- Controller: com.cognizant.springlearn.controller.HelloController
- Method Signature: public String sayHello()
- Sample Request: http://localhost:8083/hello
- Sample Response: Hello World!!

## Steps
1. Create a HelloController class annotated with @RestController
2. Map a GET request to /hello using @GetMapping
3. Implement sayHello() to return the hardcoded string "Hello World!!"
4. Include start and end debug logs within the method
5. Set the application port to 8083 in application.properties
6. Test the endpoint in both Chrome browser and Postman

## Key Concepts
- @RestController combines @Controller and @ResponseBody, so return values are written directly to the HTTP response body
- @GetMapping("/hello") maps HTTP GET requests for /hello to the sayHello() method

## Viewing HTTP Headers

### In Chrome DevTools
1. Open DevTools (F12) and go to the Network tab
2. Visit http://localhost:8083/hello
3. Click on the hello request
4. View the Headers section for Request and Response headers (e.g., Content-Type, Content-Length, Date)

### In Postman
1. Create a GET request to http://localhost:8083/hello
2. Click Send
3. Click the Headers tab in the response panel to view all response headers

## Output 
Hello World!!
