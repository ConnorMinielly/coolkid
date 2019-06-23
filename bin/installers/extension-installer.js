const util = require('util');
const exec = util.promisify(require('child_process').exec);
const chalk = require('chalk');

const extensions = [
  'apollographql.vscode-apollo',
  'bungcip.better-toml',
  'christian-kohler.npm-intellisense',
  'christian-kohler.path-intellisense',
  'cssho.vscode-svgviewer',
  'davidanson.vscode-markdownlint',
  'dbaeumer.vscode-eslint',
  'eamodio.gitlens',
  'ecmel.vscode-html-css',
  'ms-vscode.vscode-typescript-tslint-plugin',
  'eg2.vscode-npm-script',
  'equinusocio.vsc-material-theme',
  'esbenp.prettier-vscode',
  'formulahendry.auto-close-tag',
  'formulahendry.auto-rename-tag',
  'jpoissonnier.vscode-styled-components',
  'leizongmin.node-module-intellisense',
  'mads-hartmann.bash-ide-vscode',
  'ms-python.python',
  'ms-vscode.go',
  'ms-vscode.node-debug2',
  'ms-vscode.powershell',
  'MS-vsliveshare.vsliveshare',
  'msjsdiag.debugger-for-chrome',
  'naumovs.color-highlight',
  'oderwat.indent-rainbow',
  'orta.vscode-jest',
  'pkief.material-icon-theme',
  'prisma.vscode-graphql',
  'rust-lang.rust',
  'SirTori.indenticator',
  'streetsidesoftware.code-spell-checker',
  'teabyii.ayu',
  'whizkydee.material-palenight-theme',
  'xabikos.javascriptsnippets',
  'yzhang.markdown-all-in-one',
  'zignd.html-css-class-completion',
  'yatki.vscode-surround',
  'shd101wyy.markdown-preview-enhanced',
  'mgmcdermott.vscode-language-babel',
  'mrmlnc.vscode-duplicate',
  'steoates.autoimport',
  'CoenraadS.bracket-pair-colorizer-2',
  'jolaleye.horizon-theme-vscode',
  'liviuschera.noctis',
  'wix.vscode-import-cost',
];

module.exports = async () => {
  const { err } = await exec('code --version');

  if (!err) {
    console.log(chalk`{green ✓  VS Code found, installing extensions...}`);
    for (const ext of extensions) {
      try {
        await exec(`code --install-extension ${ext}`);
        console.log(chalk`{green ✓  Installed ${ext} successfully!}`);
      } catch (err) {
        console.log(chalk`{red ✗  Failed to install ${ext}!}`);
      }
    }
  } else {
    console.log(
      chalk`{red ✗  VS Code not detected on system, please install VS Code first.}`,
    );
  }
};
