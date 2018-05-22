/**
 * 
 */
package com.employeeHierarchy.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * @author leo liu
 *
 */
@Entity
public class Employee {
	@Id
	@GeneratedValue
	private long employeeId;
	private String name;
	private String managerId;
	
	public long getId() {
		return this.employeeId;
	}
	
	@SuppressWarnings("unused")
	private Employee() {} //JPA
	
	public Employee(long id, String name, String managerId) {
		super();
		this.employeeId = id;
		this.name = name;
		this.managerId = managerId;
	}
	
	public void setId(long id) {
		this.employeeId = id;
	}
	
	public String getName() {
		return this.name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getManagerId() {
		return this.managerId;
	}
	
	public void setManagerId(String managerId) {
		this.managerId = managerId;
	}
	
	@Override
	public String toString() {
		return "Employee ID: " + this.employeeId + " Employee name: " + this.name + " Manager ID: " + this.managerId;
	}
	
}
