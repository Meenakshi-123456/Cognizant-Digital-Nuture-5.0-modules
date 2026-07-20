# Logging Error Messages and Warning Levels

## Objective
Demonstrate logging error and warning messages using SLF4J with Logback.

## Steps
1. Add SLF4J and Logback dependencies to pom.xml
2. Create a Logger instance using LoggerFactory.getLogger()
3. Log messages at ERROR and WARN levels

## Files
- pom.xml - Maven dependencies (SLF4J API + Logback Classic)
- LoggingExample.java - demonstrates logger.error() and logger.warn()

## Output (expected)
ERROR LoggingExample - This is an error message
WARN  LoggingExample - This is a warning message
