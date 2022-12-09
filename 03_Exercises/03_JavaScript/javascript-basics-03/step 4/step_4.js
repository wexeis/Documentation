
var btn = document.getElementById('button');
btn.addEventListener('click', function(){
var first = document.getElementById('password').value;
var second = document.getElementById('confirmation').value;
if(first === second){
   // alert("match")
    document.getElementById('password').style.border= "hidden";
document.getElementById('confirmation').style.border="hidden";
}
 
    else{ 
document.getElementById('password').style.border= "thick solid red";
document.getElementById('confirmation').style.border="thick solid red";
    }
    
}
)