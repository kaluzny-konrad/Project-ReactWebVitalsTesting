// https://github.com/vercel/vercel/blob/main/examples/create-react-app/src/vitals.js

const vitalsApiUrl = "/analytics";

export function sendToAnalytics(metric, options) {
  consoleLog(metric);
  // sendToApi(metric);
}

function consoleLog(metric) {
  console.log(`%c> i [Local Analytics - vital info] 
    metric: ${metric.name}, 
    value: ${metric.value.toString()}, 
    rating: ${metric.rating},
    navigationType: ${metric.navigationType},
    connection speed: ${getConnectionSpeed()}`, 
    `background: ${metric.rating === "good" ? '#CCFFCC' : '#FF9999'};`);
}

function getConnectionSpeed() {
  return "connection" in navigator &&
    navigator["connection"] &&
    "effectiveType" in navigator["connection"]
    ? navigator["connection"]["effectiveType"]
    : "";
}

function sendToApi(metric) {
  const body = JSON.stringify(metric);
  // Pozwala na przekazanie informacji o wydajności do Google Analytics lub innego API
  const blob = new Blob([new URLSearchParams(body).toString()], {
    type: "application/x-www-form-urlencoded",
  });
  if (navigator.sendBeacon) {
    navigator.sendBeacon(vitalsApiUrl, blob);
  }
  else
    fetch(vitalsApiUrl, {
      body,
      method: "POST",
      credentials: "omit",
      keepalive: true,
    });
}

