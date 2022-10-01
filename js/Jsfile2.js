var Iconbtn = document.getElementById('iconbtn');
var Iconsec = document.getElementById('iconsec');

Iconsec.style.transform = "translateX(-170px)";
Iconbtn.onclick = function()
{
    if(Iconsec.style.transform == "translateX(-170px)")
    {
        Iconsec.style.transform = "translateX(0px)"
        Iconsec.style.opacity = '1'
        
    }
    else
    {
        Iconsec.style.transform ="translateX(-170px)"
        Iconsec.style.opacity = '0'
        
    }
}


