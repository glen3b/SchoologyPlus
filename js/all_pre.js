browser.storage.local.get("bluetheme").then(function (result) {
    if (result.bluetheme) {
        browser.runtime.sendMessage({ injectBlue: true }, function (response) {});
    }
});