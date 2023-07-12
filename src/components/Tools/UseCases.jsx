import Accordion from "./Accordion";

export default function UseCases({ useCases }) {
	return (
		useCases && (
			<div className="md:w-1/2 flex flex-col space-y-6">
				<div className="text-2xl font-semibold">Use Cases</div>
				<Accordion useCases={useCases} />
			</div>
		)
	);
}
