import React from 'react';

type Option = { value: string, label: string };

const SelectComponent = React.forwardRef<HTMLSelectElement, { label: string, id: string, options: Option[] }>(
  ({ label, id, options, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
        <select
          id={id}
          name={id}
          ref={ref}
          {...props}
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default SelectComponent;
