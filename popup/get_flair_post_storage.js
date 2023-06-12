// console.log("./popup/get_flair_post.js.js is working !!")

chrome.storage.local.get(['payload', 'dataToStore'], function (result) {
 
  const user_url = result.dataToStore.usrurl;
  const matching_titles = result.dataToStore.matchingTitles;

  if (Array.isArray(matching_titles)) {
    matching_titles.forEach((each_title) => {
      const dta_titles = each_title;
      console.log(dta_titles);
    });

    console.log(`executei : `, matching_titles, user_url);
    console.log(`result : `, result);

    // Rest of the code...
  } else {
    console.error('Matching titles is not an array');
  }

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
      { label: 'fURL', id: 'info__url', dataAttribute: 'data-url', dataValue: postData.fURL },
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
      const valueElement = info.id === 'info__url' ? document.createElement('a') : document.createElement('span');
      valueElement.id = info.id;
      valueElement.setAttribute(info.dataAttribute, info.dataValue);

      if (info.id === 'info__url') {
        valueElement.href = postData.fURL;
        valueElement.textContent = postData.fURL;
      } else {
        valueElement.textContent = info.dataValue;
      }

      infoContainer.append(labelSpan, valueElement);
      infoColElement.appendChild(infoContainer);
    });


    detailsElement.append(summaryElement, titleElement, hrContainerElement, textElement, infoColElement);
    liElement.appendChild(detailsElement);

    return liElement;
  }

  function gotData(titles, data = result.payload.message) {

    const popupContainer = document.getElementById('popup-container');

    // Clear the existing content in the popup container
    popupContainer.innerHTML = '';

    if (typeof data === 'string') {
      // Parse the data string as JSON
      data = JSON.parse(data);
    }

    if (Array.isArray(data)) {
      // Data is an array
      const ulElement = document.createElement('ul');
      ulElement.classList.add('ul__table');

      let hasMatchingData = false; // Flag to check if any matching data is found
   
      data.forEach((entry, index) => {
        const trimmedTitle = entry.title.trim();
        if (entry.fURL == user_url && matching_titles.includes(entry.title)) {
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
            hasMatchingData = true;
          }
        }
      });

      // Add the generated HTML to the popup.html
      const popupContainer = document.getElementById('popup-container');
      if (hasMatchingData) {
        popupContainer.appendChild(ulElement);
      } else {
        popupContainer.textContent = 'No matching data found.';
      }

      // Get all the <li> elements
      const liElements = document.querySelectorAll('.li__table');

      // Iterate over the <li> elements and assign the "REPORT#" number
      liElements.forEach((li, index) => {
        const reportNumberElement = li.querySelector('#id_report_data');
        reportNumberElement.textContent = `REPORT#${index + 1}`;
      });

      // Update the "Page Reports" label with the number of reports
      const liElementsCount = document.querySelectorAll('.li__table').length;
      const pageReportsLabel = document.querySelector('.info-tab-btn');
      if (pageReportsLabel) {
        pageReportsLabel.setAttribute('data-tab', `${liElementsCount}`);
      } else {
        console.error('Page Reports label not found.');
      }
    } else {
      if (entry.fURL == user_url && entry.title == matching_titles) {
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
  }

  const xtitles = [
    "tt11281500",
    "tt20600980",
    "0.90839505",
    "You may also be interested in",
    "How gun violence is reshaping American lives",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    "Can you help translate this site into a foreign language ?",
    "Page Reports",
    "teste fake extension",
    "the cites of the word in classical literature",
    "teste",
    "BACHARELOVE has been created"
  ];
  const escapedXtitles = xtitles.map(title => title.replace(/'/g, "\\'"));

function scanPage() {
  gotData(escapedXtitles);
}

// Get the scan button element
const scanButton = document.getElementById('id_scan-btn');

// Add a click event listener to the scan button
scanButton.addEventListener('click', scanPage);

});
