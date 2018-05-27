/**
 * 
 */
package com.employeeHierarchy.models;

import java.util.List;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

/**
 * @author leoliu
 *
 */
@Entity
@DiscriminatorValue("INVALID")
public class Invalid extends Employee {
	
	public Invalid(long employeeId, String name, long managerId) {
		super(employeeId, name, managerId);
	}
	
	@SuppressWarnings("unused")
	private Invalid() {
		super();
	}

	@Override
	public void addSubordinateList(Employee s) {
		// DO NOTHING
		
	}
	
	@Override
	public void addSubordinateList(long id) {
		// DO NOTHING
	}

	@Override
	public void addManagerList(Employee m) {
		// DO NOTHING
		
	}
	
	@Override
	public void addManagerList(long managerId) {
		// DO NOTHING
	}
	
	@Override
	public void setManagerList(List<Long> managerList) {
		//Do NOTHING
	}
	
	
	@Override
	public void setSubordinateList(List<Long> subordinateList) {
		//DO NOTHING
	}

	@Override
	public boolean isCeo() {
		return false;
	}

	@Override
	public boolean isValidEmployee() {
		return false;
	}
	
	@Override
	public String toString() {
		return "Invalid: " + "ID: " + this.getId() + " Employee ID: " + this.getEmployeeId() + " Employee name: " + this.getName() + "\nSubordinate List: " + this.managerList.toString() + "\n";
	}
	
}
