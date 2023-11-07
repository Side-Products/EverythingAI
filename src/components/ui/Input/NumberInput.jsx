import RequiredAsterisk from "@/components/ui/RequiredAsterisk";

export default function NumberInput({
  label,
  value = "",
  id = "",
  name,
  onFieldChange,
  placeholder = "",
  required = true,
  min = 0,
  max = 5,
  variant = "primary",
  className = "",
}) {
  return (
    <div className="w-full flex flex-col justify-end">
      <label
        htmlFor={id}
        className={`text-dark-400 text-sm font-medium mb-1 text-start ${className}`}
      >
        {label} {required && <RequiredAsterisk />}
      </label>
      <input
        type="number" // Set the input type to 'number'
        name={name}
        min={min} // Set the minimum value to 0
        max={max} // Set the maximum value to 5
        step={0.1}
        value={value}
        id={id}
        onChange={onFieldChange}
        placeholder={placeholder}
        required={required}
        className={
          "w-full text-dark-300 outline-none focus:ring-primary-500 focus:border-primary-500 border border-gray-300 text-sm rounded-md cursor-text form-input block transition duration-300 py-[0.5rem] px-[0.75rem] " +
          (variant == "secondary" ? "bg-light-200/70" : "bg-light-100")
        }
      />
    </div>
  );
}
