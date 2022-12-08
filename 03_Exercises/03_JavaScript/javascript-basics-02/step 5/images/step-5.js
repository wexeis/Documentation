var a = document.getElementsByTagName('img')

a.addEventListener('mouseover', function(){
    console.log("mousever")
    if(a.id="imager1"){
return a.src = "./images/image1_2.jpg";
}

else if(a.id='image2'){
    return a.src = "./images/image2_2.jpg";
}
else if(a.id='image3'){
    return a.src = "./images/image3_2.jpg";
}
else if(a.id='image4'){
    return a.src = "./images/image4_2.jpg";
}
else if(a.id='image5'){
    return a.src = "./images/image5_2.jpg";
}
})

/*.addEventListener('mouseover', function(){
    console.log("mousever")
    if(a.id="image1"){
return a.src = "./images/image1.jpg";
}

else if(a.id='image2'){
    return a.src = "./images/image2.jpg";
}
else if(a.id='image3'){
    return a.src = "./images/image3.jpg";
}
else if(a.id='image4'){
    return a.src = "./images/image4.jpg";
}
else if(a.id='image5'){
    return a.src = "./images/image5.jpg";
}
})*/
