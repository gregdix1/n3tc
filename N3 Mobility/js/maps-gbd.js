// Set url service app
var urlRequest = "";
// http://intellimall.co.za/maps/admin/
var urlService  = urlRequest+"index.php/";
// Set maps variabel
var map,
	myLat,
	myLong,
	myRadius,
	userLocation,
	address,
	panorama,
	streetPlace;
	
//var geocoder = new google.maps.Geocoder();
//var infowindow = new google.maps.InfoWindow();
//var bounds = new google.maps.LatLngBounds();
//var directionsService = new google.maps.DirectionsService();
//var directionsDisplay = new google.maps.DirectionsRenderer();
var markers = [];

// Get detection user location  
function myGeoloc(){

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(myGeolocSuccess, myGeolocError,{enableHighAccuracy:true});
	} else {
		error('Geolocation not supported');
	}

}

myGeoloc();

// Get user location 
function myGeolocSuccess(position) {

	myLat   = position.coords.latitude;
    myLong  = position.coords.longitude;
	myRadius  = position.coords.accuracy;


 	//userLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
    geocoder.geocode( { 'latLng': userLocation}, function(results, status) {
    	if (status == google.maps.GeocoderStatus.OK) {

			//address =  results[0].formatted_address;
			
    	}
	
	
	var pw 	= $(window).width(); 
	
	//Generate location images
	$("#page_home .slider ul").empty();
	$("#page_home .slider ul").append('<li><img src="http://maps.googleapis.com/maps/api/staticmap?center=-26.0442972,27.9904109&markers=color:blue|label:S|-26.0442972,27.9904109&zoom=15&size=420x220&sensor=false"></li>');
	$("#page_home .slider ul").append('<li><img src="http://maps.googleapis.com/maps/api/staticmap?center=-26.0442972,27.9904109&markers=color:blue|label:S|-26.0442972,27.9904109&zoom=15&size=420x220&sensor=false"></li>');

    //$("#page_home .slider ul").append('<li><img src="http://maps.googleapis.com/maps/api/staticmap?center=' + myLat + ',' + myLong + '&markers=color:blue|label:S|' + myLat + ',' + myLong + '&zoom=15&size=' + pw + 'x220&sensor=false"></li>');
    //$("#page_home .slider ul").append('<li><img src="http://maps.googleapis.com/maps/api/streetview?size=' + pw + 'x230&location=' + myLat + ',' + myLong + '&fov=90&heading=235&pitch=10&sensor=false"></li>');
    });
	
	// Set marker location user
   //	var marker = new google.maps.Marker({
    //        map: map,
	//		icon: "img/pin/pin2.png",
     //       position: userLocation,
	//		animation: google.maps.Animation.DROP,
      //      title: location.nama
      //  });
	
	
		
	//map.fitBounds(circle.getBounds());
	markers.push(marker);
		
}

// Get user location not found
function myGeolocError() {
	 log('Location Not Found!');
}

// Set maps properties
function init(req,status,street) {
	
	if(!req){
     	var req = '';
	}
	
	var mapOptions = {
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
     
	// Set id to display maps
   // map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    /////MAPBOX INSERT BELOW
    // map = new.mapbox...bla....bla(document.getElementById("map_canvas"), mapOptions);
    document.getElementById("map_canvas").innerHTML = "[ ADD MAP ]";
	
	// Request result directions maps
    if(status == 1){

		//directionsDisplay.setMap(map);
   		//directionsDisplay.setPanel(document.getElementById('directions-route'));

	}else{

    	directionsDisplay.setMap(null);
        $('#directions_panel').empty();
        $("#topHead").html("no direction");
		
	}
			
	
	if($('#toggle-traffic-layer').prop('checked')){
		// Display traffic layer maps
  		//var trafficLayer = new google.maps.TrafficLayer();
 		//trafficLayer.setMap(map);
	}
	
	if($('#toggle-weather-layer').prop('checked')){
		// Display weather layer maps
		//var weatherLayer = new google.maps.weather.WeatherLayer({temperatureUnits: google.maps.weather.TemperatureUnit.celsius});
  		//weatherLayer.setMap(map);
	}

  	if($('#toggle-panoramio-layer').prop('checked')){
  		// Display panoramio layer maps
  		//var panoramioLayer = new google.maps.panoramio.PanoramioLayer();
  		//panoramioLayer.setMap(map);
  	}
	
	if($('#toggle-transit-layer').prop('checked')){
		// Display transit layer maps
    	//var transitLayer = new google.maps.TransitLayer();
  		//transitLayer.setMap(map);
  	}
	
	if($('#toggle-bike-layer').prop('checked')){
		// Display bike layer maps
    	//var bikeLayer = new google.maps.BicyclingLayer();
  		//bikeLayer.setMap(map);
  	}
	
	
	
	// Get request data
    getRequest(url, function(data) {
         
        var data = JSON.parse(data.responseText);
    
        for (var i = 0; i < data.length; i++) {
            displayLocation(data[i]);
        }
		if(!req){
			map.fitBounds(bounds);
    		map.panToBounds(bounds);
		}
    });
	

}


 


// Get calculate route maps
function calculateRoute(lng,lat) {
	
	var destination = new google.maps.LatLng(lat,lng);
	
    var request = {
        origin: userLocation,
        destination: destination,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
	
    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
}
 

function getRequest(url, callback) {
	$('.loading').show();
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest(); // IE7+, Firefox, Chrome, Opera, Safari
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP"); // IE6, IE5
    }
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            callback(request);
			$('.loading').hide();
        }
    }
    request.open("GET", url, true);
    request.send();
}

