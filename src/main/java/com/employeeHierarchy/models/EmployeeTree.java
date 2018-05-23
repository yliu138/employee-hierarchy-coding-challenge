/**
 * 
 */
package com.employeeHierarchy.models;

import java.util.LinkedList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

/**
 * @author leoliu
 *
 */
public class EmployeeTree {
//	The local models
	private long employeeId;
	private String name;
	@JsonBackReference
	private List<EmployeeTree> subordinateList;
	@JsonBackReference
	private List<EmployeeTree> managerList;
	
//	Constructor
	public EmployeeTree(long employeeId, String name) {
		super();
		this.employeeId = employeeId;
		this.name = name;
		this.subordinateList = new LinkedList<EmployeeTree>();
		this.managerList = new LinkedList<EmployeeTree>();
	}
	
	public long getEmployeeId() {
		return employeeId;
	}
	
	public void setEmployeeId(long employeeId) {
		this.employeeId = employeeId;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public List<EmployeeTree> getSubordinateList() {
		return subordinateList;
	}
	
	public void setSubordinateList(List<EmployeeTree> subordinateList) {
		this.subordinateList = subordinateList;
	}
	
	public List<EmployeeTree> getManagerList() {
		return managerList;
	}
	
	public void setManagerList(List<EmployeeTree> managerList) {
		this.managerList = managerList;
	}
	
	public void addSubornateList(EmployeeTree et) {
		this.subordinateList.add(et);
	}
	
	public void addManagerList(EmployeeTree et) {
		this.managerList.add(et);
	}
	
	@Override
	public String toString() {
		return this.employeeId + ": " + this.name + "subList: " + this.subordinateList.toString();
	}
}
