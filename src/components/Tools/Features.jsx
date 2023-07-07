export default function Features({ features }) {
	return (
		features && (
			<div className="w-full h-full flex flex-col space-y-6">
				<div className="text-base whitespace-pre-line">{features}</div>
			</div>
		)
	);
}
