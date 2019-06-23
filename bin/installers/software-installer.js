const util = require('util');
const exec = util.promisify(require('child_process').exec);
const chalk = require('chalk');

const linuxCmds = {
  vscode: 'sudo snap install code --classic', // Visual studio code
  insomnia: 'sudo snap install insomnia', // Insomnia
  slack: 'sudo snap install --classic slack', // Slack
  telegram: 'sudo snap install telegram-desktop', // Telegram
  discord: 'sudo snap install discord', // Discord
  spotify: 'sudo snap install spotify', // Spotify
  vlc: 'sudo snap install vlc', // VLC
  docker: 'sudo snap install docker', // Docker
  firefox: 'sudo snap install firefox', // Firefox
};

module.exports = async () => {
  console.log(chalk`{blue Installing snappable software.}`);
  for (const cmd of Object.entries(linuxCmds)) {
    try {
      await exec(cmd[1]);
      console.log(chalk`{green Installed ${cmd[0]}.}`);
    } catch (err) {
      console.log(chalk`{red.bold Failed to install ${cmd[0]}.}`);
      console.error(err);
    }
  }
};
