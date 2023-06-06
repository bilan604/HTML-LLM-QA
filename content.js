(() => {
    // Not used. Doesn't need to be used either anymore as of now.
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
            console.log(obj, sender, response);    
            const {type, value, Id} = obj;
            
        }
    )
})