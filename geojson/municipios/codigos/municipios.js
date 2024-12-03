//Alto Alegre
var munAltoAlegre = L.geoJSON(altoAlegre, {
    color: '#AADE8C',
    opacity: 1,
    fillOpacity: 0
});
//Amajari
var munAmajari = L.geoJSON(amajari, {
    color: '#DBA18B',
    opacity: 1,
    fillOpacity: 0
});
//Boa Vista
var munBoaVista = L.geoJSON(boaVista, {
    color: '#75E8EA',
    opacity: 1,
    fillOpacity: 0
});
//Bonfim
var munBonfim = L.geoJSON(bonfim, {
    color: '#C0DB30',
    opacity: 1,
    fillOpacity: 0
});
//Canta
var munCanta = L.geoJSON(canta, {
    color: '#46DB3B',
    opacity: 1,
    fillOpacity: 0
});
//Caracarai
var munCaracarai = L.geoJSON(caracarai, {
    color: '#DB95BF',
    opacity: 1,
    fillOpacity: 0
});
//Caroebe
var munCaroebe = L.geoJSON(caroebe, {
    color: '#C23F6A',
    opacity: 1,
    fillOpacity: 0
});
//Iracema
var munIracema = L.geoJSON(iracema, {
    color: '#3D5FBF',
    opacity: 1,
    fillOpacity: 0
});
//Mucajai
var munMucajai = L.geoJSON(mucajai, {
    color: '#294080',
    opacity: 1,
    fillOpacity: 0
});
//Normandia
var munNormandia = L.geoJSON(normandia, {
    color: '#F29135',
    opacity: 1,
    fillOpacity: 0
});
//Pacaraima
var munPacaraima = L.geoJSON(pacaraima, {
    color: '#35F24B',
    opacity: 1,
    fillOpacity: 0
});
//Rorainopolis
var munRorainopolis = L.geoJSON(rorainopolis, {
    color: '#C974CC',
    opacity: 1,
    fillOpacity: 0
});
//Sao Joao da Baliza
var munSJBaliza = L.geoJSON(sjBaliza, {
    color: '#FA82C6',
    opacity: 1,
    fillOpacity: 0
});
//Sao Luiz do Anaua
var munSLAnaua = L.geoJSON(slAnaua, {
    color: '#DBA759',
    opacity: 1,
    fillOpacity: 0
});
//Uiramuta
var munUiramuta = L.geoJSON(uiramuta, {
    color: '#FBA18B',
    opacity: 1,
    fillOpacity: 0
});

var municipios = L.layerGroup([munAltoAlegre, munAmajari, munBoaVista, munBonfim, munCanta, munCaracarai, munCaroebe, munIracema, munMucajai, munNormandia, munPacaraima, munRorainopolis, munSJBaliza, munSLAnaua, munUiramuta]);