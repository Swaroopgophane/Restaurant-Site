var Myinnerlinks = document.getElementById('Innerlinks');

window.onscroll = function()
{
    if(window.scrollY > 100)
    {
        Myinnerlinks.classList.add("activesection")
    }
    else
    {
        Myinnerlinks.classList.remove("activesection")
    }
}







var Hiddenicon = document.getElementById("Hiddenmenu");
var Slidemenu = document.getElementById("Menusec");


    Slidemenu.style.maxHeight = '0px';
    Slidemenu.style.paddingTop = '0px';

 Hiddenicon.onclick = function()
{
    if(Slidemenu.style.maxHeight == '0px')
    {
        Slidemenu.style.maxHeight = '100vh'
        Slidemenu.style.paddingTop = '10px'
    }
    else
    {
        Slidemenu.style.maxHeight = '0px'
        Slidemenu.style.paddingTop = '0px'
    }
}

