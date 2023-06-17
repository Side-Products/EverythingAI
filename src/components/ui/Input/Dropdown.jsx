import { useState, useEffect } from "react";

export default function Dropdown({ label = "", id, options = [], objKey, setChoice, classes }) {
	const [dropdownOptions, setDropdownOptions] = useState(options);

	useEffect(() => {
		setDropdownOptions(options);
	}, [options]);

	return (
		<div className={"flex flex-col items-start justify-start w-full " + classes}>
			{label && (
				<label htmlFor={id} className="text-dark-400 text-sm font-medium mb-1">
					{label}
				</label>
			)}
			<div className="w-full border border-[#D1D5DB] rounded-md">
				<select
					id={id}
					className={
						"w-full focus:ring-primary-500 transition duration-300 text-dark-300 text-sm font-medium rounded-md cursor-pointer py-[0.5rem] px-[0.75rem] border-transparent border-r-[10px] outline-none " +
						classes
					}
					onChange={(e) => setChoice && setChoice(e)}
				>
					{dropdownOptions.map((option, index) => {
						return (
							<option key={objKey ? option[objKey] : option} data-index={index} value={objKey ? option[objKey] : option}>
								{objKey ? option[objKey] : option}
							</option>
						);
					})}
				</select>
			</div>
		</div>
	);
}
