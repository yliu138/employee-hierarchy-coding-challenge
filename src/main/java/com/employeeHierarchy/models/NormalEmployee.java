/**
 * 
 */
package com.employeeHierarchy.models;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

/**
 * @author leoliu
 *
 */
@Entity
@DiscriminatorValue("NORMAL")
public class NormalEmployee extends Employee{

	public NormalEmployee(long employeeId, String name, long managerId) {
		super(employeeId, name, managerId);
	}
	
	@SuppressWarnings("unused")
	private NormalEmployee() {
		super();
	}

	@Override
	public boolean isCeo() {
		return false;
	}

	@Override
	public void addSubordinateList(Employee s) {
		if (s != null && s.isValidEmployee()) {
			this.subordinateList.add(s.getEmployeeId());
		}
	}

	@Override
	public void addManagerList(Employee m) {
		if (m != null && m.isValidEmployee()) {
			this.managerList.add(m.getEmployeeId());
		}
	}

	@Override
	public boolean isValidEmployee() {
		return true;
	}

}
