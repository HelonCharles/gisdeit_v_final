<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>GIS-DEIT</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" crossorigin=""></script>

    <!----------------------Leaflet-ZoomBar---------------------------------->

    <link rel="stylesheet" type="text/css" href="stylesheets/L.Control.ZoomBar.css"/>
    <script type="text/javascript" src="js/L.Control.ZoomBar.js"></script>

<!----------------------Leaflet-ZoomBar---------------------------------->

    <!----------------------Leaflet-search---------------------------------->

    <script src="/assets/531cbf94/leaflet-search.js"></script>

    <!--API Maps JavaScript inline-->

    <script async src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
    </script>
    
    <!--Teste dia 03-10
    

    <link rel="stylesheet" href="./iconLayers.css"/>
    <script src="./iconLayers.js"></script>-->

    <!--
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>



    <!--Leaflet Draw Plugin-->

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/0.4.2/leaflet.draw.css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/0.4.2/leaflet.draw.js"></script>

    <!--Geojson Estado de Roraima-->
    <script src="./GeoJson/roraima/estadoDeRoraima.geojson"></script>

    <!--GeodJson rodovias estaduais-->
    <script src="./GeoJson/rodoviasEstaduais/rodEstAltoAlegre.geojson"></script>
    <script src="./GeoJson/rodoviasEstaduais/rodEstAmajari.geojson"></script>
    <script src="./GeoJson/rodoviasEstaduais/rodEstBoaVista.geojson"></script>
    <script src="./GeoJson/rodoviasEstaduais/rodEstBonfim.geojson"></script>
    <script src="./GeoJson/rodoviasEstaduais/rodEstCanta.geojson"></script>
    <script src="./GeoJson/rodoviasEstaduais/rodEstMucajai.geojson"></script>
    <script src="./GeoJson/rodoviasEstaduais/rodEstNormandia.geojson"></script>
    <script src="./GeoJson/rodoviasEstaduais/rodEstPacaraima.geojson"></script>
    <script src="./GeoJson/rodoviasEstaduais/rodEstUiramuta.geojson"></script>

    <!--GeodJson rodovias federais-->

    <script src="./GeoJson/rodoviasFederais/rodFedAmajari.geojson"></script>
    <script src="./GeoJson/rodoviasFederais/rodFedBoaVista.geojson"></script>
    <script src="./GeoJson/rodoviasFederais/rodFedBonfim.geojson"></script>
    <script src="./GeoJson/rodoviasFederais/rodFedCanta.geojson"></script>
    <script src="./GeoJson/rodoviasFederais/rodFedCaracarai.geojson"></script>
    <script src="./GeoJson/rodoviasFederais/rodFedCaroebe.geojson"></script>
    <script src="./GeoJson/rodoviasFederais/rodFedIracema.geojson"></script>
    <script src="./GeoJson/rodoviasFederais/rodFedMucajai.geojson"></script>
    <script src="./GeoJson/rodoviasFederais/rodFedNormandia.geojson"></script>
    <script src="./GeoJson/rodoviasFederais/rodFedPacaraima.geojson"></script>
    <script src="./GeoJson/rodoviasFederais/rodFedRorainopolis.geojson"></script>
    <script src="./GeoJson/rodoviasFederais/rodFedSJBaliza.geojson"></script>
    <script src="./GeoJson/rodoviasFederais/rodFedSLAnaua.geojson"></script>

    <!--GeodJson rodovias municipais-->

    <script src="./GeoJson/rodoviasVicMunicipais/rodVicMunAltoAlegre.geojson"></script>
    <script src="./GeoJson/rodoviasVicMunicipais/rodVicMunAmajari.geojson"></script>
    <script src="./GeoJson/rodoviasVicMunicipais/rodVicMunBoaVista.geojson"></script>
    <script src="./GeoJson/rodoviasVicMunicipais/rodVicMunBonfim.geojson"></script>
    <script src="./GeoJson/rodoviasVicMunicipais/rodVicMunCanta.geojson"></script>
    <script src="./GeoJson/rodoviasVicMunicipais/rodVicMunCaracarai.geojson"></script>
    <script src="./GeoJson/rodoviasVicMunicipais/rodVicMunCaroebe.geojson"></script>
    <script src="./GeoJson/rodoviasVicMunicipais/rodVicMunIracema.geojson"></script>
    <script src="./GeoJson/rodoviasVicMunicipais/rodVicMunMucajai.geojson"></script>
    <script src="./GeoJson/rodoviasVicMunicipais/rodVicMunNormandia.geojson"></script>
    <script src="./GeoJson/rodoviasVicMunicipais/rodVicMunPacaraima.geojson"></script>
    <script src="./GeoJson/rodoviasVicMunicipais/rodVicMunRorainopolis.geojson"></script>
    <script src="./GeoJson/rodoviasVicMunicipais/rodVicMunSJBaliza.geojson"></script>
    <script src="./GeoJson/rodoviasVicMunicipais/rodVicMunSLAnaua.geojson"></script>
    <script src="./GeoJson/rodoviasVicMunicipais/rodVicMunUiramuta.geojson"></script>

    <!--GeoJson municipios de RR-->

    <script src="./GeoJson/municipios/altoAlegre.geojson"></script>
    <script src="./GeoJson/municipios/amajari.geojson"></script>
    <script src="./GeoJson/municipios/boaVista.geojson"></script>
    <script src="./GeoJson/municipios/bonfim.geojson"></script>
    <script src="./GeoJson/municipios/canta.geojson"></script>
    <script src="./GeoJson/municipios/caracarai.geojson"></script>
    <script src="./GeoJson/municipios/caroebe.geojson"></script>
    <script src="./GeoJson/municipios/iracema.geojson"></script>
    <script src="./GeoJson/municipios/mucajai.geojson"></script>
    <script src="./GeoJson/municipios/normandia.geojson"></script>
    <script src="./GeoJson/municipios/pacaraima.geojson"></script>
    <script src="./GeoJson/municipios/rorainopolis.geojson"></script>
    <script src="./GeoJson/municipios/sjBaliza.geojson"></script>
    <script src="./GeoJson/municipios/slAnaua.geojson"></script>
    <script src="./GeoJson/municipios/uiramuta.geojson"></script>

    <!--GeoJson pontes-->
    
    <script src="./GeoJson/pontes/pontesDeConcreto.geojson"></script>
    <script src="./GeoJson/pontes/pontesDeMadeira.geojson"></script>


    <!--Biblioteca Leaflet-->
    
    <link rel="stylesheet" href="./Leaflet/leaflet.groupedlayercontrol.css">
    <script src="./Leaflet/leaflet.groupedlayercontrol.js"></script>

