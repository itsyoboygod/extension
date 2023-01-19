console.log('Word selected running!')

window.addEventListener('mouseup', wordSelected)

function wordSelected(){
    console.log("_______________")
    console.log("word selected: ")
    let selectedText = window.getSelection().toString().trim()
    console.log(selectedText)
        if(selectedText.length > 0){
            let message = {
                text: selectedText
            }
            chrome.runtime.sendMessage(message)
    }
}