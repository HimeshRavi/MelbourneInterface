var map;

function initialize()
{
    map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(-38.0971929,144.9755815),//Setting Initial Position
        zoom: 9,
        mapTypeId: 'roadmap'
    });
}

//Melbourne CBD Boundary
function melbourneMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(-37.8133945,144.9616571),//Setting Melbourne Position
        zoom: 15
    });

    var lineSymbol = {
        path: 'M 0,-1 0,1',
        strokeOpacity: 1,
        scale: 4
    };

    var features = [
        {
            path: [{lat: -37.815262, lng: 144.974843}, {lat: -37.821033, lng: 144.955155}],
        }, {
            path: [{lat: -37.821043, lng: 144.955024}, {lat: -37.813253, lng: 144.951440}],
        }, {
            path: [{lat: -37.813161, lng: 144.951379}, {lat: -37.811754, lng: 144.956368}],
        }, {
            path: [{lat: -37.811726, lng: 144.956418}, {lat: -37.809595, lng: 144.955404}],
        }, {
            path: [{lat: -37.809397, lng: 144.955376}, {lat: -37.805920, lng: 144.955955}],
        }, {
            path: [{lat: -37.805875, lng: 144.955986}, {lat: -37.807593, lng: 144.971311}],
        }, {
            path: [{lat: -37.807650, lng: 144.971373}, {lat: -37.815288, lng: 144.974860}],
        }
    ];

    features.forEach(function(feature) {
        var line = new google.maps.Polyline({
            path: feature.path,
            strokeOpacity: 0,
            icons: [{
                icon: lineSymbol,
                offset: '0',
                repeat: '20px'
            }],
            map: map
        });
    });
}

//Camera function
function cameraMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: new google.maps.LatLng(-37.8133945,144.9616571),
        mapTypeId: 'roadmap'
    });

    //Marker icons
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var icons = {
        camera: {
            icon: iconBase + 'camera_maps.png'
        }
    };

    //Camera locations
    var features = [
        {
            position: new google.maps.LatLng(-37.821703, 144.955241),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.821270, 144.954073),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.819179, 144.953803),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.813291, 144.950670),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.812584, 144.951167),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.811903, 144.953663),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.808435, 144.954986),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.805788, 144.955517),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.805578, 144.956106),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.805706, 144.957146),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.805852, 144.958290),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.805834, 144.959387),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.805934, 144.959976),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.806171, 144.961501),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.806205, 144.963031),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.806358, 144.964512),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.806434, 144.965187),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.806468, 144.965906),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.806654, 144.967505),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.806722, 144.968116),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.806815, 144.968921),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.807544, 144.971678),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.807968, 144.971979),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.809351, 144.972614),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.809866, 144.972740),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.812583, 144.974207),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.813523, 144.974442),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.815417, 144.975059),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.815867, 144.974793),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.816528, 144.972604),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.818605, 144.967851),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.820046, 144.961349),
            type: 'camera'
        }, {
            position: new google.maps.LatLng(-37.821156, 144.957883),
            type: 'camera'
        }
    ];

    // Create markers.
    features.forEach(function(feature) {
        var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
        });
    });
}

//Roundabout arrow function
function arrows() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: {lat: -37.8133945, lng: 144.9616571},
        mapTypeId: 'roadmap'
    });

    var lineSymbol = {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
    };

    //Arrow locations
    var features = [
        {
            path: [{lat: -37.815298, lng: 144.974800}, {lat: -37.815942, lng: 144.972622}],
        }, {
            path: [{lat: -37.816722, lng: 144.969940}, {lat: -37.817417, lng: 144.967612}],
        }, {
            path: [{lat: -37.818129, lng: 144.965059}, {lat: -37.818824, lng: 144.962656}],
        }, {
            path: [{lat: -37.819495, lng: 144.960384}, {lat: -37.820326, lng: 144.957595}],
        }, {
            path: [{lat: -37.820955, lng: 144.954974}, {lat: -37.819090, lng: 144.954148}],
        }, {
            path: [{lat: -37.816323, lng: 144.952818}, {lat: -37.813563, lng: 144.951628}],
        }, {
            path: [{lat: -37.812792, lng: 144.952797}, {lat: -37.811995, lng: 144.955544}],
        }, {
            path: [{lat: -37.811139, lng: 144.956134}, {lat: -37.809656, lng: 144.955458}],
        }, {
            path: [{lat: -37.808054, lng: 144.955587}, {lat: -37.806138, lng: 144.955920}],
        }, {
            path: [{lat: -37.806019, lng: 144.957165}, {lat: -37.806307, lng: 144.959729}],
        }, {
            path: [{lat: -37.806595, lng: 144.962325}, {lat: -37.806917, lng: 144.965329}],
        }, {
            path: [{lat: -37.807163, lng: 144.967636}, {lat: -37.807460, lng: 144.970254}],
        }, {
            path: [{lat: -37.807943, lng: 144.971499}, {lat: -37.809579, lng: 144.972143}],
        }, {
            path: [{lat: -37.810562, lng: 144.972765}, {lat: -37.811944, lng: 144.973323}],
        }, {
            path: [{lat: -37.813054, lng: 144.973838}, {lat: -37.814715, lng: 144.974600}],
        }
    ];

    features.forEach(function(feature) {
        var line = new google.maps.Polyline({
            path: feature.path,
            icons: [{
                icon: lineSymbol,
                offset: '100%'
            }],
            map: map
        });
    });
}

//google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function(){
    $('input[name=content_type]').on('change', function(){
        var n = $(this).val();
        switch(n)
        {
            case '1':
                melbourneMap();
                $('#show').html("This is Melbourne CBD.");
                break;
            case '2':
                arrows();
                $('#show').html("Making Melbourne CBD a huge roundabout.");
                break;
            case '3':
                cameraMap();
                $('#show').html("These are the Zone 1 Camera locations in Melbourne CBD.");
                break;
            case '4':
                initialize();
                $('#show').html("This is the default location.");
                break;
        }
    });
});

function calcTCI() {
    var population = document.getElementById('population').value;
    var space = document.getElementById('space').value;
    var vehicle = document.getElementById('vehicle').value;
    var time = document.getElementById('time').value;
    //var reducedPop = population - (0.2 * population);
    var maxPopArea = 0.825 * population;
    var maxVehicleArea = 11.016 * vehicle;
    var trafficIndex = (maxPopArea * space)/(maxVehicleArea * time);
    var tci = trafficIndex/1000000;
    document.getElementById('tci').innerHTML = "TCI: " + tci;
}