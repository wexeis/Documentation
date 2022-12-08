/*var body = document.body

var nElement = document.createElement('div');
console.log(nElement);
document.body.append(nElement)*/
// nElement.innerText="MOGHH"

// var x = document.getElementsByTagName('div')
// var y = document.querySelector('#name')
// var a = in.value
// nElement.innerText = "a"


/*var target = document.getElementsByTagName('div')
var in = document.getElementById('name')
var a = in.value
div.innerText = a*/

/*function text_show(){
var di = document.getElementsByTagName('div')
var input = document.getElementById('name').value;

di.innerHTML = input;

}
*/
var displayText  = document.getElementById('name')
displayText.onkeyup= function(){
    document.getElementById('display').innerHTML = displayText.value 
}


