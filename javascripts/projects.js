'use strict';

const $ = require('jquery');

/*<div class="project-item-flip">
    <div class="section-title">             
      <h2 class="subtitle-flip">This site!</h>
    </div>
    <hr>
    <p class="project-item-text">This is my personal site hosted on <span class="emph">Github</span> and built progressively (with many constructive and destructive edits) as my strength in web developemnt grew. The site was written using <span class="emph">HTML, Sass, Bootstrap, Grunt, Browserify, and Javascript.</span></p>
    <img src="img/bitmoji-projects.png" alt="Eli dancing with breakfast food" id="contact-moji">
  </div> */

module.exports.loadProjects = () => {
  let $projectItemDiv1 = $('<div></div>');
  let $titleSection1 = $('<div></div>');
  let $subTitle1 = $('<h2>This site!</h2>');
  let $rule = $('<hr>');
  let $itemText1 = $('<p>This is my personal site hosted on <span class="emph">Github</span> and built progressively as my strength in web developemnt grew. The site was written using <span class="emph">HTML, Sass, Bootstrap, Grunt, Browserify, JS, and JQuery.</span></p>');
  let $itemImg1 = $('<img></img>');

  $("main").append($projectItemDiv1);
  $projectItemDiv1.addClass("project-item-flip");
  $projectItemDiv1.append($titleSection1, $rule, $itemText1, $itemImg1);
  $titleSection1.addClass("section-title");
  $titleSection1.append($subTitle1);
  $subTitle1.addClass("subtitle-flip");
  $itemText1.addClass("project-item-text");
  $itemImg1.attr({
   src: "../img/bitmoji-projects.png",
   id: "contact-moji"
  });
};