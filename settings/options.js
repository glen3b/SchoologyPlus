function saveOptions(e) {
    e.preventDefault();
    browser.storage.local.set({
        bluetheme: document.getElementById("bluetheme-enable").checked,
        rosterdl: document.getElementById("rosterdl-enable").checked
    });
}

function restoreOptions() {

    function setBlueTheme(result) {
        let bluethemeEnable = document.getElementById("bluetheme-enable");
        bluethemeEnable.checked = result.bluetheme === null ? true : result.bluetheme;
        document.getElementById("bluetheme-disable").checked = !bluethemeEnable.checked;
    }

    function setRosterDl(result) {
        let rosterdlEnable = document.getElementById("rosterdl-enable");
        rosterdlEnable.checked = result.rosterdl === null ? true : result.rosterdl;
        document.getElementById("rosterdl-disable").checked = !rosterdlEnable.checked;
    }

    function onError(error) {
        console.log(`Error retrieving preference: ${error}`);
    }

    browser.storage.local.get("bluetheme").then(setBlueTheme, onError);
    browser.storage.local.get("rosterdl").then(setRosterDl, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);