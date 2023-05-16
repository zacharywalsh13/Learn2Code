import React from 'react';

const InputComponent = React.forwardRef<HTMLInputElement, { label: string, id: string, type?: string }>(
  ({ label, id, type="text", ...props }, ref) => {
    return (
      <div className="space-y-1">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
        <input
          id={id}
          name={id}
          type={type}
          ref={ref}
          {...props}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
    );
  }
);

export default InputComponent;
