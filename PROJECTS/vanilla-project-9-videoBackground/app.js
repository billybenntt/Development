// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

// ------------------------ SELECT ELEMENTS ------------------------ //

const switchBtn = document.querySelector('.switch-btn')
const videoContainer = document.querySelector('.video-container')
const preloaderContainer = document.querySelector(".preloader");


// ------------------------ EVENT LISTENER ------------------------ //
switchBtn.addEventListener('click', () => {

  // Toggle Functionality
  if (!switchBtn.classList.contains('slide')) {
    switchBtn.classList.add('slide')
    videoContainer.pause()
  } else {
    switchBtn.classList.remove('slide')
    videoContainer.play()
  }


})

// ------------------------ PRE-LOADER ------------------------ //

// WHen HTML has been loaded and parsed.

// window.addEventListener("DOMContentLoaded", ()=>{
//   preloaderContainer.classList.add("hide-preloader")
// })

// WHen HTML has been loaded and parsed + stylesheets, images and videos
// Therefore  this is better
window.addEventListener("load", ()=>{
  preloaderContainer.classList.add("hide-preloader")
})