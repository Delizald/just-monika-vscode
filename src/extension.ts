// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('just-monika.justMonika', async () => {
      const panel = vscode.window.createWebviewPanel(
        'justMonika',
        'Just Monika',
        vscode.ViewColumn.One,
        { localResourceRoots: [vscode.Uri.file(path.join(context.extensionPath, 'media'))] }
      );
      panel.iconPath =  vscode.Uri.file(path.join(context.extensionPath, 'media', 'm_sticker_1.png'));
      panel.webview.html = getWebViewContent(context, panel.webview);
    })
  );
}
// this method is called when your extension is deactivated
export function deactivate(context: vscode.ExtensionContext) { }

function getWebViewContent(context: vscode.ExtensionContext, webview: vscode.Webview): string {
 const monika = webview.asWebviewUri(vscode.Uri.file(path.join(context.extensionPath, 'media', 'monika.gif')));
  return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
			  <meta name="viewport" content="width=device-width, initial-scale=1.0">
			  <title>Just Monika</title>
			</head>
			<body>
        <img src="${monika}"/>
      </body>
			</html>`;
}

