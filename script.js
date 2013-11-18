"use strict";

var factorialForm = document.querySelector('#factorial-form');
var inputNumber   = document.querySelector('#factorial-form input[type=number]');
var results       = document.querySelector('#results');
var worker        = new Worker('factorial.js');

worker.onmessage = function(event) {
    var result = event.data;

    var li = "<li>Factorial (" + result.n + "): " + result.factorial + "</li>";

    results.innerHTML += li;
};

var postWorkerMessage = function(event) {
    event.preventDefault();
    results.innerHTML = "";

    worker.postMessage(inputNumber.value);
};

factorialForm.addEventListener('submit', postWorkerMessage);
