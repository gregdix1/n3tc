//var mylat = 111.00;
//var mylon = 222.00;
var i=0;
var ii =0;
var twtProcessed1 ='';
var twtLat = '';
var	twtLon = '';
var idInc=1;
var checkLastLocation = '';
var LastLocation = '';
var listHolder ='';
var getTwtInterval ='';
var TraffVolumeState = "on";
var TraffFlowState = "on";
var CrashState = "on";
var WeatherState = "on"; 
//var twtContent = '';
//var pinType = "pins/crashpin.png";
var twtLocation = 'no';
var twtType = '';
var crashCounter = 1;
var weatherCounter = 1;
var twtTime = '';

/////////functions

function twtTrafficVolumes(){
	pinType = "pins/tollpinTraffic.png";
//tomtom.Marker.DEFAULT_MARKER_OPTIONS= {
       				//iconUrl: pinType, 
       	   		//	iconSize: [47, 60],
       	   		//	iconAnchor: [ 27, 8]};

var hashTags = twtContent.split("#");
var hashTags1 = hashTags[2];
//alert(hashTags1);
for(i = 0; i < 6; i++){
	
	//twtProcessed1 += hashTags[i];
var str1 = hashTags[i];
var str2 = "N3Traffic";
morebtn ="<img style='text-align:center' src='images/more-iconsTwt.png' width='60' height='14' onclick='showtabs()' >";
if(str1.indexOf(str2) != -1){
   // alert(str2 + " found YES ###");
	var str3 = "MooiPlaza";
	var str4 = "TugelaPlaza";
	var str5 = "WilgePlaza";
	var str6 = "DeHoekPlaza";
	ii = 0;
	for(ii = 0; ii < 6; ii++){
	
	if(hashTags[ii].indexOf(str3) != -1){
		var t1 = hashTags[ii];
		 twtLat = -29.21795; 
		  twtLon = 30.00389;
		    var desc ="Traffic Volume-" + t1 + "<br>" + " Lat: " + twtLat + " Lon: " + twtLon;
			// var REM = mm2.getMarkerById("markerMooi Mainline");
		   //  mm2.removeMarker(REM);
			mm2.addMarker(new tomtom.Marker([twtLat, twtLon]), "Traffic-" + str3);
					mm2.getMarkerById("Traffic-" + str3).bindPopup( desc + "<br>" +  morebtn,{ showOnMouseOver: true });
					mm2.update();
					 //alert("1up");
			}
			
	if(hashTags[ii].indexOf(str4) != -1){
		var t2 = hashTags[ii];
		 twtLat = -28.458096;
		  twtLon = 29.569956;
		    var desc ="Traffic Volume-" + t2 + "<br>" + " Lat: " + twtLat + " Lon: " + twtLon;
			// var REM = mm2.getMarkerById("markerTugela East Ramp");
		   //  mm2.removeMarker(REM);
			mm2.addMarker(new tomtom.Marker([twtLat, twtLon]), "Traffic-" + str4);
					mm2.getMarkerById("Traffic-" + str4).bindPopup( desc + "<br>" + morebtn,{ showOnMouseOver: true });
					mm2.update();
					//alert("2up");
					}
		   
	if(hashTags[ii].indexOf(str5) != -1){
		var t3 = hashTags[ii];
		 twtLat = -27.04038; 
		  twtLon = 28.62628; 
		   var desc ="Traffic Volume-" + t3 + "<br>" + " Lat: " + twtLat + " Lon: " + twtLon;
		 //  var REM = mm2.getMarkerById("markerDe Hoek Mainline");
		  //   mm2.removeMarker(REM);
			 mm2.addMarker(new tomtom.Marker([twtLat, twtLon]), "Traffic-" + str5);
			 mm2.getMarkerById("Traffic-" + str5).bindPopup( desc + "<br>" + morebtn,{ showOnMouseOver: true });
			 mm2.update();
					}
		  
	if(hashTags[ii].indexOf(str6) != -1){
		var t4 = hashTags[ii]; 
		twtLat = -26.66397;
			twtLon = 28.38988;
			 var desc ="Traffic Volume-" + t4 + "<br>" + " Lat: " + twtLat + " Lon: " + twtLon;
			//  var REM = mm2.getMarkerById("markerWilge Mainline");
		   //  mm2.removeMarker(REM);
			mm2.addMarker(new tomtom.Marker([twtLat, twtLon]), "Traffic-" + str6);
					mm2.getMarkerById("Traffic-" + str6).bindPopup( desc + "<br>" + morebtn,{ showOnMouseOver: true });
					mm2.update();
					}
			 
	                 }
	     }

 }
	//alert("ii" + ii);
}
////////////////////////

