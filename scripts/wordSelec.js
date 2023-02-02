// console.log('Word selected running!')
window.addEventListener('mouseup', wordSelected)

function wordSelected() {
    var selectedText = window.getSelection().toString().trim()
    if (selectedText.length > 0) {
        console.log(`_______WORDSELEC.js_______ \n
        ${selectedText}
                `)
        var message = {
            text: selectedText
        }
        chrome.runtime.sendMessage(message)

        document.getElementById("wrdsel").innerText = message.text
        document.getElementById("wrdsel2").innerText = message.text
        
        // var wrdsel = document.getElementById("wrdsel")
        //     wrdsel?.addEventListener('mouseup', (event) => {
            //         wrdsel.innerText = message.text
        //     })

        // var wrdsel2 = document.getElementById("wrdsel2")
        //     wrdsel2?.addEventListener('mouseup', (event) => {
        //         wrdsel2.innerText = message.text
        // })
    }
}


(async () => {
    try {
      const response = await chrome.runtime.sendMessage({ greeting: "hello" });
      const test = JSON.parse(response.url)
      console.log(`
          ${response.farewell},
          id: ${test.id},
          url: ${test.url}
          `);
  
          document.getElementById("info__id").innerText = test.id
          document.getElementById("info__url").innerText = test.url
  
          // const info__id = document.getElementById("info__id")
          //   info__id?.addEventListener('mouseup', (event) => {
          //   info__id.innerText = test.id
          // })
          // const info__url = document.getElementById("info__url")
          //   info__url?.addEventListener('mouseup', (event) => {
          //   info__url .innerText = test.url
          //})
    } catch (error) {
      console.error("response error: " + error);
    }
  })();