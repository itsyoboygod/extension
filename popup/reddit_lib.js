// console.log("reddit_api is ok !!")

// import snoowrap from 'snoowrap';

const snoowrap = require('snoowrap');
// const snoostorm = require('snoostorm');

const reddit = new snoowrap({
  userAgent: 'Marcus',
  clientId: 'aHqR_ECfwPEHP-2Kl7G8sg',
  clientSecret: 'jRIYVzM9xpNrovkBtxZ0BwlkBjvKgA',
  username: 'teste',
  password: '*'
})

// ---------- FOR FLAIRS FROM A POST----------

  const post = reddit.getSubmission('131mta5').fetch().then(flair => {
    const flairText = flair.link_flair_text;
    console.log(flairText);
    return flair.link_flair_text;
  }).catch(error => {
    console.error(error);
  });