function twtTrafficVolumesTrips(){
var tripTolls = document.getElementById("extraInfo").innerHTML;


//alert(tripTolls);
var hashTags = twtContent.split("#");
var hashTags1 = hashTags[2];
//alert(hashTags1);
for(i = 0; i < 6; i++){
	
	//twtProcessed1 += hashTags[i];
var str1 = hashTags[i];
var str2 = "N3Traffic";
morebtn ="<img style='text-align:center' src='images/more-iconsTwt.png' width='60' height='14' onclick='hideTabs()' >";
if(str1.indexOf(str2) != -1){
   // alert(str2 + " found YES ###");
	var str3 = "MooiPlaza";
	var str4 = "TugelaPlaza";
	var str5 = "WilgePlaza";
	var str6 = "DeHoekPlaza";
    var str7 = "MariannhillPlaza";
    var str8 = "BergvillePlaza";
	ii = 0;
	for(ii = 0; ii < 6; ii++){
	
	if(hashTags[ii].indexOf(str3) != -1){
		var t1 = hashTags[ii];
		 twtLat = -29.21795; 
		  twtLon = 30.00389;
		    var desc ="<div id='" + str3 + "' class='trpList'>" + t1 + "</div>";
			var rep1 = tripTolls.replace('<img src="images/tollicn.png" width="25" height="25" onclick="hideTabs()">Mooi Mainline <br><hr size="1">', desc);
			
			}
			
	if(hashTags[ii].indexOf(str4) != -1){
		var t2 = hashTags[ii];
		 twtLat = -28.458096;
		  twtLon = 29.569956;
		   var desc ="<div id='" + str4 + "' class='trpList'>" + t2 + "</div>";
			var rep2 = rep1.replace('<img src="images/tollicn.png" width="25" height="25" onclick="hideTabs()">Tugela Mainline <br><hr size="1">', desc);
					}
		   
	if(hashTags[ii].indexOf(str5) != -1){
		var t3 = hashTags[ii];
		 twtLat = -27.04038; 
		  twtLon = 28.62628; 
		   var desc ="<div id='" + str5 + "' class='trpList'>" + t3 + "</div>";
			var rep3 = rep2.replace('<img src="images/tollicn.png" width="25" height="25" onclick="hideTabs()">Wilge Mainline <br><hr size="1">', desc);
					}
		  
	if(hashTags[ii].indexOf(str6) != -1){
		var t4 = hashTags[ii]; 
		twtLat = -26.66397;
			twtLon = 28.38988;
			  var desc ="<div id='" + str6 + "' class='trpList'>" + t4 + "</div>";
			var rep4 = rep3.replace('<img src="images/tollicn.png" width="25" height="25" onclick="hideTabs()">Dehoek Mainline <br><hr size="1">', desc);
					} 
            
         
        
        
	           }
           
	     }

 }
	var desc ="<div id='" + str7 + "' class='trpList noVol'> " + str7 + " </div>";
    var rep5 = rep4.replace('<img src="images/tollicn.png" width="25" height="25" onclick="hideTabs()">Bergville Ramp <br><hr size="1">', desc);
		
    var desc ="<div id='" + str8 + "' class='trpList noVol'> " + str8 + " </div>";
    var rep6 = rep5.replace('<img src="images/tollicn.png" width="25" height="25" onclick="hideTabs()">Mariannhill Mainline', desc);
	 document.getElementById("extraInfo").innerHTML= rep6;	
}




///////////////

var pointIndexC = 0;
var pointsC = '';

