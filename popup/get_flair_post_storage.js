// console.log("./popup/get_flair_post.js.js is working !!")

chrome.storage.local.get(['payload'], function (result) {
  console.log(`
GET_POST_FLAIR_STORAGE storage: 
${result.payload.message}
  `);

  function createPostElement(postData) {
    const liElement = document.createElement('li');
    liElement.classList.add('li__table');

    const detailsElement = document.createElement('details');
    detailsElement.setAttribute('name', 'detalhes');
  
    const summaryElement = document.createElement('summary');
    const reportNumber = document.createElement('p');
    reportNumber.id = 'id_report_data';
    reportNumber.setAttribute('data-flair', postData.post_flair); // Set the post_flair value as the data-flair attribute value
    reportNumber.textContent = 'REPORT#';
    summaryElement.appendChild(reportNumber);

    const titleElement = document.createElement('p');
    titleElement.id = 'id_report_title';
    titleElement.textContent = postData.title;

    const hrContainerElement = document.createElement('div');
    hrContainerElement.classList.add('hr-container-veryfied');
    const hrElement1 = document.createElement('hr');
    const hrTextElement = document.createElement('span');
    hrTextElement.classList.add('hr-text-veryfied');
    hrTextElement.textContent = 'Veryfied';
    const hrElement2 = document.createElement('hr');
    hrContainerElement.append(hrElement1, hrTextElement, hrElement2);

    const textElement = document.createElement('p');
    textElement.id = 'id_report_text';
    textElement.classList.add('veryfied');
    textElement.textContent = postData.text;

    const infoColElement = document.createElement('div');
    infoColElement.classList.add('li__info__col');

    const infoElements = [
      { label: 'id', id: 'info__id', dataAttribute: 'data-id', dataValue: postData.post_id },
      { label: 'url', id: 'info__url', dataAttribute: 'data-url', dataValue: postData.url },
      { label: 'source', id: 'info__source', dataAttribute: 'data-source', dataValue: postData.source },
      { label: 'score', id: 'info__score', dataAttribute: 'data-score', dataValue: postData.score },
      { label: 'reported by', id: 'info__report', dataAttribute: 'data-report', dataValue: postData.reportedBy },
      { label: 'verified by', id: 'info__verified', dataAttribute: 'data-verified', dataValue: postData.verifiedBy },
      { label: 'improve', id: 'info__improve', dataAttribute: 'data-improve', dataValue: postData.improve }
    ];

    infoElements.forEach(info => {
      const infoContainer = document.createElement('div');
      infoContainer.classList.add('li__info');
      const labelSpan = document.createElement('span');
      labelSpan.textContent = info.label + ': ';
      const valueSpan = document.createElement('span');
      valueSpan.id = info.id;
      valueSpan.setAttribute(info.dataAttribute, info.dataValue);
      infoContainer.append(labelSpan, valueSpan);
      infoColElement.appendChild(infoContainer);
    });

    detailsElement.append(summaryElement, titleElement, hrContainerElement, textElement, infoColElement);
    liElement.appendChild(detailsElement);

    return liElement;
  }

  function gotData(titles, data = result.payload.message) {
    if (typeof data === 'string') {
      // Parse the data string as JSON
      data = JSON.parse(data);
    }

    if (Array.isArray(data)) {
      // Data is an array
      const ulElement = document.createElement('ul');
      ulElement.classList.add('ul__table');

      data.forEach((entry, index) => {
        const trimmedTitle = entry.title.trim();
        if (titles.includes(trimmedTitle)) {
          // Create <li> element only for matching titles
          const postElement = createPostElement(entry);
          ulElement.appendChild(postElement);

          // Get the reportNumber element in the current postElement
          const reportNumberElement = postElement.querySelector('#id_report_data');
          if (reportNumberElement) {
            // Set the post_flair value as the data-flair attribute value
            const postFlair = entry.post_flair;
            reportNumberElement.setAttribute('data-flair', postFlair);
          }
        }
      });

      // Add the generated HTML to the popup.html
      const popupContainer = document.getElementById('popup-container');
      popupContainer.appendChild(ulElement);

         // Get all the <li> elements
    const liElements = document.querySelectorAll('.li__table');

    // Iterate over the <li> elements and assign the "REPORT#" number
    liElements.forEach((li, index) => {
      const reportNumberElement = li.querySelector('#id_report_data');
      reportNumberElement.textContent = `REPORT#${index + 1}`;
    });

    // Update the "Page Reports" label with the number of reports
    const pageReportsLabel = document.querySelector('.info-tab-btn');
    if (pageReportsLabel) {
      pageReportsLabel.setAttribute('data-tab', `${data.length}`);
    } else {
      console.error('Page Reports label not found.');
    }
    } else {
      // Data is a single object
      const postElement = createPostElement(data);

      // Get the reportNumber element in the postElement
      const reportNumberElement = postElement.querySelector('#id_report_data');
      if (reportNumberElement) {
        // Set the post_flair value as the data-fake attribute value
        const postFlair = data.post_flair;
        reportNumberElement.setAttribute('data-flair', postFlair);
      }

      // Add the generated HTML to the popup.html
      const popupContainer = document.getElementById('popup-container');
      popupContainer.appendChild(postElement);
    }
  }

  const titles = ['tt11281500', 'tt12345678', 'tt87654321'];
  gotData(titles);
});
