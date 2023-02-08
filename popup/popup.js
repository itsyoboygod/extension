// console.log("popup.js ok!")

//     if (selectedText.length > 0) {
//         console.log(`_______WORDSELEC.js_______ \n
//         ${selectedText}
//                 `)
//         var message = {
//             text: selectedText
//         }
//         chrome.runtime.sendMessage(message)

//         document.getElementById("wrdsel").innerText = selectedText


// Send message to background script
chrome.runtime.sendMessage({ 
  type: "popupMessage",
 },
  function (response) {
    console.log(`
      type: ${response.type} ,
      payload: ${response.payload} ,
      bruh: ${response.bruh} ,
      word: ${response.word}
    `);
});
