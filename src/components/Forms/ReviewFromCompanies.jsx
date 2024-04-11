import TextInput from "@/components/ui/Input/TextInput";
import Textarea from "@/components/ui/Input/Textarea";

export default function ReviewFromCompanies({ data, setData }) {
	const onReviewChange = (e, index) => {
		const { name, value } = e.target;
		const list = [...data.reviewFromCompanies];
		list[index][name] = value;
		setData({ ...data, reviewFromCompanies: list });
	};

	const addReview = () => {
		const list = [...data.reviewFromCompanies];
		list.push({ companyName: "", review: "" });
		setData({ ...data, reviewFromCompanies: list });
	};

	const removeReview = (index) => {
		const list = [...data.reviewFromCompanies];
		list.splice(index, 1);
		setData({ ...data, reviewFromCompanies: list });
	};

	return (
		<div className="flex flex-col bg-light-100 rounded-2xl p-10">
			<div className="mb-2 font-semibold">Review from Companies</div>

			<div className="w-full flex flex-col space-y-7">
				{data.reviewFromCompanies.map((useCase, i) => (
					<div key={i} className={"relative w-full flex flex-col space-y-3 pt-4 " + (i != 0 && "border-t border-dashed border-gray-300")}>
						{i != 0 && (
							<div className="absolute top-2 w-full flex justify-end items-center">
								<div
									onClick={() => removeReview(i)}
									className="w-8 h-8 flex justify-center items-center rounded-lg transition-all duration-200 cursor-pointer hover:bg-zinc-500/20 "
								>
									<i className="fa-solid fa-xmark text-sm"></i>
								</div>
							</div>
						)}

						<TextInput
							variant="secondary"
							label={"Company Name"}
							type={"text"}
							value={data.reviewFromCompanies[i].companyName}
							name={"companyName"}
							onFieldChange={(e) => onReviewChange(e, i)}
							placeholder="Eg. XYZ Corp."
							required={false}
						/>
						<Textarea
							variant="secondary"
							label={"Review"}
							value={data.reviewFromCompanies[i].review}
							name={"review"}
							onFieldChange={(e) => onReviewChange(e, i)}
							placeholder="Eg. EverythingAI is the best tool I have ever used."
							required={false}
							rows={4}
						/>
					</div>
				))}
			</div>

			{data.reviewFromCompanies && data.reviewFromCompanies.length < 6 && (
				<div className="flex items-center justify-start mt-6">
					<button
						id="add-review"
						type="button"
						className="relative rounded-full flex justify-center items-center w-6 h-6 bg-primary-500 hover:bg-primary-700 text-white"
						onClick={() => addReview()}
					>
						<span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg -mt-[1px]">+</span>
					</button>
					<label htmlFor="add-review" className="pl-3 text-sm font-normal cursor-pointer">
						Add more reviews
					</label>
				</div>
			)}
		</div>
	);
}
