function forceDownload(url, fileName){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "blob";
  xhr.onload = function(){
      var urlCreator = window.URL || window.webkitURL;
      var imageUrl = urlCreator.createObjectURL(this.response);
      var tag = document.createElement('a');
      tag.href = imageUrl;
      tag.download = fileName;
      document.body.appendChild(tag);
      tag.click();
      document.body.removeChild(tag);
      link.innerText="Download Image";
  }
  xhr.send();
}

function stopAnimations() {
  var animations = document.querySelectorAll('*');
  for (var i = 0; i < animations.length; i++) {
    animations[i].style.animation = "none";
  }
}

function h() {
  // find element with class "torvalds"
  var torvalds = document.querySelector('.torvalds');

  // replace the image with files/img/rickroll.gif
  torvalds.src = "files/img/rickroll.gif";

  // play the audio file files/h.mp3
  let h = new Audio('files/h.mp3');
  h.play();
}

function h2() {
  // find all images
  var images = document.querySelectorAll('img');

  // replace all images with files/img/rickroll.gif
  for (var i = 0; i < images.length; i++) {
    images[i].src = "files/img/rickroll.gif";
  }

  // play the audio file files/h.mp3
  let h = new Audio('files/h.mp3');
  h.play();
}
