var map;
function initialize()
{
  map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(-27.7314007, 135.141253),//Setting Initial Position
    zoom: 4
  });
}
function melbourneMap()
{
  map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(-37.8149202, 144.9626441),//Setting Melbourne Position
    zoom: 14
  });
}
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: new google.maps.LatLng(-37.8149202, 144.9626441),
      content: '<i class="fa fa-map-marker fa-10x"></i>',
    //mapTypeId: 'roadmap'
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
                  initialize();
                $('#show').html("This is the default location.");
                  break;
            case '3':
                  initMap();
            $('#show').html("These are the Zone 1 Camera locations in Melbourne CBD.");
                  break;
        }
    });
});