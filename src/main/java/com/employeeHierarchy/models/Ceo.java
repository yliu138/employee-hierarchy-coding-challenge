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
@DiscriminatorValue("CEO")
public class Ceo extends Employee {

	public Ceo(long id, String name, long managerId) {
		super(id, name, managerId);
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
	public String toString() {
		return "Employee ID: " + this.getEmployeeId() + " Employee name: " + this.getName() + " with Role: CEO " + "\nSubordinate List: " + this.managerList.toString();
	}
}
