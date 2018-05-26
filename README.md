## Assumption
1. There is and should have only one CEO on the top level. If there is no CEO, the service will return an error
2. The manager ID with the CEO is set to 0
3. A invalid employee has an employee ID of less than 0

## Technology used
1. Spring boot
2. Web
3. H2 (In-memory DB) in practice, H2 is designed for testing only but in this example, for demonstration, this is used for the runtime database as well.
4. JPA
5. JUnit, Mockito
6. Maven
7. Angular 4
6. Protractor, Jasmine, Karma
8. Webpack

## How to start
Use this code to start the back end
```java
	mvn spring-boot:run -q
```

## Test
### Back-end test
#### Code coverage test
1. tools: Jacoc and Sonar
2. How to start the test 
2.1 Terminal
```java
	mvn clean test
```
2.2 Eclipse (Recommended): JUnit test

Eclipse

## Design pattern used
1. IoC: mainly depedency injection
2. Factory
3. Singleton as the employeeHelper might be used in other places through the project


This restful API uses Spring boot, h2 with JUnit test framework