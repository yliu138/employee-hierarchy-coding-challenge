## Assumption
1. There is and should have only one CEO on the top level. If there is no CEO, the service will return an error with status code of <strong>500</strong>.
2. The manager ID with the CEO is set to 0
3. A invalid employee has an employee ID of less than 0

## Project structure
src/main/java/: Serves as the java back-end
src/main/resources/static/: Serves as the Angular 2+ front-end (This is a build version. To view the front-end source code: https://github.com/yliu138/employee-hierarchy-coding-challenge-client)

## Technology used
1. Spring boot
2. Web
3. H2 (In-memory DB) in production, H2 is designed for testing only but in this example, for demonstration, this is used for the runtime database as well.
4. JPA
5. JUnit, Mockito, Jacoco
6. Maven
7. Angular 4
6. Protractor, Jasmine, Karma
8. Webpack

## How to start
Use this code to start the back end
```java
	mvn spring-boot:run -q
```

You can view the employee hierarchy visually by accessing the root path: http://localhost:8080(or other ports)

## Test
### Back-end test
#### Code coverage test
1. tools: Jacoc and Sonar

#### How to start the test
1. Eclipse (Recommended): JUnit test
 
2. Terminal
```java
	mvn clean test
```

### h2 test
There are some pre-populated data in data.sql under the folder resources/. Please feel free to add more tests or modified the tests manually as well by accessing the h2 console: http://localhost:8080/h2-console. 

Remember to put `jdbc:h2:mem:testdb` in the JDBC URL field, and hit "Connect" directly

Add more data running e.g., 
```SQL
	insert into employee(employeeId, name, managerId)
	values(600, 'Andy', 190);
```

## Design pattern used
1. IoC: mainly depedency injection
2. Factory
3. Singleton