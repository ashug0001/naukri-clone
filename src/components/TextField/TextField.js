import React from "react";

const TextField = ({
  id,
  label,
  error,
  helperText = "",
  placeholder = "",
  value,
  handleChange,
  handleBlur,
  ...rest
}) => {
  return (
    <>
      <label className="block text-gray-700 text-sm mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        className={`appearance-none bg-gray-750/20 border 
          rounded w-full p-4 text-gray-700 leading-tight 
          focus:shadow-outline
          ${
            error
              ? " focus:outline-red-500 border-red-500"
              : " border-gray-850 focus:outline-blue"
          }
        `}
        id={id}
        placeholder={placeholder ? placeholder : label}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        {...rest}
      />
      {helperText && (
        <p className="text-red-500 text-xs italic text-right">{helperText}</p>
      )}
    </>
  );
};

export default TextField;
