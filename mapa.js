if(window.screen.width > "500"){

    var latit = 1.80054;
    var long = -61.4714;
    var zm = 6;
var map = L.map(document.getElementById('map'), {
      center: [latit, long],
      zoom: zm,
      zoomControl: false,
      //layers: [googleTerrain]
    });
  
  
  }else{
  
    var latit = -0.50;
    var long = -61.4714;
    var zm = 6;
    var map = L.map(document.getElementById('map'), {
      center: [latit, long],
      zoom: zm,
      zoomControl: false,
      //layers: [googleTerrain]
  });


  if (!L.Browser.touch) {
    L.DomEvent
    .disableClickPropagation(map)
    .disableScrollPropagation(map);
    } else {
    L.DomEvent.disableClickPropagation(map);
    }
}

var currentLayer;
document.getElementById('arquivo').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var geojson = JSON.parse(e.target.result);
        if (currentLayer) { map.removeLayer(currentLayer); }
        currentLayer = L.geoJSON(geojson).addTo(map);
        map.fitBounds(currentLayer.getBounds());
    };
    reader.readAsText(file);
});

function removerLayJson() {
    if (currentLayer) { map.removeLayer(currentLayer); currentLayer = null; }
}

/*-----------------------------------------------------------------------------*/

// Variável para armazenar a camada do shapefile
var shapefileLayer;

// Função para carregar ShapeFile
document.getElementById('shap').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        if (shapefileLayer) { map.removeLayer(shapefileLayer); }
        shapefileLayer = new L.Shapefile(new Blob([e.target.result]), {
            onEachFeature: function (feature, layer) {
                layer.bindPopup('Name: ' + feature.properties.name);
            }
        }).addTo(map);
        shapefileLayer.once("data:loaded", function() {
            map.fitBounds(shapefileLayer.getBounds());
        });
    };
    reader.readAsArrayBuffer(file);
});

// Função para remover ShapeFile
function removerLayShap() {
    if (shapefileLayer) { map.removeLayer(shapefileLayer); shapefileLayer = null; }
}


/*-----------------------------------------------------------------------------*/

var marcador;
function addMarcador() {
    var lat = parseFloat(document.getElementById('latitude').value);
    var lon = parseFloat(document.getElementById('longitude').value);
    if (isNaN(lat) || isNaN(lon)) {
        alert('Por favor, insira coordenadas válidas.');
        return;
    }
    if (marcador) { map.removeLayer(marcador); }
    marcador = L.marker([lat, lon]).addTo(map);
    map.setView([lat, lon], 13);
}

function removerTema() {
    if (marcador) { map.removeLayer(marcador); marcador = null; }
}

/*-----------------------------------------------------------------------------*/

//ZoomBar

var zoom_bar = new L.Control.ZoomBar({position: 'topleft'}).addTo(map);

//--------------------------------------------------------------------

var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
maxZoom: 20,

});

var google = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);

var mapas = {
'OpenStreetMap': osm,
'Google': google
};

