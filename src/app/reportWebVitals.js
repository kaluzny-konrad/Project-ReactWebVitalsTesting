// https://github.com/vercel/vercel/blob/main/examples/create-react-app/src/reportWebVitals.js

const reportWebVitals = onPerfEntry => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
      import('web-vitals') // standard info
      //import('web-vitals/attribution') // more info
      .then(({ onCLS, onFID, onFCP, onLCP, onTTFB, onINP }) => {
        onCLS(onPerfEntry);
        onFID(onPerfEntry);
        onFCP(onPerfEntry);
        onLCP(onPerfEntry);
        onTTFB(onPerfEntry);
        onINP(onPerfEntry);
      });
    }
  };
  
  export default reportWebVitals;