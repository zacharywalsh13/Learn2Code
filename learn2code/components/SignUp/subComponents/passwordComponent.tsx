// components/PasswordComponent.js
import React from 'react';

const PasswordComponent = React.forwardRef(({ label, id, ...props }, ref) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          id={id}
          name={id}
          type="password"
          ref={ref}
          {...props}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
    </div>
  );
});

export default PasswordComponent;
