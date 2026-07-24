# Mocking and Stubbing with Mockito

## Objective
Test a service that depends on an external API by mocking the API using Mockito.

## Steps
1. Create a mock object for the external API using Mockito.mock()
2. Stub the mock method to return a predefined value using when().thenReturn()
3. Inject the mock into the service and test its behavior in isolation

## Files
- ExternalApi.java - interface representing the external dependency
- MyService.java - service class that depends on ExternalApi
- MyServiceTest.java - test class using Mockito to mock and stub ExternalApi
- pom.xml - Maven dependencies (JUnit 5 + Mockito)

## Output 
testExternalApi() passes: service.fetchData() returns "Mock Data" as stubbed.
