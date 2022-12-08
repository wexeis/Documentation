var q = document.querySelector('#image1')
console.log("qqq ",q)

/*q.addEventListener("mouseover", function(){*/

 q.addEventListener('mouseover', function(){
    console.log("mousever")
q.src = "./images/image1_2.jpg";
})
q.addEventListener('mouseout', function(){
    q.src ="./images/image1.jpg"})