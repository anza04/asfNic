var orario = new Date();

document.getElementById("attivazione").innerHTML=orario.getDate()+"/"+(orario.getMonth()+1)+"/"+orario.getFullYear()+" "+(orario.getHours()-1)+":"+orario.getMinutes()+":"+orario.getSeconds();

window.onload = setInterval(Orologio,1000);
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
    }
function Orologio()
{
    var d = new Date();
    var date = d.getDate();
    var ora = addZero(d.getHours());
    var min = addZero(d.getMinutes());
    var sec = addZero(d.getSeconds());
    document.getElementById("orologio").innerHTML=ora+":"+min+":"+sec;
}
