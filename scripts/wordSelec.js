    // console.log('Word selected running!')

    // chrome.action?.onClicked.addListener((tab) => {
    //     chrome.scripting.executeScript({
    //       target: { tabId: tab.id },
    //     });
    //   });



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

            document.getElementById('wrdsel').innerHTML = message.text
            // document.getElementById('wrdsel2').innerHTML = message.text
        }

    }
    