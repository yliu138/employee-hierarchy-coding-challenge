/**
 * 
 */
package com.employeeHierarchy.models;

import java.util.LinkedList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.DiscriminatorFormula;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * @author leo liu
 *
 */
@Entity
@Inheritance(strategy=InheritanceType.SINGLE_TABLE)
@DiscriminatorFormula(
		"CASE WHEN managerId IS NOT -1 THEN 'NORMAL' " +
		" WHEN managerId IS -1 THEN 'CEO' END"
)
public abstract class Employee {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "id", nullable = false, unique = true)
	@JsonIgnore
	private long id;
	
	@NotNull
	private long employeeId;
	@NotNull
	private String name;
	@JsonIgnore
	private long managerId;
	@Transient
	protected List<Long> subordinateList;
	@Transient
	protected List<Long> managerList;
	
	public long getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(long employeeId) {
		this.employeeId = employeeId;
	}
	
	protected Employee() {
		this.subordinateList = new LinkedList<Long>();
		this.managerList = new LinkedList<Long>();
	} //JPA
	
	public Employee(long id, long employeeId, String name, long managerId) {
		super();
		this.id = id;
		this.employeeId = employeeId;
		this.name = name;
		this.managerId = managerId;
		this.subordinateList = new LinkedList<Long>();
		this.managerList = new LinkedList<Long>();
	}
	
	public long getId() {
		return id;
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
	
	// overwrite
	public abstract void addSubordinateList(Employee s);
	
	public void addManagerList(long id) {
		this.managerList.add(id);
	}
	
	public abstract void addManagerList(Employee m);
	
	public abstract boolean isCeo();
	
	@Override
	public String toString() {
		return "ID: " + this.id + "Employee ID: " + this.employeeId + " Employee name: " + this.name + "\nSubordinate List: " + this.managerList.toString() + "\n";
	}
}
