var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid ',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMap_1 = new ol.layer.Tile({
            'title': 'Google Map ',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_TriangulationGPSBoulemane_2 = new ol.format.GeoJSON();
var features_TriangulationGPSBoulemane_2 = format_TriangulationGPSBoulemane_2.readFeatures(json_TriangulationGPSBoulemane_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TriangulationGPSBoulemane_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TriangulationGPSBoulemane_2.addFeatures(features_TriangulationGPSBoulemane_2);
var lyr_TriangulationGPSBoulemane_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TriangulationGPSBoulemane_2, 
                style: style_TriangulationGPSBoulemane_2,
                interactive: true,
                title: '<img src="styles/legend/TriangulationGPSBoulemane_2.png" /> Triangulation GPS Boulemane'
            });
var format_TriangulationGPSSefrou_3 = new ol.format.GeoJSON();
var features_TriangulationGPSSefrou_3 = format_TriangulationGPSSefrou_3.readFeatures(json_TriangulationGPSSefrou_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TriangulationGPSSefrou_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TriangulationGPSSefrou_3.addFeatures(features_TriangulationGPSSefrou_3);
var lyr_TriangulationGPSSefrou_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TriangulationGPSSefrou_3, 
                style: style_TriangulationGPSSefrou_3,
                interactive: true,
                title: '<img src="styles/legend/TriangulationGPSSefrou_3.png" /> Triangulation GPS Sefrou'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GoogleMap_1.setVisible(true);lyr_TriangulationGPSBoulemane_2.setVisible(true);lyr_TriangulationGPSSefrou_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleMap_1,lyr_TriangulationGPSBoulemane_2,lyr_TriangulationGPSSefrou_3];
lyr_TriangulationGPSBoulemane_2.set('fieldAliases', {'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', });
lyr_TriangulationGPSSefrou_3.set('fieldAliases', {'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', });
lyr_TriangulationGPSBoulemane_2.set('fieldImages', {'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', });
lyr_TriangulationGPSSefrou_3.set('fieldImages', {'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', });
lyr_TriangulationGPSBoulemane_2.set('fieldLabels', {'field_1': 'no label', 'field_2': 'no label', 'field_3': 'no label', });
lyr_TriangulationGPSSefrou_3.set('fieldLabels', {'field_1': 'no label', 'field_2': 'no label', 'field_3': 'no label', });
lyr_TriangulationGPSSefrou_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});