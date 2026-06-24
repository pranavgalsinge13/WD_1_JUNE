// DOM
// document.getElementById()
let c=document.getElementById("h11")
c.style.backgroundColor="Red"
c.style.color="white"
c.style.textAlign="center"


// document.getElementByClassName()
let a=document.getElementsByClassName("c1")
for(let i=0;i<a.length;i++){
    a[0].style.color="red"
    a[1].style.backgroundColor="Orange"
    a[i].style.fontStyle="italic"
}
// document.getElementsByTagName()

let b=document.getElementsByTagName("span")
for(let j=0;j<b.length;j++){
    b[0].style.color="orange"
    b[1].style.color="red"
    b[2].style.color="brown"
}
// document.querySelector()
let d=document.querySelector("")
// document.querySelectorAll()