function twtCrashUpdate(){
	//crashCounter = 1;
//twtContent = "12h26 #Crash N3 6 1.89 S (DBN bound) near Bergville I/C, LMV involved off the road. Please approach with caution.";
//var str2 = "#Crash";
//if(twtContent.indexOf(str2) != -1){
   // if(twtCategory == "Obstruction"){ pinType = "pins/obstructionpin.png";}else
pinType = "pins/crashpin.png";
tomtom.Marker.DEFAULT_MARKER_OPTIONS= {
       				iconUrl: pinType, 
       	   			iconSize: [47, 60],
       	   			iconAnchor: [ 27, 60]};


var pointIndexC = 0;
var pointsC = '';
morebtn ="<img style='text-align:center' src='images/more-iconsTwt.png' width='60' height='14' onclick='showtabs()' >";	
var n = twtContent.indexOf(".");
//alert("n: " + n);
var startPoint = n-5;
//alert(startPoint);
var lenth = 8;
//alert(endPoint);
var ChaingeGet = twtContent.substr(startPoint, lenth);
var ChaingeClean1 = ChaingeGet.replace(/\s/g, '');
var ChaingeClean2 = ChaingeClean1.replace("S", "");
var ChaingeClean3 = ChaingeClean2.replace("N", ""); 
var routeChainge = ChaingeClean3;

//alert("rtchange: - " + routeChainge);	
//var start2 = startPoint + lenth + 2;
//var lenth2 = twtContent.length - start2;
//var CrashDetail = twtContent.substr(start2, lenth2);
//alert(twtContent);	
 pointsC = getRoutes();
 //var PIDCount=0;
//alert(points);	 
 for (pointIndexC = 0; pointIndexC < pointsC.length && pointIndexC < 41600; pointIndexC++) {
                    point = pointsC[pointIndexC];
                   // var marker = new tomtom.Marker([point.lat, point.lon], null, { draggable: true });
                   // var MyMarker = new tomtom.Marker([point.lat, point.lon]);
                    //var markup = point.lat + ", " + point.lon;
					//var twtMarker = new tomtom.Marker(twtLat, twtLon);
                    var routeName =  point.Route;
					var chainge = point.Chainge;
                    var markerMerge = "" + routeName + chainge;
					//alert(chainge);
					
					
					if(markerMerge === routeChainge){
						pinType = "pins/crashpin.png";
						twtLat = point.lat;
					twtLon = point.lon;
					
					 var desc = twtContent + "<br>" + " Lat: " + twtLat + " Lon: " + twtLon + twtTime;
			 
			mm2.addMarker(new tomtom.Marker([twtLat, twtLon]), "Crash" + crashCounter);
					mm2.getMarkerById("Crash" + crashCounter).bindPopup( desc + "<br>" + morebtn,{ showOnMouseOver: true });
					mm2.update();
					crashCounter++;
						//alert(twtContent + "lat: " + LAT + "Lon: " + LON + "Marker: " + chainge);
						break;	}
							
					 //}
                   // var morebtn ="<img style='text-align:center' src='images/more-icons.png' width='60' height='18' onclick='listToggle()' >";
                    //alert(pointIndex);
                    //alert("dist" + dist);
                   // var pnlside = "<div style='border-bottom:1px dashed #b0aeae; display:block;'><br>" + " Route Marker: " + desc + "<br></div>";
                  //  if (prox > dist){
                     //   document.getElementById("sidePnl").innerHTML += pnlside;}
                      }
 //alert("merge: " + markerMerge);
  // }
   // crashCounter = 1;
}

///////////////////////////////////

function twtWeatherUpdate(){
	
pinType = "pins/weatherpin.png";		
						
	
 var strCheck2 = "MooiPlaza";
   if(twtContent.indexOf(strCheck2) != -1){
	twtLat = -29.21795;
	twtLon = 30.00389;
	twtLocation = 'yes';
	checkLastLocation = "MooiPlaza";
		
   }	
   
   var strTugelaPlaza = "TugelaPlaza";
   if(twtContent.indexOf(strTugelaPlaza) != -1){
	twtLat = -28.458096;
	twtLon = 29.569956;
	twtLocation = 'yes';
	checkLastLocation = "TugelaPlaza";
	   }	
   
   var strWilgePlaza = "WilgePlaza";
   if(twtContent.indexOf(strWilgePlaza) != -1){
	twtLat = -27.04038;
	twtLon = 28.62628;
	twtLocation = 'yes';
	checkLastLocation = strWilgePlaza;
	   }	
   
    var strDeHoekPlaza = "DeHoekPlaza";
   if(twtContent.indexOf(strDeHoekPlaza) != -1){
	twtLat = -26.66397;
	twtLon = 28.38988;
	twtLocation = 'yes';
	checkLastLocation = strDeHoekPlaza;
	   }	
   
    var strVanReenenPass = "VanReenenPass";
   if(twtContent.indexOf(strVanReenenPass) != -1){
	twtLat = -28.3882192;
	twtLon = 29.3857367;
	twtLocation = 'yes';
	checkLastLocation = strVanReenenPass;
	   }
   
  var strHarrismith = "Harrismith";
  if(twtContent.indexOf(strHarrismith) != -1){
	twtLat = -28.2864215;
	twtLon = 29.0796057;
	twtLocation = 'yes';
	checkLastLocation = strHarrismith;
	   }
	   
	   var strLadysmith = "Ladysmith";
  if(twtContent.indexOf(strLadysmith) != -1){
	twtLat = -28.5654558; 
	twtLon = 29.708899;
	twtLocation = 'yes';
	checkLastLocation = strLadysmith;
	   }
   
  var strEstcourt = "Estcourt";
  if(twtContent.indexOf(strEstcourt) != -1){
	twtLat = -29.0191521;
	twtLon = 29.8100842;
	checkLastLocation = strEstcourt;
	   }
   
    var strFrankfort = "Frankfort";
    if(twtContent.indexOf(strFrankfort) != -1){
	twtLat = -27.2757239;
	twtLon = 28.4455197;
	twtLocation = 'yes';
	checkLastLocation = strFrankfort;
	   }
   
    var strMidlands = "KZN Midlands";
   if(twtContent.indexOf(strMidlands) != -1){
	twtLat = -29.683701; 
	twtLon = 30.475846;
	twtLocation = 'yes';
	checkLastLocation = strMidlands;
	   }
   
    var strHowick = "Howick";
   if(twtContent.indexOf(strHowick) != -1){
	twtLat = -29.4944811;
	twtLon = 30.1299474;
	twtLocation = 'yes';
	checkLastLocation = strHowick;
	   }
   
   var strMooi = "Mooi River";
   if(twtContent.indexOf(strMooi) != -1){
	twtLat = -29.2181353;
	twtLon = 30.0014913;
	twtLocation = 'yes';
	checkLastLocation = strMooi;
	   } 
	  
	
tomtom.Marker.DEFAULT_MARKER_OPTIONS= {
       				iconUrl: pinType, 
       	   			iconSize: [47, 60],
       	   			iconAnchor: [ 27, 8]};
					
					
					
	 
	   
	  
	
//twtContent = "12h26 #Crash N3 6 1.89 S (DBN bound) near Bergville I/C, LMV involved off the road. Please approach with caution.";
//var strCheck = "#N3Weather";
//if(twtContent.indexOf(strCheck) != -1){
	//alert("lat: " + twtLat + " Lon: " + twtLon);
	 var desc = twtContent + "<br>" + " Lat: " + twtLat + " Lon: " + twtLon;
			//alert("weather ADD"); 
			mm2.addMarker(new tomtom.Marker([twtLat, twtLon]), "N3Weather" + weatherCounter);
					mm2.getMarkerById("N3Weather" + weatherCounter).bindPopup( desc + "<br>" + morebtn + "  " + twtTime,{ showOnMouseOver: true });
					mm2.update();
					weatherCounter++;
   //}
}

