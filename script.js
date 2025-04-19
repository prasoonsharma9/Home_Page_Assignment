function handleClick(){
  alert("You have clicked try for free");
}
// HERO SECTION IS ENDED HERE..

// VIDEO SECTION START
const videoContainer = document.querySelector(".video-container");
const video = document.getElementById("videoFeature");
const playIcon = document.getElementById("playIcon");


video.addEventListener("click", () => {
  if(video.paused){
    video.play();
    videoContainer.classList.remove("paused");
  }
  else{
    video.pause();
    videoContainer.classList.add("paused");
  }
});

playIcon.addEventListener("click", ()=>{
  video.play();
  videoContainer.classList.remove("paused")
});










