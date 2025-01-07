var wms_layers = [];

var format_Region1_0 = new ol.format.GeoJSON();
var features_Region1_0 = format_Region1_0.readFeatures(json_Region1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Region1_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Region1_0.addFeatures(features_Region1_0);
var lyr_Region1_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Region1_0, 
                style: style_Region1_0,
                popuplayertitle: "Region 1",
                interactive: true,
    title: 'Region 1<br />\
    <img src="styles/legend/Region1_0_0.png" /> Adams<br />\
    <img src="styles/legend/Region1_0_1.png" /> Agno<br />\
    <img src="styles/legend/Region1_0_2.png" /> Agoo<br />\
    <img src="styles/legend/Region1_0_3.png" /> Aguilar<br />\
    <img src="styles/legend/Region1_0_4.png" /> Alaminos City<br />\
    <img src="styles/legend/Region1_0_5.png" /> Alcala<br />\
    <img src="styles/legend/Region1_0_6.png" /> Alilem<br />\
    <img src="styles/legend/Region1_0_7.png" /> Anda<br />\
    <img src="styles/legend/Region1_0_8.png" /> Aringay<br />\
    <img src="styles/legend/Region1_0_9.png" /> Asingan<br />\
    <img src="styles/legend/Region1_0_10.png" /> Bacarra<br />\
    <img src="styles/legend/Region1_0_11.png" /> Bacnotan<br />\
    <img src="styles/legend/Region1_0_12.png" /> Badoc<br />\
    <img src="styles/legend/Region1_0_13.png" /> Bagulin<br />\
    <img src="styles/legend/Region1_0_14.png" /> Balaoan<br />\
    <img src="styles/legend/Region1_0_15.png" /> Balungao<br />\
    <img src="styles/legend/Region1_0_16.png" /> Banayoyo<br />\
    <img src="styles/legend/Region1_0_17.png" /> Bangar<br />\
    <img src="styles/legend/Region1_0_18.png" /> Bangui<br />\
    <img src="styles/legend/Region1_0_19.png" /> Bani<br />\
    <img src="styles/legend/Region1_0_20.png" /> Banna<br />\
    <img src="styles/legend/Region1_0_21.png" /> Bantay<br />\
    <img src="styles/legend/Region1_0_22.png" /> Basista<br />\
    <img src="styles/legend/Region1_0_23.png" /> Batac City<br />\
    <img src="styles/legend/Region1_0_24.png" /> Bauang<br />\
    <img src="styles/legend/Region1_0_25.png" /> Bautista<br />\
    <img src="styles/legend/Region1_0_26.png" /> Bayambang<br />\
    <img src="styles/legend/Region1_0_27.png" /> Binalonan<br />\
    <img src="styles/legend/Region1_0_28.png" /> Binmaley<br />\
    <img src="styles/legend/Region1_0_29.png" /> Bolinao<br />\
    <img src="styles/legend/Region1_0_30.png" /> Bugallon<br />\
    <img src="styles/legend/Region1_0_31.png" /> Burgos (IN)<br />\
    <img src="styles/legend/Region1_0_32.png" /> Burgos (IS)<br />\
    <img src="styles/legend/Region1_0_33.png" /> Burgos (LU)<br />\
    <img src="styles/legend/Region1_0_34.png" /> Burgos (P)<br />\
    <img src="styles/legend/Region1_0_35.png" /> Caba<br />\
    <img src="styles/legend/Region1_0_36.png" /> Cabugao<br />\
    <img src="styles/legend/Region1_0_37.png" /> Calasiao<br />\
    <img src="styles/legend/Region1_0_38.png" /> Candon City<br />\
    <img src="styles/legend/Region1_0_39.png" /> Caoayan<br />\
    <img src="styles/legend/Region1_0_40.png" /> Carasi<br />\
    <img src="styles/legend/Region1_0_41.png" /> Cervantes<br />\
    <img src="styles/legend/Region1_0_42.png" /> Currimao<br />\
    <img src="styles/legend/Region1_0_43.png" /> Dagupan City<br />\
    <img src="styles/legend/Region1_0_44.png" /> Dasol<br />\
    <img src="styles/legend/Region1_0_45.png" /> Dingras<br />\
    <img src="styles/legend/Region1_0_46.png" /> Dumalneg<br />\
    <img src="styles/legend/Region1_0_47.png" /> Galimuyod<br />\
    <img src="styles/legend/Region1_0_48.png" /> Gregorio Del Pilar<br />\
    <img src="styles/legend/Region1_0_49.png" /> Infanta<br />\
    <img src="styles/legend/Region1_0_50.png" /> Labrador<br />\
    <img src="styles/legend/Region1_0_51.png" /> Laoac<br />\
    <img src="styles/legend/Region1_0_52.png" /> Laoag City<br />\
    <img src="styles/legend/Region1_0_53.png" /> Lidlidda<br />\
    <img src="styles/legend/Region1_0_54.png" /> Lingayen<br />\
    <img src="styles/legend/Region1_0_55.png" /> Luna<br />\
    <img src="styles/legend/Region1_0_56.png" /> Mabini<br />\
    <img src="styles/legend/Region1_0_57.png" /> Magsingal<br />\
    <img src="styles/legend/Region1_0_58.png" /> Malasiqui<br />\
    <img src="styles/legend/Region1_0_59.png" /> Manaoag<br />\
    <img src="styles/legend/Region1_0_60.png" /> Mangaldan<br />\
    <img src="styles/legend/Region1_0_61.png" /> Mangatarem<br />\
    <img src="styles/legend/Region1_0_62.png" /> Mapandan<br />\
    <img src="styles/legend/Region1_0_63.png" /> Marcos<br />\
    <img src="styles/legend/Region1_0_64.png" /> Nagbukel<br />\
    <img src="styles/legend/Region1_0_65.png" /> Naguilian<br />\
    <img src="styles/legend/Region1_0_66.png" /> Narvacan<br />\
    <img src="styles/legend/Region1_0_67.png" /> Natividad<br />\
    <img src="styles/legend/Region1_0_68.png" /> Nueva Era<br />\
    <img src="styles/legend/Region1_0_69.png" /> Pagudpud<br />\
    <img src="styles/legend/Region1_0_70.png" /> Paoay<br />\
    <img src="styles/legend/Region1_0_71.png" /> Paoay Lake<br />\
    <img src="styles/legend/Region1_0_72.png" /> Pasuquin<br />\
    <img src="styles/legend/Region1_0_73.png" /> Piddig<br />\
    <img src="styles/legend/Region1_0_74.png" /> Pinili<br />\
    <img src="styles/legend/Region1_0_75.png" /> Pozzorubio<br />\
    <img src="styles/legend/Region1_0_76.png" /> Pugo<br />\
    <img src="styles/legend/Region1_0_77.png" /> Quirino<br />\
    <img src="styles/legend/Region1_0_78.png" /> Rosales<br />\
    <img src="styles/legend/Region1_0_79.png" /> Rosario<br />\
    <img src="styles/legend/Region1_0_80.png" /> Salcedo<br />\
    <img src="styles/legend/Region1_0_81.png" /> San Carlos City<br />\
    <img src="styles/legend/Region1_0_82.png" /> San Emilio<br />\
    <img src="styles/legend/Region1_0_83.png" /> San Esteban<br />\
    <img src="styles/legend/Region1_0_84.png" /> San Fabian<br />\
    <img src="styles/legend/Region1_0_85.png" /> San Fernando City<br />\
    <img src="styles/legend/Region1_0_86.png" /> San Gabriel<br />\
    <img src="styles/legend/Region1_0_87.png" /> San Ildefonso<br />\
    <img src="styles/legend/Region1_0_88.png" /> San Jacinto<br />\
    <img src="styles/legend/Region1_0_89.png" /> San Juan<br />\
    <img src="styles/legend/Region1_0_90.png" /> San Manuel<br />\
    <img src="styles/legend/Region1_0_91.png" /> San Nicolas (IN)<br />\
    <img src="styles/legend/Region1_0_92.png" /> San Nicolas (P)<br />\
    <img src="styles/legend/Region1_0_93.png" /> San Quintin<br />\
    <img src="styles/legend/Region1_0_94.png" /> San Vicente<br />\
    <img src="styles/legend/Region1_0_95.png" /> Santa<br />\
    <img src="styles/legend/Region1_0_96.png" /> Santa Barbara<br />\
    <img src="styles/legend/Region1_0_97.png" /> Santa Catalina<br />\
    <img src="styles/legend/Region1_0_98.png" /> Santa Cruz<br />\
    <img src="styles/legend/Region1_0_99.png" /> Santa Lucia<br />\
    <img src="styles/legend/Region1_0_100.png" /> Santa Maria (IS)<br />\
    <img src="styles/legend/Region1_0_101.png" /> Santa Maria (P)<br />\
    <img src="styles/legend/Region1_0_102.png" /> Santiago<br />\
    <img src="styles/legend/Region1_0_103.png" /> Santo Domingo<br />\
    <img src="styles/legend/Region1_0_104.png" /> Santo Tomas<br />\
    <img src="styles/legend/Region1_0_105.png" /> Santol<br />\
    <img src="styles/legend/Region1_0_106.png" /> Sarrat<br />\
    <img src="styles/legend/Region1_0_107.png" /> Sigay<br />\
    <img src="styles/legend/Region1_0_108.png" /> Sinait<br />\
    <img src="styles/legend/Region1_0_109.png" /> Sison<br />\
    <img src="styles/legend/Region1_0_110.png" /> Solsona<br />\
    <img src="styles/legend/Region1_0_111.png" /> Sual<br />\
    <img src="styles/legend/Region1_0_112.png" /> Sudipen<br />\
    <img src="styles/legend/Region1_0_113.png" /> Sugpon<br />\
    <img src="styles/legend/Region1_0_114.png" /> Suyo<br />\
    <img src="styles/legend/Region1_0_115.png" /> Tagudin<br />\
    <img src="styles/legend/Region1_0_116.png" /> Tayug<br />\
    <img src="styles/legend/Region1_0_117.png" /> Tubao<br />\
    <img src="styles/legend/Region1_0_118.png" /> Umingan<br />\
    <img src="styles/legend/Region1_0_119.png" /> Urbiztondo<br />\
    <img src="styles/legend/Region1_0_120.png" /> Urdaneta City<br />\
    <img src="styles/legend/Region1_0_121.png" /> Vigan City<br />\
    <img src="styles/legend/Region1_0_122.png" /> Villasis<br />\
    <img src="styles/legend/Region1_0_123.png" /> Vintar<br />\
    <img src="styles/legend/Region1_0_124.png" /> <br />'
        });

lyr_Region1_0.setVisible(true);
var layersList = [lyr_Region1_0];
lyr_Region1_0.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', 'WS_2023': 'WS_2023', 'WS_2024': 'WS_2024', });
lyr_Region1_0.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'WS_2023': 'Range', 'WS_2024': 'Range', });
lyr_Region1_0.set('fieldLabels', {'ID_0': 'hidden field', 'ISO': 'hidden field', 'NAME_0': 'hidden field', 'ID_1': 'hidden field', 'NAME_1': 'hidden field', 'ID_2': 'hidden field', 'NAME_2': 'header label - visible with data', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'VARNAME_2': 'hidden field', 'WS_2023': 'inline label - visible with data', 'WS_2024': 'inline label - visible with data', });
lyr_Region1_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});