// JavaScript my trips
//tripp calc
var tripStart = '';
var tripEnd = '';
var startName = '';
var endName = '';
var startLat;
var endLat;
var start;
var end;
var FullTitle;
var TitleFrom;
var TitleTo;

function setStart() {
    tripStart = document.getElementById("selectStart").value;
    document.getElementById("tripCoords").innerHTML = tripStart + "][" + tripEnd;
    if (tripStart == 'Mylocation') {
        tripStart = mylon + "," + mylat;
        document.getElementById("tripCoords").innerHTML = tripStart + "][" + tripEnd;}
    var getFullTitle = document.getElementById("form-title").value;
   // alert(getFullTitle);
    FullTitle = getFullTitle.split(" to ");
    TitleFrom = selectStart.options[selectStart.selectedIndex].text;
    var TestR = FullTitle[0];
    TitleTo = FullTitle[1];
    //alert(TestR + ' to ' + TitleTo);
    FullTitle = TitleFrom + ' to ' + TitleTo;
    // document.getElementById("selectEnd").style.display = ("block");
    // startName = document.getElementById("selectStart").
   // var text = selectStart.options[selectStart.selectedIndex].text;
   // startName = text;
    document.getElementById("form-title").value = FullTitle; // startName + ' - ' + '...';

}

function setEnd() {
    tripEnd = document.getElementById("selectEnd").value;
    // document.getElementById("selectEnd").style.display = ("none");
    document.getElementById("tripCoords").innerHTML = tripStart + "][" + tripEnd;

    var getFullTitle = document.getElementById("form-title").value;
    FullTitle = getFullTitle.split(" to ");
    TitleTo = selectEnd.options[selectEnd.selectedIndex].text;
     TitleFrom = FullTitle[0];
   // TitleTo = FullTitle[1];
     FullTitle = TitleFrom + ' to ' + TitleTo;
   // var text2 = selectEnd.options[selectEnd.selectedIndex].text;
    //endName = text2;
     document.getElementById("form-title").value = FullTitle; //startName + ' to ' + endName;


}

function setClassv() {

    document.getElementById("form-claculate-trip").className = "button-positive button-block";
}


// 28.01447, -26.03133][29.8833, -29
function cleanCoords() {
    document.getElementById('form-tariff').value = '';
    document.getElementById('form-time').value = '';
    document.getElementById('form-distance').value = '';
    document.getElementById('form-plaza').innerHTML = '';
    document.getElementById('form-claculate-trip').innerHTML = 'Calculating...';
    routeDist = 0;
    routeDurantion = 0;

    coords = document.getElementById("tripCoords").innerHTML;
    var splitcoords = coords.split("][");
    start = splitcoords[0];
    end = splitcoords[1];
    //start corods
    var splitstart = start.split(",");
    startLon = splitstart[0];
    startLat = splitstart[1];
    //end coords
    var splitend = end.split(",");
    endLon = splitend[0];
    endLat = splitend[1];
    //get toll fees
    // alert('Slon1: ' + startLon + ' Slat1: ' + startLat);
    //get directions mapbox api
    getDirections();
    callTollTriff();
}

function calcTrip() {
    
    getDirections();
    callTollTriff();

}

function flyN3X() {
    map.flyTo({
        center: [30.2518344, -29.8823032],
        pitch: 60, // pitch in degrees
        bearing: -10, // bearing in degrees
        zoom: 7,
        speed: 0.8,
        curve: 1,
        easing(t) {
            return t
        }
    });
    AddTollMarkers();

};


function resetTripStatic() {
    routepoint = 1;
    document.getElementById("tips").innerHTML = 'Enter Start Location';
    document.getElementById('form-tariff').innerHTML = '';
    document.getElementById('form-plaza').innerHTML = '';
    document.getElementById("form-distance").innerHTML = '';
    document.getElementById("form-time").innerHTML = '';
    $("#instructions").addClass("insHide");
    $("#instructions").html('');
   // $("#vclass").prop("selectedIndex", 0);

    // map.removeLayer('start1');   

}

function shrinkBox() {
    $("#instructions").addClass("insShrink");
    document.getElementById("tips").innerHTML = '<div onclick="insSHow()">Show Details</div>';
}
function insSHow() {
    $("#instructions").removeClass("insShrink");
    document.getElementById("tips").innerHTML = 'Trip Details';
}

///call tolls test

