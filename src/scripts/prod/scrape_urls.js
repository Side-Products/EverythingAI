const { chromium } = require("playwright");
const fs = require("fs");

const BASE_URL = "https://www.futurepedia.io";

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
    const numScrolls = 700; // Number of times to scroll
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

    const fileName = "tool_urls.json";
    // Convert the array to a JSON string
    const jsonData = JSON.stringify(toolsData.tools, null, 2); // The second argument (null) and third argument (2) are for formatting the JSON string with indentation.

    // Write the JSON data to the file
    fs.writeFile(fileName, jsonData, "utf8", (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      } else {
        console.log(`Data successfully written to ${fileName}`);
      }
    });

    await browser.close();

    return;
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

// Call the function to start scraping
scrapeToolsData();
