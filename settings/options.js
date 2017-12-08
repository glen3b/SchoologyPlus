function saveOptions(e) {
    e.preventDefault();
    browser.storage.local.set({
        rosterdl: document.getElementById("rosterdl-enable").checked
    });
}

function restoreOptions() {

    function setRosterDl(result) {
        let rosterdlEnable = document.getElementById("rosterdl-enable");
        rosterdlEnable.checked = result.rosterdl === null ? true : result.rosterdl;
        document.getElementById("rosterdl-disable").checked = !rosterdlEnable.checked;
    }

    function onError(error) {
        console.log(`Error retrieving preference: ${error}`);
    }

    browser.storage.local.get("rosterdl").then(setRosterDl, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);