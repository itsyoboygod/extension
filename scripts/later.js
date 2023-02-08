// console.log("popup.js ok!")
// btn?.addEventListener('click', function onClick(event) {
//   document.body.style.backgroundColor = 'salmon'
// });

// chrome.runtime?.onMessage.addListener(popup)

// function popup() {
//   let bgpage = chrome.extension.getBackgroundPage()
//   let word = bgpage.word.trim()
//   createP(word)
// }

// (async () => {
//     try {
//       const response = await chrome.runtime.sendMessage({ greeting: "hello" });
//       const test = JSON.parse(response.url)
//       const word = response.word
//       const bruh = response.bruh
//       console.log(`
//         Here's your data from background, ${response.farewell}:
//           id: ${test.id?test.id:"undefined"},
//           url: ${test.url?test.url:"undefined"},
//           tab: ${test.tab.id?test.tab.id:"undefined"},
//           word: ${word?word:"undefined"},
//           bruh: ${bruh?bruh:"undefined"}
//           `);
  
          // document.getElementById("info__id").innerText = test.id
          // document.getElementById("info__url").innerText = test.url
  
          // document.getElementById("wrdsel").innerText = test.url?test.url:"<p>undefined</p>"
          // document.getElementById("wrdsel2").innerText = test.tab.url?test.tab.url:"<p>undefined</p>"
  
          // const wrdsel2 = document.getElementById("wrdsel2")
          //   wrdsel2?.addEventListener('mouseup', (event) => {
          //   wrdsel2.innerText = bruh?bruh:"undefined!"
          // })
  
          // const info__id = document.getElementById("info__id")
          //   info__id?.addEventListener('mouseup', (event) => {
          //   info__id.innerText = test.id?test.id:"undefined!"
          // })
          // const info__url = document.getElementById("info__url")
          //   info__url?.addEventListener('mouseup', (event) => {
          //   info__url.innerText = test.url
          // })
//     } catch (error) {
//       console.error(error);
//     }
//   })();
  
      // var wrdsel2 = document.getElementById("wrdsel2")
      //   wrdsel2?.addEventListener('mouseup', (event) => {
      //   wrdsel2.innerText = selectedText
      // })
  
        // document.getElementById("wrdsel").innerText = selectedText
        // document.getElementById("wrdsel2").innerText = selectedText
  
  
      //   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      //     chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
      //       console.log(response.farewell);
      //     });
      //  });




    //   ======================================== BACKGROUND.js ======================================================

    // console.log('background running!')

// chrome.action?.onClicked.addListener((tab) => {
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       files: ['popup.js'],
//       files: ['wordSelect.js'],
//       files: ['content.js'],
//       files: ['rdm_clr.js']
//     });
//   });
  
//     chrome.runtime?.onMessage.addListener(reciever)
  
//     function reciever(request, sender, sendResponse) {
  
//       console.log(sender.tab ?
//         `from popup.js: ` + sender.tab.url : ` from the extension`
//       );
//       if (request?.greeting === "hello")
//           var window = self
//           window.word = "codin train"
//         sendResponse({
//           farewell: "goodbye",
//           url: JSON.stringify(sender),
//           word: word,
//           bruh: "bruh"
//         });
//       // let word = request.text
//       console.log(`______BACKGROUND.js______ \n
                
//                 sadsadasdsadsadasd
//                   `)
      //   chrome.runtime.sendMessage(word)
  
      // window.document.getElementById("wrdsel").innerText = word
      // window.document.getElementById("wrdsel2").innerText = word
  
      // let wrdsel = window.document.getElementById("wrdsel")
      //   wrdsel?.addEventListener('mouseup', (event) => {
      //   wrdsel.innerText = sender.tab.url
      // })
    //}



    //   ======================================== WORDSELECT.js ======================================================


    // console.log('Word selected running!')
// window.addEventListener('mouseup', wordSelected)

// function wordSelected() {
//  var selectedText = window.getSelection().toString().trim()
//  if (selectedText.length > 0) {
//      console.log(`_______WORDSELEC.js_______ \n
//      ${selectedText}
//              `)
//      var message = {
//          text: selectedText
//      }
//      chrome.runtime.sendMessage(message)

//      document.getElementById("wrdsel").innerText = selectedText
     // document.getElementById("wrdsel2").innerText = selectedText
     
     // var wrdsel = document.getElementById("wrdsel")
     //     wrdsel?.addEventListener('mouseup', (event) => {
     //             wrdsel.innerText = message.text
     //     })

     // var wrdsel2 = document.getElementById("wrdsel2")
     //     wrdsel2?.addEventListener('mouseup', (event) => {
     //         wrdsel2.innerText = "selectedText"
     // })
 //}
//}