chrome.browserAction.onClicked.addListener(function(tab) { 
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        alert("Article added!")

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://rocket-kb.herokuapp.com/api/articles");
        // xhr.open("POST", "http://localhost/api/articles");
        let formData = new FormData();
        formData.append('url', url)
        formData.append('chrm_ext', true)
        xhr.send(formData);
    });
});
