import YoutubeEmbed from "@/components/Tools/YoutubeEmbed";

export default function DemoVideo({ link }) {
	let embedId = "";
	if (link.startsWith("https://youtu.be/")) {
		embedId = link.split("/")[3];
	} else if (link.startsWith("https://www.youtube.com/watch?v=")) {
		embedId = link.split("=")[1];
	}

	return (
		embedId && (
			<div className="flex flex-col space-y-4">
				<div className="text-xl font-semibold">Demo Video</div>
				<YoutubeEmbed embedId={embedId} />
			</div>
		)
	);
}
