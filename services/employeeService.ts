import api from './api';
import { EmployeeCreateDto, EmployeeUpdateDto } from '../models/Employee';

const employeeService = {
  getEmployees: () => api.get('/employees'),
  createEmployee: (data: EmployeeCreateDto) => api.post('/employees', data),
  updateEmployee: (id: string, data: EmployeeUpdateDto) => api.put(`/employees/${id}`, data),
  deleteEmployee: (id: string) => api.delete(`/employees/${id}`),
};

export default employeeService;