var address1 = "Johannesburg, South Africa";
var address2 = "Durban, South Africa";
function callTollTriff() {
    //  startLat = -28.4625; 
    //endLat = -29.193292; 
    vClass = document.getElementById("vclass").value;

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

    // alert("Start lat: " + startLat + " End lat: " + endLat );



    var plaza1 = -26.66397;
    var plaza2 = -27.04038;
    var plaza3 = -28.4625;
    var plaza4 = -28.58687;
    var plaza5 = -29.2;
    var plaza6 = -29.823006;

    var PlazaName = "";
    var TollCount = 0;

    startLat = Number(startLat);
    endLat = Number(endLat);

    if (startLat > endLat) {
        // alert("Bearing south");
        if (plaza1 < startLat && plaza1 > endLat) {
            PlazaName = "<br /><div class='titlebox'>  Plaza: " + "Dehoek Mainline" + " R " + DeHoekM + "</div>";
            TollCount = TollCount + DeHoekM;
        }
        if (plaza2 < startLat && plaza2 > endLat) { PlazaName = PlazaName + "<div class='titlebox'>  Plaza: " + "Wilge Mainline" + " R " + WilgeM + "</div>"; TollCount = TollCount + WilgeM; }
        if (plaza3 < startLat && plaza3 > endLat) { PlazaName = PlazaName + "<div class='titlebox'>  Plaza: " + "Tugela Mainline" + " R " + TugelaM + "</div>"; TollCount = TollCount + TugelaM; }
        if (plaza4 < startLat && plaza4 > endLat) { PlazaName = PlazaName + "<div class='titlebox'>  Plaza: " + "Bergville Ramp" + " R " + BergvilleR + "</div>"; TollCount = TollCount + BergvilleR; }
        if (plaza5 < startLat && plaza5 > endLat) { PlazaName = PlazaName + "<div class='titlebox'>  Plaza: " + "Mooi Mainline" + " R " + MooiM + "</div>"; TollCount = TollCount + MooiM; }
        if (plaza6 < startLat && plaza6 > endLat) { PlazaName = PlazaName + "<div class='titlebox'>  Plaza: " + "Mariannhill Mainline" + " R " + MarianM + "</div>"; TollCount = TollCount + MarianM; }


    } else {
        // alert("Bearing north");
        if (plaza6 < endLat && plaza6 > startLat) { PlazaName = PlazaName + "<br/><div class='titlebox'>  Plaza: " + "Mariannhill Mainline" + " R " + MarianM + "</div>"; TollCount = TollCount + MarianM; }
        if (plaza5 < endLat && plaza5 > startLat) { PlazaName = PlazaName + "<div class='titlebox'>  Plaza: " + "Mooi Mainline" + " R " + MooiM + "</div>"; TollCount = TollCount + MooiM; }
        if (plaza4 < endLat && plaza4 > startLat) { PlazaName = PlazaName + "<div class='titlebox'>  Plaza: " + "Bergville Ramp" + " R " + BergvilleR + "</div>"; TollCount = TollCount + BergvilleR; }
        if (plaza3 < endLat && plaza3 > startLat) { PlazaName = PlazaName + "<div class='titlebox'>  Plaza: " + "Tugela Mainline" + " R " + TugelaM + "</div>"; TollCount = TollCount + TugelaM; }
        if (plaza2 < endLat && plaza2 > startLat) { PlazaName = PlazaName + "<div class='titlebox'>  Plaza: " + "Wilge Mainline" + " R " + WilgeM + "</div>"; TollCount = TollCount + WilgeM; }
        if (plaza1 < endLat && plaza1 > startLat) { PlazaName = PlazaName + "<div class='titlebox'>  Plaza: " + "Dehoek Mainline" + " R " + DeHoekM + "</div>"; TollCount = TollCount + DeHoekM; }
    }

    //[29.56157, -28.4625] [29.993112, -29.193292]
    var lat1 = startLat;
    var lon1 = Number(startLon);
    var lat2 = Number(endLat);
    var lon2 = Number(endLon);
    //alert('lat1: ' + lat1 + 'lon1: ' + lon1 + 'lat2: ' + lat2 + 'lon2: ' + lon2);
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

    // document.getElementById('distHolder').innerHTML = "<div><p class='tt-route-control-instructionText' id='dist' ></p></div>";

    //document.getElementById('dist').innerHTML = "<hr size='1'>" + "<strong><span id='cost'>Total Cost: R " + TollCount + "</span></strong><br /><div id='extraInfo' >" + "Toll Points - " + address1 + " to " + address2 + "<br>" + PlazaName + "<br>" + "<img src='images/dircBtn.png' width='25%' height='auto' style='margin:8px' onclick='direcShow();'> <img src='images/savetrip.png' width='25%' height='auto' style='margin:8px' onclick='routeShow();'> <img src='images/viewmap.png' width='25%' height='auto' style='margin:8px' onclick='hideTabs();'><div style='height:50px'>...</div>";

    //testmapn3.html
    ///////document.getElementById('tollfee').innerHTML += TollCount;
    /////// document.getElementById('tolls').innerHTML = PlazaName;

    //index - 
    document.getElementById('form-tariff').value = TollCount;
    document.getElementById('form-plaza').innerHTML = PlazaName;

    TollCount = 0;
    dist = 0;
    PlazaName = '';
    //alert('tc R:' + TollCount + 'PName: ' + PlazaName);

};

