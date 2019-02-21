const { MultiSelect } = require('enquirer');
const installer = require('./vscode-extensions');
const ora = require('ora');

const prompt = new MultiSelect({
  name: 'setup',
  message: 'Which aspects of the system need to be setup?',
  hint: '(Use <space> to select, <a> for all, and <return> to submit)',
  choices: [
    {
      name: 'Node Environment',
      value: 'nodeenv',
      hint: '\t\tinstall node, yarn, nvm',
    },
    {
      name: 'VS Code Extensions',
      value: 'vscode-extensions.js',
      hint: '\t\tinstall my fav extensions',
    },
    {
      name: 'Global Node Packages',
      value: 'globalnpm',
      hint: '\t\tglobally install things like CRA and Gatsby',
    },
  ],
  result(names) {
    return this.map(names);
  },
});

prompt.run().then(async answers => {
  const running_man;
  for (const answer of Object.values(answers)) {
    const aspect = require(answer);
    running_man = ora({
      spinner: 'runner',
      text: `Running ${answer}`,
    }).start();
    await aspect();
    running_man.stop();
  }
});
