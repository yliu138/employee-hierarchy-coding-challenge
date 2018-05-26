/**
 * This package are created for tests of the API controller layer
 * Makito, JUnit 
 */
package com.employeeHierarchy.controllers;

import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.handler;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.employeeHierarchy.models.Ceo;
import com.employeeHierarchy.models.Employee;
import com.employeeHierarchy.models.NormalEmployee;
import com.employeeHierarchy.repo.EmployeeRepo;

/**
 * @author leoliu
 *
 */
@RunWith(SpringRunner.class)
//@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@WebMvcTest
public class EmployeeControllerTest {	
	@MockBean
	private EmployeeRepo employeeRepo;
	
//	@Autowired
//	private TestRestTemplate restTemplate;
	@Autowired
	private MockMvc mockMvc;
	
	private List<Employee> employeeList;
	
	@Before
	public void setUp() {
		this.employeeList = this.generateData();
		Mockito.when(this.employeeRepo.findAll())
			.thenReturn(this.employeeList);
	}
	
	private List<Employee> generateData() {
		Employee test = new NormalEmployee(100, "Alan", 150);
		test.setId(1);
		Employee test1 = new NormalEmployee(220, "Martin", 100);
		test1.setId(2);
		Employee test2 = new Ceo(150, "Jamie", -1);
		test2.setId(3);
		Employee test3 = new NormalEmployee(275, "Alex", 100);
		test3.setId(4);
		Employee test4 = new NormalEmployee(400, "Steve", 150);
		test4.setId(5);
		Employee test5 = new NormalEmployee(190, "David", 400);
		test5.setId(6);
		Employee test6 = new NormalEmployee(-1, "Tom", 400);
		test6.setId(7);
		
		List<Employee> employeeList = new ArrayList<Employee>();
		employeeList.add(test);
		employeeList.add(test1);
		employeeList.add(test2);
		employeeList.add(test3);
		employeeList.add(test4);
		employeeList.add(test5);
		employeeList.add(test6);
		
		return employeeList;
	}
	
	@Test
	public void whenFindAll_thenReturnAllEmployee() throws Exception {
//		String body = this.restTemplate.getForObject("/employee", String.class);
//		System.out.println(body);
		this.mockMvc.perform(get("/employee"))
			.andDo(print())
			.andExpect(status().isOk())
			.andExpect(jsonPath("$", hasSize(7)))
			.andExpect(jsonPath("$.[0].employeeId", is(100)))
			.andExpect(jsonPath("$.[0].name", is(this.employeeList.get(0).getName())))
			.andExpect(jsonPath("$.[1].employeeId", is(220)))
			.andExpect(jsonPath("$.[1].name", is(this.employeeList.get(1).getName())))
			.andExpect(jsonPath("$.[6].employeeId", is(-1)))
			.andExpect(jsonPath("$.[6].name", is(this.employeeList.get(6).getName())));
	}
}
