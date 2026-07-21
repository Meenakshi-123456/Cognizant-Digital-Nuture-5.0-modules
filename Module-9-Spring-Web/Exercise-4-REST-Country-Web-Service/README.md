# REST - Country Web Service

## Objective
Write a REST service that returns India country details using the Spring Web Framework.

## Details
- URL: /country
- Controller: com.cognizant.springlearn.controller.CountryController
- Method Annotation: @RequestMapping
- Method Name: getCountryIndia()
- Sample Request: http://localhost:8083/country

## Sample Response
{
  "code": "IN",
  "name": "India"
}

## Steps
1. Create a CountryController class annotated with @RestController
2. Map a GET request to /country using @RequestMapping
3. Load the India Country bean from country.xml using ClassPathXmlApplicationContext
4. Return the Country object from getCountryIndia()

## Key Concepts

### What happens in the controller method?
The method loads a Spring ApplicationContext from country.xml and retrieves the country bean, which is already populated with code=IN and name=India via property injection. The fully initialized Country object is then returned.

### How is the bean converted into a JSON response?
Because CountryController is annotated with @RestController (which includes @ResponseBody), Spring does not treat the return value as a view name. Instead, the returned Country object is passed to Jackson, which serializes it into JSON using its getter methods - getCode() becomes "code" and getName() becomes "name". This is handled through Spring's HTTP Message Conversion mechanism.

## Viewing HTTP Headers

### In Chrome DevTools
1. Open DevTools (F12) and go to the Network tab
2. Visit http://localhost:8083/country
3. Click on the country request
4. View the Headers section - note Content-Type: application/json in the response headers

### In Postman
1. Create a GET request to http://localhost:8083/country
2. Click Send
3. Click the Headers tab in the response panel to view Content-Type and other response headers

## Output 
{
  "code": "IN",
  "name": "India"
}
