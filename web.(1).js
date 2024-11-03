setInterval(myDeatils, 1000);
function myDeatils(){
    let date = new Date();
    document.getElementById("showDate").innerHTML = date.toLocaleTimeString();
}