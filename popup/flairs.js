
function addFlairs(flairsFile) {
    fetch(flairsFile)
      .then(response => response.json())
      .then(flairs => {
        const reportElems = document.querySelectorAll('p[data-misleading], p[data-scam], p[data-fake]');
        reportElems.forEach(elem => {
          const flair = flairs.find(f => elem.getAttribute(`data-${f.toLowerCase()}`));
          if (flair) {
            const span = document.createElement('span');
            span.classList.add('flair');
            span.textContent = flair;
            elem.parentNode.insertBefore(span, elem.nextSibling);
          }
        });
      })
      .catch(error => console.error(`Error loading flairs: ${error}`));
  }
  
  // Usage:
  addFlairs('flairs.json');
  