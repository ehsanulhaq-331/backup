$('#getlat').on('click', function() {
    $('#map-area').hide();
    calculateDistance();
   });
   
   var bounds;
   function initMap() {
     // The map, centered on Central Park
    // const center = {lat: 40.774102, lng: -73.971734};
     const options = {zoom: 6, scaleControl: true};
     map = new google.maps.Map(
         document.getElementById('map'), options);
     bounds = new google.maps.LatLngBounds();
   }

    // calculate distance
    function calculateDistance() {
     var origin = $('#pickup_zip').val();
     var destination = $('#dropoff_zip').val();
     if(origin === '' || destination === ''){
        alert('Please fill both Pick Up and Drop Off fields!');
        return;
    }
     var service = new google.maps.DistanceMatrixService();
     service.getDistanceMatrix(
         {
             origins: [origin],
             destinations: [destination],
             travelMode: google.maps.TravelMode.DRIVING,
             unitSystem: google.maps.UnitSystem.IMPERIAL, // miles and feet.
             // unitSystem: google.maps.UnitSystem.metric, // kilometers and meters.
             avoidHighways: false,
             avoidTolls: false
         }, callback);
   }
   // get distance results
   async function callback(response, status) {
     if (status != google.maps.DistanceMatrixStatus.OK) {
         $('#result').html(err);
     } else {
         var origin = response.originAddresses[0];
         var destination = response.destinationAddresses[0];
         if (response.rows[0].elements[0].status === "ZERO_RESULTS") {
             $('#result').html("Better get on a plane. There are no roads between "  + origin + " and " + destination);
         } else {
             initMap();
             $('#map-area').show();
            var locations = [];
            var pickupPosition;
            var dropOffpPosition
           var geocoder = new google.maps.Geocoder();
           await geocoder.geocode( { 'address' : origin }, function( results, status ) {
               if( status == google.maps.GeocoderStatus.OK ) {
                
                pickupPosition = {
                    'lat': results[0].geometry.location.lat(),
                    'lng': results[0].geometry.location.lng(),
                };
                locations.push(pickupPosition);
               } else {
                   alert( 'Geocode was not successful for the following reason: ' + status );
               }
           } );
          
          await geocoder.geocode( { 'address' : destination }, function( results, status ) {
               if( status == google.maps.GeocoderStatus.OK ) {

                dropOffpPosition = {
                    'lat': results[0].geometry.location.lat(),
                    'lng': results[0].geometry.location.lng(),
                };
                locations.push(dropOffpPosition);
                
               } else {
                   alert( 'Geocode was not successful for the following reason: ' + status );
               }
           } );

           var bounds = new google.maps.LatLngBounds();
            for (let u in locations) {
                var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(
                            locations[u].lat, 
                            locations[u].lng
                        ),
                        map     : map,
                });
                bounds.extend(marker.getPosition());
            }

                map.fitBounds(bounds)

  
           google.maps.event.addListener(document.getElementById('pickup_zip'), 'place_changed', function () {
                      var from_place = from_places.getPlace();
                      var from_address = from_place.formatted_address;
           
                      $('#pickup_zip').val(from_address);
                  });
   
             var distance = response.rows[0].elements[0].distance;
             var duration = response.rows[0].elements[0].duration;
             var distance_in_kilo = distance.value / 1000; // the kilom
             var distance_in_mile = distance.value / 1609.34; // the mile
             var duration_text = duration.text;
             var duration_value = duration.value;
             $('#in_mile').text(distance_in_mile.toFixed(2));
             $('#in_kilo').text(distance_in_kilo.toFixed(2));
             $('#duration_text').text(duration_text);
             $('#duration_value').text(duration_value);
             $('#from').text(origin);
             $('#to').text(destination);
         }
     }
   }

