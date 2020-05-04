function generateMarkdown(data) {
    return `
  # ${data.project}
  [![IMAGE](https://img.shields.io/badge/license-${data.license}-blue.svg)]

  ## Description
  ${data.description}

  ## Table of Content
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#question)


  ## Installation
${data.installation}


  ## Usage
  ${data.instruction}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions about the repo or to open an issue, please contact [${data.username}](${data.website}/${data.username}) directly at ${data.email}.


  `;
  }
  
  module.exports = {generateMarkdown}


// function createMd(data){
//     return `${data} to you!`;
// }
// module.exports = {createMd}