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
@DiscriminatorValue("CEO")
public class Ceo extends Employee {

	public Ceo(long employeeId, String name, long managerId) {
		super(employeeId, name, managerId);
	}
	
	@SuppressWarnings("unused")
	private Ceo() {
		super();
	}

	@Override
	public boolean isCeo() {
		return true;
	}
	
	@Override
	public void addManagerList(long id) {
		//DO NOTHING: AS CEO WON'T NEED ANY MANAGER ID
	}
	
	@Override
	public void setManagerList(List<Long> managerList) {
		//DO NOTHING
	}
	
	
	@Override
	public String toString() {
		return "ID: " + this.getId() + " Employee ID: " + this.getEmployeeId() + " Employee name: " + this.getName() + " with Role: CEO " + "\nSubordinate List: " + this.managerList.toString() + "\n";
	}

	@Override
	public void addSubordinateList(Employee s) {
		if (s != null && s.isValidEmployee()) {
			this.subordinateList.add(s.getEmployeeId());
		}
	}

	@Override
	public void addManagerList(Employee m) {
		// DO NOTHING
		
	}

	@Override
	public boolean isValidEmployee() {
		return true;
	}
}
