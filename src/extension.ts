import * as vscode from 'vscode';
import {v4 as uuidv4} from 'uuid';

export function activate(context: vscode.ExtensionContext) {
	
	console.log('Extension "nugu" is now active!');

	let disposableNewGuid = vscode.commands.registerCommand('nugu.newStandardGuid', () => {
		let newGuid = uuidv4();
		outputText(newGuid);
	});

	let disposableNewQuotedGuid = vscode.commands.registerCommand('nugu.newStandardGuidDoubleQuotes', () => {
		let newGuid = uuidv4();
		outputText("\"" + newGuid + "\"");
	});

	function outputText(value: string){

		const activeTextEditor = vscode.window.activeTextEditor;
		if (activeTextEditor) {
			
			const activeTextEditor = vscode.window.activeTextEditor;
			if (activeTextEditor) {

				let newGuid = uuidv4();
				const selection = activeTextEditor.selection;

				activeTextEditor.edit(editBuilder => {
					editBuilder.replace(selection, value);
				});
			}
		}
	}
	context.subscriptions.push(disposableNewGuid);
	context.subscriptions.push(disposableNewQuotedGuid);
}
