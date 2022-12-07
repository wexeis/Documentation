var x = prompt("enter your age", "age..")
function age (x){
    if ( x < 18){
        return window.alert("you are under 18");
    }
    else {
        return window.alert("you are over 18");
    }

}
age(x);