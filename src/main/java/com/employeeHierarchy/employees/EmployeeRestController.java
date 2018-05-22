/**
 * 
 */
package com.employeeHierarchy.employees;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employeeHierarchy.models.Employee;
import com.employeeHierarchy.repo.EmployeeRepo;

/**
 * @author leoliu
 *
 */
@RestController
@RequestMapping("/employee")
public class EmployeeRestController {
	@Autowired
	EmployeeRepo employeeRepo;
	
	@GetMapping
	Collection<Employee> getAllEmployee() {
		return this.employeeRepo.findAll();
	}
	
	@GetMapping("/map")
	Map<Long, Employee> getAllEmployeeMap() {
		Map<Long, Employee> employeeMap = new HashMap<Long, Employee>();
		for (Employee e: this.employeeRepo.findAll()) {
			employeeMap.put(e.getId(), e);
		}
		return employeeMap;
	}
}
