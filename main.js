$(document).ready(function(){

    /*******   Geolocation Section *******/

  
	
if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error, {
            enableHighAccuracy: true,
            maximumAge: 1000
        });
    } else {
        error();
        // no support
        }

    function success(position) {

        alert('Thank you for sharing!'  /* + position.coords.latitude + ', ' + position.coords.longitude */);

        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        var options = {
            zoom: 16,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"), options);

        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "Thank you for sharing"
        });

    }
    // 'No Geolocation error notification
    function error() {
        alert('No Geolocation available or position could not be determined.');
    }

	/* Future Code still in the works */
	//Before user exits page, Alert Message is sent
	function ExitPage() {
		alert('Are you sure you want navigate away from this App?');
		getit()
	}
	function getit() {
		askit = confirm("Hit the browser back button, to return to OpenFarmTech App");
		if(askit == true)
		alert('Thanks');
		else if(askit == false)
		alert("Visit again soon!");
	}


	
});
