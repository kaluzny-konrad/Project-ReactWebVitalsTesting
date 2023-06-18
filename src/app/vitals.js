// https://github.com/vercel/vercel/blob/main/examples/create-react-app/src/vitals.js

const vitalsApiUrl = "/analytics";

function getConnectionSpeed() {
  return "connection" in navigator &&
    navigator["connection"] &&
    "effectiveType" in navigator["connection"]
    ? navigator["connection"]["effectiveType"]
    : "";
}

export function sendToAnalytics(metric, options) {
  const body = JSON.stringify(metric);

  console.log(`[Local Analytics - vital info] 
    metric: ${metric.name}, 
    value: ${metric.value.toString()}, 
    rating: ${metric.rating},
    navigationType: ${metric.navigationType},
    connection speed: ${getConnectionSpeed()}`);

  // console.log("[Local Analytics - all]", metric.name, body);

  // Pozwala na przekazanie informacji o wydajności do Google Analytics lub innego API
  const blob = new Blob([new URLSearchParams(body).toString()], {
    type: "application/x-www-form-urlencoded",
  });
  if (navigator.sendBeacon) {
    navigator.sendBeacon(vitalsApiUrl, blob);
  } else
    fetch(vitalsApiUrl, {
      body,
      method: "POST",
      credentials: "omit",
      keepalive: true,
    });
}
