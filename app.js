 var inputText = document.getElementById("input-txt")
 var outputText = document.getElementById("output-txt")
 var translateBtn = document.getElementById("btn")

 var funUrl = "https://api.funtranslations.com/translate/minion.json"

 function convertUrl(input) {
     return funUrl + "?" + "text=" + input
 }

 function errorHandler(error){
     console.log("Error occured! :(", error)
     alert("Something is wrong with server. Please try again later!")
 }

 function clickHandler() {
     var userInput = inputText.value;
     fetch(convertUrl(userInput))
     .then(response => response.json())
     .then(json => {
         var transaltedText = json.contents.translated
         outputText.innerText = transaltedText
     })
     .catch(errorHandler)
 }

 translateBtn.addEventListener("click",clickHandler);


