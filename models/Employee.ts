export interface Employee {
  _id: string;
  name: string;
  position: string;
}

export interface EmployeeCreateDto {
  name: string;
  position: string;
}

export interface EmployeeUpdateDto {
  name: string;
  position: string;
}
