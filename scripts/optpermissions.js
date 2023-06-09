// // console.log("popup is ok !!")

// const el = document.getElementById("optbtn")
//   el?.addEventListener('click', (event) => {
//     chrome.permissions.request({
//       permissions: ['tabs'],
//       origins: ['https://www.google.com/']
//     }, (granted) => {
//       if (granted) {
//         console.log("permission granted!")
//         doSomething();
//       } else {
//         console.log("permission denied!")
//         doSomethingElse();
//       }
//     });
//   });
//     function doSomething(){
//       console.log("permission granted!")
//     }
//     function doSomethingElse(){
//       console.log("permission denied!")
//     }