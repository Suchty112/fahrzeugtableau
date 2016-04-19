// ==UserScript==
// @name        Fahrzeugtableau
// @namespace   Leitstellenspiel
// @include     http*://www.leitstellenspiel.de/*
// @version     dev
// @author      Eagle, ChaosKai93
// @grant       none
// ==/UserScript==

var scriptElement = document.createElement("script");
scriptElement.type = "text/javascript";
scriptElement.src = "http://localhost:8000/script.dev.js";
document.body.appendChild(scriptElement);
