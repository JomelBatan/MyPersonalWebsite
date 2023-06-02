var imageContainers = document.querySelectorAll('.image-container');
var currentVideo = null;
var volumeFadeInterval;

imageContainers.forEach(function(container) {
  var image = container.querySelector('.image');
  var video = container.querySelector('.video');

  image.addEventListener('click', function() {
    if (currentVideo && currentVideo !== video) {
      fadeOutVolume(currentVideo);
      currentVideo.pause();
      currentVideo.style.display = 'none';
      currentVideo.previousElementSibling.style.display = 'block';
    }

    currentVideo = video;
    image.style.display = 'none';
    video.style.display = 'block';
    video.volume = 0; // Start with zero volume
    video.play();
    fadeInVolume(video);
  });

  video.addEventListener('click', function() {
    fadeOutVolume(video);
    video.pause();
    video.style.display = 'none';
    image.style.display = 'block';
    currentVideo = null;
  });
});

function fadeInVolume(video) {
  clearInterval(volumeFadeInterval);
  video.volume = 0;

  volumeFadeInterval = setInterval(function() {
    if (video.volume < 1) {
      video.volume += 0.1; // Increase volume gradually
    } else {
      clearInterval(volumeFadeInterval);
    }
  }, 100);
}

function fadeOutVolume(video) {
  clearInterval(volumeFadeInterval);
  video.volume = 1;

  volumeFadeInterval = setInterval(function() {
    if (video.volume > 0) {
      video.volume -= 0.1; // Decrease volume gradually
    } else {
      clearInterval(volumeFadeInterval);
    }
  }, 100);
}
