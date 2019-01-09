var conteudo = '<div id="conteudo_mapa"><h1 id="conteudo_mapa__titulo">Nome da Escola</h1><div><p id="conteudo_mapa__descricao">Morbi in dui at libero pulvinar ornare. Maecenas vitae purus lectus. Aenean vel ex eu urna cursus dapibus vitae eget tortor.</p> <p id="conteudo_mapa__site"><a href="#"><i class="fas fa-link"></i> Site da Escola</a></p></div></div>';

var locais = [];

locais.push([{ lat: -20.2881242, lng: -40.3059222 }, 'Primeiro Ponto', 'map-marker.png', conteudo]);
locais.push([{ lat: -20.7233686, lng: -40.5259627 }, 'Primeiro Ponto', 'map-marker.png', conteudo]);

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: locais[0][0],
        disableDefaultUI: true,
        styles: [{ "elementType": "labels", "stylers": [{ "visibility": "off" }, { "color": "#f49f53" }] }, { "featureType": "landscape", "stylers": [{ "color": "#f9ddc5" }, { "lightness": -7 }] }, { "featureType": "road", "stylers": [{ "color": "#813033" }, { "lightness": 43 }] }, { "featureType": "poi.business", "stylers": [{ "color": "#645c20" }, { "lightness": 38 }] }, { "featureType": "water", "stylers": [{ "color": "#1994bf" }, { "saturation": -69 }, { "gamma": 0.99 }, { "lightness": 43 }] }, { "featureType": "road.local", "elementType": "geometry.fill", "stylers": [{ "color": "#f19f53" }, { "weight": 1.3 }, { "visibility": "on" }, { "lightness": 16 }] }, { "featureType": "poi.business" }, { "featureType": "poi.park", "stylers": [{ "color": "#645c20" }, { "lightness": 39 }] }, { "featureType": "poi.school", "stylers": [{ "color": "#a95521" }, { "lightness": 35 }] }, {}, { "featureType": "poi.medical", "elementType": "geometry.fill", "stylers": [{ "color": "#813033" }, { "lightness": 38 }, { "visibility": "off" }] }, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, { "elementType": "labels" }, { "featureType": "poi.sports_complex", "stylers": [{ "color": "#9e5916" }, { "lightness": 32 }] }, {}, { "featureType": "poi.government", "stylers": [{ "color": "#9e5916" }, { "lightness": 46 }] }, { "featureType": "transit.station", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.line", "stylers": [{ "color": "#813033" }, { "lightness": 22 }] }, { "featureType": "transit", "stylers": [{ "lightness": 38 }] }, { "featureType": "road.local", "elementType": "geometry.stroke", "stylers": [{ "color": "#f19f53" }, { "lightness": -10 }] }, {}, {}, {}]
    });

    var InfoWindows = new google.maps.InfoWindow({});

    locais.forEach(function (local) {
        var marker = new google.maps.Marker({
            position: local[0],
            map: map,
            icon: local[2],
            title: local[1],
            draggable: true,
            animation: google.maps.Animation.DROP,
        });
        marker.addListener('mouseover', function () {
            InfoWindows.open(map, this);
            InfoWindows.setContent(local[3]);
        });
    });
}

