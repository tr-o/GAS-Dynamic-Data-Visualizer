# GAS-Dynamic-Data-Visualizer
 GAS-Dynamic-Data-Visualizer is a Google Apps Script powered data visualization tool that fetches data from Google Sheets and displays it using interactive charts. The project provides an easy-to-use interface to visualize and explore data from Google Sheets in real-time.
![image](https://user-images.githubusercontent.com/98264095/233547556-f9c96a96-cc75-41db-b321-a7c6f9bd3909.png)

## Features

- Fetch data from Google Sheets dynamically
- Display data using interactive charts powered by Google Charts
- Customize chart options and styles
- Automatic date formatting for easy reading

## Getting Started

To set up and use the GAS-Dynamic-Data-Visualizer, follow these steps:

1. Create a new Google Sheet and populate it with your data. Make sure the first row contains the headers for the data columns.
2. Open the Script Editor in your Google Sheet by clicking on `Extensions` > `Apps Script`.
3. Create two new files in the script editor: `Code.gs` and `index.html`.
4. Copy the contents of `Code.gs` and `index.html` from this repository into the respective files in the script editor.
5. Replace `'temperature'` in the `Code.gs` file with the name of the sheet containing your data.
6. Save your changes in the script editor.
7. Deploy the script as a web app by clicking on `Deploy` > `New deployment` > `Web app`.
8. Set the access permissions and copy the generated web app URL.
9. Open the web app URL in a browser to view and interact with your data.

## Files

1. `Code.gs`: The main Google Apps Script file that fetches data from the Google Sheet and returns it to the web app.

```javascript
function doGet() { ... }
function getChartData() { ... }
javascript```

2. `index.html`: The HTML file that creates and displays the interactive charts using Google Charts.

## Setup Instructions

1. Create a new Google Sheet and populate it with your data. Make sure the first row contains the headers for the data columns.
2. Open the Script Editor in your Google Sheet by clicking on `Extensions` > `Apps Script`.
3. Create two new files in the script editor: `Code.gs` and `index.html`.
4. Copy the contents of `Code.gs` and `index.html` from this repository into the respective files in the script editor.
5. Replace `'temperature'` in the `Code.gs` file with the name of the sheet containing your data.
6. Save your changes in the script editor.
7. Deploy the script as a web app by clicking on `Deploy` > `New deployment` > `Web app`.
8. Set the access permissions and copy the generated web app URL.
9. Open the web app URL in a browser to view and interact with your data.

## Customization

You can customize the chart options and styles by modifying the `options` object in the `index.html` file. Refer to the [Google Charts documentation](https://developers.google.com/chart/interactive/docs/gallery) for more information on available customization options.




