    // console.log('Word selected running!')

    window.addEventListener('mouseup', wordSelected)

    function wordSelected() {
        let selectedText = window.getSelection().toString().trim()
        console.log(`_______WORDSELEC.js_______ \n
        ${selectedText}
                `)
        if (selectedText.length > 0) {
            let message = {
                text: selectedText
            }
            chrome.runtime.sendMessage(message)

            document.getElementById('test').innerHTML = message.text
        }

    }
    

    chrome.runtime.onMessage.addListener(reciever)

  let word2 = "word2"

  function reciever(request, sender, sendResponse) {
    word2 = request.text
    console.log(`word22.js______ \n
  ${word2}
      `)
  }




