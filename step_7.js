var birtYear= prompt("enter your birth year", "birth year")
var shoeSize= prompt("enter your shoe size", "shoe size")

function operation(birtYear, shoeSize){
    var x = shoeSize*2;
    var y = x + 5;
    var z = y * 50;
    var m = z - birtYear;
    var a = m + 1766;

    return window.alert(a);

}

operation(birtYear,shoeSize);

