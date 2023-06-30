const puppeteer = require("puppeteer");

async function takeScreenshot() {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	// Set the viewport size to 16:9 ratio (e.g., 1280x720)
	const aspectRatio = 16 / 9;
	const width = 1500;
	const height = Math.floor(width / aspectRatio);
	await page.setViewport({ width, height });

	const url = "https://musixverse.com"; // Replace with the desired website URL
	await page.goto(url);

	// Wait for any necessary elements or resources to load
	// You can customize this based on the specific website you're capturing

	// Capture screenshot
	await page.screenshot({ path: "./src/scripts/screenshots/screenshot.png" });

	await browser.close();
}

takeScreenshot()
	.then(() => console.log("Screenshot captured successfully"))
	.catch((error) => console.error("Error capturing screenshot:", error));
