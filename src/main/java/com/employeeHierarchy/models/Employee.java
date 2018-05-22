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
	private long id;
	private String name;
	private String managerId;
	
	public long getId() {
		return this.id;
	}
	
	public Employee(long id, String name, String managerId) {
		super();
		this.id = id;
		this.name = name;
		this.managerId = managerId;
	}
	
	public void setId(long id) {
		this.id = id;
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
	
}
