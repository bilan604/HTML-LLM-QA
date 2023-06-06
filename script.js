(()=>{
    console.log("script ran");
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        console.log(obj, sender, response);
    });
    
})