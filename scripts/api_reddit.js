// console.log("word select is ok !!")

window.addEventListener('mouseup', flairPost)

function flairPost() {
    let flair = "flair_test"
    console.log(selectText)
        var payload = {
            message: flair
        }
        console.log(`
         SET local storage: 
          ${payload.message} ,
        `);
        chrome.runtime.sendMessage({
            source: "api_reddit.js",
            payload: payload
        }
    )}