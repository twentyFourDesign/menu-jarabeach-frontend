import React from 'react';

export const CustomInput = ({
  label,
  id,
  type,
  placeHolder,
  onChange,
  name,
  error,
  touched,
  value,
  labelClassName,
  inputClassName,
}) => {
  return (
    <>
      <label className={labelClassName} htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        className={inputClassName}
        placeholder={placeHolder}
        onChange={onChange}
        value={value}
      />
      {touched && error ? <div className="text-red-300">{error}</div> : null}
    </>
  );
};
