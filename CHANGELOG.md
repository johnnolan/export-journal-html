# Changelog

## 0.6.1 - 2023-07-28

### Bug Fixes

- Fixes issue where content would be removed in the print preview due to greedy Regular Expression. This was causing output to look broken or have entire sections missing.

## 0.6.0 - 2023-07-28

### Version Bump

- Update module to support Foundry V11

## 0.5.2 - 2023-01-14

### Refactor

- Add warning message for users using the standalone Foundry Application
- It is not currently possible to open popups from the application, but opening any browser and running it will work. If running locally this is usually [http://localhost:30000](http://localhost:30000)

## 0.5.1 - 2023-01-13

### Features

- Fix fontawesome stylesheets not rendering
- Add popup option as well as open in tab

## 0.4.0 - 2023-01-12

### Features

- Export HTML in `View Multiple Pages` or `Single Page` Journal option. Allows you to easily print all Journal Pages in one go or individual one depending on your view
- Optionally open print dialog after export (Enable in Settings)

## 0.2.0 - 2023-01-11

### Features

- Add custom CSS to exported HTML
- Remove background images from HTML giving a white background

[See README on github for examples](https://github.com/johnnolan/export-journal-html#options)

## 0.0.3 - 2023-01-11

### Features

- Initial release version

## 0.0.2 - 2023-01-11

### Features

- Add the Journal name to the output

## 0.0.1 - 2023-01-10

### Feature

- All the features
- Adds button to Text Journals to print
- From popup you can print to pdf or save as HTML
