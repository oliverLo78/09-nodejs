// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let badge = '';

    if(license != 'None') {
        badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)' + license +'-yellow)';
    }

    return badge;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseLink;

    // select correct license link for the selected license
    switch(license) {
      case "MIT":
        licenseLink = "https://mit-license.org/";
        break;
      case "Apache":
        licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
        break;
      case "BSD":
        licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
        break;
      case "GPL":
        licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
        break;
      default:
        licenseLink = "";
        break;
    }
    
    return licenseLink;
  }

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let licenseSection = "";

    // if a license has been selected, create License section
    // with link to license information
    if (license != "None") {
      licenseSection += "## License\n";
      licenseSection += "Please see " + renderLicenseLink(license) + " to get detailed information for this license\n";
    }
  
    return licenseSection;
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Description 
  ${data.description}
  ## Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[Contibution](#contribution)
  *[Tests](#contribution)
  *[Questions](#questions)
  *[License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribute}

  ## Tests
  ${data.test}
  
  ## Questions
  * Checkout my [GitHub profile](https://github.com/${data.github})

  * Any questions or feed back you can contact me via email[email me](mailto:${data.email}) 
  ## License
  Copyright (c) [${data.github}](https://github.com/${data.github}). All rights reserved

  Licensed under the ${data.license} license.
  
  `;
}

module.exports = generateMarkdown;

//     // return `# ${data.title}`;
//     const sections = ['Description', 'Installation', 'Usage', 'Contribute', 'Tests', 'License', 'Questions'];

//     let markdown = "# " + data.title + "\n";

//       // Add license badge
//       markdown += renderLicenseBadge(data.license) + "\n";

//     // Add table of contents
//     markdown += '## Table of Contents\n';
//     for (let i=0; i < sections.length; i++) {
//         if (! (sections[i] === 'License' && data.license === 'None')) {
//             markdown += i+1 + ". [" + sections[i] +"](#" + sections[i][0].toLowerCase() + sections[i].substring(1) + ")\n";
//         }
//     }
//     markdown += "\n";

//     // Add Title
//     markdown += "##" + sections[0]  + "\n";
//     markdown += data.title + "\n";
   
//     // Add description
//     markdown += "##" + sections[1]  + "\n";
//     markdown += data.description + "\n";

//     // Add license
//     markdown += renderLicenseSection(data.license) + "\n";

//     // Add installation
//     markdown += "##" + sections[2] + "\n";
//     markdown += data.install + "\n";

//     // Add testing
//     markdown += "##" + sections[3] + "\n";
//     markdown += data.test + "\n";

//     // Add usage
//     markdown += "##" + sections[4] + "\n";
//     markdown += data.Usage + "\n";

//     // Add contribute
//     markdown += "##" + sections[5] + "\n";
//     markdown += data.contribute + "\n";

//     // Add questions
//     markdown += "##" + sections[6] + "\n";
//     markdown += "You can find me [Here](https://github.com/" + data.username + ") on GitHub\n";
//     markdown += "You can email at " + data.email + " if you have any additional questions.\n"
   
//    return markdown;
// }

