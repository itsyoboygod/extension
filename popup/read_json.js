// // console.log("./popup/read_json is working !!")

// // Path to the JSON file
// // const filePath = 'popup/flairs.json';
// const filePath = 'popup/user_flair.json';

// // Fetch the JSON file
// fetch(chrome.runtime.getURL(filePath))
//   .then(response => response.json())
//   .then(jsonData => {
//     // console.log('JSON data 2:', JSON.parse(jsonData));
//     // console.log('JSON data :', jsonData);

//     // Store the JSON data in the local storage
//     const payload = {
//       message: jsonData
//     };

//     chrome.storage.local.set({ payload }, () => {
//       console.log(`
// Data stored in local storage: ${payload.message}
//       `);
//     });

//     // Send a message to the background script
//     chrome.runtime.sendMessage({
//       source: 'read_json.js',
//       payload: payload
//     }, response => {
//       // Handle the response from the background script, if needed
//     });
//   })
//   .catch(error => {
//     console.error('Error fetching or parsing JSON:', error);
//   });
