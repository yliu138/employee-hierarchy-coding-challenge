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
}
