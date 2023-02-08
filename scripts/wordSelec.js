// console.log('Word selected running!')
// window.addEventListener('mouseup', wordSelected)

   function wordSelected() {
    var selectedText = window.getSelection().toString().trim()
    if (selectedText.length > 0) {
            return selectedText 
        }
    }
//         chrome.runtime.sendMessage(message)

//         document.getElementById("wrdsel").innerText = selectedText
        // document.getElementById("wrdsel2").innerText = selectedText
        
        // var wrdsel = document.getElementById("wrdsel")
        //     wrdsel?.addEventListener('mouseup', (event) => {
        //             wrdsel.innerText = message.text
        //     })

        // var wrdsel2 = document.getElementById("wrdsel2")
        //     wrdsel2?.addEventListener('mouseup', (event) => {
        //         wrdsel2.innerText = "selectedText"
        // })
    // }
// }
var word  = wordSelected.selectedText
chrome.runtime.sendMessage({ 
    type: "wordselMessage",
    payload: "Hello from word select!"
   },
    function (response) {
      console.log(`
        type: ${response.type} ,
        payload: ${response.payload} ,
        bruh: ${response.bruh} ,
        word: ${response.word}
      `);
  });