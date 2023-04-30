# GAS-Dynamic-Data-Visualizer
**Version: 0.1.2**

GAS-Dynamic-Data-Visualizer is a Google Apps Script powered data visualization tool that fetches data from Google Sheets and displays it using interactive charts. The project provides an easy-to-use interface to visualize and explore data from Google Sheets in real-time.
![image](https://user-images.githubusercontent.com/98264095/235333137-9d8fe50f-1aaf-48ea-80e5-766c0d18784e.png)

This project consists of two files that together create a web app displaying line charts for customizable data sets using Google Sheets as the data source. The example provided uses Temperature, Humidity, and Absolute Humidity data sets, but you can adapt it to display any combination of data sets according to your needs.

# Customizable Data Charts

This project consists of two files that together create a web app displaying line charts for customizable data sets using Google Sheets as the data source. The example provided uses Temperature, Humidity, and Absolute Humidity data sets, but you can adapt it to display any combination of data sets according to your needs.

## Files

1. `Codes.gs`: A Google Apps Script file containing functions to fetch and process data from Google Sheets.
2. `index.html`: An HTML file that uses the Google Charts library to render line charts based on the data fetched from Google Sheets.

## Features

- **Dynamic Data Visualization**: Automatically update charts based on changes in the data within your Google Sheet.
- **Interactive Charts**: Enhance user engagement and data exploration by creating interactive charts powered by Google Charts.
- **Customizable Chart Options and Styles**: Tailor your charts to your specific needs by customizing various aspects such as chart type, colors, axis labels, and more.
- **Automatic Date Formatting**: Simplify date handling and improve readability by automatically formatting date values in the charts.
- **Integration with Google Sheets**: Seamlessly integrate the visualization functionality into your existing Google Sheets projects, without the need for additional tools or software.
- **Google Apps Script (GAS) Powered**: Leverage the power of Google Apps Script to create, update, and manage your data visualizations.

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

## Functions

### In `Codes.gs`:

- `doGet()`: Returns the HTML output from the 'index' file.
- `getChartData(sheetName, startDate, endDate)`: Fetches data from the specified sheet and filters it based on the provided date range. If no date range is provided, the default range is set to the last 24 hours.
- `getLastRowDataWithLabels(sheetName)`: Returns the last row of data along with the column labels for the specified sheet.
- `getAllLastRowDataWithLabels(sheetNames)`: Returns the last row of data along with the column labels for all specified sheets.

### In `index.html`:

- `drawCharts()`: Calls the `drawChart` function for each of the data sets that you want to display.
- `calculateShowTextEvery(inputValue)`: Calculates the interval at which to display x-axis labels, based on the number of data points.
- `drawChart(sheetName, elementId)`: Fetches data from the specified sheet and renders a line chart inside the specified HTML element.

## Data Acquisition

To acquire and log data for use with this web app, we recommend using the [SwitchBot Data Logger for Google Sheets](https://github.com/tr-o/SwitchBot-Data-Logger-for-Google-Sheets) project. This project allows you to collect data from SwitchBot devices and the OpenWeather API, and log it directly into a Google Sheets document.

With the SwitchBot Data Logger, you can monitor various environmental parameters such as temperature, humidity, and weather conditions. It integrates seamlessly with this web app, enabling you to visualize and analyze the logged data in real-time through customizable charts.

To get started with data acquisition, follow the setup instructions in the [SwitchBot Data Logger for Google Sheets repository](https://github.com/tr-o/SwitchBot-Data-Logger-for-Google-Sheets).

## Customization

**Note**: To display any combination of data sets, modify the `drawCharts()` function in `index.html` to include only the desired data sets, and make sure the corresponding sheets are present in your Google Sheets document. The provided example uses Temperature, Humidity, and Absolute Humidity, but you can adjust these defaults to match your own data.

You can customize the appearance and behavior of the charts by editing the `options` object in the `drawChart` function in `index.html`. You can find more information about the available options in the [Google Charts documentation](https://developers.google.com/chart/interactive/docs/gallery/linechart#configuration-options).






