export default function Features({ features }) {
	const ContentToList = ({ content }) => {
		// Split the content into separate lines
		const lines = content.split("\n").filter((line) => line.trim() !== "");

		return (
			<ul className="list-disc flex flex-col space-y-4">
				{lines.map((line, index) => (
					<li key={index}>{line}</li>
				))}
			</ul>
		);
	};

	return (
		features && (
			<div className="w-full h-full flex flex-col space-y-6">
				<div className="text-base whitespace-pre-line features-list pl-4">
					<ContentToList content={features} />
				</div>
			</div>
		)
	);
}
