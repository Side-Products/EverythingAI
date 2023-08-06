const { chromium } = require("playwright");
const { Configuration, OpenAIApi } = require("openai");
const XLSX = require("xlsx");

const BASE_URL = "https://www.futurepedia.io";
const OPENAI_API_KEY = "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";

const generateToolInfo = async (toolContent) => {
	const configuration = new Configuration({
		apiKey: OPENAI_API_KEY,
	});
	const openai = new OpenAIApi(configuration);

	const prompt = `Generate some features for the tool from the given "Text".

                Text: ${toolContent.features}

				Also, figure out what would be the most suitable category and sub-category for this tool. Only choose one category and one subCategory that corresponds to the tool's main functionality.
				You should choose the subCategory only from the corresponding array of whatever category fits best. If there is no subCategory in the corresponding array, then choose nothing. Do not make up subcategories on your own!
				Here is a list of category and their sub-categories:

				const categories = {
					Marketing: [
						"Branding",
						"Video Editing",
						"SEO",
						"Music",
						"Ads/Performance Marketing",
						"Email Marketing",
						"Social Media",
						"YouTube",
						"Instagram",
						"Facebook",
						"Twitter",
						"LinkedIn",
						"TikTok",
						"Pinterest",
						"Snapchat",
						"Reddit",
						"Quora",
						"Story Telling",
						"Content Writing",
						"Copywriting",
						"Summarizer",
						"Podcasts",
						"Social Media (YT, Insta, Linkedin)",
						"Other",
					],
					Sales: ["Outreach", "Automation", "Responses", "Social Media (YT, Insta, Linkedin)"],
					Product: ["Website Builder", "Landing pages", "Customer Development", "Analytics", "A/B Testing", "Low Code/No Code", "Other"],
					Developer: ["Code Assistant", "Dev Tools", "Low Code/No Code"],
					Data: ["Spreadsheets", "SQL"],
					Design: ["Presentations", "Thumbnails", "Design Assistant", "Logo Generator", "UI/UX", "Ad creatives"],
					Productivity: ["Work", "Personal", "Project Management", "Time Management", "Note Taking"],
					"Customer Support": [],
					Operations: [],
					HR: [],
					Legal: [],
					Video: ["Video Editing", "Video Generator", "Personalized Tools"],
					Audio: ["Text to Speech", "Audio Editing", "Music", "Transcriber"],
					Images: ["Image Generator", "Image Editing", "Avatars", "Art"],
					Text: [],
					"2-D": [],
					"3-D": [],
					Prompts: [],
					"Search Engine Results": [],
					"Customer Success": [],
					Industries: [
						"Education",
						"Finance",
						"Real Estate",
						"Healthcare",
						"Gaming",
						"Fun",
						"Fashion",
						"B2B SAAS",
						"Travel",
						"Fitness",
						"Dating",
						"Religion",
						"Memory",
						"Fun Tools",
						"Mental Health",
					],
				};

				Also, choose the most appropriate pricing model for this tool based on the following text:
				
				${toolContent.pricing}
				
				Return an option from the pricingOptions array below:
				const pricingOptions = [
					{ name: "Free", meta: "" },
					{ name: "Freemium", meta: "" },
					{ name: "Freemium", meta: "Pay as you go" },
					{ name: "Freemium", meta: "Pay only for advanced, otherwise free" },
					{ name: "Free Trial", meta: "No credit card required" },
					{ name: "Free Trial", meta: "Credit card required" },
					{ name: "Premium", meta: "Pay upfront" },
					{ name: "Subscription", meta: "" },
				];


				Also, generate some use cases for this tool from the given "Text". There should be 3 use cases at max.
				The use cases should be in the following format:
				useCases: [
					{
					  heading: '',
					  content: ''
					},
					{
					  heading: '',
					  content: ''
					}
				]

				Return the data is json format with keys: features, category, subCategory, pricing and useCases.
				The output should be a JSON object that starts with { and ends with }. DO NOT start or end with any other characters like "Answer:" or "Output:" or "Result:" or "Output: {". Just start with { and end with }.
                `;

	const baseCompletion = await openai.createCompletion({
		model: "text-davinci-003",
		// model: "gpt-3.5-turbo",
		prompt: `${prompt}`,
		temperature: 0.8,
		max_tokens: 1000,
	});
	const basePromptOutput = baseCompletion.data.choices.pop();
	let output = JSON.stringify(basePromptOutput.text.trim());
	// Find the index of the first '{' character in the input string
	const startIndex = output.indexOf("{");
	// Extract the portion of the string starting from the first '{' character till the end
	output = output.substring(startIndex);
	output = '"' + output;

	console.log("output:", output);

	try {
		let result = output;
		typeof output == "string" && (result = JSON.parse(output));
		typeof result === "string" && (result = eval("(" + result + ")"));

		toolContent.features = result.features;
		toolContent.category = result.category;
		toolContent.subCategory = result.subCategory;
		toolContent.pricing = result.pricing;
		toolContent.useCases = result.useCases;
	} catch (error) {
		console.log("Parsing error:", error);
	}
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

// Function to scrape tool data from the website
async function scrapeToolsData() {
	try {
		const startTime = performance.now();

		const browser = await chromium.launch({ headless: false });
		const context = await browser.newContext();
		const page = await context.newPage();

		await page.goto(BASE_URL);
		// await page.waitForLoadState("networkidle");

		// Add a short delay (e.g., 2 seconds) to ensure that the page content has fully loaded
		await page.waitForTimeout(2000);

		// Scroll the page multiple times to load more tools via pagination
		const numScrolls = 2; // Number of times to scroll
		const scrollDistance = 1600; // Set the desired scroll distance in pixels

		for (let i = 0; i < numScrolls; i++) {
			console.log("\n==========", i, "times scrolled ==========\n");
			await page.evaluate((scrollDistance) => {
				window.scrollBy(0, scrollDistance);
			}, scrollDistance);

			// Wait for a short duration to allow the page to load more tools after scrolling
			await page.waitForTimeout(2000);
		}

		const endTime = performance.now();
		// Calculate the time taken in seconds
		const timeTakenInSeconds = (endTime - startTime) / 1000;
		console.log(`Time taken: ${timeTakenInSeconds} seconds`);

		const toolsData = await page.evaluate(() => {
			const tools = [];
			const toolElements = document.querySelectorAll(
				"div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-6.MuiGrid-grid-md-4.MuiGrid-grid-lg-4.css-12y6uts"
			);

			for (const element of toolElements) {
				const anchorElement = element.querySelector("a[target='_blank']");
				if (anchorElement) {
					const toolLink = anchorElement.getAttribute("href");
					tools.push(toolLink);
				}
			}

			return { tools, toolElements };
		});

		console.log("tools::", toolsData.tools);
		console.log("number of tools::", toolsData.tools.length);
		// return;

		// console.log("toolElements::", toolsData.toolElements);
		// Print the scraped tool data
		// console.log("tools::", toolsData.tools);

		const generateStartTime = performance.now();

		const tools = [];
		// Loop through each tool link and open it in a new tab
		let i = 0;
		for (const link of toolsData.tools) {
			i++;
			console.log("\n\n<========== Running for Tool", i, "==========>\n\n");
			const newPage = await browser.newPage();
			await newPage.goto(`${BASE_URL}${link}`);
			// Add a short delay (e.g., 2 seconds) to ensure that the new page content has fully loaded
			await newPage.waitForTimeout(2000);

			// Scrape the content of the new page
			const toolContent = await newPage.evaluate(async () => {
				const toolTitle = document.querySelector("h1.MuiTypography-root.MuiTypography-h4");
				const toolUrl = document.querySelector(
					"a.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-disableElevation.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-disableElevation"
				);
				const getBaseURL = (url) => {
					try {
						const urlObject = new URL(url);
						const base = `${urlObject.protocol}//${urlObject.hostname}`;
						return base;
					} catch (error) {
						console.error("Invalid URL:", error.message);
						return null;
					}
				};

				const socialLinks = {};
				const socialLinksContainer = document.querySelector("div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4");
				if (socialLinksContainer) {
					const instagramLink = socialLinksContainer.querySelector("a[href^='https://www.instagram.com/']");
					if (instagramLink) {
						socialLinks.instagram = instagramLink.getAttribute("href");
					}
					const twitterLink = socialLinksContainer.querySelector("a[href^='https://twitter.com/']");
					if (twitterLink) {
						socialLinks.twitter = twitterLink.getAttribute("href");
					}
					const linkedInLink = socialLinksContainer.querySelector("a[href^='https://www.linkedin.com/company/']");
					if (linkedInLink) {
						socialLinks.linkedin = linkedInLink.getAttribute("href");
					}
					const youtubeLink = socialLinksContainer.querySelector("a[href^='https://www.youtube.com/']");
					if (youtubeLink) {
						socialLinks.youtube = youtubeLink.getAttribute("href");
					}
				} else {
					socialLinks.instagram = "";
					socialLinks.twitter = "";
					socialLinks.linkedin = "";
					socialLinks.youtube = "";
				}

				// Extract features
				const topLevelDiv = document.querySelector("#__next");
				const mainDiv = topLevelDiv.children[1];
				const secondChild = mainDiv.querySelector("div:nth-child(2)");
				const thirdChild = secondChild.children[2];
				const extractedFeatures = thirdChild.textContent;

				const zeroethChild = secondChild.children[0];
				// const zsecondChild = zeroethChild.querySelector("div:nth-child(2)");
				let zsecondChild = zeroethChild.children[2];
				if (zsecondChild.textContent.includes("Product Information")) {
					zsecondChild = zeroethChild.children[3];
				}
				const pricingTargetChild = zsecondChild.children[1];
				const pricingContent = pricingTargetChild.textContent;

				const oneLiner = pricingTargetChild.querySelector("p:nth-child(1)");

				return {
					name: toolTitle ? toolTitle.textContent : "",
					url: getBaseURL(toolUrl.href),
					utmLink: "",
					oneLiner: oneLiner ? oneLiner.textContent : "",
					youtubeDemoVideoLink: "",
					features: extractedFeatures,
					category: "",
					subCategory: "",
					// pricing: { name: "Freemium", meta: "Pay only for advanced, otherwise free" },
					pricing: pricingContent,
					...socialLinks,
					useCases: [],
				};
			});

			await generateToolInfo(toolContent);
			tools.push(toolContent);

			console.log("Tool:", toolContent);

			// Close the new tab
			await newPage.close();
		}

		writeExcelData(tools);

		const generateEndTime = performance.now();
		// Calculate the time taken in seconds
		const generateTimeTakenInSeconds = (generateEndTime - generateStartTime) / 1000;
		console.log(`Time taken for generation: ${generateTimeTakenInSeconds} seconds`);

		await browser.close();
	} catch (error) {
		console.error("Error occurred:", error.message);
	}
}

// Call the function to start scraping
scrapeToolsData();
