// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

btn.addEventListener('click', function(){
    if(!btn.classList.contains('slide')){
        //* did not do toggle functionality as I wanted to add the pause and play functionality
        btn.classList.add('slide');
        video.pause();
    } else {
        btn.classList.remove('slide');
        video.play();
    }
});

// preloader
const prelaoder = document.querySelector('.preloader');

window.addEventListener('load', function(){
    prelaoder.classList.add('hide-preloader');
})