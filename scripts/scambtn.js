// console.log("./popup/scambtn.js is working !!")

// Retrieve the stored title from the local storage
chrome.storage.local.get(['payload'], function (result) {
  const storedData = JSON.parse(result.payload.message);
  // const title = storedData[0].title;
  const title = `tt11281500`.trim();

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
        `<span id="id_span_match" class="highlight" style="
            display: -webkit-inline-box;
            background-color: orange;
            position: relative;">
            <p id="id_p_match" style="
              display: flex;
              background-color: transparent;
              margin: 1px;
              padding: 1px;
              // mix-blend-mode: difference;
              font-weight: bolder">${title}</p>
            <i style="
              content: '*';
              position: absolute;
              right: -0.5em;
              top: -0.5em;
              width: 5px;
              height: 5px;
              outline: solid 2px;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 50%;
              color: white;
              background-color: red;
              line-height: 0px;
              font-family: monospace;
              padding: 5px;
              font-weight: 700;
              z-index: 999;
              font-size: .8rem;">!</i></span>`
      );
      textNode.parentNode.innerHTML = replacedText;
      matchCount++;

      // Scroll to the matched text
      const matchedElement = document.getElementById('id_span_match');
      if (matchedElement && matchedElement.scrollIntoView) {
        matchedElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      } else if (matchedElement && matchedElement.offsetTop !== undefined) {
        window.scrollTo({
          top: matchedElement.offsetTop,
          behavior: 'smooth'
        });
      }


      // Blink the background color for a few seconds
      const blinkDuration = 3000; // 3 seconds
      const blinkInterval = setInterval(function () {
        const highlightElement = document.getElementById('id_span_match');
        if (highlightElement) {
          const currentBgColor = highlightElement.style.backgroundColor;
          const blinkColor = currentBgColor === 'orange' ? 'transparent' : 'orange';
          highlightElement.style.backgroundColor = blinkColor;
        } else {
          clearInterval(blinkInterval);
        }
      }, 500);

      // Stop the blinking after the specified duration
      setTimeout(function () {
        clearInterval(blinkInterval);
      }, blinkDuration);

    }
  }

  console.log(`"${title}" matched ${matchCount} times on the webpage.`);
});
