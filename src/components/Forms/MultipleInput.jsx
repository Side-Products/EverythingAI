import TextInput from "@/components/ui/Input/TextInput";

export default function MultipleInput({ data, setData, dataKey, label, addMoreLabel, placeholder }) {
	const onInputChange = (e, index) => {
		const { name, value } = e.target;
		const list = [...data[dataKey]];
		list[index] = value;
		setData({ ...data, [dataKey]: list });
	};

	const addInput = () => {
		const list = [...data[dataKey]];
		list.push("");
		setData({ ...data, [dataKey]: list });
	};

	const removeInput = (index) => {
		const list = [...data[dataKey]];
		list.splice(index, 1);
		setData({ ...data, [dataKey]: list });
	};

	return (
		<div>
			<div className="w-full flex flex-col space-y-7">
				{data[dataKey].map((item, i) => (
					<div key={i} className={"relative w-full flex flex-col space-y-3 pt-4 " + (i != 0 && "border-t border-dashed border-gray-300")}>
						{i != 0 && (
							<div className="absolute top-2 w-full flex justify-end items-center">
								<div
									onClick={() => removeInput(i)}
									className="w-8 h-8 flex justify-center items-center rounded-lg transition-all duration-200 cursor-pointer hover:bg-zinc-500/20 "
								>
									<i className="fa-solid fa-xmark text-sm"></i>
								</div>
							</div>
						)}

						<TextInput
							variant="secondary"
							label={label + (i == 0 ? "" : " " + (i + 1))}
							type={"text"}
							value={data[dataKey] ? data[dataKey][i] : ""}
							name={dataKey}
							onFieldChange={(e) => onInputChange(e, i)}
							placeholder={placeholder}
							required={false}
						/>
					</div>
				))}
			</div>

			{data[dataKey] && data[dataKey].length < 6 && (
				<div className="flex items-center justify-start mt-6">
					<button
						id={"add-more-" + dataKey}
						type="button"
						className="relative rounded-full flex justify-center items-center w-6 h-6 bg-primary-500 hover:bg-primary-700 text-white"
						onClick={() => addInput()}
					>
						<span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg -mt-[1px]">+</span>
					</button>
					<label htmlFor={"add-more-" + dataKey} className="pl-3 text-sm font-normal cursor-pointer">
						{addMoreLabel}
					</label>
				</div>
			)}
		</div>
	);
}