function twtLocationCheck(){
//twtContent = "12h26 #Crash N3 6 1.89 S (DBN bound) near Bergville I/C, LMV involved off the road. Please approach with caution.";

var strCheckTrafficVolumes = "#N3Traffic";
if(twtContent.indexOf(strCheckTrafficVolumes) != -1){
	pinType = "pins/tollpinTraffic.png";
	twtType = 'N3Traffic';
	twtTrafficVolumes();
	
   }
   
   else{
   var strCheck2 = "MooiPlaza";
   if(twtContent.indexOf(strCheck2) != -1){
	twtLat = -29.21795;
	twtLon = 30.00389;
	twtLocation = 'yes';
		
   }	
   
   var strCheck2 = "TugelaPlaza";
   if(twtContent.indexOf(strCheck2) != -1){
	twtLat = -28.458096;
	twtLon = 29.569956;
	twtLocation = 'yes';
	   }	
   
   var strCheck2 = "WilgePlaza";
   if(twtContent.indexOf(strCheck2) != -1){
	twtLat = -27.04038;
	twtLon = 28.62628;
	twtLocation = 'yes';
	   }	
   
    var strCheck2 = "DeHoekPlaza";
   if(twtContent.indexOf(strCheck2) != -1){
	twtLat = -26.66397;
	twtLon = 28.38988;
	twtLocation = 'yes';
	   }	
   
    var strCheck2 = "VanReenenPass";
   if(twtContent.indexOf(strCheck2) != -1){
	twtLat = -28.3882192;
	twtLon = 29.3857367;
	twtLocation = 'yes';
	   }
   
  var strCheck2 = "Harrismith";
  if(twtContent.indexOf(strCheck2) != -1){
	twtLat = -28.2864215;
	twtLon = 29.0796057;
	twtLocation = 'yes';
	   }
	   
	   var strCheck2 = "Ladysmith";
  if(twtContent.indexOf(strCheck2) != -1){
	twtLat = -28.5654558; 
	twtLon = 29.708899;
	twtLocation = 'yes';
	   }
   
  var strCheck2 = "Estcourt";
  if(twtContent.indexOf(strCheck2) != -1){
	twtLat = -29.0191521;
	twtLon = 29.8100842;
	   }
   
    var strCheck2 = "Frankfort";
    if(twtContent.indexOf(strCheck2) != -1){
	twtLat = -27.2757239;
	twtLon = 28.4455197;
	twtLocation = 'yes';
	   }
   
    var strCheck2 = "KZN Midlands";
   if(twtContent.indexOf(strCheck2) != -1){
	twtLat = -29.683701; 
	twtLon = 30.475846;
	twtLocation = 'yes';
	   }
   
    var strCheck2 = "Howick";
   if(twtContent.indexOf(strCheck2) != -1){
	twtLat = -29.4944811;
	twtLon = 30.1299474;
	twtLocation = 'yes';
	   }
   
   var strCheck2 = "Mooi River";
   if(twtContent.indexOf(strCheck2) != -1){
	twtLat = -29.2181353;
	twtLon = 30.0014913;
	twtLocation = 'yes';
	   }   	

  }

 var strCheckCrash = "#Crash";
   if(twtContent.indexOf(strCheckCrash) != -1){
	   pinType = "pins/crashpin.png";
	   twtType = 'Crash';
	twtCrashUpdate();
	   }  
	   
 var strCheckCrashUpdate = "#CrashUpdate";
   if(twtContent.indexOf(strCheckCrashUpdate) != -1){
	   pinType = "pins/crashpin.png";
	   twtType = 'Crash';
	twtCrashUpdate();
	   }  
	   
 var strCheckWeather = "#N3Weather";
   if(twtContent.indexOf(strCheckWeather) != -1){
	   pinType = "pins/weatherpin.png";
	   twtType = 'N3Weather';
	twtWeatherUpdate();
	   } 
	   
	    var strCheckObstruction = "#Obstruction";
   if(twtContent.indexOf(strCheckObstruction) != -1){
	   pinType = "pins/obstructionpin.png";
	   twtType = 'Obstruction';
	twtCrashUpdate();
	   } 	
  
}

