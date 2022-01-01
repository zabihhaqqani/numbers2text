//reference buttons
let translateButton = document.querySelector("#btnTranslate");
let input = document.querySelector("#inputText")
let output = document.querySelector("#outputText")

btnTranslate.addEventListener("click", function clickEventHandler(){
    console.log("clicked")
   
});

//mock api 
let serverURL = "https://api.funtranslations.com/translate/numbers.json";


function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text ;
}

function errorHandler(error) {
    console.log("An error occurred", error);
    alert("Server down, please try again later");
}

function clickEventHandler() {  
    let inputText = input.value;
    output.innerText = "Translating......................."
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        let translatedText = json.contents.translated;
        output.innerText = translatedText;
    })
    .catch (errorHandler)
};

btnTranslate.addEventListener("click",clickEventHandler)