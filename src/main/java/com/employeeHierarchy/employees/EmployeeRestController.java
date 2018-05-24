/**
 * 
 */
package com.employeeHierarchy.employees;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employeeHierarchy.models.Employee;
import com.employeeHierarchy.repo.EmployeeRepo;

/**
 * @author Leo Liu
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
	
	@GetMapping(path = "/tree", produces = MediaType.APPLICATION_JSON_VALUE)
	public Map<Long, Employee> getEmployeeTree() {
		Collection<Employee> employeeList = this.employeeRepo.findAll();
		Map<Long, Employee> employeeMap = new HashMap<Long, Employee>();
		Employee ceo = null;
		
		// to build the employee Map
		for (Employee e: employeeList) {
			employeeMap.put(e.getEmployeeId(), e);
		}
		
		
		// to build the employee tree
		for (Employee e: employeeList) {
			Employee manager = employeeMap.get(e.getManagerId());
			e.addManagerList(manager);
			if (!e.isCeo()) {
				manager.addSubordinateList(e.getEmployeeId());
			}
		}
		
		return employeeMap;
	}
	
//	private Map<Long, Employee> getAllEmployeeMap() {
//		Map<Long, Employee> employeeMap = new HashMap<Long, Employee>();
//		for (Employee e: this.employeeRepo.findAll()) {
//			employeeMap.put(e.getEmployeeId(), e);
//		}
//		return employeeMap;
//	}
}
