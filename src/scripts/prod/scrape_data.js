const { chromium } = require("playwright");

const BASE_URL = "https://www.futurepedia.io";

// Function to scrape tool data from the website
async function scrapeToolsData() {
	try {
		const browser = await chromium.launch();
		const context = await browser.newContext();
		const page = await context.newPage();

		await page.goto(BASE_URL);
		await page.waitForLoadState("networkidle");

		const toolsData = await page.evaluate(() => {
			const tools = [];
			// Replace the below logic with the appropriate one for the website's structure
			const toolElements = document.querySelectorAll("div.MuiBox-root");
			// for (const element of toolElements) {
			// 	const toolData = {
			// 		// Extract relevant data from the element
			// 		// For example:
			// 		name: element.querySelector("YOUR_NAME_SELECTOR").innerText.trim(),
			// 		description: element.querySelector("YOUR_DESCRIPTION_SELECTOR").innerText.trim(),
			// 		// Add more properties as needed
			// 	};

			// 	tools.push(toolData);
			// }
			tools.push(toolElements);
			return tools;
		});

		// Print the scraped tool data
		console.log("toolsData::", toolsData);

		await browser.close();
	} catch (error) {
		console.error("Error occurred:", error.message);
	}
}

// Call the function to start scraping
scrapeToolsData();
