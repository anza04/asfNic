var biglietto = document.getElementById("biglietto");
var video = document.getElementById("video");
var nav = document.getElementById("nav");
var usato = document.getElementById("usato");
var sottonav = document.getElementById("sottonav");

biglietto.addEventListener("click", ()=>{
    document.getElementsByTagName("video")[0].play();
    video.style.display="block";
    nav.style.opacity=0;
    biglietto.style.opacity=0;
    usato.style.opacity=0;
    sottonav.style.opacity=0;
})

video.addEventListener("click", ()=>{
    document.getElementsByTagName("video")[0].pause();
    video.style.display="none";
    nav.style.opacity=1;
    biglietto.style.opacity=1;
    usato.style.opacity=1;
    sottonav.style.opacity=1;
})