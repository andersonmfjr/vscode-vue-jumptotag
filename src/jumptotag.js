const vscode = require('vscode')

const getLinePosition = (doc, tag) => {
  const lineCount = doc.lineCount
  let lineNumberTagMatch = -1

  for (let lineNumber = 0; lineNumber < lineCount; lineNumber++) {
    const lineText = doc.lineAt(lineNumber)
    const lineOfTag = lineText.text.startsWith(tag)

    if (lineOfTag) {
      lineNumberTagMatch = lineNumber
    }
  }

  return lineNumberTagMatch
}

const jumpToTag = tag => {
  const editor = vscode.window.activeTextEditor

  if (editor.document.languageId === 'vue') {
    const tagMatch = getLinePosition(editor.document, tag)

    if (tagMatch >= 0) {
      // Set cursor position
      const position = editor.selection.active
      const newPosition = position.with(tagMatch, 0)
      const newSelection = new vscode.Selection(newPosition, newPosition)
      editor.selection = newSelection

      // Set scroll position
      const startPosition = new vscode.Position(tagMatch, 0)
      const endPosition = new vscode.Position(editor.document.lineCount, 0)
      const range = new vscode.Range(startPosition, endPosition)
      editor.revealRange(range)
    }
  }
}

module.exports = jumpToTag
