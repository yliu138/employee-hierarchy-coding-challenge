create table employee (
	employeeId integer not null,
	name varchar(255) not null,
	managerId integer,
	primary key(employeeId)
);