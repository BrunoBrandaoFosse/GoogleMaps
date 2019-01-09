
var localizacoes = [];

localizacoes.push([{ lat: -20.2881242, lng: -40.3059222 }, 'Primeiro Ponto', 'profile.png']);
localizacoes.push([{ lat: -20.7233686, lng: -40.5259627 }, 'Segundo Ponto', 'icon-01.png']);

var markers = [];
var marker = { lat: -20.2881242, lng: -40.3059222 };
var map;

function initMap() {
    console.log('Google Maps API version: ' + google.maps.version);
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: localizacoes[0][0], //pega a latitude e longitude da primeira localização do array.
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
}

$(document).ready(function () {
    clearMarkers();
    for (var i = 0; i < localizacoes.length; i++) {
        addMarker(localizacoes[i]);
    }
});

function addMarker(position) {
    markers.push(new google.maps.Marker({
        position: position[0], //latitude e longitude
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        title: position[1], //título
        icon: position[2] //ícone
    }));
}

function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}
