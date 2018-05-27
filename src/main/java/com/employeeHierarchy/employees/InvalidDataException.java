/**
 * 
 */
package com.employeeHierarchy.employees;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author leoliu
 *
 */
@ResponseStatus(value=HttpStatus.INTERNAL_SERVER_ERROR, reason="Malformed data")
public class InvalidDataException extends RuntimeException{
	private static final long serialVersionUID = 1L;
}
