import RequiredAsterisk from "@/components/ui/RequiredAsterisk";

export default function Textarea({ label, value = "", id = "", name, onFieldChange, placeholder = "", rows = "6", required = true, variant = "primary" }) {
	return (
		<div className="w-full flex flex-col justify-end">
			<label htmlFor={id} className="text-dark-400 text-sm font-medium mb-1 text-start">
				{label} {label && required && <RequiredAsterisk />}
			</label>
			<textarea
				name={name}
				value={value}
				id={id}
				onChange={onFieldChange}
				placeholder={placeholder}
				required={required}
				className={
					"w-full resize-none text-dark-300 outline-none focus:ring-primary-500 focus:border-primary-500 border border-gray-300 text-sm rounded-md cursor-text form-input block transition duration-300 py-[0.5rem] px-[0.75rem] " +
					(variant == "secondary" ? "bg-light-200/70" : "bg-light-100")
				}
				rows={rows}
			></textarea>
		</div>
	);
}
