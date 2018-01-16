'use strict';

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
                blogPostCollection[x].addEventListener("click", function() {
                    let focus = document.getElementById("focus-box")
                    focus.style.display = "block";
                    focus.innerHTML = this.innerHTML;
                });
            };
        }
    }
});