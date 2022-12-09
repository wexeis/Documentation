

var button = document.getElementById('validate')

button.addEventListener('click', function(){

    var name1 = document.getElementById('name').value;

    var surname = document.getElementById('surname').value;
    
    var city = document.getElementById('city').value;
    alert ("Hello! " + name1 + " " + surname + " from " + city);
})  