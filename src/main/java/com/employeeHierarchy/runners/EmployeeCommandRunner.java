/**
 * 
 */
package com.employeeHierarchy.runners;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.employeeHierarchy.models.Employee;
import com.employeeHierarchy.repo.EmployeeRepo;

/**
 * @author leoliu
 * This class mainly holds the logic for first running the server
 */
@Component
public class EmployeeCommandRunner implements CommandLineRunner{
	@Autowired
	EmployeeRepo employeeRepo;
	
	@Override
	public void run(String... args) throws Exception {
		System.out.println("Printing all the employees ===");
		for (Employee e: this.employeeRepo.findAll()) {
			System.out.println(e.toString());
		}
		
		System.out.println("All available APIs:\n/employee/map: list the employee hierarchy. \n/employee: list all the employees");
	}

}