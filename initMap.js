
    function initMap() {
        // Firabase is asynchronous so map elements linked to data from it has to be activated from Firabase callback
        var dbRef = firebase.database().ref().child('stacje').child('1');
        var pointer=null;
        dbRef.on('value', snap => {
            pointer = snap.val();
            console.log(pointer.v);
            var a = pointer.v;
            var b = pointer.v1;
            // The location of Pointer
            var latlng = {lat: a, lng: b};
            // The map, centered at Pointer
            var map = new google.maps.Map(
                document.getElementById('map'), {zoom: 4, center: latlng});
            // The marker, positioned at Pointer
            var marker = new google.maps.Marker({position: latlng, map: map});
    });
    // Initialize and add the map
    

    }
