
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 47.6270026, lng: -122.1564774},
      zoom: 15
    }); 

    var service = new google.maps.places.PlacesService(map);

    var idToMarker = new Map();
    var infos = new Map();
    
    addServiceDetails('ChIJHRQNBxhskFQRbIgH4Gh28ic', map, '#fryingFish');
    addServiceDetails('ChIJ6wHqFKVtkFQRYwG36w4TuBg', map, '#ivars');
    addServiceDetails('ChIJpc0kaKVtkFQR38bRWg4u5UU', map, '#little');
    addServiceDetails('ChIJX95qzwltkFQR8YgeImuFQzk', map, '#Qdoba');
    addServiceDetails('ChIJh-0KYGRqkFQRkvKlLuRz_U4', map, '#littleChengdu');
    
//    console.log(infos);
    Object.keys(infos).forEach(function(key) {
        value = infos[key];
        console.log(value);
    });
//    infos.forEach(function(v, k, m) {
//        console.log('hello ' + k);
//    });
    
    
    function addServiceDetails(placeId, map, btnId) {
        
        service.getDetails({placeId}, function(place, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location
            });
              
            var infowindow = new google.maps.InfoWindow(); 
            infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + place.formatted_address + '</div>');  
            infos.set(btnId, infowindow);
              
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            });
              
            $(btnId).click(function() { 
                infowindow.open(map, marker);
                //infos.get('#fryingFish').close();
            });  
              
          }
        });
    }
}
    
    