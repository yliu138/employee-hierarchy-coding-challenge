package com.employeeHierarchy.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import com.employeeHierarchy.models.Employee;
import com.employeeHierarchy.repo.EmployeeRepo;

@SpringBootApplication(scanBasePackages={
		"com.employeeHierarchy.demo",
		"com.employeeHierarchy.repo"
})
@Configuration
@ComponentScan
@EnableAutoConfiguration
public class EmployeeHierarchyApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeHierarchyApplication.class, args);
	}
}

@Component
class EmployeeCommandRunner implements CommandLineRunner{
	@Autowired
	EmployeeRepo employeeRepo;
	
	@Override
	public void run(String... args) throws Exception {
		for (Employee e: this.employeeRepo.findAll()) {
			System.out.println(e.toString());
		}
	}

}

