import YoutubeEmbed from "@/components/Tools/YoutubeEmbed";

export default function DemoVideo({ link, partner }) {
	let embedId = "";
	if (link?.startsWith("https://youtu.be/")) {
		embedId = link.split("/")[3];
	} else if (link?.startsWith("https://www.youtube.com/watch?v=")) {
		embedId = link.split("=")[1];
	}

	return (
		link &&
		embedId && (
			<div className="flex flex-col space-y-4">
				<div className="text-2xl font-semibold">{partner ? "Video describing the Company" : "Demo Video"}</div>
				<YoutubeEmbed embedId={embedId} />
			</div>
		)
	);
}
