const links = document.querySelectorAll('.links a');
const player = document.getElementById('youtube-player');
const videoTitle = document.getElementById('video-title');
const videoInfo = document.getElementById('video-info');


function updateVideo(event) {
  event.preventDefault();
  const videoId = event.target.getAttribute('data-video-id');
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  const videoDescription = event.target.textContent;

  player.src = videoSrc;
  videoTitle.textContent = videoDescription;
  videoInfo.textContent = `Описание ${videoDescription}`;
  
  links.forEach(link => link.classList.remove('active'));
  event.target.classList.add('active');
}
links.forEach(link => link.addEventListener('click', updateVideo));
