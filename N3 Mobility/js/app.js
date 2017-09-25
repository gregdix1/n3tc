var settingArray = ["toggle-traffic-layer","toggle-weather-layer","toggle-panoramio-layer","toggle-transit-layer","toggle-bike-layer","toggle-nearby-distances"];
function testGBD() {
   // alert("gbd");
   // $("#save-location").html("Save My Location VV");
     
}



// ACTION SIDEBAR LEFT MENU
window.onpopstate = function(event)
{
    //$("#topHead").html("hash");
    //alert("pop");
    var hash = window.location.hash;
	$('.scrollable ul li').removeClass("active");

    if (hash === "#page_home") {
		$("#li_page_home").addClass("active");
        $('.loading').hide();
       // $("#topHead").html("hash");
	} else if (hash === "#page_location_map") {
		$("#li_page_location_map").addClass("active");
		setTimeout('init()',500);
	} else if (hash === "#page_nearby") {
		$("#li_page_nearby").addClass("active");
		//myGeoloc(); gbd
		//getNearby(); gbd
	} else if (hash === "#page_location_list") {
		$("#li_page_location_list").addClass("active");
		getLocationCategory();
	} else if (hash === "#page_show_location") {
		$('.scrollable ul li').removeClass("active");
	} else if (hash === "#page_detail") {
		$("#li_page_location_list").addClass("active");
    } else if (hash == "#page_save_location") {

        $("#li_page_save_location").addClass("active");
        listMyLocation();
    }  else if (hash == "#page_save_application") {

        $("#li_page_save_application").addClass("active");
        listMyApplication();

    } else if (hash === "#page_detail_save_application") {
        $("#li_page_save_application").addClass("active");
    } else if (hash === "#page_add_application") {
        $("#li_page_save_application").addClass("active");
        $('#page_add_application').find('form')[0].reset();
    

	} else if (hash === "#page_detail_save_location") {
		$("#li_page_save_location").addClass("active");
	} else if (hash === "#page_add_location") {
		$("#li_page_save_location").addClass("active");
		$('#page_add_location').find('form')[0].reset();
	} else {
		// default link active
		$("#li_page_home").addClass("active");
		$('.loading').hide();
    }
    
};

	
$("#form-add").bind("click",function(){		
	addMyLocation();
});

//gbd for application list add
$("#form-add-app").bind("click", function () {
    addMyApplication();
});


for (var i = 0; i < settingArray.length; i++) {

	getSetting = localStorage.getItem(settingArray[i]);
	if(getSetting == "true"){
		$('#'+settingArray[i]).prop("checked", true);
	}

}

$('.toggle-control').bind('click', function(){

	var id = $(this).attr('id');
	
	if($(this).prop('checked')){

  		localStorage.setItem(id, "true");
	}else{
	
		localStorage.setItem(id, "false");
	}
	// Reload map after click setting
	//init(); gbd
	//getNearby(); gbd
});


 $('#search-list').keyup(function(event) {
	getFilterList();
});
 
function jqUpdateSize(){
    // Get the dimensions of the viewport
      vpw 		= $(window).width(); 
      vph 		= $(window).height() - 100;
	  vph_full  = $(window).height() - 45;
	  vph_route = $(window).height() - 60;
	  
	 
     $('.wrapper').css({'height': vph_full + 'px'});
	 $('.wrapper-bar').css({'height': vph + 'px'});
	 $('.wrapper-route').css({'height': vph_route + 'px'});
     $('#map_canvas').css({ 'height': vph_full + 'px' });
     $('#map').css({ 'height': vph_full + 'px' });
     map.resize();
    //$('.mapboxgl-canvas').css({ 'height': vph_full + 'px' });
};

$(document).ready(jqUpdateSize);    // When the page first loads
$(window).resize(jqUpdateSize);     // When the browser changes size

// Instance
snapper = new Snap({
	element: document.getElementById('content')
});
		
UpdateDrawers = function(){
	var state = snapper.state(),
	towards = state.info.towards,
	opening = state.info.opening;
};
		
snapper.on('drag', UpdateDrawers);
snapper.on('animating', UpdateDrawers);
snapper.on('animated', UpdateDrawers);
		
$('.toggle-left').bind('click', function(){
	snapper.open('left');
});
				
$('.toggle-right').bind('click', function(){
	 if($('.toggle-right').val() == "off"){
     	snapper.open('right');
		$('.toggle-right').val("on");
    }else{
       	snapper.close('right');
		$('.toggle-right').val("off");
	}
});
				
$('.scrollable ul li').bind('click', function(){
	snapper.close('left');
});	