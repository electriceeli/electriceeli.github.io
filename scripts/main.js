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
            let moreBtn = document.createElement('button');
            let rule = document.createElement('hr');
            blogHolder.appendChild(blogBox);
            blogBox.classList.add('project-item-blog');
            blogBox.appendChild(header).textContent = blogPosts[i].title;
            header.classList.add('title');
            header.appendChild(rule);
            blogBox.appendChild(dater).textContent = blogPosts[i].date;
            blogBox.appendChild(body).textContent = blogPosts[i].content;
            blogBox.appendChild(moreBtn).textContent = "Read More";
            moreBtn.classList.add('blog-btn');
        }
    }
});
