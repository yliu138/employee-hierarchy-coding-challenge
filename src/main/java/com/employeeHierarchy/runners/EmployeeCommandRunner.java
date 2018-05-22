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
 *
 */
@Component
public class EmployeeCommandRunner implements CommandLineRunner {
	@Autowired
	EmployeeRepo employeeRepo;
	
	@Override
	public void run(String... args) throws Exception {
		for (Employee e: this.employeeRepo.findAll()) {
			System.out.println(e.toString());
		}
	}

}
