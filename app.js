document.getElementById("btn").addEventListener("click", () => {
    let textareaValue = document.getElementById("text").value;
    document.getElementById("output").innerText = textareaValue;
});