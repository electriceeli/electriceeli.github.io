'use strict';

// ALL COMMENTED LINES WILL BE USED TO MODULARIZE. DO NOT DELETE ELI

const $ = require('jquery');

let home = require("./home");
let contact = require("./contact");
let projects = require("./projects");
let blog = require("./blog");

let printFooterDate = () => {
  let todaysDate = new Date(),
  year = todaysDate.getFullYear();
  $("#footer-date").text(`${year}`);
};

(function pageLoad() {
  home.loadHome();
  printFooterDate();
})();

$("#contact-link").click((e) => {
  e.preventDefault();
  $("main").html("");
  contact.loadContact();
});

$("#project-link").click((e) => {
  e.preventDefault();
  $("main").html("");
  projects.loadProjects();
});

$("#home-link").click((e) => {
  e.preventDefault();
  $("main").html("");
  home.loadHome();
});

$("#blog-link").click((e) => {
  e.preventDefault();
  $("main").html("");
  blog.loadBlog();
});



// Local storage work for next version ------------------

// const xhrLocal = new XMLHttpRequest();
// xhrLocal.open("GET", "../data/blog-posts.json");
// xhrLocal.send();

// var posts = { 'one': 1, 'two': 2, 'three': 3 };

// // Put the object into storage
// localStorage.setItem('posts', JSON.stringify(xhrLocal));

// // Retrieve the object from storage
// var retrievedPosts = localStorage.getItem('posts');

// console.log('retrievedPosts: ', JSON.parse(retrievedPosts));
