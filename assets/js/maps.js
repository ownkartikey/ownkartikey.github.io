function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: {
            lat: 18.605795,
            lng: 73.752394
        }
    });
    var labels = "Work";

    var locations = [
        { lat: 18.605795, lng: 73.752394 }, // 18.605795,73.752394 crossroads
        { lat: 18.5801849, lng: 73.6848022 }, // 18.5801849,73.6848022 TCS
        { lat: 22.824693, lng: 75.8470467 }, // 22.824693, 75.8470467  SVVV
        { lat: 22.7519206, lng: 75.8904765 }, // 22.7519206, 75.8904765 infoviaan

    ];

    var markers = locations.map(function(location, i) { // locations.map() is a JS function and not Google. Similar to a forEach() function
        return new google.maps.Marker({ // x2 arguments location & index 'i'. Where we are in the array (length = 26 letters) 
            position: location, // position sets the current location 
            label: labels[i % labels.length] // Need to get one of the labels out of the string created. 
        }); // % Operator will allow a loop from A-Z to A again, without error warning message
    });

    var markerCluster = new MarkerClusterer(map, markers, { // creates the marker image for the map & creates them in a cluster, if close together
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}