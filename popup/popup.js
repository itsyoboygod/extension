// console.log("popup.js ok!")
function popup(){
    let bgpage = chrome.extension.getBackgroundPage()
    let word = bgpage.word.trim()
    createP(word)
  }
  
  // btn?.addEventListener('click', function onClick(event) {
  //   document.body.style.backgroundColor = 'salmon'
  // });


  
// const btn = document.getElementById('theButton');