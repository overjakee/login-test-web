import React from 'react';
import { Employee } from '../../models/Employee'

interface EmployeeTableProps {
  employees: Employee[];
  onEdit: (emp: Employee) => void;
  onDelete: (emp: Employee) => void;
}

export default function EmployeeTable({ employees, onEdit, onDelete }: EmployeeTableProps) {
  return (
    <table className="w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border px-4 py-2">#</th>
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Position</th>
          <th className="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp, index) => (
          <tr key={emp._id} className="hover:bg-gray-50">
            <td className="border px-4 py-2">{index + 1}</td>
            <td className="border px-4 py-2">{emp.name}</td>
            <td className="border px-4 py-2">{emp.position}</td>
            <td className="border px-4 py-2 space-x-2">
              <button
                onClick={() => onEdit(emp)}
                className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(emp)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
