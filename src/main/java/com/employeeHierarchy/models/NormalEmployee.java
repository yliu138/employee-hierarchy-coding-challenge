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

	public NormalEmployee(long id, String name, long managerId) {
		super(id, name, managerId);
	}
	
	@SuppressWarnings("unused")
	private NormalEmployee() {
		super();
	}

}
