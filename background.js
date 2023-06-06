chrome.runtime.onInstalled.addListener(() => {
    console.log("chrome.runtime.onInstalled");

    chrome.tabs.onUpdated.addListener(async (tabId, tab) => {
        console.log("Tabs Updated");
        console.log("tabId", tabId, "tab:",tab);
        
        let innerHtml = "";
        if (tab.status === "complete") {
            innerHtml = "";
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                if (tabs.length > 0) {
                    const tab = tabs[0];
                    chrome.tabs.executeScript(tab.id, { code: 'document.documentElement.innerHTML' }, (result) => {
                        if (chrome.runtime.lastError) {
                            console.log(chrome.runtime.lastError);
                        } else {
                            console.log("result",result);
                            innerHtml = result[0];
                            console.log("innerHtml",innerHtml);
                        }
                    });
                }
            });
            // Do something with the inner HTML
            console.log("target:");
            console.log(innerHtml);
        }
        // Do something with the inner HTML
        if (innerHtml && innerHtml.length > 10) {
            let data_object = {
                contentType: "innerHtml",
                src: src
            }
            // const response = await fetch('http://localhost:5000/api', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ innerHtml: pageInnerHtml }),
            // });
            
            const url = "http://127.0.0.1:5000/";
            let response = fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data_object),
              })
                .then(response => response.json())
                .then(data => {
                    console.log("------------------------------data", data); // Handle the response data
                })
                .catch(error => {
                    console.log("error", error);
                    // Handle any errors
                });

            console.log("THERESPONSE",response);

        }

    });

  });





