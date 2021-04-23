img = ["Dad.gif", "Mom.gif", "Me.gif", "515BniafrYL._SX258_BO1,204,203,200_.jpg"];
label = ["Dad", "Mom", "Me", "My Family Book"];
var i = 0;

function next() {
    document.getElementById("LABEL").innerHTML=label[i];
    document.getElementById("img").innerHTML=img[i];
}