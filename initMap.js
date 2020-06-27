
    function initMap() {
        // The map, centered at Kolbuszowa
        var kolbuszowa = {lat: 50.25459, lng: 21.77087};
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 6, center: kolbuszowa});

        // Firabase is asynchronous so map elements linked to data from it has to be activated from Firabase callback
                //var dbRef = firebase.database().ref().child('stacje').child(i);
                var dbRef = firebase.database().ref().child('stacje');
                var pointer=null;
                var count=null;
                dbRef.once('value', snap => 
                {
                    counter=snap.numChildren();
                    console.log(counter);
                    for(var i=1;i<=counter;i++)
                    {
                        pointer = snap.child(i).val();
                        var name=pointer.name;
                        var a = pointer.v;
                        var b = pointer.v1;
                        // The location of Pointer
                        var latlng = {lat: a, lng: b};

                        var contentString='<div id="content">'+
                        '<div id="siteNotice">'+
                        '</div>'+
                        '<h1 id="firstHeading" class="firstHeading">'+name+'</h1>'+
                        '<div id="bodyContent">'+
                        '<p><b>Diesel </b>'+pointer.price+'</p>'+
                        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
                        'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
                        '(last visited June 22, 2009).</p>'+
                        '</div>'+
                        '</div>';
                        var infowindow = new google.maps.InfoWindow({
                            content: contentString
                        });
                        
                        // The marker, positioned at Pointer
                        var marker = new google.maps.Marker({position: latlng, map: map, title: name});
                        marker.addListener('click', function() {
                            infowindow.open(map, marker);
                        });
                    }
                });
    }
