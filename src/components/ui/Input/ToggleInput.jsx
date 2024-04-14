import RequiredAsterisk from "@/components/ui/RequiredAsterisk";

export default function ToggleInput({ label, checked = false, id = "", name, onToggleChange, required = true, variant = "primary" }) {
	return (
		<div className="w-full flex flex-col justify-end">
			<label htmlFor={id} className="text-dark-400 text-sm font-medium mb-1 text-start flex items-center">
				{label}
			</label>
			<div className="flex items-center">
				<input type="checkbox" name={name} checked={checked} id={id} onChange={onToggleChange} className="sr-only" />
				<div
					onClick={onToggleChange}
					id={id}
					htmlFor={id}
					className={"relative flex items-center h-5 rounded-full w-9 " + (checked ? "bg-primary-500/70" : "bg-gray-300/70")}
				>
					<div
						onClick={onToggleChange}
						id={id}
						className={
							"translate-x-0 relative inline-block h-4 w-4 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-300 " +
							(checked ? "translate-x-5" : "translate-x-0")
						}
					/>
				</div>
			</div>
		</div>
	);
}
