export default function Features({ features }) {
	return (
		features && (
			<div className="md:w-2/3 flex flex-col space-y-6">
				<div className="text-2xl font-semibold">Features</div>
				<div className="text-base whitespace-pre-line">{features}</div>
			</div>
		)
	);
}
