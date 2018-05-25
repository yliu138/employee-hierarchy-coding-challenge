/**
 * 
 */
package com.employeeHierarchy.repo;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.employeeHierarchy.models.Employee;

/**
 * @author leoliu
 *
 */
@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Long> {
	Collection<Employee> findEmployeeByName(String name);
}
