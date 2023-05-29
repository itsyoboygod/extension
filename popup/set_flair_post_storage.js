// console.log("./popup/set_flair_post_storage.js is working !!")

//   Path to the JSON file
//  const filePath = 'popup/flairs.json';
//  const filePath = 'popup/post_flair.json';
const filePath = 'popup/merged_data.json';

// Fetch the JSON file
fetch(chrome.runtime.getURL(filePath))
  .then(response => response.json())
  .then(jsonData => {
    //   Store the JSON data in the local storage
    const payload = {
      message: JSON.stringify(jsonData)
    };

    chrome.storage.local.set({ payload }, () => {
//       console.log(`
// Data stored in local storage: ${payload.message}
//       `);
    });

    // Send a message to the background script
    chrome.runtime.sendMessage({
      source: 'set_flair_post_storage.js',
      payload: payload
    }, response => {
      // Handle the response from the background script, if needed
    });
  })
  .catch(error => {
    console.error('Error fetching or parsing JSON:', error);
  });
