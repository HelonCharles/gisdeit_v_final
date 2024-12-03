var pontesCONC = L.geoJson(pontesCONCRETO, {
    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + features.properties.Name + '<br>' + 'Latitude: ' + features.geometry.coordinates[1] + '<br>' + 'Longitude: ' + features.geometry.coordinates[0]);

        /*layer.bindPopup('<tr><td>' + features.properties.Name + '</td></td>' + '<tr><td>' + 'Latitude: ' + features.geometry.coordinates[1] + '</td></td>' + '<tr><td>' + 'Longitude: ' + features.geometry.coordinates[0] + '</td></tr>');*/

        /*var table = "<table>";

        for (var Name in features.properties) {
            table += "<tr><td>" + Name + "</td></td>" + features.properties[Name] + "</td></tr>";
        }

        table += "</table>";

        layer.bindPopup(table);*/
    }
});

console.log(pontesCONCRETO);

var pontesMAD = L.geoJson(pontesMAD, {
    onEachFeature: function( features, layer){
              
        layer.bindPopup('<strong>' + features.properties.Name + '<br>' + 'Latitude: ' + features.geometry.coordinates[1] + '<br>' + 'Longitude: ' + features.geometry.coordinates[0]);

        /*var table = "<table>";

        for (var Name in features.properties) {
            table += "<tr><td>" + Name + "</td></td>" + features.properties[Name] + "</td></tr>";
        }

        table += "</table>";

        layer.bindPopup(table);*/

    }
});

var pontes = L.layerGroup([pontesCONC, pontesMAD]);
var controleDesenho = L.Control.Draw();