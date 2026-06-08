var wms_layers = [];


        var lyr_2gisMap_0 = new ol.layer.Tile({
            'title': '2gis Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1.1'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'гРАНИЦА',
                interactive: false,
                title: '<img src="styles/legend/_3.png" /> гРАНИЦА'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'Ошибки',
                interactive: false,
                title: '<img src="styles/legend/_4.png" /> Ошибки'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: 'Дорожные знаки',
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> Дорожные знаки'
            });

lyr_2gisMap_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);
var layersList = [lyr_2gisMap_0,lyr_GoogleRoad_1,lyr_OSMStandard_2,lyr__3,lyr__4,lyr__5];
lyr__3.set('fieldAliases', {'FID': 'FID', });
lyr__4.set('fieldAliases', {'id': 'id', });
lyr__5.set('fieldAliases', {'id': 'Номер по таблице:', 'NAME': 'Название знака:', 'name_new': 'Правильное название:', 'status': 'Статус:', 'foto': 'Фото (в том числе с ошибкой):', 'foto_2': 'Фото (с другой стороны знака или исправленное)/ комментарий:', 'who': 'Принадлежность дороги:', });
lyr__3.set('fieldImages', {'FID': 'TextEdit', });
lyr__4.set('fieldImages', {'id': 'TextEdit', });
lyr__5.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'name_new': 'TextEdit', 'status': 'TextEdit', 'foto': 'TextEdit', 'foto_2': 'TextEdit', 'who': 'TextEdit', });
lyr__3.set('fieldLabels', {'FID': 'no label', });
lyr__4.set('fieldLabels', {'id': 'no label', });
lyr__5.set('fieldLabels', {'id': 'hidden field', 'NAME': 'inline label - always visible', 'name_new': 'inline label - visible with data', 'status': 'inline label - always visible', 'foto': 'inline label - visible with data', 'foto_2': 'inline label - visible with data', 'who': 'inline label - always visible', });
lyr__5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});