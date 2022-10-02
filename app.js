//reference buttons
let translateButton = document.querySelector("#btnTranslate");
let input = document.querySelector("#inputText");
let output = document.querySelector("#outputText");

// api
let serverURL = "https://api.funtranslations.com/translate/numbers.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

//error message
function errorHandler(error) {
  console.log("An error occurred", error);
  alert("Server down, please try again after some time!!!");
}

function clickEventHandler() {
  if(input.value === ""){
  output.innerText = "Enter a proper value : 123..."
}else{
  let inputText = input.value; //taking input
  output.innerText = "Translating.....";
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      let translatedText = json.contents.translated;
      output.innerText = translatedText; // giving output
    })
    .catch(errorHandler);}
}

btnTranslate.addEventListener("click", clickEventHandler);
