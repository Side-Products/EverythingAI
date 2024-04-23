import SlickEditorWidget, { createProject } from "slick-editor-widget";

export default function EditorWidget() {
	const projectId = "66273c855a26d2378f8af237";
	const apiKey = "0273df8c-6565-4ada-a9c5-1e1e4a8e03a6";
	const projectName = "untitled video";
	const language = "en";
	const videoUrl = "https://nuw-io.s3-accelerate.amazonaws.com/bd0eb1a1-037d-4314-9183-36bfef2cb53d.mp4";
	const videoLengthInSeconds = 75;

	const handleCreateProject = async () => {
		const data = await createProject({ apiKey, videoUrl, videoLengthInSeconds, projectName, language });
		console.log(data);
	};

	return (
		<>
			<button className="p-2 rounded-lg bg-primary-400" onClick={handleCreateProject}>
				Create Project
			</button>

			<SlickEditorWidget apiKey={apiKey} projectId={projectId} />
		</>
	);
}
