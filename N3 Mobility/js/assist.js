//AssistStart
var message = 'Your Mobile Number: ';
function assistStart() {

    

    // localStorage.getItem("myMobile");
   // document.getElementById("assistBtn").className = 'assistBtn';

    // document.getElementById("assistBtn").innerHTML = '<strong>' + message + '</strong><input type="text" id="assistCell" value="" style="background-color: rgb(244, 245, 176);width: 80%;margin: 0px;height: 30px;margin-top: 10px;" data-validation="length alphanumeric" data-validation-length="min11" placeholder="+27"/><span class="assistBtn" onclick="sendSOS()">SOS !</span>';
    setTimeout(function () {
        document.getElementById("assistCell").value = localStorage.getItem("myMobile");
        var str = document.getElementById('assistCell').value;
        var checkFirst = str.charAt(0);
        if (checkFirst == 0) {
            resClean = str.replace('0', '+27');
            document.getElementById('assistCell').value = resClean;
        }

        document.getElementById("longlatAssist").innerHTML = "LAT: " + mylat + "&nbsp;&nbsp;&nbsp;" + " LNG: " + mylon;
        // runroutemarkers
    }, 1500);

   
    addMapAssist();
    RouteMarkerCheck();
    
};

//main assist marker run
var dist = 0;
var pointIndex;
var point;
var points;
var mapAssist;
function RouteMarkerCheck() {
    //send sms


    pointIndex = 0;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, errorGettingPosition);


    } else {
        document.getElementById("longlatAssist").innerHTML = "Geolocation is not supported by this browser.";
        alert("Please enable your GPS on your device");
    }

    function errorGettingPosition(err) {
        return err;
        if (err.code == 1) {
           // alert("User denied geolocation.");
            document.getElementById("longlatAssist").innerHTML += "Cannot detect GPS. Please enable your GPS location feature" + "<br><div onClick='gpsEnabled()' style=' background-color: #4b80ac; display:inline-block; padding: 5px;  border-radius: 50px; margin: 15px; border: solid 1px #fff;'>MY GPS IS NOW ENABLED</div><div onClick='gpsIgnore()' style=' background-color: #4b80ac; display:inline-block; padding: 5px;  border-radius: 50px; margin: 15px; border: solid 1px #fff;'>IGNORE GPS</div>";
        }
        else if (err.code == 2) {
           // alert("Position unavailable.");
           // document.getElementById("longlatAssist").innerHTML += "<br>" + "Position unavailable";
        }
        else if (err.code == 3) {
            alert("Timeout expired.");
        }
        else {
           // alert("ERROR:" + err.message);
            document.getElementById("longlatAssist").innerHTML = err.message;

        }
    };
    //alert('showpoSSS..');
    mylat = -29.538502;
    mylon = 30.278805;
    function showPosition(position) {

        // mylat = position.coords.latitude;
        // mylon = position.coords.longitude;

        mylat = -29.538502;
        mylon = 30.278805;

        var prox = 0.02;
       

        // get points is defined in points.js
        // due to security restrictions in Chrome, AJAX requests cannot be made against local files
        // which is why the data is being loaded as a JavaScript file
        points = getRoutes();
       // alert('getRoute..');
        // show loc on the map

        mapAssist.flyTo({
            center: [mylon, mylat],
            pitch: 60, // pitch in degrees
            bearing: -10, // bearing in degrees
            zoom: 12,
            speed: 0.8,
            curve: 1,

        });



        // add a new marker for each address

        for (pointIndex = 0; pointIndex < points.length && pointIndex < 6000; pointIndex++) {
            point = points[pointIndex];
            // var marker = new tomtom.Marker([point.lat, point.lon], null, { draggable: true });
            // var MyMarker = new tomtom.Marker([point.lat, point.lon]);
            //var markup = point.lat + ", " + point.lon;
            var mrk = point.Route;
            // var morebtn = "<img style='text-align:center' src='images/more-icons.png' width='60' height='18' onclick='listToggle()' >";
            //alert(pointIndex);
            //alert("dist" + dist);
            // var pnlside = "<div style='border-bottom:1px dashed #b0aeae; display:block;'><br>" + " Route Marker: " + desc + "<br></div>";
            if (prox > dist) {
                //document.getElementById("sidePnl").innerHTML += pnlside;
            }
            //alert("dist" + dist);


            //Distance calc
            var lat1 = mylat;
            var lon1 = mylon;
            var lat2 = point.lat;
            var lon2 = point.lon;
            //alert("distXXX");
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
            var resultcalc = prox - dist;

            var desc = "<strong>Chainge: " + point.Chainge + "</strong>" + "<br> Route Name: " + mrk + "<br>" + "Distance: " + dist.toFixed(2) + "kms" + "<br>";
            //document.getElementById("assistbtn").src = "images/sendbigBtn.png";

            if (mrk == "My Location") {

                mapAssist.addLayer({
                    id: 'myLocAssist2',
                    type: 'circle',
                    paint: {
                        'circle-radius': 15,
                        'circle-color': '#d80909'
                    },
                    source: {
                        type: 'geojson',
                        data: {
                            type: 'Feature',
                            geometry: {
                                type: 'Point',
                                coordinates: [mylon, mylat] //[30.394778, -29.588352]
                            }
                        }
                    }
                });
                //geo>>>>
                // var geocoder = new tomtom.services.GeocodingService();

                // execute the reverse geocoding call
                // geocoder.reverseGeocode(marker.getLatLng(), function (response) {

                //   var contentAdd = "No address found.";

                // if (response && response.reverseGeoResponse && response.reverseGeoResponse.reverseGeoResult
                //     && response.reverseGeoResponse.reverseGeoResult[0]
                //    && response.reverseGeoResponse.reverseGeoResult[0].formattedAddress)
                //  contentAdd = response.reverseGeoResponse.reverseGeoResult[0].formattedAddress;

                // document.getElementById("rest").innerHTML += "Address: " + contentAdd + "<br>YOUR Co-Ords: " + "<br>Latitude: " + mylat + "<br> Longitude: " + mylon;

                // });


                //geo>>>>
            } //else{ iconUrl: "accomodationxxx.png";


            // if (mrk == "N0304" && prox > dist) {

            if (prox > dist) {
                markerCnt++;
                //marker.bindPopup(desc + "<br>" + morebtn, { showOnMouseOver: true });

                // map.addLayer(marker);tomtom
                //

                mapAssist.addLayer({
                    id: 'routMarkAssist',
                    type: 'circle',
                    paint: {
                        'circle-radius': 15,
                        'circle-color': '#3bc2d0'
                    },
                    source: {
                        type: 'geojson',
                        data: {
                            type: 'Feature',
                            geometry: {
                                type: 'Point',
                                coordinates: [mylon, mylat] //[30.394778, -29.588352]
                            }
                        }
                    }
                });

                // document.getElementById("rest").innerHTML = "<div>CLOSEST ROUTE MARKER</div>" + desc + "<br>";
                document.getElementById("markerCode").innerHTML = "<div>CLOSEST ROUTE MARKER</div>" + desc + "<br>";
                //alert(desc);
            } //else{ iconUrl: "accomodationxxx.png";

            //document.getElementById("acc").innerHTML = markerCnt + " " +  "Route Markers"  ;


        };

    }
}

function sendSOS() {

    var ContactCell = document.getElementById('assistCell').value;
   

    // if (ContactCell !== null) { } else { message = 'Enter Number: '; assistStart();}
    var sendSMS = "http://bulksms.2way.co.za/eapi/submission/send_sms/2/2.0?username=n3tc&password=Hoozet321&message=" + "Assistance%20" + "%20LAT%20" + mylat + "%20LON%20" + mylon + "%20Cell%20" + ContactCell + "%20assistance%20contact%200800%2063%204357&msisdn=" + ContactCell;
    //window.location = sendSMS;
    document.getElementById('runFrame').src = sendSMS;

    document.getElementById('callBtn').innerHTML = 'MESSAGE SENT';
    document.getElementById('callBtn').className = 'button-positive button-block';

    // HIDE POP // document.getElementById("assistBtn").className = 'assistBtn assistHide';

    // var smstURL = 'h ttps://biz-park.co.za/dev/sms/n3_send_sms.php?mobileno=' + mobileNo + '&value2=' + randnum;

}

function cancelSOS() {
   // document.getElementById("assistBtn").className = 'assistBtn assistHide';
}
