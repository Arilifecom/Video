

const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

// switch
btn.addEventListener('click', function(){
  if(!btn.classList.contains('slide')){
   btn.classList.add('slide');
   video.pause();
  }
  else{
    btn.classList.remove('slide');
    video.play();
  }
});

// preloader
const preloader = document.querySelector('.preloader');

window.addEventListener('load', function(){
  preloader.classList.add('hide-preloader');
  
  // if(!preloader.classList.contains('hide-preloader')){
  //   preloader.classList.add('hide-preloader');
  // }
  
  // preloader.classList.toggle('hide-preloader');
});
