import TextInput from "@/components/ui/Input/TextInput";
import Textarea from "@/components/ui/Input/Textarea";
import NumberInput from "../ui/Input/NumberInput";

import React from "react";
import Dropdown from "../ui/Input/Dropdown";

const PurchaseTermInput = ({ purchaseTerms, setPurchaseTerms }) => {
	const onTermDetailsChange = (e, index) => {
		const { name, value } = e.target;
		const list = [...purchaseTerms.terms];
		console.log(list);
		list[index][name] = value;
		setPurchaseTerms({ ...purchaseTerms, terms: list });
	};

	const addTermLength = () => {
		const list = [...purchaseTerms.terms];
		const newTerm = {
			termLength: "",
			couponCode: "",
			actualPrice: 0,
			discountedPrice: 0,
			termsAndConditions: "",
			limit: 0,
		};
		list.push(newTerm);
		setPurchaseTerms({ ...purchaseTerms, terms: list });
	};

	const removeTermLength = (index) => {
		const list = [...purchaseTerms.terms];
		list.splice(index, 1);
		setPurchaseTerms({ ...purchaseTerms, terms: list });
	};

	return (
		<div className="border  px-2 py-4 rounded-md  border-solid">
			<h1 className="text-md font-semibold mb-4">Purchase Terms</h1>

			<div className="flex flex-col justify-between">
				{purchaseTerms.terms.map((term, index) => (
					<div
						key={index}
						className={"relative w-full flex flex-col space-y-3 pt-4 " + (index != 0 && "border-t border-dashed border-gray-300 mt-4")}
					>
						{index != 0 && (
							<div className="absolute top-2 w-full flex justify-end items-center">
								<div
									onClick={() => removeTermLength(index)}
									className="w-8 h-8 flex justify-center items-center rounded-lg transition-all duration-200 cursor-pointer hover:bg-zinc-500/20 "
								>
									<i className="fa-solid fa-xmark text-sm"></i>
								</div>
							</div>
						)}

						<Dropdown
							variant="secondary"
							required={false}
							id={`term${index}`}
							defaultOption={term?.termLength || "Select a term length"}
							name="termLength"
							label="Term Length"
							classes={"w-full"}
							options={["1 Month", "3 Months", "6 Months", "1 Year"]}
							value={term.termLength}
							setChoice={(e) => onTermDetailsChange(e, index)}
						/>

						<div className="my-3 flex flex-row justify-start  items-center ">
							<div className="w-1/3 mr-4">
								<NumberInput
									label={`Actual Price`}
									name={"actualPrice"}
									placeholder={`Actual Price in $`}
									value={term.actualPrice}
									onFieldChange={(e) => onTermDetailsChange(e, index)}
									required={false}
									min={0}
									max={500}
								/>
							</div>
							<div className="w-1/3">
								<NumberInput
									label={` Discounted Price`}
									name={"discountedPrice"}
									placeholder={`Discounted Price in $`}
									value={term.discountedPrice}
									onFieldChange={(e) => onTermDetailsChange(e, index)}
									required={false}
									min={0}
									max={500}
								/>
							</div>
						</div>

						<div className="my-3 flex flex-row justify-start  items-center ">
							<div className="w-1/3 mr-4">
								<TextInput
									label={`Coupon Code`}
									name={"couponCode"}
									placeholder={`Coupon code to be used`}
									value={term.couponCode}
									onFieldChange={(e) => onTermDetailsChange(e, index)}
									required={false}
								/>
							</div>
							<div className="w-1/3">
								<NumberInput
									label={` Limit`}
									name={"limit"}
									placeholder={`Limit`}
									value={term.limit}
									onFieldChange={(e) => onTermDetailsChange(e, index)}
									required={false}
									min={0}
									max={1000}
								/>
							</div>
						</div>

						<Textarea
							variant="secondary"
							label={"Terms and Conditions"}
							value={term.termsAndConditions}
							name={"termsAndConditions"}
							onFieldChange={(e) => onTermDetailsChange(e, index)}
							placeholder="Eg. Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth."
							required={false}
							rows={4}
						/>
					</div>
				))}

				{purchaseTerms?.terms && purchaseTerms.terms.length < 4 && (
					<div className="flex items-center justify-start mt-6">
						<button
							id="add-term-length"
							type="button"
							className="relative rounded-full flex justify-center items-center w-6 h-6 bg-primary-500 hover:bg-primary-700 text-white"
							onClick={() => addTermLength()}
						>
							<span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg -mt-[1px]">+</span>
						</button>
						<label htmlFor="add-term-length" className="pl-3 text-sm font-normal cursor-pointer">
							Add more term lengths
						</label>
					</div>
				)}
			</div>
		</div>
	);
};

export default PurchaseTermInput;