//function getTwt(){
//twtContent = document.getElementById("twt").value;

//twtLocationCheck();
//}
function loadTwitterPointTripSave() {
        		
        		// set the base image path used by tomtom.Marker
		
			twtCategory = '';
				
			tomtom.Marker.DEFAULT_MARKER_OPTIONS= {
       				iconUrl: pinType, 
       	   			iconSize: [47, 60],
       	   			iconAnchor: [ 17, 30]};
	    		// get points is defined in points.js
        		// due to security restrictions in Chrome, AJAX requests cannot be made against local files
        		// which is why the data is being loaded as a JavaScript file
        		var pointsT = getTolls();
                
                //map.setDisplayTraffic(false);
               // map.displayRoute([StartPoint1, EndPoint1]);
				
        		//mm2 = new tomtom.MarkerManager({ map: map });
	    		// add a new marker for each address
        		for (var pointIndexT = 0; pointIndexT < pointsT.length && pointIndexT < 11; pointIndexT++) {
        			var point = pointsT[pointIndexT];
        			//var marker = new tomtom.Marker([point.lat, point.lon]);
					
        			//var markup = point.lat + ", " + point.lon;
					var mrk =  point.name;
					
					morebtn ="<img style='text-align:center' src='images/more-iconsTwt.png' width='60' height='14' onclick='showtabs()' >";
					var desc = "<strong>" + point.name + "</strong>"  ;
									
					//var pnlside = "<div style='border-bottom:1px dashed #b0aeae; display:block;'><br>" + desc + "<br>" + "<br>" + morebtn + "</div>";
					//document.getElementById("sidePnl").innerHTML += pnlside;
					
					
		// else {tomtom.Marker.DEFAULT_MARKER_OPTIONS = {
			//		iconUrl: "Marker.png", 
       	  // 			iconSize: [32, 49],
       	 //  			iconAnchor: [ 17, 34 ]} }	
					
        			
        			// specify that the popup should be displayed on mouse over rather than click
        			//marker.bindPopup( desc + "<br>" + morebtn,{ showOnMouseOver: true });
					//marker.bindPopup(mrk,{ showOnMouseOver: true });
        			//map.addLayer(marker);
					
				//	tomtom.Marker.DEFAULT_MARKER_OPTIONS = {
       				//iconUrl: "pins/weatherpin.png", 
       	   			//iconSize: [45, 60],
					//popupAnchor: [27, -10],
       	   			//iconAnchor: [ 27, 8]}; 	
						
					//marker.bindPopup( desc + "<br>" + morebtn,{ showOnMouseOver: true });
					
					
        		}
				getTwtTripSave();
	    	};

/////twtTripSave/////

function getTwtTripSave(){
crashCounter = 1;
weatherCounter = 1;
$("#incidentListTwt").html("<a href='#' onclick='getTwt()'>Refresh Tweets....<a>");	
var pointsTwt = getTweets();
var pointIndexTwt = 0;

	for (var pointIndexTwt = 0; pointIndexTwt < pointsTwt.length && pointIndexTwt < 24; pointIndexTwt++) {
        			var point = pointsTwt[pointIndexTwt];
        							
        			//var markup = point.lat + ", " + point.lon;
					var tBody =  point.twtBody;
					//alert(tBody);
					twtContent = tBody;
					var stringTraffic = "N3Traffic";
					var stringCrash = "Crash"; 
					var stringObstruction = "Obstruction"; 
					var stringWeather = "N3Weather";
					if(tBody.indexOf(stringTraffic) != -1 && TraffVolumeState === "on"){
						//alert("N3Traffic found");
						 twtCategory = "N3Traffic";
                         twtTrafficVolumesTrips();}
                      
					

					
        	             }
                       var twtHead = "<div style='border-bottom:1px solid #b0aeae; text-align:left; display:block;'>" + "<img style='width:70%; height: auto;' src='images/twtListHead.png'>" + "<br>" + "</div>";
						 $("#incidentListTwt").prepend(listHolder);
                         $("#incidentListTwt").prepend(twtHead);
						 listHolder = '';
						// crashCounter = 1;
//weatherCounter = 1;
                };


