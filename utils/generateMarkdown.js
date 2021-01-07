// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "") {
    return "";
  } else {
    return license;
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
` +
    renderLicenseBadge(data.license) +
    `
## ${"Tests"}
  `
  );
}
module.exports = { generateMarkdown };
