const XLSX = require("xlsx");

const capitalize = (item) => {
	return item.toLowerCase().charAt(0).toUpperCase() + item.slice(1);
};

const generateSlug = (name) => name.replace(/[^a-zA-Z0-9]+/g, "_");

const generateUtmLink = (url, utm_source, utm_medium, utm_campaign) => {
	const queryParams = new URLSearchParams({
		utm_source: utm_source,
		utm_medium: utm_medium,
		utm_campaign: utm_campaign,
	});

	return `${url}?${queryParams.toString()}`;
};

const writeExcelData = (data) => {
	const workbook = XLSX.utils.book_new();

	const sheetData = [
		[
			"name",
			"url",
			"url",
			"utm_source",
			"utm_medium",
			"utm_campaign",
			"utmLink",
			"oneLiner",
			"youtubeDemoVideoLink",
			"features",
			"category",
			"subCategory",
			"pricing name",
			"pricing meta",
			"twitter",
			"instagram",
			"linkedin",
			"youtube",
			"useCases",
		],
	];

	for (const item of data) {
		const rowData = [
			item.name || "",
			item.url || "",
			item.url || "",
			"everything_ai",
			"marketplace",
			generateSlug(item.name || ""),
			generateUtmLink(item.url, "everything_ai", "marketplace", generateSlug(item.name || "")),
			item.oneLiner || "",
			item.youtubeDemoVideoLink || "",
			item.features ? JSON.stringify(item.features) : "",
			item.category || "",
			item.subCategory || "",
			item.pricing && item.pricing.name ? item.pricing.name : "",
			item.pricing && item.pricing.meta ? item.pricing.meta : "",
			item.twitter || "",
			item.instagram || "",
			item.linkedin || "",
			item.youtube || "",
			item.useCases
				? JSON.stringify(
						item.useCases.map((useCase) => ({
							heading: useCase.heading || "",
							content: useCase.content || "",
						}))
				  )
				: "",
		];

		sheetData.push(rowData);
	}

	const sheet = XLSX.utils.aoa_to_sheet(sheetData);
	XLSX.utils.book_append_sheet(workbook, sheet, "Sheet1");

	// Write the data to the file
	const excelFileName = "output.xlsx";
	XLSX.writeFile(workbook, excelFileName);
};

// Example data
const dataToWrite = [
	{
		name: "Humata AI",
		url: "https://www.humata.ai",
		utmLink: "",
		oneLiner: "Favourites",
		youtubeDemoVideoLink: "",
		features: ["Instant answers", "Faster research", "Data extraction", "Q&A capabilities", "Automatic writing"],
		category: "Productivity",
		subCategory: "Note Taking",
		pricing: {
			name: "Freemium",
			meta: "Pay only for advanced, otherwise free",
		},
		twitter: "https://twitter.com/HumataAI",
		linkedin: "https://www.linkedin.com/company/humata/about/",
		useCases: [
			{
				heading: "Researchers",
				content: "Seeking to quickly analyze and understand complex documents",
			},
			{
				heading: "Students",
				content: "Aiming to write papers more efficiently",
			},
			{
				heading: "Business Professionals",
				content: "Needing to extract valuable insights from files",
			},
		],
	},
];

writeExcelData(dataToWrite);
