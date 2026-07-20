# REST - Get Country Based on Country Code

## Objective
Write a REST service that returns a specific country based on a case-insensitive country code lookup.

## Details
- Controller: com.cognizant.springlearn.controller.CountryController
- Method Annotation: @GetMapping("/countries/{code}")
- Method Name: getCountry(String code)
- Service Method: com.cognizant.springlearn.service.CountryService.getCountry(String code)
- Sample Request: http://localhost:8083/countries/in

## Sample Response
{
  "code": "IN",
  "name": "India"
}

## Steps
1. Get the country code using @PathVariable
2. Load the country list from country.xml (using Spring's util:list to group multiple Country beans)
3. Use a lambda expression with equalsIgnoreCase() to perform a case-insensitive match
4. Return the matching country

## Key Concepts

### @PathVariable
Extracts the {code} segment from the URL path (e.g., "in" from /countries/in) and binds it to the code method parameter.

### countryList bean
Defined using Spring's util:list tag, which references four individual Country beans (US, DE, IN, JP) and groups them into a single List<Country> bean.

### Case-insensitive matching with lambda
Uses .filter(country -> country.getCode().equalsIgnoreCase(code)) to check each country in the stream, so "in", "IN", or "In" in the URL all correctly match "IN" in the data.

## Countries available
- US - United States
- DE - Germany
- IN - India
- JP - Japan

## Output 
Request to /countries/in returns:
{
  "code": "IN",
  "name": "India"
}
