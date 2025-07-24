import React from 'react';

interface EmployeeFormModalProps {
  visible: boolean;
  name: string;
  position: string;
  onChangeName: (value: string) => void;
  onChangePosition: (value: string) => void;
  onCancel: () => void;
  onConfirm: () => void;
  title: string;
}

export default function EmployeeFormModal({
  visible,
  name,
  position,
  onChangeName,
  onChangePosition,
  onCancel,
  onConfirm,
  title,
}: EmployeeFormModalProps) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => onChangeName(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Position"
            value={position}
            onChange={(e) => onChangePosition(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded">
            Cancel
          </button>
          <button onClick={onConfirm} className="px-4 py-2 bg-blue-600 text-white rounded">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
