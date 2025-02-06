let rightBox= document.getElementById("rightBox")
let leftBox= document.getElementById("leftBox")
let lists=document.getElementsByClassName("list")

for (const list of lists) {
    list.addEventListener("dragstart" , function(f){
        let selected= f.target
        rightBox.addEventListener("dragover" , function(f){
            f.preventDefault()
        })
        rightBox.addEventListener("drop" , function(f){
            rightBox.appendChild(selected);
            selected=null
        })

        leftBox.addEventListener("dragover" , function(f){
            f.preventDefault()
        })
        leftBox.addEventListener("drop" , function(f){
            leftBox.appendChild(selected);
            selected=null
        })
          


    })
    
}