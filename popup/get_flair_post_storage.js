// console.log("./popup/get_flair_post.js.js is working !!")

chrome.storage.local.get(['payload'], function (result) {
  console.log(`
GET_POST_FLAIR_STORAGE storage: 
${result.payload.message}
    `);
  function gotData(data = result.payload.message) {
    if (typeof data === 'string') {
      // Parse the data string as JSON
      data = JSON.parse(data);
    }

    if (Array.isArray(data)) {
      // const ulElement = document.querySelector('.ul__table');

      // data.forEach(entry => {
      //   const liElement = document.createElement('li');
      //   liElement.classList.add('li__table');

      //   const detailsElement = document.createElement('details');
      //   detailsElement.setAttribute('name', 'detalhes');

      //   const summaryElement = document.createElement('summary');
      //   const postTitleElement = document.createElement('p');
      //   postTitleElement.textContent = entry.title;
      //   summaryElement.appendChild(postTitleElement);

      //   const postTextElement = document.createElement('p');
      //   postTextElement.textContent = entry.text;

      //   const reportElement = document.createElement('p');
      //   reportElement.id = 'id_report_fake';
      //   reportElement.setAttribute('data-fake', 'fake');
      //   reportElement.textContent = 'REPORT#' + (index + 1);

      //   detailsElement.appendChild(reportElement);


      //   const hrContainerElement = document.createElement('div');
      //   hrContainerElement.classList.add('hr-container-veryfied');

      //   const hr1Element = document.createElement('hr');
      //   const hrTextElement = document.createElement('span');
      //   hrTextElement.classList.add('hr-text-veryfied');
      //   hrTextElement.textContent = 'Verified';
      //   const hr2Element = document.createElement('hr');

      //   hrContainerElement.appendChild(hr1Element);
      //   hrContainerElement.appendChild(hrTextElement);
      //   hrContainerElement.appendChild(hr2Element);

      //   const infoColElement = document.createElement('div');
      //   infoColElement.classList.add('li__info__col');

      //   // Set values for other info elements based on your requirements

      //   detailsElement.appendChild(summaryElement);
      //   detailsElement.appendChild(postTextElement);
      //   detailsElement.appendChild(hrContainerElement);
      //   detailsElement.appendChild(infoColElement);

      //   liElement.appendChild(detailsElement);
      //   ulElement.appendChild(liElement);
      // });






      // Data is an array
      const desiredValues = data;
      const flair_fake = 'fake';
      const flair_senai = 'TCC';
      const flair_anhembi = 'EXERC';

      const regex = new RegExp(`\\b${desiredValues.join('\\b|\\b')}\\b`);
      const data_senai = regex.test(flair_senai);
      const data_anhembi = regex.test(flair_anhembi);
      const data_fake = regex.test(flair_fake);

      var senaiFlag = document.getElementById("id_report_fake");
      senaiFlag.setAttribute('data-fake', flair_fake);
      var senaiFlag = document.getElementById("id_report_scam");
      senaiFlag.setAttribute('data-scam', flair_senai);
      var anhembiFlag = document.getElementById("id_report_misleading");
      anhembiFlag.setAttribute('data-misleading', flair_anhembi);

      // --------------  POSTS TITLE  -------------- 
      // const title_post = data.map(entry => entry.title);
      const titlePost = data[0].title;
      var postTitle = document.getElementById("id_report_title");
      postTitle.innerText = titlePost;

      // --------------  POSTS TEXT  --------------
      const text_post = data[0].text;
      var postText = document.getElementById("id_report_text");
      postText.innerText = text_post;

      // --------------  POST ID  --------------
      const postId = data[0].post_id;
      var post_id = document.getElementById("info__id");
      post_id.setAttribute('data-id', postId);

      // --------------  USER FLAIR  -------------- 
    } else {
      // Data is a single object
      const desiredValues = [data];
      // Rest of the code for handling a single object goes here
    }
  }

  gotData();
});
