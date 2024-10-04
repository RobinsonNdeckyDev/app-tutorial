/* eslint-disable react/prop-types */
const Select = ({
  options = [], // tableau d'options
  placeholder = "",
  value,
  onChange,
  size = "medium",
  required = true,
  disabled = false,
  fullWidth = false,
}) => {
  const baseClass = `border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500`;
  const sizeClass =
    size === "small" ? "text-sm" : size === "large" ? "text-lg" : "text-base";
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <select
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
      className={`${baseClass} ${sizeClass} ${widthClass}`}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
