// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "") {
    return "";
  } else if (license === "MIT") {
    return "[![license: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache") {
    return "[![license](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPL") {
    return "[![license: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data.license);

  console.log("You accessed the generate markdown function!");
  return (
    `# ${data.title}
` +
    renderLicenseBadge(data.license) +
    `
  
## ${"Description"}
${data.description}
## ${"Table of Contents"}
${"* [Installation](#installation)"}
${"* [Usage](#usage)"}
${"* [Credits](#credits)"}
${"* [License](#license)"}
${"* [Tests](#tests)"}

## ${"Installation"}

## ${"Usage"}
${data.repositoryInfo}
## ${"Credits"}
${data.contributions}
## ${"License"}
## ${"Tests"}
  `
  );
}
module.exports = { generateMarkdown };