////////////////////////
function showtabs(){
	document.getElementById("tabs").className ="#tabs showtbs";
	}


/////tollpoint2html/////extract///////////

function loadTwitterPoint() {
        clearInterval(getTwtInterval);		
        		// set the base image path used by tomtom.Marker
				tomtom.setImagePath("images/");
				
	    	pinType = "pins/tollpin.png";
			twtCategory = '';
				
			tomtom.Marker.DEFAULT_MARKER_OPTIONS= {
       				iconUrl: pinType, 
       	   			iconSize: [47, 60],
       	   			iconAnchor: [ 17, 30]};
	    		// get points is defined in points.js
        		// due to security restrictions in Chrome, AJAX requests cannot be made against local files
        		// which is why the data is being loaded as a JavaScript file
        		var pointsT = getTolls();
                
                //map.setDisplayTraffic(false);
                map.displayRoute(["Johannesburg, South Africa", "Durban, South Africa"]);
				
        		mm2 = new tomtom.MarkerManager({ map: map });
	    		// add a new marker for each address
        		for (var pointIndexT = 0; pointIndexT < pointsT.length && pointIndexT < 11; pointIndexT++) {
        			var point = pointsT[pointIndexT];
        			//var marker = new tomtom.Marker([point.lat, point.lon]);
					
        			//var markup = point.lat + ", " + point.lon;
					var mrk =  point.name;
					
					morebtn ="<img style='text-align:center' src='images/more-iconsTwt.png' width='60' height='14' onclick='showtabs()' >";
					var desc = "<strong>" + point.name + "</strong>"  ;
									
					//var pnlside = "<div style='border-bottom:1px dashed #b0aeae; display:block;'><br>" + desc + "<br>" + "<br>" + morebtn + "</div>";
					//document.getElementById("sidePnl").innerHTML += pnlside;
					
					if (mrk == 'My Location '){tomtom.Marker.DEFAULT_MARKER_OPTIONS = {
       				iconUrl: "pins/mymarker/markerme.png", 
       	   			iconSize: [60, 60],
       	   			iconAnchor: [ 17, 8]} 		} 
		// else {tomtom.Marker.DEFAULT_MARKER_OPTIONS = {
			//		iconUrl: "Marker.png", 
       	  // 			iconSize: [32, 49],
       	 //  			iconAnchor: [ 17, 34 ]} }	
					
        			
        			// specify that the popup should be displayed on mouse over rather than click
        			//marker.bindPopup( desc + "<br>" + morebtn,{ showOnMouseOver: true });
					//marker.bindPopup(mrk,{ showOnMouseOver: true });
        			//map.addLayer(marker);
					
				//	tomtom.Marker.DEFAULT_MARKER_OPTIONS = {
       				//iconUrl: "pins/weatherpin.png", 
       	   			//iconSize: [45, 60],
					//popupAnchor: [27, -10],
       	   			//iconAnchor: [ 27, 8]}; 	
						
					//marker.bindPopup( desc + "<br>" + morebtn,{ showOnMouseOver: true });
					mm2.addMarker(new tomtom.Marker([point.lat, point.lon]), "marker" + mrk);
					mm2.getMarkerById("marker" + mrk).bindPopup( desc + "<br>" + morebtn,{ showOnMouseOver: true });
					mm2.update();
					
        		}
				getTwt();
				loadListTwtrepeat();
				//alert("twtrepeat");
	    	};
			
	//////////////////
	
function loadListTwtrepeat(){
	    getTwtInterval = setInterval(getTwtListLoad, 10000);
	      }
//////////////////
			
