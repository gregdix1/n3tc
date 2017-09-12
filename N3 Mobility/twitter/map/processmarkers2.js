// JavaScript source code

//get route markers
var output = '';
var routeStr = '';
var ChaingeGet = '';
var routeName = '';
var chainge = '';
var lonX = '';
var latX = '';
var checkMatch = '';
//var setLat = -27.713353;
//var setLon = 29.217650;
var setLat;
var setLon;;
var twtContent = '';
var xx = '';

function getRouteMarkers(twtContent) {
    pointsC = getRoutes();
   
    ///
    //var twtContent = "12h26 #CrashUpdate: N3 11 14.9 S (DBN bound) near Bergville I/C, LMV involved off the road. Please approach with caution.";
   // twtContent = document.getElementById("tweet").value;
    var nt = twtContent.indexOf("N3");
    //alert("n: " + n);
    var startPoint = nt + 2;
   // var startPoint = n + 5;
    //alert(startPoint);
    var lenth = 8;
    //alert(endPoint);
    ChaingeGet = twtContent.substr(startPoint, lenth);
    var ChaingeClean1 = ChaingeGet.replace(/-|\s/g, "");
    var ChaingeClean2 = ChaingeClean1.replace("S", "");
    var ChaingeClean3 = ChaingeClean2.replace("N", "");
   // document.getElementById("checkGet").innerHTML = ChaingeClean3;
   // var str;
   // var n;
    ///
    xx = ChaingeClean3;
  //  alert(xx);
    for (pointIndexC = 0; pointIndexC < pointsC.length && pointIndexC < 41600; pointIndexC++) {
        point = pointsC[pointIndexC];
        // var marker = new tomtom.Marker([point.lat, point.lon], null, { draggable: true });
        // var MyMarker = new tomtom.Marker([point.lat, point.lon]);
        //var markup = point.lat + ", " + point.lon;
        //var twtMarker = new tomtom.Marker(twtLat, twtLon);
        routeName = point.Route;
        chainge = point.Chainge;
        lonX = point.lon;
        latX = point.lat;
        checkMatch = '';

        // N3 9 43.6 N (JHB Bound) 
        // N3 6X 51.2 S (DBN Bound)

        //concantenate
        routeStr = routeName + chainge;
      //  document.getElementById("rtStr").innerHTML = routeStr;
       // if (routeStr == xx) { alert("yes"); };
       // str = routeStr;
       // n = str.includes(xx);
        if (routeStr == xx) {
           // output += '<li id="' + pointIndexC + '">' + routeName + ':' + chainge + ' lon ' + lonX + ' lat ' + latX + '</li>';
            setLat = latX;
            setLon = lonX;
           // addMarker2(pointIndexC);
            //addMarkerCheck(pointIndexC);
            //alert('lt' + setLat);
        }

       // if (ChaingeGet == routeStr) { 

      //  output += '<li id="' + pointIndexC + '">' + routeName + ':' + chainge + ' lon ' + lonX + ' lat ' + latX + '</li>';
       // output += '<li id="' + pointIndexC + '">' + routeName + ' ' + chainge + '</li>';
            
      //  }

    };

    //document.getElementById("routeMarkers").innerHTML = output;

}

function getMarkerCode() {
    var twtContent = "12h26 #CrashUpdate: N3 6 1.89 S (DBN bound) near Bergville I/C, LMV involved off the road. Please approach with caution."; 

    var n = twtContent.indexOf(":");
    //alert("n: " + n);
   // var startPoint = n - 5;
    var startPoint = n + 4;
    //alert(startPoint);
    var lenth = 8;
    //alert(endPoint);
    var ChaingeGet = twtContent.substr(startPoint, lenth);
    document.write(ChaingeGet);
    var ChaingeClean1 = ChaingeGet.replace(/\s/g, '');
    document.write(ChaingeClean1);
    var ChaingeClean2 = ChaingeClean1.replace("S", "");
    document.write(ChaingeClean2);
    var ChaingeClean3 = ChaingeClean2.replace("N", "");
    document.write(ChaingeClean3);
    var routeChainge = ChaingeClean3;
}