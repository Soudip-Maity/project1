let speech= new SpeechSynthesisUtterance()

let button= document.getElementById("button")
let voiceSelect= document.getElementById("select")
let voices=[];


button.addEventListener("click", ()=>{

    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})