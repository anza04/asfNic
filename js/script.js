var biglietto = document.getElementById("biglietto");
var video = document.getElementById("video");
var nav = document.getElementById("nav");
var sottonav = document.getElementById("sottonav");
var biglietti = document.getElementById("biglietti")
var aggiungi = document.getElementById("aggiungi")

var conta = 0;

function Click()
{
    conta+=1;
    console.log(conta);
    if(conta%2==0)
    {
        document.getElementsByTagName("video")[0].pause();
        video.style.display="none";
        nav.style.height="7vh";
        sottonav.style.opacity=1;
        biglietti.style.opacity=1;
        nav.style.opacity=1;
        aggiungi.style.opacity=1;
    }
    else
    {
        document.getElementsByTagName("video")[0].play();
        video.style.display="block";
        nav.style.height="20vh";
        sottonav.style.opacity=0;
        biglietti.style.opacity=0;
        nav.style.opacity=0;
        aggiungi.style.opacity=0;
    }
}

function Aggiungi()
{
    var buffer ="<div class='biglietto-nuovo' id='biglietto' onclick='Click()'><div class='foto'><img src='./img/WhatsApp Image 2022-05-23 at 13.06.36.jpeg' width='70px'></div><div class='testo'><b>";
    var nome_corsa = prompt("Inserire il nome della corsa");
    buffer += nome_corsa+"</b><br>";
    var attivazione = prompt("Inserire giorno e data di attivazione");
    buffer += attivazione+"</div></div>";
    biglietti.innerHTML+=buffer;
}