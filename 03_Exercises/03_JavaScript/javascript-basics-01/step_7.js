var button = document.getElementById('validate')
button.addEventListener('click', function(){
     var birthYear = document.getElementById('year').value;
 var shoeSize = document.getElementById('shoe_size').value;

 var x = shoeSize*2;
    var y = x + 5;
    var z = y * 50;
    var m = z - birthYear;
    var a = m + 1766;

    alert(a)

})

    

