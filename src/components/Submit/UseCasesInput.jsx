import TextInput from "@/components/ui/Input/TextInput";
import Textarea from "@/components/ui/Input/Textarea";

export default function UseCasesInput({ toolData, setToolData }) {
	const onUseCasesChange = (e, index) => {
		const { name, value } = e.target;
		const list = [...toolData.useCases];
		list[index][name] = value;
		setToolData({ ...toolData, useCases: list });
	};

	const addUseCase = () => {
		const list = [...toolData.useCases];
		list.push({ heading: "", content: "" });
		setToolData({ ...toolData, useCases: list });
	};

	const removeUseCase = (index) => {
		const list = [...toolData.useCases];
		list.splice(index, 1);
		setToolData({ ...toolData, useCases: list });
	};

	return (
		<div className="flex flex-col bg-light-100 rounded-2xl p-10">
			<div className="mb-2 font-semibold">Use Cases</div>

			<div className="w-full flex flex-col space-y-7">
				{toolData.useCases.map((useCase, i) => (
					<div key={i} className={"relative w-full flex flex-col space-y-3 pt-4 " + (i != 0 && "border-t border-dashed border-gray-300")}>
						{i != 0 && (
							<div className="absolute top-2 w-full flex justify-end items-center">
								<div
									onClick={() => removeUseCase(i)}
									className="w-8 h-8 flex justify-center items-center rounded-lg transition-all duration-200 cursor-pointer hover:bg-zinc-500/20 "
								>
									<i className="fa-solid fa-xmark text-sm"></i>
								</div>
							</div>
						)}

						<TextInput
							variant="secondary"
							label={"Heading"}
							type={"text"}
							value={toolData.useCases[i].heading}
							name={"heading"}
							onFieldChange={(e) => onUseCasesChange(e, i)}
							placeholder="Eg. Marketing"
							required={false}
						/>
						<Textarea
							variant="secondary"
							label={"Content"}
							value={toolData.useCases[i].content}
							name={"content"}
							onFieldChange={(e) => onUseCasesChange(e, i)}
							placeholder="Eg. Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth."
							required={false}
							rows={4}
						/>
					</div>
				))}
			</div>

			{toolData.useCases && toolData.useCases.length < 6 && (
				<div className="flex items-center justify-start mt-6">
					<button
						id="add-use-case"
						type="button"
						className="relative rounded-full flex justify-center items-center w-6 h-6 bg-primary-500 hover:bg-primary-700 text-white"
						onClick={() => addUseCase()}
					>
						<span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg -mt-[1px]">+</span>
					</button>
					<label htmlFor="add-use-case" className="pl-3 text-sm font-normal cursor-pointer">
						Add more use cases
					</label>
				</div>
			)}
		</div>
	);
}
