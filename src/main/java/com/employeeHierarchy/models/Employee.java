/**
 * 
 */
package com.employeeHierarchy.models;

import java.util.LinkedList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
	@JsonIgnore
	private long managerId;
	@Transient
	private List<Long> subordinateList = new LinkedList<Long>();
	@Transient
	private List<Long> managerList = new LinkedList<Long>();
	
	public long getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(long employeeId) {
		this.employeeId = employeeId;
	}
	
	@SuppressWarnings("unused")
	private Employee() {} //JPA
	
	public Employee(long id, String name, long managerId) {
		super();
		this.employeeId = id;
		this.name = name;
		this.managerId = managerId;
	}
	
	public String getName() {
		return this.name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public long getManagerId() {
		return this.managerId;
	}
	
	public void setManagerId(long managerId) {
		this.managerId = managerId;
	}
	
	public List<Long> getSubordinateList() {
		return subordinateList;
	}

	public void setSubordinateList(List<Long> subordinateList) {
		this.subordinateList = subordinateList;
	}

	public List<Long> getManagerList() {
		return managerList;
	}

	public void setManagerList(List<Long> managerList) {
		this.managerList = managerList;
	}
	
	//Add an manager id to the subordinate and manger lists
	public void addSubordinateList(long id) {
		this.subordinateList.add(id);
	}
	
	public void addManagerList(long id) {
		this.managerList.add(id);
	}
	
	@Override
	public String toString() {
		return "Employee ID: " + this.employeeId + " Employee name: " + this.name + " Subordinate List: " + this.managerList.toString();
	}
	
}
