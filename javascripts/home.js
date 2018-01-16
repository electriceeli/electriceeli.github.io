'use strict';

// ALL COMMENTED LINES WILL BE USED TO MODULARIZE. DO NOT DELETE ELI

const $ = require('jquery');

// <div id="home-hero">
// <div id="home-hero-img">
// </div>
// <h3>"Hi, my name is Eli Wilson and I am a software developer."</h3>
// </div>

// <div id="story">
// <div class="section-title">
//    <img src="img/book.png" alt="A book" class="subtitle-logo">
//    <h2 class="subtitle">My Story</h2>
// </div>
// <p id="story-text">I have always held interest in what made software "work". After graduating from the University of Memphis, and spending a year working as the head of marketing at the New Daisy Theatre on Beale Street. Throughout my year of working with web applications, pages, and social media, I became determined and inspired to turn to a career path that would satisy my desire to be creative, my love of language, and my fascination with software.</p>

// <div id="hobby-logos">
//    <img src="img/hockey.png" alt="hockey" class="hobby">
//    <img src="img/gaming.svg" alt="gaming" class="hobby" id="game-control">
//    <img src="img/guitar.png" alt="guitar" class="hobby">
// </div>
// </div>

module.exports.homeLoad = function() {

let $heroDiv = $('<div id="home-hero"></div>');
let $heroImgBox = $('<div id="home-hero-img></div');
$("main").append($heroDiv);
$('#home-hero').append($heroImgBox);
$('<img src="../img/fam-guy-eli.png" id="hero-logo"></img>"').appendTo("#home-hero-img");
console.log("test");

};