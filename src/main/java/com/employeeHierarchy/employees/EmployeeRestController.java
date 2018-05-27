/**
 * 
 */
package com.employeeHierarchy.employees;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin
public class EmployeeRestController {
	
	@Autowired
	EmployeeRepo employeeRepo;
	
	@GetMapping
	Collection<Employee> getAllEmployee() {
		return this.employeeRepo.findAll();
	}
	
	@GetMapping(path = "/map", produces = MediaType.APPLICATION_JSON_VALUE)
	public Map<String, Object> getEmployeeMap() {
		Map<String, Object> entity = new HashMap<String, Object>();
		
		Collection<Employee> employeeList = this.employeeRepo.findAll();
		Map<Long, Employee> employeeMap = new HashMap<Long, Employee>();
		long ceoId = -1;
		
		// to build the employee Map
		for (Employee e: employeeList) {
			employeeMap.put(e.getEmployeeId(), e);
			if (e.isCeo()) {
				ceoId = e.getEmployeeId();
			}
		}
		
		if (ceoId == -1) {
			throw new InvalidDataException();
		}
		
		
		// to fill out all the subordinate and manger lists
		for (Employee e: employeeList) {
			Employee manager = employeeMap.get(e.getManagerId());
			e.addManagerList(manager);
			if (manager != null) {
				manager.addSubordinateList(e);
			}
		}
		
		
		entity.put("ceoId", ceoId);
		entity.put("map", employeeMap);
		
		return entity;
	}
}
