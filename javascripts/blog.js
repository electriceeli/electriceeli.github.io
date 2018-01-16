'use strict';

// ALL COMMENTED LINES WILL BE USED TO MODULARIZE. DO NOT DELETE ELI

// const $ = require('jquery');

// module.exports.blogLoad = () => {
    // <p id="more-info">Click a blog post to read below</p>

    // <div id="focus-box">
    // </div>

    // <div class="container" id="blog-holder"></div>
  const contentElement = document.getElementById("main");
   
  let focusBoxTitle = document.createElement('p');
  focusBoxTitle.setAttribute("id", "more-info");
  focusBoxTitle.innerHTML = "Click a blog post below to read it here";
  contentElement.appendChild(focusBoxTitle);

  let focusBox = document.createElement('div');
  focusBox.setAttribute("id", "focus-box");
  contentElement.appendChild(focusBox);
  
  let createBlogHolder = document.createElement('div');
  createBlogHolder.classList.add('container');
  createBlogHolder.setAttribute("id", "blog-holder");
  contentElement.appendChild(createBlogHolder);
  const blogHolder = document.getElementById('blog-holder');

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
        blogBox.setAttribute("id", "post-body");

        let blogPostCollection = document.getElementsByClassName("blog-box");
        
        for (let x = 0; x < blogPostCollection.length; x++) {
          const focus = document.getElementById("focus-box");
          blogPostCollection[x].addEventListener("click", () => {
              focus.style.display = "block";
              focus.innerHTML = blogPostCollection[x].innerHTML;
              document.documentElement.scrollTop = 0;
          });
        }
      }
    }
  });
// };