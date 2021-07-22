// const serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
const serverUrl = "https://api.funtranslations.com/translate/minion.json"

document.getElementById("btn").addEventListener("click", () => {
    let textareaValue = document.getElementById("text").value;
    fetch(getTranslationUrl(textareaValue))
        .then(e => e.json())
        .then(v => document.getElementById("output").innerText = v.contents.translated)
        .catch(e => console.log("error in the serve !!!"))

});

function getTranslationUrl(text) {
    return serverUrl + "?" + "text=" + text;
}