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
<img width="1520" height="785" alt="image" src="https://github.com/user-attachments/assets/7ee5d341-61eb-4ac4-8aa2-59332254ea78" />
<img width="1548" height="684" alt="image" src="https://github.com/user-attachments/assets/b8362fa1-9fef-4151-b943-e2a6ade8d82a" />
<img width="1546" height="753" alt="image" src="https://github.com/user-attachments/assets/d29b146a-e8ef-4516-93c6-665a1b8ee329" />
<img width="1526" height="703" alt="image" src="https://github.com/user-attachments/assets/b4137807-9c34-444c-99b5-40343ba90ac9" />
