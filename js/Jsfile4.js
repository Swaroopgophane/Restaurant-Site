var Mynav1 = document.getElementById('Nav1');
var Mynav2 = document.getElementById('Nav2');
var Mynav3 = document.getElementById('Nav3');

var Firstclient1 = document.getElementById('Client1');
var Firstclient2 = document.getElementById('Client2');
var Firstclient3 = document.getElementById('Client3');

Mynav1.onclick = function()
{
    Firstclient1.style.display = "block"
    Firstclient2.style.display = "none"
    Firstclient3.style.display = "none"

    Mynav1.style.background = "#da560a"
    Mynav2.style.background = "#fff"
    Mynav3.style.background = "#fff"

    Firstclient1.classList.add('Clientcolanimate');
}

Mynav2.onclick = function()
{
    Firstclient1.style.display = "none"
    Firstclient2.style.display = "block"
    Firstclient3.style.display = "none"

    Mynav1.style.background = "#fff"
    Mynav2.style.background = "#da560a"
    Mynav3.style.background = "#fff"

    Firstclient2.classList.add('Clientcolanimate');
}

Mynav3.onclick = function()
{
    Firstclient1.style.display = "none"
    Firstclient2.style.display = "none"
    Firstclient3.style.display = "block"

    Mynav1.style.background = "#fff"
    Mynav2.style.background = "#fff"
    Mynav3.style.background = "#da560a"

    Firstclient3.classList.add('Clientcolanimate');
}

