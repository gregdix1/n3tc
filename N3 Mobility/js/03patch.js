// JavaScript source code
var mapState = 0;
function fullMap() {
    if (mapState == 0) {
        document.getElementById("mapSlider0310").style.height = "93%";
        document.getElementById("frameTrafficHome").style.height = "100%";
        document.getElementById("btn-home-fullmap").innerHTML = "Min Map";
        mapState = 1;
    } else {
        document.getElementById("mapSlider0310").style.height = "250px";
        document.getElementById("frameTrafficHome").style.height = "250px";
        document.getElementById("btn-home-fullmap").innerHTML = "Full Map";
        mapState = 0;
    }
    //document.getElementById("homeNavContainer").style.marginTop = "70%";
    //style="margin - top: 70 %;
    //margin - top: 0px;
}

function tomTraffic() {
    //alert("t");
    document.getElementById("frameTrafficHome").src = 'tomtom/traffic-home.html';
}

function n3route() {
    document.getElementById("frameTrafficHome").src = 'tomtom/traffic-n3route.html';
}


