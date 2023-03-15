chrome.storage.local.get(['payload'], function(result) {
    console.log(`
     FROM WORDNIK GET local storage: 
        ${result.payload.message}
    `);

      let word = result.payload.message

  let url = `https://api.wordnik.com/v4/word.json/${word}/definitions?limit=1&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=6f9nbd1ye2vn1e15uu86gpuo2vg9mid0j8cq2ztfoguc3u3tf`
  url = url.replace(/\s+/g, '')


  function loadJSON(url, callback) {   
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == "200") {
        callback(JSON.parse(xhr.responseText));
      }
    };
    xhr.send(null);
  }
  
  function gotData(data){
    // createP(data[0].text)
    console.log(data[0].text)
    return data[0].text
  }
  
   loadJSON(url, gotData)
   
   var veryfied = document.getElementById("veryfied")
   veryfied.innerText = gotData()
})   