function getCalculateRoute(lng,lat){
	window.location.href = "#page_location_map";
	setTimeout('init("false","1")',2500);
	calculateRoute(lng,lat)
}

function getLocationRoute(lng,lat){
	window.location.href = "#page_location_route";
	init("false","1");
	setTimeout('init("false","1")',2500);
	calculateRoute(lng,lat)
}
	
function getLocationCategory(){
	$('#list-category').empty();
   // var url = urlService + 'service/get_category';
    var url = 'http://localhost/n3mobility/mapfinder/category.json';
	getRequest(url, function(data) {
      var data = JSON.parse(data.responseText);         
      for (var i = 0; i < data.length; i++) {
            $('#list-category').append("<li onClick='getLocationList("+data[i]['category_id']+")'><a transition='side' href='#page_detail'><div class='fs1' aria-hidden='true' data-icon='"+data[i]['category_icon']+"'></div><strong>"+data[i]['category_name']+"</strong><span class='chevron'></span><span class='count'>"+data[i]['count']+"</span></a></li>");
		}

	});
}

// Get geolocation list
function getLocationList(categoryId){
	$('#search-list').val('');
	$('#list-detail').empty();
	$('#category-id').val(categoryId);
	var url = urlService+'service/get_list?id='+categoryId;
	getRequest(url, function(data) {
        var data = JSON.parse(data.responseText);         
        for (var i = 0; i < data.length; i++) {
            $('#list-detail').append("<li onClick='detailShowLocation("+data[i]['markers_id']+")'><a transition='side' href='#page_show_location'><strong>"+data[i]['markers_name']+"</strong><p>"+data[i]['markers_address']+"</p><span class='chevron'></span></a></li>");
		}

	});
}

// Get filter list
function getFilterList(categoryId){

	var categoryId = $('#category-id').val();
	var filter	   = $('#search-list').val();
	
	var url = urlService+'service/get_list?id='+categoryId+"&q="+filter;
	getRequest(url, function(data) {
        var data = JSON.parse(data.responseText);        
		$('#list-detail').empty();
        for (var i = 0; i < data.length; i++) {
             $('#list-detail').append("<li onClick='detailShowLocation("+data[i]['markers_id']+")'><a transition='side' href='#page_show_location'><strong>"+data[i]['markers_name']+"</strong><p>"+data[i]['markers_address']+"</p><span class='chevron'></span></a></li>");
		}

	});
}

