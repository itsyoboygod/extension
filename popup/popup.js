function popup(){
    let bgpage = chrome.extension.getBackgroundPage()
    let word = bgpage.word.trim()
    createP(word)
}