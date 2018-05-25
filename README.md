## Assumption
1. There is only one CEO on the top level
2. The manager ID with the CEO is set to -1
3. A invalid employee has an employee ID of less than 0


## How to start
Use this code to start the back end
```java
	mvn spring-boot:run -q
```

## Test
### Back-end test
#### Code coverage test
1. tools: Jacoc and Sonar
2. How to start the test ```java
	mvn clean test
```

## Design pattern used
1. IoC: mainly depedency injection
2. Factory
3. Singleton as the employeeHelper might be used in other places through the project


This restful API uses Spring boot, h2 with JUnit test framework