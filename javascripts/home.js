'use strict';

// ALL COMMENTED LINES WILL BE USED TO MODULARIZE. DO NOT DELETE ELI

const $ = require('jquery');

module.exports.loadHome = function() {
  let $heroDiv = $('<div></div>');
  let $heroImgBox = $('<div></div>');
  let $homeTitle = $('<h3>"Hi, my name is Eli Wilson and I am a software developer."</h3>');
  let $storyBox = $('<div></div>');
  let $sectionHeader = $('<div></div>');
  let $sectionLogo = $('<img></img>');
  let $sectionTitle = $('<h2>My Story</h2>');
  let $storyText = $('<p>I have always held interest in what makes software "work". After graduating from the University of Memphis, and spending a year working as the head of marketing at the New Daisy Theatre on Beale Street. Throughout my year of working with web applications, pages, and social media, I became determined and inspired to turn to a career path that would satisy my desire to be creative, my love of language, and my fascination with software. I am currently attending Nashville Software School through their Full-Stack Web/Software Development program.</p>');
  let $hobbyBox = $('<div></div>');
  let $hockeyIcon = $('<img></img>');
  let $gamingIcon = $('<img></img>');
  let $guitarIcon = $('<img></img>');
  

  $("main").append($heroDiv);
  $heroDiv.attr("id", "home-hero");

  $($heroDiv).append($heroImgBox);
  $heroImgBox.attr("id", "home-hero-img");
  $('<img src="../img/fam-guy-eli.png" id="hero-logo"></img>"').appendTo("#home-hero-img");
  $($heroDiv).append($homeTitle);  

  $("main").append($storyBox);
  $storyBox.attr("id", "story");
  $("#story").append($sectionHeader, $sectionLogo, $sectionTitle, $storyText, $hobbyBox); 
  $sectionHeader.addClass("section-title");
  $sectionTitle.attr("id", "storyBox");
  $hobbyBox.attr("id", "hobby-logos");
  $hobbyBox.append($hockeyIcon, $gamingIcon, $guitarIcon);
  $hockeyIcon.addClass("hobby").attr("src", "../img/hockey.png");
  $gamingIcon.addClass("hobby").attr({
    src:"../img/gaming.svg",
    id: "game-control"
  });
  $guitarIcon.addClass("hobby").attr("src", "../img/guitar.png");
};