</head>
<body>
    
    <div class="container">
        
        <div id="logo">
            <img src="seinf.png">
        </div>

        <div id="nav">
            
                <h3 style="margin-left: 25%">DEIT - Departamento de Infraestrutura de Transporte<br>
                GISDEIT - Sistema de Informações Geográficas do DEIT</<h3>
            
            
        </div>
        <div id="main">
            <div id="map"></div>
        </div>
        <div id="sidebar">
                <div>
                    <div>
                        <h5 style="margin-left: 2%;">Abrir arquivo (Json/GeoJson - GEO)</h5>
                        <input style="margin-left: 2%;" type="file" id="arquivo" class="form-control">
                        <br>
                        <input style="margin-left: 2%;" class="btn btn-primary" type="button" onclick="removerLayJson()"  value="Remover Tema" id="remLay">
                    </div>

                    <div>
                        <h5 style="margin-left: 2%;">Abrir ShapeFile (.zip)</h5>
                        <input style="margin-left: 2%;" type="file" id="shap" class="form-control">
                        <br>
                        <input style="margin-left: 2%;" class="btn btn-primary" type="button" onclick="removerLayShap()"  value="Remover Tema" id="remLay">
                    </div>

                    <div>
                        <h5 style="margin-left: 2%;">Consulte por Coordenada</<h5>
                        <br><br>
                        <label style="margin-left: 0%;" for="latitude">Latitude</label>
                        <input style="margin-left: 6%;" type="text" class="form-control" id="latitude" name="latitude" placeholder="ex. 0.0000000000000000">
                        <br>
                        <label style="margin-left: 0;" for="longitude">Longitude</label>
                        <input style="margin-left: 1%;" type="text" class="form-control" id="longitude" name="longitude" placeholder="ex. -0.0000000000000000">
                        <br>
                        <input style="margin-left: 0;" type="submit" class="btn btn-primary" onclick="addMarcador()" value="Enviar" id="remLay">
                        <input style="margin-left: 0%;" class="btn btn-primary" type="button" onclick="removerTema()"  value="Remover Marcador" id="remLay">
                    </div>

                    <div>
                        <h5 style="margin-left: 2%;">Geoserver</h5>
                        <input style="margin-left: 2%;" type="file" id="shap" class="form-control">
                        <br>
                        <input style="margin-left: 2%;" class="btn btn-primary" type="button" onclick="removerLayShap()"  value="Remover Tema" id="remLay">
                    </div>
                    
                    <div>
                        <h5 style="margin-left: 2%;">Controle de Obras</h5>
                        <!--<input style="margin-left: 2%;" type="file" id="shap" class="form-control">
                        <br>
                        <input style="margin-left: 2%;" class="btn btn-primary" type="button" onclick="removerLayShap()"  value="Remover Tema" id="remLay">-->
                    </div>
        </div>
    </div>

    <!--<script>
        var sidebar = document.getElementById('sidebar');
        var button = document.getElementById('sidebar-button');

        button.addEventListener('click', function() {
            if (sidebar.style.display === 'none') {
                sidebar.style.display = 'block';
            } else {
                sidebar.style.display = 'none';
            }
        });
    </script>-->


    <script src="./itensSidebar/file.js"></script>
    <script src="./itensSidebar/consultaShap.js"></script>
    <script src="/itensSidebar/leaflet.shpfile.js"></script>
    <script src="/itensSidebar/shp.js"></script>
    <script src="/itensSidebar/bundle.js"></script>
    

    <!--<input type="button" onclick= "removeMap(google, osm)" value="Google Satélite">
    <input type="button" onclick="removeMap(osm, google)" value="Google Streets">-->
    
    <script src="./GeoJson/rodoviasEstaduais/codigosEst/rodEstaduais.js"></script>
    <script src="./GeoJson/rodoviasFederais/codigosFed/rodFederais.js"></script>
    <script src="./GeoJson/rodoviasVicMunicipais/codigosMun/rodMunicipais.js"></script>
    <script src="./GeoJson/municipios/codigos/municipios.js"></script>
    <script src="./GeoJson/pontes/codigos/pontes.js"></script>
    
    <script src="./mapa.js"></script>
    <script src="./GeoJson/roraima/estadoRoraima.js"></script>

    <script src="/assets/531cbf94/leaflet-search.js"></script>
    <script>
        var map = L.map("map", {
            center: [ 52.3727598, 4.8936041 ],
            zoom: 14,
        });
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "Map data ..."}).addTo(map);
        map.addControl(L.control.search());
    </script>

    <!-----Script para esconder e abrir o sidebar--->

    


</body>
</html>