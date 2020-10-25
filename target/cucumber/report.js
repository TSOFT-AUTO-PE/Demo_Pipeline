$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MiMovistar_FlujoRecargas.feature");
formatter.feature({
  "line": 1,
  "name": "Mi Movistar Flujo de Recargas",
  "description": "",
  "id": "mi-movistar-flujo-de-recargas",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 97,
  "name": "Recargas en Mi Movistar WEB PUBLICA (Generando automáticamente Token 2 URL)",
  "description": "",
  "id": "mi-movistar-flujo-de-recargas;recargas-en-mi-movistar-web-publica-(generando-automáticamente-token-2-url)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 96,
      "name": "@Test6"
    }
  ]
});
formatter.step({
  "line": 99,
  "name": "se genera la URL mediante el API_TEST_recargasVersion2",
  "keyword": "Given "
});
formatter.step({
  "line": 100,
  "name": "se ingresa en la URL el token generado \"\u003ccaso_prueba\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "se ingresara el email \"\u003ccaso_prueba\u003e\" y se da click en continuar",
  "keyword": "When "
});
formatter.step({
  "line": 102,
  "name": "se ingresa el numero de tarjeta \"\u003ccaso_prueba\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "se ingresa el mes de vencimiento \"\u003ccaso_prueba\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "se ingresa el anio de vencimiento \"\u003ccaso_prueba\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "se ingresa el codigo de verificacion \"\u003ccaso_prueba\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "se da click en el boton Pagar",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "se verifica que se hizo la recarga correcta.",
  "keyword": "Then "
});
formatter.examples({
  "line": 109,
  "name": "",
  "description": "",
  "id": "mi-movistar-flujo-de-recargas;recargas-en-mi-movistar-web-publica-(generando-automáticamente-token-2-url);",
  "rows": [
    {
      "cells": [
        "caso_prueba"
      ],
      "line": 110,
      "id": "mi-movistar-flujo-de-recargas;recargas-en-mi-movistar-web-publica-(generando-automáticamente-token-2-url);;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 111,
      "id": "mi-movistar-flujo-de-recargas;recargas-en-mi-movistar-web-publica-(generando-automáticamente-token-2-url);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 149353200,
  "status": "passed"
});
formatter.before({
  "duration": 8407327200,
  "status": "passed"
});
formatter.scenario({
  "line": 111,
  "name": "Recargas en Mi Movistar WEB PUBLICA (Generando automáticamente Token 2 URL)",
  "description": "",
  "id": "mi-movistar-flujo-de-recargas;recargas-en-mi-movistar-web-publica-(generando-automáticamente-token-2-url);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 96,
      "name": "@Test6"
    }
  ]
});
formatter.step({
  "line": 99,
  "name": "se genera la URL mediante el API_TEST_recargasVersion2",
  "keyword": "Given "
});
formatter.step({
  "line": 100,
  "name": "se ingresa en la URL el token generado \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "se ingresara el email \"1\" y se da click en continuar",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 102,
  "name": "se ingresa el numero de tarjeta \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "se ingresa el mes de vencimiento \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "se ingresa el anio de vencimiento \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "se ingresa el codigo de verificacion \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "se da click en el boton Pagar",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "se verifica que se hizo la recarga correcta.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 53
    }
  ],
  "location": "stepsRecargasHome.seGeneraLaURLMedianteElAPI_TEST_recargasVersion(int)"
});
formatter.result({
  "duration": 2542716500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 40
    }
  ],
  "location": "stepsRecargasHome.seIngresaEnLaURLElTokenGenerado(String)"
});
formatter.result({
  "duration": 45434839300,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d86.0.4240.75)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-I701UEL\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.75, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50090}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 481c3cd3a8f5c56462fd1b7c7bfd762e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.tsoft.bot.frontend.utility.ExtentReportUtil.takeScreenShot(ExtentReportUtil.java:111)\r\n\tat com.tsoft.bot.frontend.utility.ExtentReportUtil.stepFail(ExtentReportUtil.java:62)\r\n\tat com.tsoft.bot.frontend.pageobject.webMiMovistar.PageRecargasHome.ingresoDeUrlDelTokenGenerado(PageRecargasHome.java:47)\r\n\tat com.tsoft.bot.frontend.steps.webMiMovistar.stepsRecargasHome.seIngresaEnLaURLElTokenGenerado(stepsRecargasHome.java:14)\r\n\tat ✽.Given se ingresa en la URL el token generado \"1\"(MiMovistar_FlujoRecargas.feature:100)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    }
  ],
  "location": "stepsRecargasCorreo.seIngresaraElEmailYSeDaClickEnContinuar(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 33
    }
  ],
  "location": "stepsRecargasPago.seIngresaElNumeroDeTarjeta(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    }
  ],
  "location": "stepsRecargasPago.seIngresaElMesDeVencimiento(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 35
    }
  ],
  "location": "stepsRecargasPago.seIngresaElAnioDeVencimiento(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 38
    }
  ],
  "location": "stepsRecargasPago.seIngresaElCodigoDeVerificacion(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepsRecargasPago.seDaClickEnElBotonPagar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepsRecargasFinal.seVerificaQueSeHizoLaRecargaCorrecta()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 882397300,
  "status": "passed"
});
});