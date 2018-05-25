## Assumption
1. There is only one CEO on the top level
2. The manager ID with the CEO is set to -1
3. A invalid employee has an employee ID of less than 0


## How to start

## Test

## Design pattern used
1. IoC: mainly depedency injection
2. Factory
3. Singleton as the employeeHelper might be used in other places through the project


This restful API uses Spring boot, h2 with JUnit test framework

IoC design pattern
Composite design pattern

Use this code to start the back end
```java
	mvn spring-boot:run -q
```