function getTwt(){
crashCounter = 1;
weatherCounter = 1;	
$("#incidentListTwt").html("...");
$(".tt-traffic-list-paging").html("<img src='images/twtlogo.png' style='max-width:55px;  height:auto; padding:3px;' onclick='hideTabs()'>");
$(".tt-traffic-list-paging").css("margin-bottom", "50px");
$(".tt-traffic-list-paging").css("text-align", "center");

var pointsTwt = getTweets();
var pointIndexTwt = 0;

	for (var pointIndexTwt = 0; pointIndexTwt < pointsTwt.length && pointIndexTwt < 24; pointIndexTwt++) {
        			var point = pointsTwt[pointIndexTwt];
        							
        			//var markup = point.lat + ", " + point.lon;
					var tBody =  point.twtBody;
					//alert(tBody);
					twtContent = tBody;
					//twtTime = point.time;
					twtTime = "<label style='color:#6a6b6c; float:right;' >" + point.time + "</label>";
					var stringTraffic = "N3Traffic";
					var stringCrash = "Crash"; 
					var stringObstruction = "Obstruction"; 
					var stringWeather = "N3Weather";
					if(tBody.indexOf(stringTraffic) != -1){
						//alert("N3Traffic found");
						 twtCategory = "N3Traffic";
                         twtTrafficVolumes();}
                      
					  else
					if(tBody.indexOf(stringWeather) != -1 && WeatherState === "on"){
						//alert("N3Weather found");
						twtCategory = "N3Weather";
						twtWeatherUpdate();
						}
						 else
					if(tBody.indexOf(stringCrash) != -1 && CrashState  === "on"){
						//alert("Crash found");
						twtCategory = "Crash";
						twtCrashUpdate();
						}  
                    else
					if(tBody.indexOf(stringObstruction) != -1 && CrashState  === "on"){
						//alert("Crash found");
						twtCategory = "Crash";
						twtCrashUpdate();
						} 
					
					//twtCategory = ''; 
					
					morebtn ="<img style='text-align:center' src='images/more-iconsTwt.png' width='60' height='14' onclick='showtabs()' >";
					var desc =  point.twtBody   ;
					twtTime = "<label style='color:#6a6b6c; float:right;' >" + point.time + "</label>";				
					var pnlside = "<div style='border-bottom:1px dashed #b0aeae; display:block;'><br>" + desc + "<br>" + morebtn + "  " + twtTime + "</div>";
					//document.getElementById("incidentList").innerHTML += pnlside;
					listHolder += pnlside;
					//$("#incidentList").prepend(listHolder);
					if (tBody === 'Tugela Mainline'){tomtom.Marker.DEFAULT_MARKER_OPTIONS = {
       				iconUrl: pinType, 
       	   			iconSize: [47, 60],
       	   			iconAnchor: [ 17, 8]} 		} 
		

					
        	             }
                        var twtHead = "<div style='border-bottom:1px solid #b0aeae; text-align:left;  display:block;'>" + "<img style='width:70%; height: auto;' src='images/twtListHead.png'>" + "<br>" + "</div>";
						 $("#incidentListTwt").prepend(listHolder);
                         $("#incidentListTwt").prepend(twtHead);
						 listHolder = '';
   // getTwtListLoad();
						 //$("#incidentListTwt").append("<a href='#' onclick='getTwt()' >Refresh Tweets....<a>");
						 //alert("getTwt");
						// crashCounter = 1;
//weatherCounter = 1;
                };
				
/////	endtollpointextrace			////////////////////////////////////////////////


////////////////////////////////////// TWT panel load
function getTwtListLoad(){
crashCounter = 1;
weatherCounter = 1;	
$("#incidentListTwt").html("...");
$(".tt-traffic-list-paging").html("<img src='images/twtlogo.png' style='max-width:55px;  height:auto; padding:3px;' onclick='hideTabs()'>");
$(".tt-traffic-list-paging").css("margin-bottom", "50px");
$(".tt-traffic-list-paging").css("text-align", "center");

var pointsTwtLis = getTweets();
var pointIndexTwtList = 0;
var iconBind = '';
	for (var pointIndexTwtList = 0; pointIndexTwtList < pointsTwtLis.length && pointIndexTwtList < 24; pointIndexTwtList++) {
        			var point = pointsTwtLis[pointIndexTwtList];
        			var twtTimeList = "<label style='color:#6a6b6c; float:right;' >" + point.time + "</label>";			
        			var desc =  point.twtBody;
					
					if(desc.indexOf("N3Traffic") != -1){ iconBind = "<img src='images/pins/tollFlow.png' style='max-width:30px;  height:auto; padding-right:5px;'>"  };
					if(desc.indexOf("Crash") != -1 || desc.indexOf("CrashUpdate") != -1){ iconBind = "<img src='images/pins/crashpinTwt.png' style='max-width:30px;  height:auto; padding-right:5px;'>"  };
					if(desc.indexOf("N3Weather") != -1){ iconBind = "<img src='images/pins/weatherpinTwt.png' style='max-width:30px;  height:auto; padding-right:5px;'>"  };
					if(desc.indexOf("Obstruction") != -1 || desc.indexOf("Alert") != -1){ iconBind = "<img src='images/pins/obstructTwt.png' style='max-width:30px;  height:auto; padding-right:5px;'>"  };
					
					
					
					//twtCategory = ''; 
					
					var morebtnList ="<img style='margin-top:3px' src='images/more-iconsTwt.png' width='60' height='14' onclick='hideTabs()' >";
					var mapList ="<img src='images/back-pin.png' style='max-width:25px;  height:auto; float:right; ' onclick='hideTabs()'>";
					
									
					var pnlside = "<div style='border-bottom:1px dashed #b0aeae; display:block;'><br>" + iconBind + twtTimeList + "<br>" + desc + "<br>" + morebtnList + mapList + "</div>";
					//document.getElementById("incidentList").innerHTML += pnlside;
					listHolder += pnlside;
					//$("#incidentList").prepend(listHolder);
					
		

					
        	             }
                        var twtHead = "<div style='border-bottom:1px solid #b0aeae; text-align:left;  display:block;'>" + "<img style='width:70%; height: auto;' src='images/twtListHead.png'>" + "<br>" + "</div>";
						 $("#incidentListTwt").prepend(listHolder);
                         $("#incidentListTwt").prepend(twtHead);
						 listHolder = '';
						// $("#incidentListTwt").append("<a href='#' onclick='getTwt()' >Refresh Tweets....<a>");
						 //alert("getTwt");
						// crashCounter = 1;
//weatherCounter = 1;
                };

