//código para arquivos geojson federais
//Amajari
var rodFedAMJ = L.geoJSON(rodFedAmajari, {
    
    color: 'black',
    //border: 'dashed',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Federal: ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});

//Boa Vista
var rodFedBVA = L.geoJSON(rodFedBoaVista, {
    
    color: 'black',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Federal: ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});

//Bonfim
var rodFedBOM = L.geoJSON(rodFedBonfim, {
    
    color: 'black',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Federal: ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});

//Canta
var rodFedCTA = L.geoJSON(rodFedCanta, {
    
    color: 'black',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Federal: ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});

//Caracarai
var rodFedCAI = L.geoJSON(rodFedCaracarai, {
    
    color: 'black',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Federal: ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});

//Caroebe
var rodFedCAB = L.geoJSON(rodFedCaroebe, {
    
    color: 'black',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Federal: ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});

//Iracema
var rodFedIRA = L.geoJSON(rodFedIracema, {
    
    color: 'black',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Federal: ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});

//Mucajai
var rodFedMUC = L.geoJSON(rodFedMucajai, {
    
    color: 'black',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Federal: ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});

//Normandia
var rodFedNOD = L.geoJSON(rodFedNormandia, {
    
    color: 'black',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Federal: ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});

//Pacaraima
var rodFedPAC = L.geoJSON(rodFedPacaraima, {
    
    color: 'black',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Federal: ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});

//Rorainopolis
var rodFedRPO = L.geoJSON(rodFedRorainopolis, {
    
    color: 'black',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Federal: ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});

//Sao Joao da Baliza
var rodFedSJB = L.geoJSON(rodFedSJBaliza, {
    
    color: 'black',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Federal: ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});

//Sao Luiz do Anaua
var rodFedSLA = L.geoJSON(rodFedSLAnaua, {
    
    color: 'black',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Federal: ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});

//var rodoviasFederais = L.layerGroup([rodFedAMJ, rodFedBVA, rodFedBOM, rodFedCTA, rodFedCAI, rodFedCAB, rodFedIRA, rodFedMUC, rodFedNOD, rodFedPAC, rodFedRPO, rodFedSJB, rodFedSLA]);