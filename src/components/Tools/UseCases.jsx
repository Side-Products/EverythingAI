export default function UseCases({ useCases }) {
	return (
		useCases && (
			<div className="md:w-2/3 flex flex-col space-y-6">
				<div className="text-2xl font-semibold">Use Cases</div>
				<div className="text-base whitespace-pre-line">{useCases}</div>
			</div>
		)
	);
}
