'use strict';

// ALL COMMENTED LINES WILL BE USED TO MODULARIZE. DO NOT DELETE ELI

const $ = require('jquery');

module.exports.loadBlog = () => {
   
  let $focusBoxTitle = $('<p>Click a blog post below to read it here</p>');
  $focusBoxTitle.attr("id", "more-info");
  $("main").append($focusBoxTitle);

  let $focusBox = $('<div></div>');
  $focusBox.attr("id", "focus-box");
  $("main").append($focusBox);
  
  let $blogHolder = $('<div></div>');
  $blogHolder.addClass('container');
  $blogHolder.attr("id", "blog-holder");
  $("main").append($blogHolder);

  // const xhr = new XMLHttpRequest();
  // xhr.open("GET", "../data/blog-posts.json");
  // xhr.send();

  $.ajax({
    url: "../data/blog-posts.json",
    method: "GET"
  }).done(function() {
    $( this ).on('load', function() {
      // if (this.readyState == 4 && this.status == 200) {
        console.log(this);
        // let blogPosts = JSON.parse(this.responseText);
      //   for (let i = 0; i < this.length; i++) {
      //     let $blogBox = $('<div></div>');
      //     $blogBox.addClass('blog-box');          
      //     let $header = $('<h4></h4>');
      //     let $dater = $('<h6></h6>');
      //     let $body = $('<p></p>');
      //     let $rule = $('<hr>');
      //     $blogHolder.append($blogBox);
      //     $blogBox.addClass('project-item-blog');
      //     $blogBox.append($header).textContent = this[i].title;
      //     $header.addClass('title');
      //     $blogBox.append($dater).textContent = this[i].date;
      //     $dater.append($rule);
      //     $rule.addClass('white-pls');
      //     $blogBox.append($body).textContent = this[i].content;
      //     $blogBox.attr("id", "post-body");
  
      //     let blogPostCollection = document.getElementsByClassName("blog-box");
          
      //     for (let x = 0; x < blogPostCollection.length; x++) {
      //       /*jshint loopfunc: true */
      //       const focus = document.getElementById("focus-box");
      //       blogPostCollection[x].addEventListener("click", () => {
      //           focus.style.display = "block";
      //           focus.innerHTML = blogPostCollection[x].innerHTML;
      //           document.documentElement.scrollTop = 0;
      //       });
      //     }
      //   }
      // }
    // }
});
  });
};
  
  // xhr.addEventListener('load', function() {
  //   if (this.readyState == 4 && this.status == 200) {
  //     let blogPosts = JSON.parse(this.responseText);
  //     for (let i = 0; i < blogPosts.length; i++) {
  //       let $blogBox = $('<div></div>');
  //       $blogBox.addClass('blog-box');          
  //       let $header = $('<h4></h4>');
  //       let $dater = $('<h6></h6>');
  //       let $body = $('<p></p>');
  //       let $rule = $('<hr>');
  //       $blogHolder.append($blogBox);
  //       $blogBox.addClass('project-item-blog');
  //       $blogBox.append($header).textContent = blogPosts[i].title;
  //       $header.addClass('title');
  //       $blogBox.append($dater).textContent = blogPosts[i].date;
  //       $dater.append($rule);
  //       $rule.addClass('white-pls');
  //       $blogBox.append($body).textContent = blogPosts[i].content;
  //       $blogBox.attr("id", "post-body");

  //       let blogPostCollection = document.getElementsByClassName("blog-box");
        
  //       for (let x = 0; x < blogPostCollection.length; x++) {
  //         /*jshint loopfunc: true */
  //         const focus = document.getElementById("focus-box");
  //         blogPostCollection[x].addEventListener("click", () => {
  //             focus.style.display = "block";
  //             focus.innerHTML = blogPostCollection[x].innerHTML;
  //             document.documentElement.scrollTop = 0;
  //         });
  //       }
  //     }
  //   }
