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




// TESTIMONIAL SECTION START
const testimonial = document.querySelectorAll('.testimonial');











// CONTACT FORM START
const form = document.getElementById("contactform");
const modal = document.getElementById("successModal");
const closeBtn = document.getElementById("closeModal")

form.addEventListener("submit", function (e){
  e.preventDefault();

  if(form.checkValidity()){
    modal.style.display = "block";
    form.reset();
  }
});

closeBtn.addEventListener("click", function(){
  modal.style.display = "none";
});

window.addEventListener("click", function(e) {
  if(e.target === modal){
    modal.style.display = "none";
  }
});







