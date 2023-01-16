const el = document.getElementById("optbtn") 
el?.addEventListener('click', (event) => {
    // Permissions must be requested from inside a user gesture, like a button's
    // click handler.
    chrome.permissions.request({
      permissions: ['tabs'],
      origins: ['https://www.google.com/']
    }, (granted) => {
      // The callback argument will be true if the user granted the permissions.
      if (granted) {
    console.log("permission granted!")
// doSomething();
      } else {
    console.log("permission denied!")
// doSomethingElse();
      }
    });
  });

//   function doSomething(){
//     console.log("permission granted!")
//   }


//   function doSomethingElse(){
//     console.log("permission denied!")
//   }