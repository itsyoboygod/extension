// console.log("./popup/scambtn.js is working !!")

// Retrieve the stored title from the local storage
chrome.storage.local.get(['payload'], function(result) {
  const storedData = JSON.parse(result.payload.message);
  // const title = storedData[0].title;
  const title = "Animation";

  // Create a regular expression for matching the title
  const regex = new RegExp(title, 'gi');

  // Get all text nodes in the webpage
  const textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  let matchCount = 0;

  // Iterate over the text nodes and highlight the matched titles
  while (textNode = textNodes.nextNode()) {
    if (regex.test(textNode.textContent)) {
      const matchedText = textNode.textContent;
      
      const replacedText = matchedText.replace(
        regex,
        `
        <span class="highlight" style="background-color: orange; position:relative">${title}</span>
            <i style="
              content: '*';
              position: absolute;
              right: -.2em;
              width: 15px;
              height: 15px;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 0.2em;
              color: white;
              background-color: "red"
              font-family: monospace;
              padding: 5px;
              font-weight: 700;
              font-size: 1rem;">
              !
            </i>
            `
      );
      textNode.parentNode.innerHTML = replacedText;
      matchCount++;
  
      // Scroll to the matched text
      const parentElement = textNode.parentNode;
      if (parentElement) {
        parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }
  

  console.log(`"${title}" matched ${matchCount} times on the webpage.`);
});
