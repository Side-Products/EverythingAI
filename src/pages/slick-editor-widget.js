import Iframe from "react-iframe";
import axios from "axios";

export default function EditorWidget() {
	const projectId = "65f65807cfd53a1ccfa9b757";
	const apiKey = "0273df8c-6565-4ada-a9c5-1e1e4a8e03a6";
	const projectName = "untitled video";
	const language = "en";
	const videoUrl = "";

	// Create project
	const createProject = () => async () => {
		try {
			const config = {
				headers: {
					"Content-Type": "application/json",
					"x-api-key": apiKey,
				},
			};

			const body = {
				name: projectName, // optional
				videoUrl: videoUrl,
				language: language,
			};

			const { data } = await axios.post(`http://localhost:3000/api/project/create`, body, config);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			{/* <button className="p-2 rounded-lg bg-primary-400" onClick={() => createProject()}>
				Create Project
			</button> */}

			<Iframe
				url={`http://localhost:3000/editor-widget/${projectId}?apiKey=${apiKey}`}
				width="100%"
				height="100%"
				styles={{ height: "100vh" }}
				id=""
				className=""
				display="block"
				position="relative"
			/>
		</>
	);
}
