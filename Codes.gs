function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function getChartData(sheetName = 'temperature', timeSpan, endDate) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var lastRow = sheet.getLastRow();
  var lastColumn = sheet.getLastColumn();

  // Set default values for endDate if not provided
  if (!endDate) {
    endDate = new Date(sheet.getRange(lastRow, 1).getValue());
  }

  // Set startDate based on the selected timeSpan
  var startDate;
  switch (timeSpan) {
    case '24h':
      startDate = new Date(endDate.getTime() - 24 * 60 * 60 * 1000);
      break;
    case '7d':
      startDate = new Date(endDate.getTime() - 7 * 24 * 60 * 60 * 1000);
      break;
    case '30d':
      startDate = new Date(endDate.getTime() - 30 * 24 * 60 * 60 * 1000);
      break;
    case '1y':
      startDate = new Date(endDate.getTime() - 365 * 24 * 60 * 60 * 1000);
      break;
    case 'ALL':
    default:
      startDate = new Date(sheet.getRange(2, 1).getValue());
      break;
  }

  // Log startDate and endDate for debugging purposes
  console.log('startDate:', startDate);
  console.log('endDate:', Utilities.formatDate(endDate, 'GMT', "yyyy-MM-dd'T'HH:mm:ss'Z'"));

  // Get the header row from the sheet
  var headerRow = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];

  var chartData = [headerRow].concat(sheet.getRange(2, 1, lastRow - 1, lastColumn).getValues().filter(rowValues => {
    var date = new Date(rowValues[0]);
    return date >= startDate && date <= endDate;
  }).map((rowValues, i) => {
    var date = new Date(rowValues[0]);
    var rowData = [Utilities.formatDate(date, 'GMT', "MM/dd'\n'HH:mm")];

    for (var j = 1; j < lastColumn; j++) {
      rowData.push(rowValues[j] || null);
    }

    return rowData;
  }));

  return { chartData: chartData };
}


function getLastRowDataWithLabels(sheetName = "temperature") {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var lastRow = sheet.getLastRow();
  var lastColumn = sheet.getLastColumn();
  var labels = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
  var lastRowData = sheet.getRange(lastRow, 1, 1, lastColumn).getValues()[0];

  var result = [];

  for (var i = 0; i < lastColumn; i++) {
    result.push({
      label: labels[i],
      value: lastRowData[i]
    });
  }

  return result;
}

function getAllLastRowDataWithLabels(sheetNames = ["temperature", "humidity", "absoluteHumidity"]) {
  var jsonData = {
    "columns": ["location", "timestamp", "temperature", "humidity", "absoluteHumidity"],
    "data": []
  };

  var tempData = getLastRowDataWithLabels("temperature");
  var humData = getLastRowDataWithLabels("humidity");
  var absHumData = getLastRowDataWithLabels("absoluteHumidity");

  var timestamp = tempData[0].value;

  for (var i = 1; i < tempData.length; i++) {
    jsonData.data.push({
      "location": tempData[i].label,
      "timestamp": timestamp,
      "temperature": tempData[i].value,
      "humidity": humData[i].value,
      "absoluteHumidity": absHumData[i].value
    });
  }

  console.log(JSON.stringify(jsonData, null, 2));
  return jsonData;
}



