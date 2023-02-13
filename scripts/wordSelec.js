// console.log("word select is ok !!")

window.addEventListener('mouseup', wordSelected)

function wordSelected() {
    let selectText = window.getSelection().toString().trim()
    if (selectText.length > 0) {
    console.log(selectText)
        var payload = {
            message: selectText
        }
        chrome.runtime.sendMessage({
            source: "wordselec.js",
            payload: payload
        }, function (response) {
            console.log(`
     ${response.source} , 
     ${response.payload}
    `);
        });
    }
}

// var wordsel = document.getElementsByTagName("pre")
// wordsel[0].innerText = payload.message
// console.log(wordsel)