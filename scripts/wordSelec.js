// // console.log('Word selected running!')

// window.addEventListener('mouseup', wordSelected)

//         function wordSelected(){
//             let selectedText = window.getSelection().toString().trim()
//             console.log(`_______WORDSELEC.js_______ \n
// ${selectedText}
//             `)
//             if(selectedText.length > 0){
//                 let message = {
//                     text: selectedText
//                 }
//                 chrome.runtime.sendMessage(message)
//                     document.getElementById('test').innerHTML = message.text
//                 }
//         }

//         chrome.action.onClicked.addListener((tab) => {
//             chrome.scripting.executeScript({
//                 target: {tabId: tab.id},
//                 files: ['background.js']
//             });
//         });


//         chrome.runtime.onMessage.addListener(bckgwrdRecieved)

//         let bckgword = 'bckgword'

//         function bckgwrdRecieved(request){
//             bckgword = request.word
//             console.log(`______RECIEVED WORDSELEC.js______ \n
//             ${bckgword}
//                 `)
//         }