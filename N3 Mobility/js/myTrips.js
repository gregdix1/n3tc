// JavaScript my trips
//tripp calc
var tripStart = '';
var tripEnd = '';
function setStart() {
    tripStart = document.getElementById("selectStart").value;
    document.getElementById("selectEnd").style.display = ("block");

}

function setEnd() {
    tripEnd = document.getElementById("selectEnd").value;
    document.getElementById("selectEnd").style.display = ("none");
    document.getElementById("tripCoords").innerHTML = tripStart + "][" + tripEnd; 

}

function calTolls() {

    //vClass = document.getElementById("vclass").value;
    if (vClass == 1) {
        var DeHoekM = 40;
        var TugelaM = 51;
        var WilgeM = 55;
        var BergvilleR = 18;
        var MooiM = 41;
        var MarianM = 9.5;
    }


    if (vClass == 2) {
        var DeHoekM = 62;
        var TugelaM = 98;
        var WilgeM = 95;
        var BergvilleR = 18;
        var MooiM = 30;
        var MarianM = 18;
    }

    if (vClass == 3) {
        var DeHoekM = 95;
        var TugelaM = 154;
        var WilgeM = 127;
        var BergvilleR = 38;
        var MooiM = 142;
        var MarianM = 22;
    }

    if (vClass == 4) {
        var DeHoekM = 136;
        var TugelaM = 213;
        var WilgeM = 180;
        var BergvilleR = 18;
        var MooiM = 192;
        var MarianM = 34;
    }

    //alert("start lat:" + startLat);
    //alert("End lat:" + endLat);


    var plaza1 = -26.66397;
    var plaza2 = -27.04038;
    var plaza3 = -28.4625;
    var plaza4 = -28.58687;
    var plaza5 = -29.2;
    var plaza6 = -29.823006;

    var PlazaName = "None ";
    var TollCount = 0;

    if (startLat > endLat) {
        //	alert("south");
        if (plaza1 < startLat && plaza1 > endLat) {
            PlazaName = "<img src='images/tollicn.png' width='25' height='25' onclick='hideTabs()' >" + "Dehoek Mainline";
            TollCount = TollCount + DeHoekM;
        }
        if (plaza2 < startLat && plaza2 > endLat) { PlazaName = PlazaName + " <br><hr size='1'> " + "<img  src='images/tollicn.png' width='25' height='25' onclick='hideTabs()' >" + "Wilge Mainline"; TollCount = TollCount + WilgeM; }
        if (plaza3 < startLat && plaza3 > endLat) { PlazaName = PlazaName + " <br><hr size='1'> " + "<img src='images/tollicn.png' width='25' height='25' onclick='hideTabs()' >" + "Tugela Mainline"; TollCount = TollCount + TugelaM; }
        if (plaza4 < startLat && plaza4 > endLat) { PlazaName = PlazaName + " <br><hr size='1'> " + "<img src='images/tollicn.png' width='25' height='25' onclick='hideTabs()' >" + "Bergville Ramp"; TollCount = TollCount + BergvilleR; }
        if (plaza5 < startLat && plaza5 > endLat) { PlazaName = PlazaName + " <br><hr size='1'> " + "<img src='images/tollicn.png' width='25' height='25' onclick='hideTabs()' >" + "Mooi Mainline"; TollCount = TollCount + MooiM; }
        if (plaza6 < startLat && plaza6 > endLat) { PlazaName = PlazaName + " <br><hr size='1'> " + "<img src='images/tollicn.png' width='25' height='25' onclick='hideTabs()' >" + "Mariannhill Mainline"; TollCount = TollCount + MarianM; }


    } else {
        //alert("north");
        if (plaza6 < endLat && plaza6 > startLat) { PlazaName = "<img src='images/tollicn.png' width='25' height='25' onclick='hideTabs()' >" + "Mariannhill Mainline"; TollCount = TollCount + MarianM; }
        if (plaza5 < endLat && plaza5 > startLat) { PlazaName = PlazaName + "<img  src='images/tollicn.png' width='25' height='25' onclick='hideTabs()' > <br><hr size='1'> " + "Mooi Mainline"; TollCount = TollCount + MooiM; }
        if (plaza4 < endLat && plaza4 > startLat) { PlazaName = PlazaName + " <br><hr size='1'> " + "<img src='images/tollicn.png' width='25' height='25' onclick='hideTabs()' >" + "Bergville Ramp"; TollCount = TollCount + BergvilleR; }
        if (plaza3 < endLat && plaza3 > startLat) { PlazaName = PlazaName + " <br><hr size='1'> " + "<img  src='images/tollicn.png' width='25' height='25' onclick='hideTabs()' >" + "Tugela Mainline"; TollCount = TollCount + TugelaM; }
        if (plaza2 < endLat && plaza2 > startLat) { PlazaName = PlazaName + " <br><hr size='1'> " + "<img  src='images/tollicn.png' width='25' height='25' onclick='hideTabs()' >" + "Wilge Mainline"; TollCount = TollCount + WilgeM; }
        if (plaza1 < endLat && plaza1 > startLat) { PlazaName = PlazaName + " <br><hr size='1'> " + "<img  src='images/tollicn.png' width='25' height='25' onclick='hideTabs()' >" + "Dehoek Mainline"; TollCount = TollCount + DeHoekM; }
    }


    var lat1 = startLat;
    var lon1 = startLon;
    var lat2 = endLat;
    var lon2 = endLon;

    var radlat1 = Math.PI * lat1 / 180;
    var radlat2 = Math.PI * lat2 / 180;
    var radlon1 = Math.PI * lon1 / 180;
    var radlon2 = Math.PI * lon2 / 180;
    var theta = lon1 - lon2;
    var radtheta = Math.PI * theta / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344
    //if (unit=="N") { dist = dist * 0.8684 }
    //return dist;
    //alert(dist);

    document.getElementById('distHolder').innerHTML = "<div><p class='tt-route-control-instructionText' id='dist' ></p></div>";

    document.getElementById('dist').innerHTML = "<hr size='1'>" + "<strong><span id='cost'>Total Cost: R " + TollCount + "</span></strong><br /><div id='extraInfo' >" + "Toll Points - " + address1 + " to " + address2 + "<br>" + PlazaName + "<br>" + "<img src='images/dircBtn.png' width='25%' height='auto' style='margin:8px' onclick='direcShow();'> <img src='images/savetrip.png' width='25%' height='auto' style='margin:8px' onclick='routeShow();'> <img src='images/viewmap.png' width='25%' height='auto' style='margin:8px' onclick='hideTabs();'><div style='height:50px'>...</div>";

    

};
