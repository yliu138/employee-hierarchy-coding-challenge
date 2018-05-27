/**
 * This package are created for tests of the API controller layer
 * Makito, JUnit 
 */
package com.employeeHierarchy.controllers;

import static org.hamcrest.Matchers.contains;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
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
import com.employeeHierarchy.models.Invalid;
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
		Employee test2 = new Ceo(150, "Jamie", 0);
		test2.setId(3);
		Employee test3 = new NormalEmployee(275, "Alex", 100);
		test3.setId(4);
		Employee test4 = new NormalEmployee(400, "Steve", 150);
		test4.setId(5);
		Employee test5 = new NormalEmployee(190, "David", 400);
		test5.setId(6);
		Employee test6 = new Invalid(-1, "Tom", 400);
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
	
	private List<Employee> generateInvalidData() {
		List<Employee> employeeList = new ArrayList<Employee>();
		
		Employee test1 = new Ceo(150, "Jamie", 0);
		test1.setId(1);
		
		Employee test2 = new Invalid(-1, "Tom", 150);
		test2.setId(2);
		
		Employee test3 = new Invalid(-2, "Mark", 150);
		test3.setId(3);
		
		employeeList.add(test1);
		employeeList.add(test2);
		employeeList.add(test3);
		
		return employeeList;
	}
	
	private List<Employee> generateNoCeo() {
		List<Employee> employeeList = new ArrayList<Employee>();
		
		Employee test1 = new NormalEmployee(100, "Tom", 200);
		test1.setId(1);
		
		Employee test2 = new NormalEmployee(200, "Nick", 150);
		test2.setId(2);
	
		
		employeeList.add(test1);
		employeeList.add(test2);
		
		return employeeList;
	}
	
	private List<Employee> generateNonExistingManager() {
		List<Employee> employeeList = new ArrayList<Employee>();
		
		Employee test1 = new NormalEmployee(100, "Tom", 200);
		test1.setId(1);
		
		Employee test2 = new NormalEmployee(200, "Nick", 150);
		test2.setId(2);
		
		Employee test3 = new Ceo(150, "Jamie", 0);
		test3.setId(3);
		
		Employee test4 = new NormalEmployee(300, "Has Non-exisitng manager", 600);
		test4.setId(4);
	
		
		employeeList.add(test1);
		employeeList.add(test2);
		employeeList.add(test3);
		employeeList.add(test4);
		
		return employeeList;
	}
	
	@Test
	public void whenFindAll_thenReturnAllEmployee() throws Exception {
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
	
	@Test
	public void whenGetMap_thenReturnValidMap() throws Exception {
		this.mockMvc.perform(get("/employee/map"))
		.andDo(print())
		.andExpect(status().isOk())
		.andExpect(jsonPath("$.ceoId", is(150)))
		.andExpect(jsonPath("$.map.400.employeeId", is(400)))
		.andExpect(jsonPath("$.map.400.name", is("Steve")))
		.andExpect(jsonPath("$.map.400.subordinateList", hasSize(1)))
		.andExpect(jsonPath("$.map.400.subordinateList", contains(190)))
		.andExpect(jsonPath("$.map.400.managerList", hasSize(1)))
		.andExpect(jsonPath("$.map.400.managerList", contains(150)))
		.andExpect(jsonPath("$.map.400.ceo", is(false)))
		.andExpect(jsonPath("$.map.400.validEmployee", is(true)))
		.andExpect(jsonPath("$.map.150.employeeId", is(150)))
		.andExpect(jsonPath("$.map.150.name", is("Jamie")))
		.andExpect(jsonPath("$.map.150.subordinateList", hasSize(2)))
		.andExpect(jsonPath("$.map.150.subordinateList", contains(100, 400)))
		.andExpect(jsonPath("$.map.150.managerList", hasSize(0)))
		.andExpect(jsonPath("$.map.150.ceo", is(true)))
		.andExpect(jsonPath("$.map.150.validEmployee", is(true)))
		.andExpect(jsonPath("$.map.-1.employeeId", is(-1)))
		.andExpect(jsonPath("$.map.-1.name", is("Tom")))
		.andExpect(jsonPath("$.map.-1.subordinateList", hasSize(0)))
		.andExpect(jsonPath("$.map.-1.managerList", hasSize(0)))
		.andExpect(jsonPath("$.map.-1.ceo", is(false)))
		.andExpect(jsonPath("$.map.-1.validEmployee", is(false)));
	}
	
	@Test
	public void whenGetMap_employeeWithOneMoreSubordinateToLeafNodeOfDavid() throws Exception{
		//To set up the mock response
		Employee test7 = new NormalEmployee(600, "Andy", 190);
		test7.setId(8);
		this.employeeList.add(test7);
		
		Mockito.when(this.employeeRepo.findAll())
			.thenReturn(this.employeeList);
		
		this.mockMvc.perform(get("/employee/map"))
		.andDo(print())
		.andExpect(status().isOk())
		.andExpect(jsonPath("$.map.600.employeeId", is(600)))
		.andExpect(jsonPath("$.map.600.name", is("Andy")))
		.andExpect(jsonPath("$.map.600.subordinateList", hasSize(0)))
		.andExpect(jsonPath("$.map.600.managerList", hasSize(1)))
		.andExpect(jsonPath("$.map.600.managerList", contains(190)))
		.andExpect(jsonPath("$.map.600.ceo", is(false)))
		.andExpect(jsonPath("$.map.600.validEmployee", is(true)))
		.andExpect(jsonPath("$.map.190.subordinateList", hasSize(1)))
		.andExpect(jsonPath("$.map.190.subordinateList", contains(600)));
	}
	
	@Test
	public void whenGetMap_allUnvalidEmployee_returnWithAllEmptySubordinateManagerLists() throws Exception {
		//To set up the mock response
		Mockito.when(this.employeeRepo.findAll())
		.thenReturn(this.generateInvalidData());
		
		this.mockMvc.perform(get("/employee/map"))
		.andDo(print())
		.andExpect(status().isOk())
		.andExpect(jsonPath("$.map.150.employeeId", is(150)))
		.andExpect(jsonPath("$.map.150.name", is("Jamie")))
		.andExpect(jsonPath("$.map.150.subordinateList", hasSize(0)))
		.andExpect(jsonPath("$.map.150.managerList", hasSize(0)))
		.andExpect(jsonPath("$.map.150.ceo", is(true)))
		.andExpect(jsonPath("$.map.150.validEmployee", is(true)));
	}
	
	@Test
	public void whenGetMap_noCEO_returnError() throws Exception {
		//To set up the mock response
		Mockito.when(this.employeeRepo.findAll())
			.thenReturn(this.generateNoCeo());
		
		this.mockMvc.perform(get("/employee/map"))
		.andDo(print())
		.andExpect(status().is5xxServerError())
		.andExpect(status().reason(containsString("Malformed data")));
	}
	
	@Test
	public void whenGetMap_employeeWithNonexistingManager() throws Exception{
		//To set up the mock response
		Mockito.when(this.employeeRepo.findAll())
			.thenReturn(this.generateNonExistingManager());
		
		this.mockMvc.perform(get("/employee/map"))
		.andDo(print())
		.andExpect(status().isOk())
		.andExpect(jsonPath("$.map.300.employeeId", is(300)))
		.andExpect(jsonPath("$.map.300.name", is("Has Non-exisitng manager")))
		.andExpect(jsonPath("$.map.300.subordinateList", hasSize(0)))
		.andExpect(jsonPath("$.map.300.managerList", hasSize(0)))
		.andExpect(jsonPath("$.map.300.ceo", is(false)))
		.andExpect(jsonPath("$.map.300.validEmployee", is(true)));
	}
}
