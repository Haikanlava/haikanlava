export const fetchGoogleData = async (sheetName, setStateCallback) => {
  let response = await fetch("https://sheets.googleapis.com/v4/spreadsheets/1lPX9h_xT2eN5ed8lG5WdiiH4kphH4IRQlDLRU2qjft0/values/" + sheetName + "?key=AIzaSyABZeUkblAHJB7s8jRlea4jitjuqtff5k0&valueRenderOption=UNFORMATTED_VALUE")
  response = await (response.json());
  const finalData = response.values;
  setStateCallback(finalData);
}
