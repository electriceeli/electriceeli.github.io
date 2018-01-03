const blogHolder = document.getElementById('blog-holder');

const blogs = [
    {
        title: "Fear",
        content: "Words words words words words...",
        date: "November 15th, 2017"
    },
    {
        title: "Hello Worlds",
        content: "Words words words words words...",
        date: "December 1st, 2017"
    },
    {
        title: "Mountain after mountain",
        content: "Words words words words words...",
        date: "December 15th, 2017"
    },
    {
        title: "Resolutions",
        content: "Words words words words words...",
        date: "December 29th, 2017"
    },
    {
        title: "How to not give up on a blog",
        content: "Words words words words words...",
        date: "January 2nd, 2018"
    }
]

for (let i = 0; i < blogs.length; i++) {
    var blogBox = document.createElement('div');
    blogBox.classList.add('blog-box');
    var header = document.createElement('h4');
    var dater = document.createElement('h6');
    var body = document.createElement('p');
    var moreBtn = document.createElement('button');
    var rule = document.createElement('hr');
    blogHolder.appendChild(blogBox);
    blogBox.classList.add('project-item-blog');
    blogBox.appendChild(header).textContent = blogs[i].title;
    header.classList.add('title');
    header.appendChild(rule);
    blogBox.appendChild(dater).textContent = blogs[i].date;
    blogBox.appendChild(body).textContent = blogs[i].content;
    blogBox.appendChild(moreBtn).textContent = "Read More";
    moreBtn.classList.add('blog-btn');
}


