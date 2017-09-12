// Search POI

//vars
var desc = '';
var descpop = '';
var mylat = '';
var mylon = ''; ///check cords for center of n3
var eventsCnt;
var lat2 = '';
var lon2 = '';
var descList = '';

//poi vars
var retail = 'true';
var petrol = 'true';
var accomodation = 'true';
var tour = 'true';
var restaurant = 'true';
var activities = 'true';
var events = 'true';
////

var retailCnt ='';
var petrolCnt = '';
var accomodationCnt = '';
var tourCnt = '';
var restaurantCnt = '';
var activitiesCnt = '';
var eventsCnt = '';

//check setprox() may need it to reset all vars etc

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, errorGettingPosition);


} else {
    // document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
    alert("Please enable your GPS on your device");
}

function showPosition(position) {

    mylat = position.coords.latitude;
    mylon = position.coords.longitude;
    // alert(mylat + mylon + "tracking onm");
    //  document.getElementById("gpsout").innerHTML = "Lat: " + mylat + "  Lon: " + mylon;
    // map.setCenter([mylon, mylat]);

}


function errorGettingPosition(err) {
    return err;
    if (err.code == 1) {
        //alert("User denied geolocation.");
        // document.getElementById("gpsout").innerHTML += "Cannot detect GPS. Please enable your GPS location feature" + "<br><div onClick='gpsEnabled()' style=' background-color: #4b80ac; display:inline-block; padding: 5px;  border-radius: 50px; margin: 15px; border: solid 1px #fff;'>MY GPS IS NOW ENABLED</div><div onClick='gpsIgnore()' style=' background-color: #4b80ac; display:inline-block; padding: 5px;  border-radius: 50px; margin: 15px; border: solid 1px #fff;'>IGNORE GPS</div>";
    }
    else if (err.code == 2) {
        //alert("Position unavailable.");
        //  document.getElementById("gpsout").innerHTML += "<br>" + "Position unavailable";
    }
    else if (err.code == 3) {
        alert("Timeout expired.");
    }
    else {
        alert("ERROR:" + err.message);
        //  document.getElementById("gpsout").innerHTML = err.message;

    }
};

///////////START OF POI///////////
pingImg = "images/Events.png";
function runpoi() {
    pointIndex = 0;
    //alert(trackingState);



    // set left menu GBD
    document.getElementById("longlatXX").innerHTML = "LAT: " + mylat + "&nbsp;&nbsp;&nbsp;&nbsp;" + " LNG: " + mylon;
    //document.getElementById("longlatXX").innerHTML = "LAT: " + -26.0484062 + "&nbsp;&nbsp;&nbsp;&nbsp;" + " LNG: " + 28.0262091;
    //Lat: -26.0484062 Lon: 28.0262091
    ///ADD kmCounter to POI page
    prox = document.getElementById("kmCounter").value;




    // get points is defined in points.js
    // due to security restrictions in Chrome, AJAX requests cannot be made against local files
    // which is why the data is being loaded as a JavaScript file
    points = getPoints();


    for (pointIndex = 0; pointIndex < points.length && pointIndex < 1154; pointIndex++) {
        point = points[pointIndex];

        // REPLACE WITH MAPBOX ITEM MyMarker = new tomtom.Marker([point.lat, point.lon], null, { draggable: true });
        // CHECK FOR ALT.. marker = new tomtom.Marker([point.lat, point.lon]);
        var mrk = point.cat;  // category..[ NAME img.png names to match categories...var mrk = point.cat and image name is cat.png?? yes ]




        //distance calculation
        var lat1 = mylat;
        var lon1 = mylon;
        lat2 = point.lat;
        lon2 = point.lon;


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
        var resultcalc = prox - dist;

        //dist calc end ////////////////////////

        //assign content to desc var// ///////////gbd REPLACE WITH <li>
        desc = "<li id='" + point.lon + ", " + point.lat + "' class='list' onclick='showOnMap(this.id)'><strong>" + point.name + "</strong>" + " - " + mrk + "<br>" + "Distance: " + dist.toFixed(2) + " kms<br>" + "Tel: " + point.cnt + "<br>" + "Address: " + point.adr + "<br>" + "Co-ords: " + point.lat + ", " + point.lon + "<br>" + "Website: " + "<a href='" + point.web + "'>" + point.web + "</a>" + "<br></li>";
        //alert(dist);
       

         //for tracking popup slider cotent//
        descpop =  point.name + " - " + mrk + " : " + " Distance: " + dist.toFixed(2) + " kms ";

        
        //add map marker layers for each poi//
        if (mrk == "Events " && events == "true" && prox > dist) {
            ///NEW ////////////
            pingImg = "images/Events.png";

            addMarkerPOI(pingImg, desc, lat2, lon2);
            eventsCnt++;
            ////
            // tomtom.Marker.DEFAULT_MARKER_OPTIONS = {
            //     iconUrl: "eventspin.png",
            //     iconSize: [35, 35],
            //     iconAnchor: [17, 12]
            //   }; eventsCnt = eventsCnt + 1; marker.bindPopup(desc + "<br>" + morebtn, { showOnMouseOver: true });

            //  map.addLayer(marker);
            // pnlside = "<div style='padding-left: 10px; background-color: #fff; border-bottom:1px solid #b0aeae; border-left: 5px solid #8554a3;  display:block;'><br>" + "<img src='images/pins/eventsbtn.png' style='max-width:35px; height:auto; float: right; '>" + desc + "<br>" + "<img src='images/back-icons.png' style='max-width:35px;  height:auto; padding:3px;' onClick='listHide()'>" + "</div>";
        }////////////////////////////////////////////


        if (mrk == "Activities " && activities == "true" && prox > dist) {

            ///NEW ////////////
            pingImg = "images/Activities.png";

            addMarkerPOI(pingImg, desc, lat2, lon2);
            activitiesCnt++;
            /////

        }


        if (mrk == "Restaurants " && restaurant == "true" && prox > dist) {
            ///NEW ////////////
            pingImg = "images/Restaurants.png";

            addMarkerPOI(pingImg, desc, lat2, lon2);
            restaurantCnt++;
            /////


        }

        if (mrk == "Toll Plaza " && tour == "true" && prox > dist) {
            ///NEW ////////////
            pingImg = "images/Toll_pin.png";

            addMarkerPOI(pingImg, desc, lat2, lon2);
            tourCnt++;
            /////


        }

        if (mrk == "Accomodation " && accomodation == "true" && prox > dist) {
            ///NEW ////////////
            pingImg = "images/Accomodation.png";

            addMarkerPOI(pingImg, desc, lat2, lon2);
            accomodationCnt++;
            /////


        }

        if (mrk == "Petrol" && petrol == "true" && prox > dist) {
            ///NEW ////////////
            pingImg = "images/petrol.png";

            addMarkerPOI(pingImg, desc, lat2, lon2);
            petrolCnt++;
            /////


        }

        if (mrk == "Retail " && retail == "true" && prox > dist) {
            ///NEW ////////////
            pingImg = "images/Retail.png";

            addMarkerPOI(pingImg, desc, lat2, lon2);
            retailCnt++;
            /////


        }

        if (mrk == "My Location ") {

            ///NEW ////////////
           // pingImg = "myMarker.png";

            // addMarkerPOI(pingImg, desc, lat2, lon2);
          //  showMyLoc(pingImg, lat2, lon2);

            /////              

        }

        // GBD CHECK  map.addLayer(MyMarker);

        //map.setView([mylat,mylon], zoomMap);
        ////REPLACE BELOW WITH NEWW
        // mm.addMarker(new tomtom.Marker([point.lat, point.lon]), "marker_me");


    }



    if (prox < dist) {
        ////END OF SEARCH LOOP ??? WHAT TO DO
        //  document.getElementById("sidePnl").innerHTML += pnlside;
        //  document.getElementById("kmCnt").innerHTML = "<< SEARCH >>";
        //  map.setView([mylat, mylon], zoomMap);
       // alert("end");


        document.getElementById("poiList").innerHTML = descList;

        setOnclick();
            


        ////////REPLACE VALUES BELOW WITH an <li> loop to add cumulative vals and create POI LIST (use #contact page style)
        document.getElementById("accbtn").innerHTML = accomodationCnt;


        document.getElementById("evebtn").innerHTML =eventsCnt ;



        document.getElementById("petbtn").innerHTML = petrolCnt ;


        document.getElementById("tourbtn").innerHTML = tourCnt;


        document.getElementById("activebtn").innerHTML = activitiesCnt;


        document.getElementById("restbtn").innerHTML = restaurantCnt;

        //map.setView([mylat,mylon], zoomMap);
    }
}

        


    


