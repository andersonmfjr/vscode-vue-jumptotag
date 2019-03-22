const vscode = require('vscode')
const jumpToTag = require('./jumptotag')

function activate (context) {
  const jumpToTemplate = vscode.commands.registerCommand(
    'extension.jumptotemplate',
    () => {
      jumpToTag('<template')
    }
  )
  context.subscriptions.push(jumpToTemplate)

  const jumpToScript = vscode.commands.registerCommand(
    'extension.jumptoscript',
    () => {
      jumpToTag('<script')
    }
  )
  context.subscriptions.push(jumpToScript)

  const jumpToStyle = vscode.commands.registerCommand(
    'extension.jumptostyle',
    () => {
      jumpToTag('<style')
    }
  )
  context.subscriptions.push(jumpToStyle)
}
exports.activate = activate

// this method is called when your extension is deactivated
function deactivate () {}

module.exports = {
  activate,
  deactivate
}
