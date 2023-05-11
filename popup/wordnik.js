chrome.storage.local.get(['payload'], function (result) {
  console.log(`
WORDNIK storage: 
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

  function gotData(data) {
    try {
      // Check if the object is defined before accessing the property
      if (data && data[0].text) {
        console.log(`
WORDNIK definition: 
${data[0].text}        
        `);
        var veryfied = document.getElementById("veryfied")
        veryfied.innerText = data[0].text
      } else {
        console.log('The data object is not defined or has no elements');
      }
    } catch (error) {
      console.error('Error handling response: ', error);
    }
  }
  loadJSON(url, gotData)
})