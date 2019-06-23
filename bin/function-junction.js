#!/usr/bin/env node
const { MultiSelect } = require('enquirer');
const ora = require('ora');
const chalk = require('chalk');

console.log(chalk.blue`Hello fellow cool kids! 😎👉👉`);

const prompt = new MultiSelect({
  name: 'setup',
  message: 'Which aspects of the system need to be setup?',
  hint: '(Use <space> to select, <a> for all, and <return> to submit)',
  choices: [
    {
      name: 'Programming Languages',
      value: './installers/language-installer.js',
      hint: '\t\tInstall programming languages/engines (Node, Go, Rust)',
    },
    {
      name: 'Terminal',
      value: './installer/terminal-installer.js',
      hint: '\t\tSetup spaceship prompt terminal (requires Node).',
    },
    {
      name: 'Software',
      value: './installer/software-installer.js',
      hint: '\t\tInstall a selection of must-have software.',
    },
    {
      name: 'VS Code Extensions',
      value: './installer/extension-installer.js',
      hint: '\t\tInstall my fav extensions for vscode.',
    },
  ],
  result(names) {
    return this.map(names);
  },
});

prompt.run().then(async answers => {
  let running_man = {};
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
