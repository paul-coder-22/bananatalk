// const serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
const serverUrl = "https://api.funtranslations.com/translate/minion.json";

const errorText = document.querySelector('.errorText');
errorText.style.display = "none"

document.querySelector("#btn").addEventListener("click", () => {

    let textareaValue = document.querySelector("#text").value;
    if (textareaValue === '') {
        errorText.style.display = "block"
    } else {
        errorText.style.display = "none"
        fetch(getTranslationUrl(textareaValue))
            .then(e => e.json())
            .then(v => {
                // console.log(v.contents.translated)
                // console.log(document.getElementById("output"))
                document.querySelector("#output").innerHTML = v.contents.translated
            })
            .catch(e => console.log("error in the server !!!"))
    }

});

function getTranslationUrl(text) {

    return serverUrl + "?" + "text=" + text;
}
