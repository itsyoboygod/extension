const fetch = require('node-fetch');
//  import fetch from 'node:http';
const http = require('http')

async function getFlairText(subreddit, postId) {
  let url = `https://www.reddit.com/r/${subreddit}/comments/${postId}.json`;
  url = url.replace(/\s+/g, '');

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'application/json',
      }
    });
    const data = await response.json();
    if (data && data[0].data.children[0].data.link_flair_text) {
      console.log(`
        ${data[0].data.children[0].data.link_flair_text}        
      `);
    } else {
      console.log('The data object is not defined or has no elements');
    }
  } catch (error) {
    console.error('Error handling response: ', error);
  }
}

getFlairText('AskReddit', 'oeo5q3');

chrome.storage.local.get(['payload'], function (result) {
  console.log(`
WORDNIK storage: 
${result.payload.message}
    `);

  let word = result.payload.message

})