function showN3Route() {
    start = [28.02670701, -26.1665238];
    //start = document.getElementById("selectStart").value;
    end = [30.42495982, -29.4231125];
    //end = document.getElementById("selectEnd").value;
    var directionsRequest = 'https://api.mapbox.com/directions/v5/mapbox/driving/' + start[0] + ',' + start[1] + ';' + end[0] + ',' + end[1] + '?steps=true&geometries=geojson&access_token=' + mapboxgl.accessToken;
    //var directionsRequest = 'https://api.mapbox.com/directions/v5/mapbox/driving/' + start + ';' + end + '?steps=true&geometries=geojson&access_token=' + mapboxgl.accessToken;
    $.ajax({
        method: 'GET',
        url: directionsRequest,
    }).done(function (data) {
        var route = data.routes[0].geometry;
        map2.addLayer({
            id: 'route',
            type: 'line',
            source: {
                type: 'geojson',
                data: {
                    type: 'Feature',
                    geometry: route
                }
            },
            paint: {
                'line-width': 5,
                'line-color': '#3bb2d0',
                'line-opacity': 0.8
            }
        });
        map2.addLayer({
            id: 'start',
            type: 'circle',
            paint: {
                'circle-radius': 15,
                'circle-color': '#3bb2d0'
            },
            source: {
                type: 'geojson',
                data: {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: start

                    }
                }
            }
        });
        map2.addLayer({
            id: 'end',
            type: 'circle',
            paint: {
                'circle-radius': 15,
                'circle-color': '#8a8bc9'
            },
            source: {
                type: 'geojson',
                data: {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: end
                    }
                }
            }
        });

    });
}

//Trip calc static
var routeDist;
var routeDurantion;
var DirStart;
var DirEnd;
var stepCount = 1;
/// MAPBOX API js only 
function getDirections() {

    // var directionsRequest = 'https://api.mapbox.com/directions/v5/mapbox/driving/' + start[0] + ',' + start[1] + ';' + end[0] + ',' + end[1] + '?steps=true&geometries=geojson&access_token=' + mapboxgl.accessToken;
    // var url = 'https://api.mapbox.com/directions/v5/mapbox/driving-traffic/28.02670701,-26.1665238;30.42495982,-29.4231125?steps=true&geometries=geojson&access_token=pk.eyJ1IjoiZ3JlZ2RpeDEiLCJhIjoiY2o2YXR2dGs0MWF1cjJxcGt2Njkyb3Q3OCJ9.YvaAQsUYmPfOG36iVUZGyQ';

    var url = 'https://api.mapbox.com/directions/v5/mapbox/driving/' + start + ';' + end + '?steps=true&geometries=geojson&access_token=' + mapboxgl.accessToken;


    getRequest(url, function (data) {
        var data = JSON.parse(data.responseText);
        var dataStr = JSON.stringify(data);

        for (var i = 0; i < dataStr.length; i++) {

            var route = data.routes[0].geometry;
            routeDist = data.routes[0].distance / 1000;
            routeDurantion = data.routes[0].duration / 3600;
            routeDist = routeDist.toFixed(2);
            routeDurantion = routeDurantion.toFixed(2);
            var rt = JSON.stringify(route);
            var testV = 'coords ' + rt;

        }

        //document.getElementById("holder").innerHTML = testV;
        document.getElementById('form-distance').value += routeDist;
        routeDurantion = routeDurantion.replace(".", "h");
        document.getElementById('form-time').value += routeDurantion;
        var instructions = document.getElementById('form-directions');
        var steps = data.routes[0].legs[0].steps;
        var steps = data.routes[0].legs[0].steps;
        document.getElementById('form-claculate-trip').innerHTML = 'Calculate';
        // var stepCoord = data.routes[0].legs[0].steps.location;
        steps.forEach(function (step) {

            instructions.insertAdjacentHTML('beforeend', '<p id="' + step.geometry.coordinates + '" class="direc">' + stepCount + '. ' + step.maneuver.instruction + '</p>'); stepCount++ //i++; 
        });

    });
}
