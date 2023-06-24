import axios from "axios";

const getUTCTimestamp = (blockTimestamp) => {
	const pad = (n, s = 2) => `${new Array(s).fill(0)}${n}`.slice(-s);
	const d = new Date(blockTimestamp);

	return `${pad(d.getFullYear(), 4)}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}.${pad(
		d.getMilliseconds(),
		3
	)}`;
};
export const getTimestamp = (blockTimestamp) => {
	var date = new Date(blockTimestamp);
	var now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());

	return getUTCTimestamp(new Date(now_utc).toUTCString().toString().slice(0, 25));
};

export const dataURLtoFile = (dataurl, filename) => {
	const arr = dataurl.split(",");
	const mime = arr[0].match(/:(.*?);/)[1];
	const bstr = atob(arr[1]);
	let n = bstr.length;
	const u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new File([u8arr], filename, { type: mime });
};

export const uploadImage = async (image, imageName, setLoading, setError) => {
	try {
		if (!image) {
			setError({
				title: "Something went wrong",
				message: "Please upload an image",
				showErrorBox: true,
			});
			return;
		}

		const file = dataURLtoFile(image, imageName);
		const formData = new FormData();
		formData.append("file", file);

		const response = await axios.post(`/api/upload-image`, formData, {
			maxContentLength: Infinity,
			maxBodyLength: Infinity,
			headers: {
				"Content-Type": "multipart/form-data",
			},
			onUploadProgress: (progressEvent) => {
				var _percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
				setLoading((prevState) => ({
					...prevState,
					status: true,
					showProgressBar: true,
					progress: _percentage,
				}));
			},
		});

		if (response.status === 200) {
			console.log("Image uploaded successfully at:", response.data.Location);
			return response.data.Location;
		} else {
			setError({
				title: "Something went wrong",
				message: "Error uploading image. Please retry.",
				showErrorBox: true,
			});
			return null;
		}
	} catch (error) {
		console.log("Error uploading image:", error);
		setError({
			title: "Something went wrong",
			message: "Error uploading image. Please retry.",
			showErrorBox: true,
		});
	}
};

export const getObjectByName = (categoryName, categoryArray) => {
	const lowerCaseName = categoryName.toLowerCase();
	return categoryArray.find((category) => category.name.toLowerCase() === lowerCaseName);
};
/**
 * @params pricingName, the price name whose chip bg color and text color is required
 * @returns background and text color tw-classes w.r.t pricing name
 */
export const getPricingChipClass = (pricingName) => {
	if (pricingName) {
		switch (pricingName.split(" ")[0]) {
			case "Free":
				return "text-green-700 bg-green-300";
			case "Premium":
				return "text-yellow-800 bg-yellow-300";
			default:
				return "text-purple-800 bg-purple-300";
		}
	}
};

export const generateSlug = (name) => name.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase();
