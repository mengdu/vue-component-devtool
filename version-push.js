const path = require('path')
const fs = require('fs')
const chalk = require('chalk')
const pkg = require('./package.json')
const MarkdownIt = require('markdown-it')
const versionFile = path.resolve(__dirname, 'version.md')
const docBaseUrl = `https://mengdu.github.io/${pkg.name}/`

function main () {
  if (!fs.existsSync(versionFile)) {
    fs.writeFileSync(versionFile, '')
  }

  let content = fs.readFileSync(versionFile, 'utf8')
  let hasNewVersion = false
  if (content.indexOf(pkg.version) === -1) {
    content = `+ [v${pkg.version}](${docBaseUrl}docs/${pkg.version}) - ${new Date()}\n` + content
    fs.writeFileSync(versionFile, content)

    console.log(`new version: ${chalk.green(`v${pkg.version}`)}`)
    hasNewVersion = true
  }

  const md = new MarkdownIt()
  const html = md.render(content)

  fs.writeFileSync(path.resolve(__dirname, 'docs/index.html'), html)

  if (!hasNewVersion) {
    console.warn(chalk.yellow('Not new version, exit task'))
  }
}

main()
