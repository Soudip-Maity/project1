let mode=document.getElementById("mode");
let body=document.body
let cont= document.getElementById("container")
body.style.backgroundColor="black"
mode.addEventListener('click',function(){
    if(body.style.backgroundColor=="black"){
        body.style.backgroundColor="white"
        cont.style.background="linear-gradient(130deg,rgb(221, 116, 60),rgb(15, 220, 239),rgb(239, 79, 79))"
        cont.style.borderColor="black"
    }else{
        body.style.backgroundColor="black"
            cont.style.background="linear-gradient(110deg,rgb(15, 220, 239),rgb(239, 79, 79),rgb(221, 116, 60) )"
            cont.style.borderColor="white"
    }
})