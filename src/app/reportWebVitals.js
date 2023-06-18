// https://github.com/vercel/vercel/blob/main/examples/create-react-app/src/reportWebVitals.js

const reportWebVitals = onPerfEntry => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
      import('web-vitals') // standard info
      //import('web-vitals/attribution') // more info
      .then(({ onCLS, onFID, onFCP, onLCP, onTTFB, onINP }) => {
        onCLS(onPerfEntry); // Cumulative Layout Shift
        // onFID(onPerfEntry); // First Input Delay
        // onFCP(onPerfEntry); // First Contentful Paint
        onLCP(onPerfEntry); // Largest Contentful Paint
        // onTTFB(onPerfEntry); // Time to First Byte
        // onINP(onPerfEntry); // Interaction to Next Paint
      });
    }
  };
  
  export default reportWebVitals;