// Get nearby location
function getNearby(){
	if($('#toggle-nearby-distances').prop('checked')){
		var distances = "km";
	}else{
		var distances = "mil";
	}
	
	var url = urlService+'service/get_nearby?lat='+myLat+"&long="+myLong+"&option="+distances;
	getRequest(url, function(data) {
        var data = JSON.parse(data.responseText);        
		$('#list-nearby').empty();
		$('#list-nearby').append("<li class='list-dividers'>Near "+address+"</li>");
		
        for (var i = 0; i < data.length; i++) {
			var logo = urlRequest+"/upload/logo/"+data[i]['markers_logo'];
        	$('#list-nearby').append("<li onClick='detailShowLocation("+data[i]['markers_id']+")'><a transition='side' href='#page_show_location'><strong>"+data[i]['markers_name']+"</strong><p>"+data[i]['markers_address']+"</p><span class='distance'>"+data[i]['distance']+" "+ distances +"</span><div class='img-box'><img src='"+logo+"' width='60' height='60'></div></a></li>");
			
		}

	});
}

	   
	var now = Math.round(new Date().getTime() / 1000); // Get timestamp
	
	var selected_index = -1; //Index of the selected list item

	var tbSaveLocation = localStorage.getItem("tbSaveLocation");//Retrieve the stored data

	tbSaveLocation = JSON.parse(tbSaveLocation); //Converts string to object

	if(tbSaveLocation == null) //If there is no data, initialize an empty array
		tbSaveLocation = [];

	function addMyLocation(){
		var client = JSON.stringify({
			Title : $("#form-title").val(),
			Desc : $("#form-desc").val(),
			Lon : myLong,
			Lat : myLat,
			Location : address,
			Dates : now
		});
		
		tbSaveLocation.push(client);
		localStorage.setItem("tbSaveLocation", JSON.stringify(tbSaveLocation)); 
		//alert("The data was saved.");
        $('#topHead').html("Saved");
		return true;
	}


	function listMyLocation(){
		$('#list-save-location').empty();
		$('.loading').hide();
		$('#show-location-address').html("Near : "+address);
		for(var i in tbSaveLocation){
			var cli = JSON.parse(tbSaveLocation[i]);
			
			var date = new Date(cli.Dates * 1000);
			
			$('#list-save-location').append("<li><span onClick='detailListMyLocation("+i+")'><strong>"+cli.Title+"</strong><p>"+date.toLocaleString()+"</p></span><a onClick='deleteMyLocation("+i+");' class='button-negative'>Delete</a></li>");

		}
	}

	function detailListMyLocation(selected_index){
		
		window.location.href = "#page_detail_save_location";
		
		var cli 	= JSON.parse(tbSaveLocation[selected_index]);
		var date 	= new Date(cli.Dates * 1000);
		var pw 		= $(window).width(); 
		
		$("#page_detail_save_location .slider ul").empty();
		//$("#page_detail_save_location .slider ul").append('<li><img src="http://maps.googleapis.com/maps/api/staticmap?center='+cli.Lat+','+cli.Lon+'&markers=color:blue|label:S|'+cli.Lat+','+cli.Lon+'&zoom=15&size='+pw+'x220&sensor=false"></li>');
        //$("#page_detail_save_location .slider ul").append('<li><img src="http://maps.googleapis.com/maps/api/streetview?size=' + pw + 'x230&location=' + myLat + ',' + myLong + '&fov=90&heading=235&pitch=10&sensor=false"></li>');
        $("#page_detail_save_location .slider ul").append('<li><img src="http://maps.googleapis.com/maps/api/staticmap?center=-26.0442972,27.9904109&markers=color:blue|label:S|-26.0442972,27.9904109&zoom=15&size=420x220&sensor=false"></li>');
        $("#page_detail_save_location .slider ul").append('<li><img src="http://maps.googleapis.com/maps/api/staticmap?center=-26.0442972,27.9904109&markers=color:blue|label:S|-26.0442972,27.9904109&zoom=15&size=420x220&sensor=false"></li>');
		
		$("#date-save-location").html(date);
		$("#title-save-location").html(cli.Title);
		$("#address-save-location").html(cli.Location);
		$("#desc-save-location").html(cli.Desc);
		$("#button-save-location").html('<a onClick="getMyLocationMap('+cli.Lon+','+cli.Lat+')" class="button-positive button-block" href="#page_location_map">Map View</a>');
	}
	
	
	function detailShowLocation(id){
		$('#show-images').empty();
		var url = urlService+'service/get_detail?id='+id;
		getRequest(url, function(data) {
        	var data = JSON.parse(data.responseText);        
        	for (var i = 0; i < data.length; i++) {
				
				var urlGetImages = urlRequest+'service/get_images?id='+data[i]['markers_id'];
				
				getRequest(urlGetImages, function(dataImages) {
											   
        			var dataImages = JSON.parse(dataImages.responseText);        
        				for (var i = 0; i < dataImages.length; i++) {
							$('#show-images').append('<li><img src="'+urlRequest+'upload/images/'+dataImages[i]['images_url']+'"></li>');
						}
				});
				
				$('#btn-show-map').attr('onClick','getShowLocation('+data[i]['markers_lng']+','+data[i]['markers_lat']+',"'+data[i]['category_marker']+'")');
				$('#btn-show-street').attr('onClick','getStreetView('+data[i]['markers_lng']+','+data[i]['markers_lat']+')');
				$('#btn-show-directions').attr('onClick','getCalculateRoute('+data[i]['markers_lng']+','+data[i]['markers_lat']+')');
				$('#btn-show-route').attr('onClick','getLocationRoute('+data[i]['markers_lng']+','+data[i]['markers_lat']+')');
				
				$("#title-show-category").html(data[i]['category_name']);
				$("#title-show-name").html(data[i]['markers_name']);
				$("#title-show-phone").html(data[i]['markers_phone']);
				$("#title-show-url").html(data[i]['markers_url']);
				$("#title-show-address").html(data[i]['markers_address']);
				$("#title-show-desc").html(data[i]['markers_desc']);
			}

		});

		$('.loading').hide();
	}
	
	function deleteMyLocation(selected_index){
		if (confirm('Are you sure you want to remove entry?')) {
			tbSaveLocation.splice(selected_index, 1);
			localStorage.setItem("tbSaveLocation", JSON.stringify(tbSaveLocation));
			//alert("Client deleted.");
			listMyLocation();
		}
	}

	function addMarkers(lon,lat,icon){
		
		
  
	}
	
	function getMyLocationMap(lon,lat){
		setTimeout('init("false")',2500);
		setTimeout('addMarkers('+lon+','+lat+')',2500);
        window.location.href = "#page_location_map";
	}
	
	function getShowLocation(lon,lat,icon){
		window.location.href = "#page_location_map";
		setTimeout('init("false")',2500);
		setTimeout('addMarkers('+lon+','+lat+',"'+icon+'")',2500);
	}
	
	function getStreetView(lon,lat){
		window.location.href = "#page_location_map";
		setTimeout('init("false","","true")',2500);
		//streetPlace = new google.maps.LatLng(lat, lon);
	
	}