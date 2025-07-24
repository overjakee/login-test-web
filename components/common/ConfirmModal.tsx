import React from 'react';

interface ConfirmModalProps {
  visible: boolean;
  title: string;
  description?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({
  visible,
  title,
  description,
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-md">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        <div className="flex justify-end space-x-2 mt-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
