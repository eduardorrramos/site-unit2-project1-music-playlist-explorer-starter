var modal=document.getElementById("modal");
var btn=document.getElementById("button");
var close=document.getElementById("close");


// class name verusus id, specifies array as opposed to a single element

// var modalclose=document.getElementById("modalclose");

btn.onclick = function() {
    modal.style.display = "block";
    // close.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
    var abouttoclear = document.getElementsByClassName("modal_content");
    abouttoclear[0].innerHTML = "";
    // how none affects event listeners, if not j pivot into 
    // manually adding event listener myself, hidden, click event listener
}
// function closeonclick() {
//     // console.log("closing")
//     modal.style.display = "none";
//     // how none affects event listeners, if not j pivot into 
//     // manually adding event listener myself, hidden, click event listener
// }