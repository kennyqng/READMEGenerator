function generateMarkdown(data) {
    return `
  # ${data.project}
  ${data.website}
  
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
  If you have any questions about the repo or to open an issue, please contact ${data.username} directly at ${data.email}.


  `;
  }
  
  module.exports = {generateMarkdown}


// function createMd(data){
//     return `${data} to you!`;
// }
// module.exports = {createMd}