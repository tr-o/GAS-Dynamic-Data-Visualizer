function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function getChartData() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('temperature');
  var lastRow = sheet.getLastRow();
  var lastColumn = sheet.getLastColumn();
  
  // Get the header row from the sheet
  var headerRow = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];

  var chartData = [headerRow].concat(sheet.getRange(2, 1, lastRow - 1, lastColumn).getValues().map((_, i) => {
    var date = new Date(sheet.getRange(i + 2, 1).getValue());
    return [Utilities.formatDate(date, Session.getScriptTimeZone(), "MM/dd'\n'HH:mm"),
            sheet.getRange(i + 2, 2).getValue(),
            sheet.getRange(i + 2, 3).getValue(),
            sheet.getRange(i + 2, 4).getValue()];
  }));

  return { chartData: chartData };
}

