const util = require('util');
const exec = util.promisify(require('child_process').exec);
const chalk = require('chalk');

const languages = {
  node: 'sudo snap install node --edge --classic',
  yarn: ` curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
          echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
          sudo apt-get update && sudo apt-get install yarn`,
  rust: 'curl https://sh.rustup.rs -sSf | sh',
  go: 'sudo snap install go --classic',
};

module.exports = async () => {
  for (const lang of Object.entries(languages)) {
    console.log(chalk`{blue Trying to install ${lang[0]}!}`);
    try {
      await exec(lang[1]);
      console.log(`{green ✓  Installed ${lang[0]}}`);
    } catch (err) {
      console.log(`{red ✗  Failed to install ${lang[0]}}`);
      console.error(err);
    }
  }
};
