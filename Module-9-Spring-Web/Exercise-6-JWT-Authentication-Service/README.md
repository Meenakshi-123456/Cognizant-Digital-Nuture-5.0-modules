# Create Authentication Service that Returns JWT

## Objective
Build an authentication service where user credentials are sent via HTTP Basic Auth, and a JWT (JSON Web Token) is generated and returned upon successful authentication.

## Details
- Sample Request: curl -s -u user:pwd http://localhost:8090/authenticate
- Sample Response: {"token":"eyJhbGciOiJIUzI1NiJ9...."}

## Steps
1. Create AuthenticationController and configure it in SecurityConfig with HTTP Basic Auth
2. Read the Authorization header and decode username/password (handled automatically by Spring Security's Basic Auth filter)
3. Generate a JWT token based on the authenticated user using JwtUtil

## Files
- pom.xml - Spring Security, Spring Web, and JJWT dependencies
- JwtUtil.java - generates a signed JWT using the JJWT library (HS256 algorithm, 10-hour expiration)
- CustomUserDetailsService.java - validates credentials against a hardcoded user (user/pwd)
- AuthenticationController.java - exposes GET /authenticate, returns the generated token as JSON
- SecurityConfig.java - configures HTTP Basic Authentication on the /authenticate endpoint
- application.properties - sets the application port to 8090

## Key Concepts

### Step 1: Authentication controller + SecurityConfig
SecurityConfig protects /authenticate using HTTP Basic Authentication (httpBasic()), which matches the curl -u option used in the request. Spring Security intercepts the request and validates credentials before it reaches the controller.

### Step 2: Reading the Authorization header
This is handled automatically by Spring Security's Basic Auth filter - it decodes the Authorization: Basic <base64> header into username and password, and validates them via CustomUserDetailsService.loadUserByUsername().

### Step 3: Token generation
JwtUtil.generateToken() uses the JJWT library to build a signed JWT containing the username as the subject, issued-at timestamp, and expiration time, signed with a secret key using the HS256 algorithm.

## Output
{"token":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNTcwMzc5NDc0LCJleHAiOjE1NzAzODA2NzR9.t3LRvlCV-hwKfoqZYlaVQqEUiBloWcWn0ft3tgv0dL0"}
