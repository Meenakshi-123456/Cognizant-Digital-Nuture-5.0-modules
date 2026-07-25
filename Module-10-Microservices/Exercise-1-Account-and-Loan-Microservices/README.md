# Creating Microservices for Account and Loan

## Objective
Build two independent Spring Boot microservices for a bank - one for handling accounts and one for handling loans - each as its own standalone Maven project with its own pom.xml.

## Account Microservice
- Group: com.cognizant, Artifact: account
- Method: GET
- Endpoint: /accounts/{number}
- Port: 8080

### Sample Response
{
  "number": "00987987973432",
  "type": "savings",
  "balance": 234343
}

## Loan Microservice
- Group: com.cognizant, Artifact: loan
- Method: GET
- Endpoint: /loans/{number}
- Port: 8081

### Sample Response
{
  "number": "H00987987972342",
  "type": "car",
  "loan": 400000,
  "emi": 3258,
  "tenure": 18
}

## Project Structure
account/
  pom.xml
  src/main/java/com/cognizant/account/
    AccountApplication.java
    controller/AccountController.java
  src/main/resources/application.properties

loan/
  pom.xml
  src/main/java/com/cognizant/loan/
    LoanApplication.java
    controller/LoanController.java
  src/main/resources/application.properties

## Key Concepts

### Microservice independence
Each service has its own pom.xml, main() class, controller, and configuration - allowing each to be built, deployed, and scaled independently, which is the core principle of a microservices architecture.

### Port conflict
Both services default to port 8080 (Spring Boot's default embedded Tomcat port). Running both simultaneously without changing one causes a "port already in use" bind exception, since only one process can listen on a given port at a time.

### Fix
Setting server.port=8081 in the loan service's application.properties allows both services to run concurrently - account on 8080, loan on 8081.

## Dummy responses
Both controllers return a Map<String, Object>, which Spring automatically serializes to JSON without needing a dedicated model class, since these are simple, hardcoded, backend-free responses for demonstration purposes.

## Testing
1. Start the account service and test http://localhost:8080/accounts/00987987973432
2. Start the loan service and test http://localhost:8081/loans/H00987987972342
3. Both services can run at the same time since they use different ports
<img width="1257" height="496" alt="image" src="https://github.com/user-attachments/assets/b2bcd17a-5333-43cc-b94a-4d2826d0f463" />
<img width="1547" height="716" alt="image" src="https://github.com/user-attachments/assets/1d77bb06-3c83-4a4a-9e45-3663efa8572b" />
<img width="1521" height="728" alt="image" src="https://github.com/user-attachments/assets/5589f54c-9ea9-4a45-85bc-a2abad32aafb" />
<img width="1252" height="492" alt="image" src="https://github.com/user-attachments/assets/4dba24fe-3d45-449a-b8e2-7a0848f586ee" />
<img width="1521" height="718" alt="image" src="https://github.com/user-attachments/assets/e7cb33e6-4f70-4148-9a48-4c032880d957" />
