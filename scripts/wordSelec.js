// console.log("word select is ok !!")

window.addEventListener('mouseup', wordSelected)

function wordSelected() {
    let selectText = window.getSelection().toString().trim()
    if (selectText.length > 0) {
    console.log(selectText)
        var payload = {
            message: selectText
        }
        chrome.storage.local.set({payload: payload}, function() {
        console.log(`
         SET local storage: 
          ${payload.message} ,
        `);
        });
        chrome.runtime.sendMessage({
            source: "wordselec.js",
            payload: payload
        }, 
    //     function (response) {
    //         console.log(`
    //  ${response.source} , 
    //  ${response.payload}
    // `)}
    )}
}