///////////END OF POI///////////


//var to increment and use for element ids
var idInc = '';
////add marker///
function addMarkerPOI(pingImg, desc, lat2, lon2) {

              idInc++
              //get coords
              var poiCoords = [lon2, lat2];

             // create the popup
             var popup = new mapboxgl.Popup({ offset: 25 })
             popup.setText(descpop);
             popup.id = 'popup' + idInc;


             // create DOM element for the marker
             var el = document.createElement('div');
             el.id = 'marker' + idInc;
             el.className = 'marker';
             el.style.backgroundImage = 'url(' + pingImg + ')';
             el.style.width = '60px';
             el.style.height = '60px';

             // create the marker
             new mapboxgl.Marker(el, { offset: [-25, -25] })
                 .setLngLat(poiCoords)
                 .setPopup(popup) // sets a popup on this marker
                 .addTo(map);

             
             descList += desc;
};

var start = [29.993112, -29.193292];
var end = [28.38988, -26.66397];

var isAtStart = true;

document.getElementById('fly').addEventListener('click', function () {
    // depending on whether we're currently at point a or b, aim for
    // point a or b
    var target = isAtStart ? end : start;

    // and now we're at the opposite point
    isAtStart = !isAtStart;

    map.flyTo({
        // These options control the ending camera position: centered at
        // the target, at zoom level 9, and north up.
        center: target,
        zoom: 14,
        pitch: 70, // pitch in degrees
        bearing: -40, // bearing in degrees


        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        speed: 0.2, // make the flying slow
        curve: 1, // change the speed at which it zooms out

        // This can be any easing function: it takes a number between
        // 0 and 1 and returns another number between 0 and 1.
        easing: function (t) {
            return t;
        }
    });
});


//flyto
function showOnMap(id) {
    setTimeout(function () { map.resize(); }, 100);
    window.location.href = "#page_location_map";
   
    var str = id;
    var splitCords = str.split(",");
    setLon = splitCords[0];
    setLat = splitCords[1];
    map.flyTo({
        center: [setLon, setLat],
        pitch: 60, // pitch in degrees
        bearing: -60, // bearing in degrees
        zoom: 11,
        speed: 0.8,
        curve: 1,
        easing(t) {
            return t
        }
    });

}