# NuGu README

NuGu - Create GUIDs (UUID) strings quickly from within vscode

## Features

Create new Guid string from within vscode. Just open the command pallet (`Ctrl+Shift+P` on windows) type `NuGu` and use one of the 3 options.

![command pallet](images/cmdPallet.png)

* `Insert Standard GUID -`  creates a standard v4 UUID GUID (eg 24fa59eb-a715-400d-9d60-949ab44d0c24)
* `Insert Standard GUID Single quotes -` creates a standard v4 UUID surrounded by single quotes (eg '24fa59eb-a715-400d-9d60-949ab44d0c24')
* `Insert Standard GUID double quotes -` creates a standard v4 UUID surrounded by double quotes (eg "24fa59eb-a715-400d-9d60-949ab44d0c24")

You can also create a Standard GUID with the keyboard shortcut `Ctrl+Shift+[` on windows or `Cmd+Shift+[` on a mac

This extension uses the [node-uuid ](https://www.npmjs.com/package/uuid) package to generate GUIDs

The source code for this extension can be found at: https://github.com/beakersoft/nugu

Please log any feaure requests or comments there, or even better send me a pull request



