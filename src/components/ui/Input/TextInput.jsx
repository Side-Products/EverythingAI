export default function TextInput({ label, type = "text", value = "", name, onFieldChange, placeholder = "", required = true }) {
	return (
		<div className="w-full flex flex-col justify-end">
			<p className="text-dark-400 text-sm font-medium mb-1 text-start">{label}</p>
			<input
				type={type}
				name={name}
				value={value}
				onChange={onFieldChange}
				placeholder={placeholder}
				required={required}
				className="w-full bg-light-100 text-dark-300 outline-none focus:ring-primary-500 focus:border-primary-500 border border-gray-300 text-sm rounded-md cursor-text form-input block transition duration-300 py-[0.5rem] px-[0.75rem]"
			/>
		</div>
	);
}
