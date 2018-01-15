'use strict';

// const blogsLocal = require('../data/blogs.js');

const blogHolder = document.getElementById('blog-holder');

// console.log(blogsLocal);

const xhr = new XMLHttpRequest();
xhr.open("GET", "../data/blog-posts.json");
xhr.send();

xhr.addEventListener('load', function() {
    if (this.readyState == 4 && this.status == 200) {
        var blogPosts = JSON.parse(this.responseText);
        for (let i = 0; i < blogPosts.length; i++) {
            let blogBox = document.createElement('div');
            blogBox.classList.add('blog-box');          
            let header = document.createElement('h4');
            let dater = document.createElement('h6');
            let body = document.createElement('p');
            let rule = document.createElement('hr');
            blogHolder.appendChild(blogBox);
            blogBox.classList.add('project-item-blog');
            blogBox.appendChild(header).textContent = blogPosts[i].title;
            header.classList.add('title');
            blogBox.appendChild(dater).textContent = blogPosts[i].date;
            dater.appendChild(rule);
            rule.classList.add('white-pls');
            blogBox.appendChild(body).textContent = blogPosts[i].content;
        }
    }
});

document.getElementsByClassName("blog-box").addEventListener("click", () => {

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