var rodovias = {

"Federais BRs": {'Trecho Amajarí': rodFedAMJ, 'Trecho Boa Vista': rodFedBVA, 'Trecho Bonfim': rodFedBOM, 'Trecho Cantá': rodFedCTA, 'Trecho Caracaraí': rodFedCAI, 'Trecho Caroebe': rodFedCAB, 'Trecho Iracema': rodFedIRA, 'Trecho Mucajaí': rodFedMUC, 'Trecho Normândia': rodFedNOD, 'Trecho Pacaraima': rodFedPAC, 'Trecho Rorainópolis': rodFedRPO, 'Trecho São João da Baliza': rodFedSJB, 'Trecho São Luiz da Anauá': rodFedSLA
},
"Estaduais (RRs)": {
    'RRs Alto Alegre': rodEstALG, 'RRs Amajarí': rodEstAMJ, 'RRs Boa Vista': rodEstBVA, 'RRs Bonfim': rodEstBOM, 'RRs Cantá': rodEstCTA, 'RRs Mucajaí': rodEstMUC, 'RRs Normandia': rodEstNOD, 'RRs Pacaraima': rodEstPAC, 'RRs Uiramutã': rodEstUTA
},
"Municipais (Vicinais)": {
    'Vicinais Alto Alegre': rodMunALG, 'Vicinais Amajarí': rodMunAMJ, 'Vicinais Boa Vista': rodMunBVA, 'Vicinais Bonfim': rodMunBOM, 'Vicinais Cantá': rodMunCTA, 'Vicinais Caracaraí': rodMunCAI, 'Vicinais Caroebe': rodMunCAB, 'Vicinais Iracema': rodMunIRA, 'Vicinais Mucajaí': rodMunMUC, 'Vicinais Normandia': rodMunNOD, 'Vicinais Pacaraima': rodMunPAC, 'Vicinais Rorainopólis': rodMunRPO, 'Vicinais São João da Baliza': rodMunSJB, 'Vicinais Luiz do Anauá': rodMunSLA, 'Vicinais Uiramutã': rodMunUTA
},
};

var municipios = {"Municípios": {
'Alto Alegre': munAltoAlegre, 'Amajarí': munAmajari, 'Boa Vista': munBoaVista, 'Bonfim': munBonfim, 'Cantá': munCanta, 'Caracaraí': munCaracarai, 'Caroebe': munCaroebe, 'Iracema': munIracema, 'Mucajaí': munMucajai, 'Normandia': munNormandia, 'Pacaraima': munPacaraima, 'Rorainópolis': munRorainopolis, 'São João da Baliza': munSJBaliza,
'São Luiz do Anauá': munSLAnaua, 'Uiramutã': munUiramuta
}
};

var pontes = {"Pontes":{
'Pontes de Concreto': pontesCONC,
'Pontes de Madeira': pontesMAD
}  
};

//L.control.groupedLayers(mapas, municipios).addTo(map);

L.control.groupedLayers(mapas, null).addTo(map);
L.control.groupedLayers(null, municipios).addTo(map);
L.control.groupedLayers(null, rodovias).addTo(map);
L.control.groupedLayers(null, pontes).addTo(map);

//StyleEditor

/*let styleEditor = L.control.styleEditor({
position: 'bottomrleft}).addTo(map);
//map.addControl(styleEditor);*/

//leaflet-geoman
map.pm.addControls({
position: 'topleft', // ou 'topright', 'bottomleft', 'bottomright'
drawCircleMarker: false,
rotateMode: false,
});

// Add scalebar

var scale = L.control.scale()
scale.addTo(map)

//coordenadas

// Latitude e Longitude

var coordDIV = document.createElement('div');
coordDIV.id = 'mapCoordDIV';
coordDIV.style.position = 'absolute';
coordDIV.style.bottom = '2%';
coordDIV.style.left = '45%';
coordDIV.style.zIndex = '900';
coordDIV.style.backgroundColor = '#fff';
coordDIV.style.fontSize = '15px';
coordDIV.style.width = '310px';
coordDIV.style.textAlign = 'center';
coordDIV.style.borderRadius = '7px';

document.getElementById('map').appendChild(coordDIV);


map.on('mousemove', function(e){
var lat = e.latlng.lat.toFixed(6);
var lon = e.latlng.lng.toFixed(6);
document.getElementById('mapCoordDIV').innerHTML ='Latitude: ' + lat + ' / Longitude: ' + lon;
});

//leaflet-StyleEditor

let styleEditor = L.control.styleEditor({
position: 'topleft',
//margin: '0 0 0 1000px', // 30px à esquerda
  'z-index': 1000 // Ajuste o valor conforme necessário
});
map.addControl(styleEditor)


// Adiciona o EasyPrint ao mapa
L.easyPrint({ 
title: 'Imprimir Mapa',
position: 'topleft', // Ajuste a posição do botão conforme necessário
sizeModes: ['A4Portrait', 'A4Landscape']
}).addTo(map);