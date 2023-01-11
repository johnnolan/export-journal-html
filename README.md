![](https://img.shields.io/endpoint?url=https%3A%2F%2Ffoundryshields.com%2Fversion%3Fstyle%3Dflat%26url%3Dhttps%3A%2F%2Fgithub.com%2Fjohnnolan%2Fexport-journal-html%2Freleases%2Fdownload%2F0.0.1%2Fmodule.json)
![](https://img.shields.io/endpoint?url=https%3A%2F%2Ffoundryshields.com%2Fsystem%3FnameType%3Dfull%26showVersion%3D1%26style%3Dflat%26url%3Dhttps%3A%2F%2Fgithub.com%2Fjohnnolan%2Fexport-journal-html%2Freleases%2Fdownload%2F0.0.1%2Fmodule.json)

![Latest Release Download Count](https://img.shields.io/github/downloads/johnnolan/export-journal-html/latest/module.zip)
![GitHub package.json version](https://img.shields.io/github/release/johnnolan/export-journal-html)
![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fexport-journal-html&colorB=4aa94a)

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/johnnolan/export-journal-html/main_workflow.yml?branch=main)
[![license](https://img.shields.io/badge/license-MIT-blue)](https://github.com/johnnolan/export-journal-html/blob/main/LICENSE)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=johnnolan_export-journal-html&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=johnnolan_export-journal-html)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=johnnolan_export-journal-html&metric=coverage)](https://sonarcloud.io/summary/new_code?id=johnnolan_export-journal-html)

[![Translation status](https://weblate.foundryvtt-hub.com/widgets/export-journal-html/-/main/287x66-black.png)](https://weblate.foundryvtt-hub.com/engage/export-journal-html/)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/X8X354DCG)

# Export Journal to HTML

A system agnostic way of exporting FoundryVTT Journal entries to HTML for saving locally or print to PDF.

## Setup and use

- Enable the module
- On Text Journal Entries, click on the print icon
- A pop up will appear with the Journal content in
- Either save the page as HTML or Print the page and choose Destination as `Print to PDF`

Print Icon Example

[![Print Icon Example](https://raw.githubusercontent.com/johnnolan/export-journal-html/main/images/print-icon.jpg)](https://raw.githubusercontent.com/johnnolan/export-journal-html/main/images/print-icon.jpg)

## Options

By default, the output will look like this

[![Standard Example](https://raw.githubusercontent.com/johnnolan/export-journal-html/main/images/standard.jpg)](https://raw.githubusercontent.com/johnnolan/export-journal-html/main/images/standard.jpg)

### Remove images on background

Removes the background images leaving you with a white background.

[![Remove Background Example](https://raw.githubusercontent.com/johnnolan/export-journal-html/main/images/remove-background.jpg)](https://raw.githubusercontent.com/johnnolan/export-journal-html/main/images/remove-background.jpg)

## Add custom CSS

This allows you to set override CSS rules for the final export. You may need to set the `!important` attribute on your rules for them to take effect.

e.g. `body { background-color: red; }` will give the following look.

[![Custom CSS Example](https://raw.githubusercontent.com/johnnolan/export-journal-html/main/images/custom-css.jpg)](https://raw.githubusercontent.com/johnnolan/export-journal-html/main/images/custom-css.jpg)

## Key things this module changes on export

- Tries to correctly link any images in CSS and HTML
- Replaces any `@UUID` links with the label in them

## Known Issues

- If you don't see anything, it could be your adblocker. Check that it is not blocking popups for your foundry site
- The standalone windows application will prompt you to download and not show a popup. I recommend using a browser to log in to do the export for now

## Bugs

There most definitely will be layout issues and broken links. Please ensure you send the following with any bug report

1. A screenshot of the output if any is generated
2. A screenshot the the content in the Journal view
3. The HTML of the Journal causing issues

[Raise a Bug Here](https://github.com/johnnolan/export-journal-html/issues/new?assignees=johnnolan&labels=bug&template=bug_report.md&title=%5BBUG%5D)

## Contributing

The contributing guidelines can be found in the [CONTRIBUTING.md](./CONTRIBUTING.md) file.

Our Code of Conduct can also be found in the [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) file.

### Translations

This project is setup to use Weblate to make it easier to create translations by the community.

If you are amazing and want to contribute then you can visit this projects Weblate page at [https://weblate.foundryvtt-hub.com/engage/export-journal-html/](https://weblate.foundryvtt-hub.com/engage/export-journal-html/) and add translations yourself to be shared with the community.

## License

Export Journal to HTML is released under the [MIT License](./LICENSE).

## Contact

For issues, please raise a bug in Github giving as much detail as you can. I will try and fix things depending on fatherhood responsibilities [https://github.com/johnnolan/export-journal-html/issues](https://github.com/johnnolan/export-journal-html/issues)

You can also find me lurking around on the Foundry VTT Discord [https://discord.gg/foundryvtt](https://discord.gg/foundryvtt). My Discord Tag is `JB#2780`.

[buymeacoffee-shield]: https://raw.githubusercontent.com/johnnolan/export-journal-html/main/images/badges/buymeacoffee.png
[buymeacoffee]: https://www.buymeacoffee.com/johnnolandev
