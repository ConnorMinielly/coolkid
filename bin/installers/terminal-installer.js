const util = require('util');
const exec = util.promisify(require('child_process').exec);
const chalk = require('chalk');

const term = {
  font: 'sudo apt install fonts-firacode',
  zsh: 'sudo apt install zsh && chsh -s $(which zsh)',
  prompt: 'npm install -g spaceship-prompt',
};

module.exports = async () => {
  console.log(chalk`{blue Trying to install terminal requirements!}`);
  try {
    await exec(term.font);
    console.log(`{green ✓  Installed font!}`);
    await exec(term.zsh);
    console.log(`{green ✓  Installed zsh!}`);
    await exec(term.prompt);
    console.log(`{green ✓  Installed spaceship-prompt!}`);
  } catch (err) {
    console.log(`{red ✗  Failed to install terminal requirement!}`);
    console.error(err);
  }
};
