import { useEffect, useState } from "react";
import ConfirmModal from "../components/common/ConfirmModal";
import EmployeeTable from "../components/employees/EmployeeTable";
import EmployeeFormModal from "../components/employees/EmployeeFormModal";
import { Employee } from "../models/Employee";
import employeeService from '../services/employeeService';

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [form, setForm] = useState({ name: "", position: "" });
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);

  const [showFormModal, setShowFormModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [confirmAction, setConfirmAction] = useState<() => void>(() => {});
  const [confirmTitle, setConfirmTitle] = useState("");

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const res = await employeeService.getEmployees();
    setEmployees(res.data);
  };

  const openAddModal = () => {
    setForm({ name: "", position: "" });
    setEditingEmployee(null);
    setShowFormModal(true);
  };

  const openEditModal = (emp: Employee) => {
    setEditingEmployee(emp);
    setForm({ name: emp.name, position: emp.position });
    setShowFormModal(true);
  };

  const handleSubmitForm = () => {
    setShowFormModal(false);
    setConfirmTitle(editingEmployee ? "Confirm Edit?" : "Confirm Add?");
    setConfirmAction(() => async () => {
      if (editingEmployee) {
        await employeeService.updateEmployee(editingEmployee._id,form);
      } else {
        await employeeService.createEmployee(form);
      }
      await fetchEmployees();
      setEditingEmployee(null);
    });
    setShowConfirmModal(true);
  };

  const handleDelete = (emp: Employee) => {
    setConfirmTitle(`Delete ${emp.name}?`);
    setConfirmAction(() => async () => {
      await employeeService.deleteEmployee(emp._id);
      await fetchEmployees();
    });
    setShowConfirmModal(true);
  };

  return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Employees</h1>
            <button
              onClick={openAddModal}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              + Add Employee
            </button>
          </div>

          <EmployeeTable
            employees={employees}
            onEdit={openEditModal}
            onDelete={handleDelete}
          />

          <EmployeeFormModal
            visible={showFormModal}
            title={editingEmployee ? "Edit Employee" : "Add Employee"}
            name={form.name}
            position={form.position}
            onChangeName={(val) => setForm({ ...form, name: val })}
            onChangePosition={(val) => setForm({ ...form, position: val })}
            onCancel={() => setShowFormModal(false)}
            onConfirm={handleSubmitForm}
          />

          <ConfirmModal
            visible={showConfirmModal}
            title={confirmTitle}
            onConfirm={() => {
              confirmAction();
              setShowConfirmModal(false);
            }}
            onCancel={() => setShowConfirmModal(false)}
          />
        </div>
      </div>
  );
}
