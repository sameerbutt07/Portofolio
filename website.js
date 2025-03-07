// PROGRESS BARS
document.addEventListener("DOMContentLoaded",()=>{
    function animateProgressBars() {
        let progressBars= document.querySelectorAll(".progress-bar");
        progressBars.forEach((bar)=>{
            let percentage= bar.getAttribute('aria-valuenow');
            let barPosition= bar.getBoundingClientRect().top;
            let screenPosition= window.innerHeight /1.3;
            if(barPosition < screenPosition){
                bar.style.width= percentage +"%";
            };
        });
    }
    animateProgressBars();
    window.addEventListener("scroll", animateProgressBars)
})


// BACK TO TO BUTTON
let scrollTopBtn = document.getElementById("scroll-Top");

window.onscroll = (()=>{
    if(document.documentElement.scrollTop > 300){
        scrollTopBtn.style.display= "block";
    }else{
        scrollTopBtn.style.display= "none";
    }
});

scrollTopBtn.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
});
