 var inputText = document.getElementById("input-txt")
 var outputText = document.getElementById("output-txt")
 var translateBtn = document.getElementById("btn")

 var funUrl = "https://api.funtranslations.com/translate/minion.json"

 function convertUrl(input) {
     return funUrl + "?" + "text=" + input
 }

 function clickHandler() {
     var userInput = inputText.value;
     fetch(convertUrl(userInput))
     .then(response => response.json())
     .then(json => {
         var transaltedText = json.contents.translated
         outputText.innerText = transaltedText
     })
 }

 translateBtn.addEventListener("click",clickHandler);


