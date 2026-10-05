const SHEET_NAME = "PUBLISHING";
const STATUS_OPTIONS = ["Sin comenzar","En producción","En revisión","Aprobado","Listo","Programado","Publicado"];

function doGet() {
  return json_({ok:true,service:"SINERGIA 2026 Sheets Bridge"});
}

function doPost(e) {
  try {
    const body = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    if (!authorized_(body.secret)) return json_({ok:false,error:"Unauthorized"});
    if (body.action === "getPublishing") return json_({ok:true,items:getPublishing_()});
    if (body.action === "updateStatus") return json_(updateStatus_(body));
    return json_({ok:false,error:"Unknown action"});
  } catch (error) {
    console.error(error);
    return json_({ok:false,error:String((error && error.message) || error)});
  }
}

function getPublishing_() {
  const sheet = getSheet_();
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];
  const width = Math.max(16,sheet.getLastColumn());
  const values = sheet.getRange(1,1,lastRow,width).getDisplayValues();
  const headers = values.shift().map(String);
  return values.filter(row => String(row[0] || "").trim()).map(row => rowToObject_(headers,row));
}

function updateStatus_(body) {
  const publishingId = String(body.publishing_id || "").trim();
  const status = String(body.status || "").trim();
  const updatedBy = String(body.updated_by || "sinergia").trim() || "sinergia";
  if (!/^PUB-[A-Z]{3}-\d{3}$/i.test(publishingId)) return {ok:false,error:"Invalid publishing_id"};
  if (STATUS_OPTIONS.indexOf(status) === -1) return {ok:false,error:"Invalid status"};

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = getSheet_();
    const match = sheet.getRange(2,1,Math.max(sheet.getLastRow()-1,1),1).createTextFinder(publishingId).matchEntireCell(true).findNext();
    if (!match) return {ok:false,error:"Publishing item not found"};

    const row = match.getRow();
    sheet.getRange(row,11).setValue(status);
    sheet.getRange(row,15).setValue(new Date()).setNumberFormat("yyyy-mm-dd hh:mm:ss");
    sheet.getRange(row,16).setValue(updatedBy);
    SpreadsheetApp.flush();

    const headers = sheet.getRange(1,1,1,16).getDisplayValues()[0];
    const rowValues = sheet.getRange(row,1,1,16).getDisplayValues()[0];
    return {ok:true,item:rowToObject_(headers,rowValues)};
  } finally {
    lock.releaseLock();
  }
}

function rowToObject_(headers,row) {
  const object = {};
  headers.forEach((header,index) => {
    if (!header) return;
    let value = row[index] == null ? "" : row[index];
    if (header === "is_placeholder") value = String(value).toUpperCase() === "TRUE";
    object[header] = value;
  });
  return object;
}

function getSheet_() {
  const props = PropertiesService.getScriptProperties();
  const spreadsheetId = props.getProperty("SPREADSHEET_ID");
  if (!spreadsheetId) throw new Error("Missing SPREADSHEET_ID Script Property");
  const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(SHEET_NAME);
  if (!sheet) throw new Error("PUBLISHING sheet not found");
  return sheet;
}

function authorized_(secret) {
  const expected = PropertiesService.getScriptProperties().getProperty("API_SECRET");
  return Boolean(expected) && String(secret || "") === expected;
}

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}
