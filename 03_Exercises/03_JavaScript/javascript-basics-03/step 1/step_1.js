var imge = document.getElementById('image1')
/*imge.onmouseover=function(){
    console.log("12")
    imge.style.border="3px solid red"
}without eventlistener*/

imge.addEventListener('mouseover', function(){
    imge.style.border= "thick solid red";
})