// background script
browser.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.injectBlue) {
        browser.tabs.insertCSS(sender.tab.id, { file: "/css/all.css" }, function () {
            sendResponse({ done: true });
        });
        return true; // Required for async sendResponse()
    }
});