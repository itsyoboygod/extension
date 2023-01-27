// console.log("popup.js ok!")
// function popup(){
//     let bgpage = chrome.extension.getBackgroundPage()
//     let word = bgpage.word.trim()
//     createP(word)
//   }
  
  // btn?.addEventListener('click', function onClick(event) {
  //   document.body.style.backgroundColor = 'salmon'
  // });


  
// const btn = document.getElementById('theButton');

(async () => {
  const response = await chrome.runtime.sendMessage({greeting: "hello"});
  // do something with response here, not outside the function
  console.log(`
    ${response.farewell},
    url: ${response.url}
    `);
  })();


    // const btn = document.getElementById('theButton');

    //   btn.addEventListener('click', function onClick(event) {
    //   document.body.style.backgroundColor = 'salmon';
    // });