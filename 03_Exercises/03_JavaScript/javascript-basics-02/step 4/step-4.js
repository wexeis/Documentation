alert("hello");
var reset1 = document.getElementById('reset')
/*reset1.addEventListener('click', function() {

    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("city").value = ""}
)*/
reset1.onclick=function(){
    let confirmMsg= confirm("Are you sure?")
    console.log(confirmMsg)
    if(confirmMsg == true){
    
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("city").value = "";
    return alert("Info deleted")
}
else {
    return alert("Info are not deleted")
}
}   