function bcp() {
    document.getElementById("bcp").style.color = "#1C3C61";
    document.getElementById("bch").style.color = "black";
    document.getElementById("bmf").style.color = "black";

    document.getElementById("bcp").style.fontWeight = "bold";
    document.getElementById("bch").style.fontWeight = "normal";
    document.getElementById("bmf").style.fontWeight = "normal";

    document.querySelector(".infoBCP").style.display = "block";
    document.querySelector(".infoBCH").style.display = "none";
    document.querySelector(".infoBMF").style.display = "none";

    document.querySelector(".slidBCP").style.display = "flex";
    document.querySelector(".slidBCH").style.display = "none";
    document.querySelector(".slidBMF").style.display = "none";
}

function bch() {
    document.getElementById("bch").style.color = "#1C3C61";
    document.getElementById("bcp").style.color = "black";
    document.getElementById("bmf").style.color = "black";

    document.getElementById("bcp").style.fontWeight = "normal";
    document.getElementById("bch").style.fontWeight = "bold";
    document.getElementById("bmf").style.fontWeight = "normal";

    document.querySelector(".infoBCP").style.display = "none";
    document.querySelector(".infoBCH").style.display = "block";
    document.querySelector(".infoBMF").style.display = "none";

    document.querySelector(".slidBCP").style.display = "none";
    document.querySelector(".slidBCH").style.display = "flex";
    document.querySelector(".slidBMF").style.display = "none";

}

function bmf() {
    document.getElementById("bmf").style.color = "#1C3C61";
    document.getElementById("bcp").style.color = "black";
    document.getElementById("bch").style.color = "black";
    
    document.getElementById("bcp").style.fontWeight = "normal";
    document.getElementById("bch").style.fontWeight = "normal";
    document.getElementById("bmf").style.fontWeight = "bold";

    document.querySelector(".infoBCP").style.display = "none";
    document.querySelector(".infoBCH").style.display = "none";
    document.querySelector(".infoBMF").style.display = "block";

    document.querySelector(".slidBCP").style.display = "none";
    document.querySelector(".slidBCH").style.display = "none";
    document.querySelector(".slidBMF").style.display = "flex";
}