///////////////////////////////////twt panl load END

function weatherTw(){
     if(WeatherState === "on") {
         WeatherState = "off";
		 weatherCounter = 1;
		 crashCounter = 1;
		 var mrkRem;
         $('#wtr').attr('src', 'img/wtrOff.png');
      try {  mrkRem = mm2.getMarkerById("N3Weather1");
		 mm2.removeMarker(mrkRem);
         mm2.update();} catch(err) {isend = err.message;}
      try {     mrkRem = mm2.getMarkerById("N3Weather2");
		 mm2.removeMarker(mrkRem);
         mm2.update();} catch(err) {isend = err.message;}
      try {     mrkRem = mm2.getMarkerById("N3Weather3");
		 mm2.removeMarker(mrkRem);
         mm2.update();} catch(err) {isend = err.message;}
     }
     
     else{WeatherState = "on";
         $('#wtr').attr('src', 'img/wtr.png');
		 weatherCounter = 1;
		 crashCounter = 1;
     loadTwitterPoint();}
 };
            
 function tollTw(){
     
     if(TraffVolumeState === "on") { 
         TraffVolumeState = "off";
		 weatherCounter = 1;
		 crashCounter = 1;
         $('#tll').attr('src', 'img/tllOff.png');
    // alert("t off");
         var mrkRemV = mm2.getMarkerById("Traffic-TugelaPlaza");
		 mm2.removeMarker(mrkRemV);
         mm2.update();
         mrkRemV = mm2.getMarkerById("Traffic-MooiPlaza");
		 mm2.removeMarker(mrkRemV);
         mm2.update();
         mrkRemV = mm2.getMarkerById("Traffic-WilgePlaza");
		 mm2.removeMarker(mrkRemV);
         mm2.update();
         mrkRemV = mm2.getMarkerById("Traffic-DeHoekPlaza");
		 mm2.removeMarker(mrkRemV);
         mm2.update();
         
         //alert(mrkRemV);
     }
     
     else{TraffVolumeState = "on";
       $('#tll').attr('src', 'img/tll.png');
	   weatherCounter = 1;
		 crashCounter = 1;
     loadTwitterPoint();}
     };
            
 function crashTw(){
     
     if(CrashState === "on") { 
         CrashState = "off";
		 weatherCounter = 1;
		 crashCounter = 1;
         map.setDisplayTraffic(false);
         $('#crsh').attr('src', 'img/crshOff.png');
         var mrkRemC='';
         //var crCnt = 0;
         
	//for(crCnt = 0; crCnt < 10; crCnt++){
     try { mrkRemC = mm2.getMarkerById("Crash1");
      mm2.removeMarker(mrkRemC);
         mm2.update();} catch(err) {isend = err.message;}
       try {   mrkRemC = mm2.getMarkerById("Crash2");
  mm2.removeMarker(mrkRemC);
         mm2.update();} catch(err) {isend = err.message;}
      try {    mrkRemC = mm2.getMarkerById("Crash3");
		 mm2.removeMarker(mrkRemC);
         mm2.update();} catch(err) {isend = err.message;}
		try {  mrkRemC = mm2.getMarkerById("Crash4");
		 mm2.removeMarker(mrkRemC);
         mm2.update();} catch(err) {isend = err.message;}
		try {  mrkRemC = mm2.getMarkerById("Crash5");
		 mm2.removeMarker(mrkRemC);
         mm2.update();} catch(err) {isend = err.message;}
       // idInc++;
        //}
    //  idInc = 0;   
     }
     
     else{CrashState = "on";
         $('#crsh').attr('src', 'img/crsh.png');
         map.setDisplayTraffic(true);
		 weatherCounter = 1;
		 crashCounter = 1;
     loadTwitterPoint();
    }
     };

