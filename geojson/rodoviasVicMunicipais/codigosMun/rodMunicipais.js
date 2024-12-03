//código para arquivos geojson municipais
//Alto Alegre
var rodMunALG = L.geoJSON(rodVicMunAltoAlegre, {
    
    color: 'red',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Muicipal (Vicinal): ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});

//Amajari
var rodMunAMJ = L.geoJSON(rodVicMunAmajari, {
    
    color: 'blue',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Muicipal (Vicinal): ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});
//Boa Vista
var rodMunBVA = L.geoJSON(rodVicMunBoaVista, {
    
    color: 'yellow',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Muicipal (Vicinal): ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});
//Bonfim
var rodMunBOM = L.geoJSON(rodVicMunBonfim, {
    
    color: '#3bad81',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Muicipal (Vicinal): ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});
//Canta
var rodMunCTA = L.geoJSON(rodVicMunCanta, {
    
    color: '#3bad81',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Muicipal (Vicinal): ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});
//Caracarai
var rodMunCAI = L.geoJSON(rodVicMunCaracarai, {
    
    color: '#3bad81',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Muicipal (Vicinal): ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});
//Caroebe
var rodMunCAB = L.geoJSON(rodVicMunCaroebe, {
    
    color: '#3bad81',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Muicipal (Vicinal): ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});
//Iracema
var rodMunIRA = L.geoJSON(rodVicMunIracema, {
   
    color: '#3bad81',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Muicipal (Vicinal): ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});
//Mucajai
var rodMunMUC = L.geoJSON(rodVicMunMucajai, {
    
    color: '#3bad81',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Muicipal (Vicinal): ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});
//Normandia
var rodMunNOD = L.geoJSON(rodVicMunNormandia, {
    
    color: '#3bad81',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Muicipal (Vicinal): ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});
//Pacaraima
var rodMunPAC = L.geoJSON(rodVicMunPacaraima, {
    
    color: '#3bad81',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Muicipal (Vicinal): ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});
//Rorainopolis
var rodMunRPO = L.geoJSON(rodVicMunRorainopolis, {
    
    color: '#3bad81',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Muicipal (Vicinal): ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});
//Sao Joao da Baliza
var rodMunSJB = L.geoJSON(rodVicMunSJBaliza, {
    
    color: '#3bad81',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Muicipal (Vicinal): ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});
//Sao Luiz do Anaua
var rodMunSLA = L.geoJSON(rodVicMunSLAnaua, {
    
    color: '#3bad81',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Muicipal (Vicinal): ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});
//Uiramuta
var rodMunUTA = L.geoJSON(rodVicMunUiramuta, {
    
    color: '#3bad81',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Muicipal (Vicinal): ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});

//var rodoviasMunicipais = L.layerGroup([rodMunALG, rodMunAMJ, rodMunBVA, rodMunBOM, rodMunCTA, rodMunCAI, rodMunCAB, rodMunIRA, rodMunMUC, rodMunNOD, rodMunPAC, rodMunRPO, rodMunSJB, rodMunSLA, rodMunUTA]);
