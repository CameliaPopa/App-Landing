/* button learn color*/
function mouseOver() {
    document.getElementById("demo").style.backgroundColor = "#FFFFFF";
    document.getElementById("demo").style.color = "#000000";
}

function mouseOut() {
    document.getElementById("demo").style.backgroundColor = "#EC2855";
    document.getElementById("demo").style.color = "#FFFFFF";
}

/* slide*/
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("phone-image");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000);
}
