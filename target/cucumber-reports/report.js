$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/FeatureTest01.feature");
formatter.feature({
  "line": 1,
  "name": "Regresion navegabilidad MeLi",
  "description": "",
  "id": "regresion-navegabilidad-meli",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#AF-------------------------------Flujo Roles-----------------------------------------------------------------------------"
    }
  ],
  "line": 4,
  "name": "Navegabilidad de categorias en MercadoLibre",
  "description": "",
  "id": "regresion-navegabilidad-meli;navegabilidad-de-categorias-en-mercadolibre",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "El Usuario ingresa al sitio de MercadoLibre \"https://www.mercadolibre.com.ar/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "El Usuario desplega el menu Categorias haciend clic y se visualiza el submenu",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "El Usuario hace clic en el submenu \"\u003csubmenu\u003e\" y visualiza el desplegable",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "El Usuario hace clic en el deplegable \"\u003cdesplegable\u003e\" y visauliza la categoria solicitada",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "El Usuario selecciona la ubicacion Capital Federal para filtar la busqueda por region",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Finalmente el Usuario selecciona una publicacion y visualiza su detalle",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "regresion-navegabilidad-meli;navegabilidad-de-categorias-en-mercadolibre;",
  "rows": [
    {
      "cells": [
        "ambiente",
        "submenu",
        "desplegable"
      ],
      "line": 14,
      "id": "regresion-navegabilidad-meli;navegabilidad-de-categorias-en-mercadolibre;;1"
    },
    {
      "cells": [
        "homo1",
        "Hogar y Electrodomésticos",
        "Climatización"
      ],
      "line": 15,
      "id": "regresion-navegabilidad-meli;navegabilidad-de-categorias-en-mercadolibre;;2"
    },
    {
      "cells": [
        "homo1",
        "Tecnología",
        "Celulares y Smartphones"
      ],
      "line": 16,
      "id": "regresion-navegabilidad-meli;navegabilidad-de-categorias-en-mercadolibre;;3"
    },
    {
      "cells": [
        "homo1",
        "Deportes y Aire Libre",
        "Bicicletas"
      ],
      "line": 17,
      "id": "regresion-navegabilidad-meli;navegabilidad-de-categorias-en-mercadolibre;;4"
    },
    {
      "cells": [
        "homo1",
        "Herramientas e Industria",
        "Industria Textil"
      ],
      "line": 18,
      "id": "regresion-navegabilidad-meli;navegabilidad-de-categorias-en-mercadolibre;;5"
    },
    {
      "cells": [
        "homo1",
        "Juguetes y Bebés",
        "Cuarto del Bebé"
      ],
      "line": 19,
      "id": "regresion-navegabilidad-meli;navegabilidad-de-categorias-en-mercadolibre;;6"
    },
    {
      "cells": [
        "homo1",
        "Libros",
        "Historia"
      ],
      "line": 20,
      "id": "regresion-navegabilidad-meli;navegabilidad-de-categorias-en-mercadolibre;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5488444900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Navegabilidad de categorias en MercadoLibre",
  "description": "",
  "id": "regresion-navegabilidad-meli;navegabilidad-de-categorias-en-mercadolibre;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "El Usuario ingresa al sitio de MercadoLibre \"https://www.mercadolibre.com.ar/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "El Usuario desplega el menu Categorias haciend clic y se visualiza el submenu",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "El Usuario hace clic en el submenu \"Hogar y Electrodomésticos\" y visualiza el desplegable",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "El Usuario hace clic en el deplegable \"Climatización\" y visauliza la categoria solicitada",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "El Usuario selecciona la ubicacion Capital Federal para filtar la busqueda por region",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Finalmente el Usuario selecciona una publicacion y visualiza su detalle",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.mercadolibre.com.ar/",
      "offset": 45
    }
  ],
  "location": "testStep.el_Usuario_ingresa_al_sitio_de_MercadoLibre(String)"
});
formatter.result({
  "duration": 2091323100,
  "status": "passed"
});
formatter.match({
  "location": "testStep.el_Usuario_desplega_el_menu_Categorias_haciend_clic_y_se_visualiza_el_submenu()"
});
formatter.result({
  "duration": 1136685700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hogar y Electrodomésticos",
      "offset": 36
    }
  ],
  "location": "testStep.el_Usuario_hace_clic_en_el_submenu_y_visualiza_el_desplegable(String)"
});
formatter.result({
  "duration": 3194372700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Climatización",
      "offset": 39
    }
  ],
  "location": "testStep.el_Usuario_hace_clic_en_el_deplegable_y_visauliza_la_categoria_solicitada(String)"
});
formatter.result({
  "duration": 2883356400,
  "status": "passed"
});
formatter.match({
  "location": "testStep.el_Usuario_selecciona_la_ubicacion_Capital_Federal_para_filtar_la_busqueda_por_region()"
});
formatter.result({
  "duration": 3202403900,
  "status": "passed"
});
formatter.match({
  "location": "testStep.finalmente_el_Usuario_selecciona_una_publicacion_y_visualiza_su_detalle()"
});
formatter.result({
  "duration": 4473948300,
  "status": "passed"
});
formatter.after({
  "duration": 2612020400,
  "status": "passed"
});
formatter.before({
  "duration": 5020877300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Navegabilidad de categorias en MercadoLibre",
  "description": "",
  "id": "regresion-navegabilidad-meli;navegabilidad-de-categorias-en-mercadolibre;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "El Usuario ingresa al sitio de MercadoLibre \"https://www.mercadolibre.com.ar/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "El Usuario desplega el menu Categorias haciend clic y se visualiza el submenu",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "El Usuario hace clic en el submenu \"Tecnología\" y visualiza el desplegable",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "El Usuario hace clic en el deplegable \"Celulares y Smartphones\" y visauliza la categoria solicitada",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "El Usuario selecciona la ubicacion Capital Federal para filtar la busqueda por region",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Finalmente el Usuario selecciona una publicacion y visualiza su detalle",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.mercadolibre.com.ar/",
      "offset": 45
    }
  ],
  "location": "testStep.el_Usuario_ingresa_al_sitio_de_MercadoLibre(String)"
});
formatter.result({
  "duration": 1962716500,
  "status": "passed"
});
formatter.match({
  "location": "testStep.el_Usuario_desplega_el_menu_Categorias_haciend_clic_y_se_visualiza_el_submenu()"
});
formatter.result({
  "duration": 1123824600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tecnología",
      "offset": 36
    }
  ],
  "location": "testStep.el_Usuario_hace_clic_en_el_submenu_y_visualiza_el_desplegable(String)"
});
formatter.result({
  "duration": 2678506800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Celulares y Smartphones",
      "offset": 39
    }
  ],
  "location": "testStep.el_Usuario_hace_clic_en_el_deplegable_y_visauliza_la_categoria_solicitada(String)"
});
formatter.result({
  "duration": 3182161100,
  "status": "passed"
});
formatter.match({
  "location": "testStep.el_Usuario_selecciona_la_ubicacion_Capital_Federal_para_filtar_la_busqueda_por_region()"
});
formatter.result({
  "duration": 3749499500,
  "status": "passed"
});
formatter.match({
  "location": "testStep.finalmente_el_Usuario_selecciona_una_publicacion_y_visualiza_su_detalle()"
});
formatter.result({
  "duration": 4275306500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".item\\-title__primary\"}\n  (Session info: chrome\u003d76.0.3809.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-J587MH3\u0027, ip: \u0027192.168.0.56\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.132, chrome: {chromedriverVersion: 76.0.3809.126 (d80a294506b4..., userDataDir: C:\\Users\\levia\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52590}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: bd323d9a949649bacaadcf08ccf5152f\n*** Element info: {Using\u003dclass name, value\u003ditem-title__primary}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinition.testStep.finalmente_el_Usuario_selecciona_una_publicacion_y_visualiza_su_detalle(testStep.java:137)\r\n\tat ✽.And Finalmente el Usuario selecciona una publicacion y visualiza su detalle(./Features/FeatureTest01.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2593922500,
  "status": "passed"
});
formatter.before({
  "duration": 5019496900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Navegabilidad de categorias en MercadoLibre",
  "description": "",
  "id": "regresion-navegabilidad-meli;navegabilidad-de-categorias-en-mercadolibre;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "El Usuario ingresa al sitio de MercadoLibre \"https://www.mercadolibre.com.ar/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "El Usuario desplega el menu Categorias haciend clic y se visualiza el submenu",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "El Usuario hace clic en el submenu \"Deportes y Aire Libre\" y visualiza el desplegable",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "El Usuario hace clic en el deplegable \"Bicicletas\" y visauliza la categoria solicitada",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "El Usuario selecciona la ubicacion Capital Federal para filtar la busqueda por region",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Finalmente el Usuario selecciona una publicacion y visualiza su detalle",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.mercadolibre.com.ar/",
      "offset": 45
    }
  ],
  "location": "testStep.el_Usuario_ingresa_al_sitio_de_MercadoLibre(String)"
});
formatter.result({
  "duration": 1962384200,
  "status": "passed"
});
formatter.match({
  "location": "testStep.el_Usuario_desplega_el_menu_Categorias_haciend_clic_y_se_visualiza_el_submenu()"
});
formatter.result({
  "duration": 1124559300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deportes y Aire Libre",
      "offset": 36
    }
  ],
  "location": "testStep.el_Usuario_hace_clic_en_el_submenu_y_visualiza_el_desplegable(String)"
});
formatter.result({
  "duration": 2176716300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bicicletas",
      "offset": 39
    }
  ],
  "location": "testStep.el_Usuario_hace_clic_en_el_deplegable_y_visauliza_la_categoria_solicitada(String)"
});
formatter.result({
  "duration": 2941837900,
  "status": "passed"
});
formatter.match({
  "location": "testStep.el_Usuario_selecciona_la_ubicacion_Capital_Federal_para_filtar_la_busqueda_por_region()"
});
formatter.result({
  "duration": 3266930500,
  "status": "passed"
});
formatter.match({
  "location": "testStep.finalmente_el_Usuario_selecciona_una_publicacion_y_visualiza_su_detalle()"
});
formatter.result({
  "duration": 4332463800,
  "error_message": "junit.framework.ComparisonFailure: El precio del producto seleccionado no es el esperado expected:\u003c1[0.7]99\u003e but was:\u003c1[7.9]99\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat stepDefinition.testStep.finalmente_el_Usuario_selecciona_una_publicacion_y_visualiza_su_detalle(testStep.java:141)\r\n\tat ✽.And Finalmente el Usuario selecciona una publicacion y visualiza su detalle(./Features/FeatureTest01.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2607619100,
  "status": "passed"
});
formatter.before({
  "duration": 5013513800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Navegabilidad de categorias en MercadoLibre",
  "description": "",
  "id": "regresion-navegabilidad-meli;navegabilidad-de-categorias-en-mercadolibre;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "El Usuario ingresa al sitio de MercadoLibre \"https://www.mercadolibre.com.ar/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "El Usuario desplega el menu Categorias haciend clic y se visualiza el submenu",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "El Usuario hace clic en el submenu \"Herramientas e Industria\" y visualiza el desplegable",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "El Usuario hace clic en el deplegable \"Industria Textil\" y visauliza la categoria solicitada",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "El Usuario selecciona la ubicacion Capital Federal para filtar la busqueda por region",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Finalmente el Usuario selecciona una publicacion y visualiza su detalle",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.mercadolibre.com.ar/",
      "offset": 45
    }
  ],
  "location": "testStep.el_Usuario_ingresa_al_sitio_de_MercadoLibre(String)"
});
formatter.result({
  "duration": 1976266100,
  "status": "passed"
});
formatter.match({
  "location": "testStep.el_Usuario_desplega_el_menu_Categorias_haciend_clic_y_se_visualiza_el_submenu()"
});
formatter.result({
  "duration": 1126245200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Herramientas e Industria",
      "offset": 36
    }
  ],
  "location": "testStep.el_Usuario_hace_clic_en_el_submenu_y_visualiza_el_desplegable(String)"
});
formatter.result({
  "duration": 2667226100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Industria Textil",
      "offset": 39
    }
  ],
  "location": "testStep.el_Usuario_hace_clic_en_el_deplegable_y_visauliza_la_categoria_solicitada(String)"
});
formatter.result({
  "duration": 2699521400,
  "status": "passed"
});
formatter.match({
  "location": "testStep.el_Usuario_selecciona_la_ubicacion_Capital_Federal_para_filtar_la_busqueda_por_region()"
});
formatter.result({
  "duration": 3123468300,
  "status": "passed"
});
formatter.match({
  "location": "testStep.finalmente_el_Usuario_selecciona_una_publicacion_y_visualiza_su_detalle()"
});
formatter.result({
  "duration": 4225538000,
  "status": "passed"
});
formatter.after({
  "duration": 2613088300,
  "status": "passed"
});
formatter.before({
  "duration": 5007957900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Navegabilidad de categorias en MercadoLibre",
  "description": "",
  "id": "regresion-navegabilidad-meli;navegabilidad-de-categorias-en-mercadolibre;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "El Usuario ingresa al sitio de MercadoLibre \"https://www.mercadolibre.com.ar/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "El Usuario desplega el menu Categorias haciend clic y se visualiza el submenu",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "El Usuario hace clic en el submenu \"Juguetes y Bebés\" y visualiza el desplegable",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "El Usuario hace clic en el deplegable \"Cuarto del Bebé\" y visauliza la categoria solicitada",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "El Usuario selecciona la ubicacion Capital Federal para filtar la busqueda por region",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Finalmente el Usuario selecciona una publicacion y visualiza su detalle",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.mercadolibre.com.ar/",
      "offset": 45
    }
  ],
  "location": "testStep.el_Usuario_ingresa_al_sitio_de_MercadoLibre(String)"
});
formatter.result({
  "duration": 2001776900,
  "status": "passed"
});
formatter.match({
  "location": "testStep.el_Usuario_desplega_el_menu_Categorias_haciend_clic_y_se_visualiza_el_submenu()"
});
formatter.result({
  "duration": 1124593600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Juguetes y Bebés",
      "offset": 36
    }
  ],
  "location": "testStep.el_Usuario_hace_clic_en_el_submenu_y_visualiza_el_desplegable(String)"
});
formatter.result({
  "duration": 2692696400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cuarto del Bebé",
      "offset": 39
    }
  ],
  "location": "testStep.el_Usuario_hace_clic_en_el_deplegable_y_visauliza_la_categoria_solicitada(String)"
});
formatter.result({
  "duration": 3055870700,
  "status": "passed"
});
formatter.match({
  "location": "testStep.el_Usuario_selecciona_la_ubicacion_Capital_Federal_para_filtar_la_busqueda_por_region()"
});
formatter.result({
  "duration": 3256416500,
  "status": "passed"
});
formatter.match({
  "location": "testStep.finalmente_el_Usuario_selecciona_una_publicacion_y_visualiza_su_detalle()"
});
formatter.result({
  "duration": 5390794500,
  "error_message": "junit.framework.ComparisonFailure: El precio del producto seleccionado no es el esperado expected:\u003c[7.499]\u003e but was:\u003c[10.124]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat stepDefinition.testStep.finalmente_el_Usuario_selecciona_una_publicacion_y_visualiza_su_detalle(testStep.java:141)\r\n\tat ✽.And Finalmente el Usuario selecciona una publicacion y visualiza su detalle(./Features/FeatureTest01.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2611288900,
  "status": "passed"
});
formatter.before({
  "duration": 5012591600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Navegabilidad de categorias en MercadoLibre",
  "description": "",
  "id": "regresion-navegabilidad-meli;navegabilidad-de-categorias-en-mercadolibre;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "El Usuario ingresa al sitio de MercadoLibre \"https://www.mercadolibre.com.ar/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "El Usuario desplega el menu Categorias haciend clic y se visualiza el submenu",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "El Usuario hace clic en el submenu \"Libros\" y visualiza el desplegable",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "El Usuario hace clic en el deplegable \"Historia\" y visauliza la categoria solicitada",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "El Usuario selecciona la ubicacion Capital Federal para filtar la busqueda por region",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Finalmente el Usuario selecciona una publicacion y visualiza su detalle",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.mercadolibre.com.ar/",
      "offset": 45
    }
  ],
  "location": "testStep.el_Usuario_ingresa_al_sitio_de_MercadoLibre(String)"
});
formatter.result({
  "duration": 2036624600,
  "status": "passed"
});
formatter.match({
  "location": "testStep.el_Usuario_desplega_el_menu_Categorias_haciend_clic_y_se_visualiza_el_submenu()"
});
formatter.result({
  "duration": 1140955700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Libros",
      "offset": 36
    }
  ],
  "location": "testStep.el_Usuario_hace_clic_en_el_submenu_y_visualiza_el_desplegable(String)"
});
formatter.result({
  "duration": 2682826600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Historia",
      "offset": 39
    }
  ],
  "location": "testStep.el_Usuario_hace_clic_en_el_deplegable_y_visauliza_la_categoria_solicitada(String)"
});
formatter.result({
  "duration": 3412203600,
  "error_message": "junit.framework.ComparisonFailure: El parametro de busqueda no es el esperado expected:\u003c[]Historia\u003e but was:\u003c[Libros de Ciencias Sociales ]Historia\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat stepDefinition.testStep.el_Usuario_hace_clic_en_el_deplegable_y_visauliza_la_categoria_solicitada(testStep.java:108)\r\n\tat ✽.And El Usuario hace clic en el deplegable \"Historia\" y visauliza la categoria solicitada(./Features/FeatureTest01.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "testStep.el_Usuario_selecciona_la_ubicacion_Capital_Federal_para_filtar_la_busqueda_por_region()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "testStep.finalmente_el_Usuario_selecciona_una_publicacion_y_visualiza_su_detalle()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2614134400,
  "status": "passed"
});
});