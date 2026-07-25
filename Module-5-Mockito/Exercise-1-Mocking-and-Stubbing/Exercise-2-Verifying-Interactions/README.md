# Verifying Interactions with Mockito

## Objective
Ensure that a specific method is called on a mock object during a test.

## Steps
1. Create a mock object for the external API
2. Call the method under test, which internally uses the mock
3. Use verify() to confirm the mock's method was actually called

## Files
- ExternalApi.java - interface representing the external dependency
- MyService.java - service class that depends on ExternalApi
- MyServiceTest.java - test class using Mockito's verify() to check interactions
- pom.xml - Maven dependencies (JUnit 5 + Mockito)

## Output
testVerifyInteraction() passes: confirms that mockApi.getData() was called exactly once during service.fetchData().
<img width="1405" height="255" alt="image" src="https://github.com/user-attachments/assets/3221cd12-7dce-4155-a38f-6bd292f92aa7" />
