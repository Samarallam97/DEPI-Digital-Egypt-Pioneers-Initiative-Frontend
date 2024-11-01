let myMap = document.getElementById("map");
let search = document.getElementById("search");

function initMap() {
    let myLatLng = { lat: -34.397, lng: 150.644 }; 

    map = new google.maps.Map(myMap, {
        center:myLatLng,
        zoom: 6
    });


    navigator.geolocation.getCurrentPosition(
        (position) => {

            let pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            map.setCenter(pos);

            marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: "Your Location"
            });

        }
    );

    countries.onchange = (event) => {
        updateMap() ;
    };

    search.oninput = (event)=>{
        console.log(event.target.value);
        searchPlaces(event.target.value)
        
    }
}


function updateMap() {
    let selectedCountry = event.target.options[event.target.selectedIndex];
    let myLat =parseFloat(selectedCountry.getAttribute('data-lat')) ;
    let myLng =parseFloat(selectedCountry.getAttribute('data-lng')) ;

    
    const pos = {
        lat: myLat,
        lng: myLng
    };

    map.setCenter(pos);

    marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: "Your Location"
    });
}

function searchPlaces(value) {

}


