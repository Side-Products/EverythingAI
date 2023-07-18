const XLSX = require("xlsx");

const capitalize = (item) => {
	return item.toLowerCase().charAt(0).toUpperCase() + item.slice(1);
};

const readExcelData = () => {
	// Load the Excel file
	const workbook = XLSX.readFile("/Users/pushpitbhardwaj/Desktop/eai/codebase/everythingai/src/scripts/data/tools.xlsx");

	// Select the first sheet
	const worksheet = workbook.Sheets[workbook.SheetNames[0]];

	// Get the range of the sheet
	const range = XLSX.utils.decode_range(worksheet["!ref"]);

	// Convert each row into a JSON object
	const rowData = [];
	for (let i = range.s.r; i <= range.e.r; i++) {
		const row = {};
		for (let j = range.s.c; j <= range.e.c; j++) {
			const cellAddress = XLSX.utils.encode_cell({ r: i, c: j });
			const cell = worksheet[cellAddress];
			const columnName = XLSX.utils.encode_col(j);

			row[columnName] = cell ? cell.v : null;
		}
		rowData.push(row);
	}

	// Print the resulting JSON objects
	console.log(rowData[0]);

	// Remove the first object from rowData
	console.log("Removing column names");
	rowData.shift();

	console.log("\n\nData format:", rowData[0]);

	const formattedData = [];
	for (const obj of rowData) {
		const convertedObj = {};
		for (const [key, value] of Object.entries(obj)) {
			if (key === "A") {
				convertedObj["name"] = value?.trim();
			} else if (key === "B") {
				convertedObj["url"] = value?.trim();
			} else if (key === "G") {
				convertedObj["utmLink"] = value?.trim();
			} else if (key === "H") {
				convertedObj["oneLiner"] = value?.trim();
			} else if (key === "I") {
				convertedObj["youtubeDemoVideoLink"] = value && value !== "NA" ? value?.trim() : "";
			} else if (key === "J") {
				convertedObj["features"] = value?.trim();
			} else if (key === "K") {
				convertedObj["category"] = value?.trim();
			} else if (key === "L") {
				convertedObj["subCategory"] = value && !value.includes("---") ? value?.trim() : "";
			} else if (key === "M") {
				convertedObj["pricing"] = {
					name: capitalize(obj["M"].trim()),
					meta: "",
				};
			} else if (key === "N") {
				if (obj["N"]) {
					convertedObj["pricing"] = {
						name: capitalize(obj["M"].trim()),
						meta: capitalize(obj["N"].trim()),
					};
				}
			} else if (key === "O") {
				convertedObj["twitter"] = value && value !== "NA" ? value?.trim() : "";
			} else if (key === "P") {
				convertedObj["instagram"] = value && value !== "NA" ? value?.trim() : "";
			} else if (key === "Q") {
				convertedObj["linkedin"] = value && value !== "NA" ? value?.trim() : "";
			} else if (key === "R") {
				convertedObj["youtube"] = value && value !== "NA" ? value?.trim() : "";
			} else {
				if (key === "T") {
					if (obj["T"]) {
						convertedObj["useCases"] = [
							{
								heading: obj["S"].trim(),
								content: obj["T"].trim(),
							},
						];
					}
				}
				if (key === "V") {
					if (obj["V"]) {
						convertedObj["useCases"].push({
							heading: obj["U"].trim(),
							content: obj["V"].trim(),
						});
					}
				}
				if (key === "X") {
					if (obj["X"]) {
						convertedObj["useCases"].push({
							heading: obj["W"].trim(),
							content: obj["X"].trim(),
						});
					}
				}
			}
		}
		formattedData.push(convertedObj);
	}

	console.log("\n\nFormatted Data:", formattedData[50]);

	return formattedData;
};

module.exports = { readExcelData };
