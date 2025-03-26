// import { useEffect } from 'react';
// import './test.css';

// function Test() {
//   useEffect(() => {
//     // Function to test meta tags
//     function testMetaTags() {
//       const metaTags = {
//         title: document.querySelector('meta[name="title"]')?.content,
//         description: document.querySelector('meta[name="description"]')?.content,
//         ogTitle: document.querySelector('meta[property="og:title"]')?.content,
//         ogDescription: document.querySelector('meta[property="og:description"]')?.content,
//         ogImage: document.querySelector('meta[property="og:image"]')?.content,
//         instagramUsername: document.querySelector('meta[property="instagram:username"]')?.content,
//         twitterTitle: document.querySelector('meta[property="twitter:title"]')?.content
//       };

//       console.log('Meta Tags Test Results:', metaTags);
//       return metaTags;
//     }

//     // Run the test
//     testMetaTags();
//   }, []);

//   return (
//     <div className="test-page">
//       <h1>Meta Tags Test Page</h1>
//       <p>Check the browser console for meta tags test results.</p>
//       <div className="test-instructions">
//         <h2>How to Test:</h2>
//         <ol>
//           <li>Open browser developer tools (F12)</li>
//           <li>Go to the Console tab</li>
//           <li>Look for "Meta Tags Test Results"</li>
//           <li>Verify all meta tags are present and correct</li>
//         </ol>
//       </div>
//     </div>
//   );
// }

// export default Test;
