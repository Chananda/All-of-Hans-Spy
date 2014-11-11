var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-15589237-1']);
_gaq.push(['_gat._anonymizeIp']);
_gaq.push(['_trackPageview']);
(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
		
function DisplayDefaultHide(id,startrow) {
	var elid = 'defaulthide' + id;
	for (var i = startrow; i < 1000; i++) { 
		var element = document.getElementById(elid+'-'+i);
		if (element != null) {
			element.style.display='table-row';
			element.style.visibility = 'visible';
			element.className = "";
		}
		else break;
	}
	
	var elid = 'defaulthide_seemore' + id;
	var element = document.getElementById(elid); 
	if (element != null) element.style.display='none';
	
	var elid = 'defaulthide-mesg' + id;
	var element = document.getElementById(elid); 
	if (element != null) {
		element.style.display='table-row';
		element.style.visibility = 'visible';
		element.className = "";
	}
}

function SelectAll(id) {
    document.getElementById(id).focus();
    document.getElementById(id).select();
}

function loadGoogleMapsApi(a,b,c,d) {
	if( typeof(lat) == 'undefined' ) {
		lat = new Array();
		lon = new Array();
		zoom = new Array();
		elementid = new Array();
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAuyXXhT7FpUYMZOO-vDzAQcjGa0Wz1XM8&sensor=false&callback=mapLoaded";
		document.body.appendChild(script);
	}
	if( typeof(mapisLoaded) == 'undefined' ) {
		lat.push(a);
		lon.push(b);
		zoom.push(c);
		elementid.push(d);
	} else {
		showGoogleMap(a,b,c,d);
	}
}

function mapLoaded() {
	for(var i = 0; i < lat.length ; i++){
		showGoogleMap(lat[i],lon[i],zoom[i],elementid[i]);
	}
	mapisLoaded = new Array();
};

function showGoogleMap(a,b,c,d) {
	var latlng = new google.maps.LatLng(a,b); 
	var myOptions = { 
		zoom: c, 
		center: latlng, 
		mapTypeId: google.maps.MapTypeId.ROADMAP 
	}; 
	var map = new google.maps.Map(document.getElementById(d), myOptions); 
	var marker = new google.maps.Marker({ 
		map: map,  
		 position: latlng 
	});
};

function getHostname(str) {
	var re = new RegExp('^(?:f|ht)tp(?:s)?\://([^/]+)', 'im');
	return str.match(re)[1].toString();
};