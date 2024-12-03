//código para arquivos geojson estaduais
//Alto Alegre
var rodEstALG = L.geoJSON(rodEstAltoAlegre, {

    color: '#0000ff',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Estadual: ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});

    //Amajari
var rodEstAMJ = L.geoJSON(rodEstAmajari, { 

    color: '#ffff00',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Estadual: ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});

//Boa Vista
var rodEstBVA = L.geoJSON(rodEstBoaVista, { 

    color: '#96ff1e',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Estadual: ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});

//Bonfim
var rodEstBOM = L.geoJSON(rodEstBonfim, { 

    color: '#4bffea',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Estadual: ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});

//Canta
var rodEstCTA = L.geoJSON(rodEstCanta, { 

    color: '#c866e8',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Estadual: ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});

//Mucajai
var rodEstMUC = L.geoJSON(rodEstMucajai, { 

    color: '#ff007f',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Estadual: ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});

//Normandia
var rodEstNOD = L.geoJSON(rodEstNormandia, { 

    color: '#9e3162',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Estadual: ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});

//Pacaraima
var rodEstPAC = L.geoJSON(rodEstPacaraima, { 

    color: '#e29670',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Estadual: ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});

//Uiramuta
var rodEstUTA = L.geoJSON(rodEstUiramuta, { 

    color: '#e2ff82',

    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + 'Rodovia Estadual: ' + features.properties.codtrechor + '<br>' + 'Município: ' + features.properties.municipio + '<br>' + 'Revestimento: ' + features.properties.revestimento);
    }
});

//var rodoviasEstaduais = L.layerGroup([rodEstALG, rodEstAMJ, rodEstBVA, rodEstBOM, rodEstCTA, rodEstMUC, rodEstNOD, rodEstPAC, rodEstUTA]);