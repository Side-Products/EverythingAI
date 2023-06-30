import Button from "@/components/ui/Button";
import { useContext } from "react";
import { StatusContext } from "@/store/StatusContextProvider";

export default function EmbedTag({ toolSlug, hostURL = "https://everything-ai.vercel.app" }) {
	const { setSuccess } = useContext(StatusContext);

	const copyToClipboard = async () => {
		const htmlToCopy = `<a href='${hostURL}/tools/${toolSlug}' target="_blank">
        <img src='${hostURL}/api/tools/image/${toolSlug}' alt="everythingai tool" width="200" height="50"></img>
        </a>`;

		await navigator.clipboard.writeText(htmlToCopy);
		setSuccess((prevState) => ({
			...prevState,
			title: "Sharing Tag Copied",
			message: "Embed tag has been copied to clipboard",
			showSuccessBox: true,
		}));
	};

	return (
		<div>
			<h1 className="text-2xl font-semibold">Promote your tool</h1>
			<div className="flex items-center justify-between p-4 mt-6 bg-gray-200 rounded-xl">
				<img src={`/api/tools/image/${toolSlug}`} alt="sometign" width="200" height="50"></img>
				<Button onClick={copyToClipboard} classes={"max-w-fit"}>
					<span className="material-symbols-outlined">content_copy</span>
					<span className="ml-2">Copy Embed Code</span>
				</Button>
			</div>
		</div>
	);
}
