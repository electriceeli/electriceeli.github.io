'use strict';

const $ = require('jquery');

// ALL COMMENTED LINES WILL BE USED TO MODULARIZE. DO NOT DELETE ELI

module.exports.loadContact = () => {
  let $contactDiv = $('<div></div>');
  let $titleDiv = $('<div></div>');
  let $phoneImg = $('<img></img>');
  let $contactTitle = $('<h2>Get in touch!</h2>');
  let $rule = $('<hr>');
  let $break = $('<br>');
  let $socialIcons = $('<div></div>');
  let $twitterLink = $('<a></a>');
  let $twitterImg = $('<img></img>');
  let $emailLink = $('<a></a>');
  let $emailImg = $('<img></img>');
  let $linkedLink = $('<a></a>');
  let $linkedImg = $('<img></img>');
  let $facebookLink = $('<a></a>');
  let $facebookImg = $('<img></img>');
  let $danceEmoji = $('<img></img>');

  $("main").append($contactDiv);
  $contactDiv.attr("id", "contact");
  $contactDiv.append($titleDiv, $rule, $break, $socialIcons, $danceEmoji);
  $titleDiv.addClass("section-title").append($contactTitle);
  $phoneImg.attr("src", "../img/phone.png");
  $contactTitle.addClass("subtitle");
  $socialIcons.append($twitterLink, $emailLink, $linkedLink, $facebookLink).attr("id", "social-icons");
  $twitterLink.attr("href", "https://twitter.com/e_x_wilson").append($twitterImg);
  $twitterImg.attr("src", "../img/twitter.png").addClass("social-logo");
  $emailLink.append($emailImg);
  $emailImg.attr("src", "../img/email.png").addClass("social-logo");
  $linkedLink.attr("href", "https://www.linkedin.com/in/elijah-wilson-bb049851").append($linkedImg);
  $linkedImg.attr("src", "../img/linkedin.png").addClass("social-logo");
  $facebookLink.attr("href", "https://www.facebook.com/sequoiaisrad/").append($facebookImg);
  $facebookImg.attr("src", "../img/music.png").addClass("social-logo");
  $danceEmoji.attr({
    src: "../img/bitmoji-contact.png",
    id: "contact-moji"
  });
};

