const { chromium } = require("playwright");
const { Configuration, OpenAIApi } = require("openai");

const BASE_URL = "https://www.futurepedia.io";

// Function to scrape tool data from the website
async function scrapeToolsData() {
	const configuration = new Configuration({
		apiKey: process.env.OPENAI_API_KEY,
	});
	const openai = new OpenAIApi(configuration);

	try {
		const browser = await chromium.launch({ headless: false });
		const context = await browser.newContext();
		const page = await context.newPage();

		await page.goto(BASE_URL);
		await page.waitForLoadState("networkidle");

		// Add a short delay (e.g., 2 seconds) to ensure that the page content has fully loaded
		await page.waitForTimeout(2000);

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

		console.log("toolElements::", toolsData.toolElements);
		// Print the scraped tool data
		console.log("tools::", toolsData.tools);

		const tools = [];
		// Loop through each tool link and open it in a new tab
		for (const link of toolsData.tools) {
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
				const oneLiner = document.querySelector("p.MuiTypography-root.MuiTypography-body1");

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

				return {
					name: toolTitle ? toolTitle.textContent : "",
					url: getBaseURL(toolUrl.href),
					utmLink: "",
					oneLiner: oneLiner ? oneLiner.textContent : "",
					youtubeDemoVideoLink: "",
					features: extractedFeatures,
					category: "Marketing",
					subCategory: "Social Media (YT, Insta, Linkedin)",
					pricing: { name: "Freemium", meta: "Pay only for advanced, otherwise free" },
					...socialLinks,
					useCases: [
						{
							heading: "Marketing",
							content: "For businesses and marketing teams to generate new ideas.",
						},
						{
							heading: "Software Development",
							content: "For techies and students to solve problems and learn coding quickly.",
						},
						{
							heading: "Content",
							content: "For writers to get suggestions for content pieces including outlines, keywords and topic ideas.",
						},
					],
				};
			});

			// Print the scraped content of the new page
			console.log("Tool Content:", toolContent);

			const prompt = `Generate some features for the given "Text" in a specific "Format".

                Text: ${toolContent.features}

                Format: "Instant AI summaries for Youtube videos using GPT.\n" +
                "Save time – get the video gist quickly.\n" +
                "Provides summaries in just 10-20 seconds."
                `;

			const baseCompletion = await openai.createCompletion({
				model: "text-davinci-003",
				// model: "gpt-3.5-turbo",
				prompt: `${prompt}`,
				temperature: 0.8,
				max_tokens: 1000,
			});
			const basePromptOutput = baseCompletion.data.choices.pop();
			const output = basePromptOutput.text.trim();
			toolContent.features = output;

			tools.push(toolContent);

			// Close the new tab
			// await newPage.close();
		}

		await browser.close();
	} catch (error) {
		console.error("Error occurred:", error.message);
	}
}

// Call the function to start scraping
scrapeToolsData();
