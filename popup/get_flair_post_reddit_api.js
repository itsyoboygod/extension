// // console.log("./popup/reddit_api.js is working !!")

// // Replace 'subredditName_flair' and 'postID' with the desired subreddit name and post ID
// const subredditName_flair = 'BACHARELOVE';
// const postID = '13yjkqp';

// // Fetch the post information from the Reddit API
// fetch(`https://www.reddit.com/r/${subredditName_flair}/comments/${postID}.json`)
//   .then(response => response.json())
//   .then(data => {
//     // Extract the flair text from the post data
//     const flair = data[0].data.children[0].data.link_flair_text;

//     // Log the flair to the console
//     console.log(`Flair of post ${postID} in r/${subredditName_flair}: ${flair}`);
//   })
//   .catch(error => {
//     console.log('Error occurred while fetching post information:', error);
//   });
