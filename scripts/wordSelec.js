console.log('Word selected running!')

window.addEventListener('mouseup', wordSelected)

        function wordSelected(){
            var port = chrome.runtime.connect();
            console.log("_______________")
            console.log("word selected(wordsel.js): ")
            let selectedText = window.getSelection().toString().trim()
            console.log(selectedText)
                if(selectedText.length > 0){
                    let message = {
                        text: selectedText
                    }
                    chrome.runtime.sendMessage(message)
                    window.document.getElementById('test').innerHTML = message.text
                    console.log(message.text + ' <- wordSel.js')
                }
        }



    async function connectDOM(){
            // always waits the document to be loaded when shown
            document.addEventListener('DOMContentLoaded', await function() {

                // opens a communication between scripts
                var port = chrome.runtime.connect();

                // listens to the click of the button into the popup content
             document.getElementById('test').addEventListener('click', function() {

                    // sends a message throw the communication port
                  port.postMessage({
                        'from': 'popup',
                        'start': 'Y'
                    });
                });
            });
    }