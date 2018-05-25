/**
 * This package are created for tests of the persistence layer
 */
package com.employeeHierarchy.repo;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.employeeHierarchy.models.Employee;
import com.employeeHierarchy.models.NormalEmployee;

/**
 * @author leoliu
 *
 */
@RunWith(SpringRunner.class)
@DataJpaTest
public class EmployeeRepoTest {
	@Autowired
	private TestEntityManager entityManager;
	
	@MockBean
	private EmployeeRepo employeeRepo;
	
	@Before
	public void setUp() {
		Employee test = new NormalEmployee(1, 100, "Tom", 200);
		List<Employee> resultList = new ArrayList<Employee>();
		resultList.add(test);
		
		Mockito.when(this.employeeRepo.findAll())
			.thenReturn(resultList);
	}
	
	@Test
	public void whenFindAll_thenReturnAllEmployee() {
		String name = "Tom";
//		Collection<Employee> all = 
	}
}
