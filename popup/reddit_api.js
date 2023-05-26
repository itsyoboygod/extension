// // console.log("./popup/reddit_api.js is working !!")

// chrome.storage.local.get(['payload'], function (result) {
//     console.log(`
// REDDIT_API storage: 
// ${result.payload.message}
//       `);
  
//     function gotData(data = result.payload.message){ 
//         const desiredValues = data
//         const flair_senai = 'SENAI/GRADU';
//         const flair_anhembi = 'ANHAM/PUB';
//         const flair_uni9 = 'UNI9/VETER';

//         const regex = new RegExp(`\\b${desiredValues.join('\\b|\\b')}\\b`);
//         const data_senai = regex.test(flair_senai);
//         const data_anhembi = regex.test(flair_anhembi);

//             var senaiFlag = document.getElementById("id_report_fake");
//             senaiFlag.setAttribute('data-fake', flair_senai);
//             console.log("bruh")
//             var anhembiFlag = document.getElementById("id_report_misleading");
//             anhembiFlag.setAttribute('data-misleading', flair_anhembi);
//             var uni9Flag = document.getElementById("id_report_uni9");
//             uni9Flag.setAttribute('data-scam', flair_uni9);
//     }
//     gotData()
//   })