

var Gridindicator = document.getElementById('indicator');

var Gridlist1 = document.getElementById('listitem1');
var Gridlist2 = document.getElementById('listitem2');
var Gridlist3 = document.getElementById('listitem3');
var Gridlist4 = document.getElementById('listitem4');
var Gridlist5 = document.getElementById('listitem5');

var Griddish1 = document.getElementById('Gridmenu1');
var Griddish2 = document.getElementById('Gridmenu2');
var Griddish3 = document.getElementById('Gridmenu3');
var Griddish4 = document.getElementById('Gridmenu4');
var Griddish5 = document.getElementById('Gridmenu5');



Gridlist1.onclick = function()
{
    Gridlist1.classList.add('activeindicator')
    Gridlist2.classList.remove('activeindicator')
    Gridlist3.classList.remove('activeindicator')
    Gridlist4.classList.remove('activeindicator')
    Gridlist5.classList.remove('activeindicator')
    Griddish1.classList.add('Gridanimation')
    Griddish1.style.display = 'block'
    Griddish2.style.display = 'none'
    Griddish3.style.display = 'none'
    Griddish4.style.display = 'none'
    Griddish5.style.display = 'none'
}

Gridlist2.onclick = function()
{
    Gridlist1.classList.remove('activeindicator')
    Gridlist2.classList.add('activeindicator')
    Gridlist3.classList.remove('activeindicator')
    Gridlist4.classList.remove('activeindicator')
    Gridlist5.classList.remove('activeindicator')
    Griddish2.classList.add('Gridanimation')
    Griddish1.style.display = 'none'
    Griddish2.style.display = 'block'
    Griddish3.style.display = 'none'
    Griddish4.style.display = 'none'
    Griddish5.style.display = 'none'
}
Gridlist3.onclick = function()
{
    Gridlist1.classList.remove('activeindicator')
    Gridlist2.classList.remove('activeindicator')
    Gridlist3.classList.add('activeindicator')
    Gridlist4.classList.remove('activeindicator')
    Gridlist5.classList.remove('activeindicator')
    Griddish3.classList.add('Gridanimation')
    Griddish1.style.display = 'none'
    Griddish2.style.display = 'none'
    Griddish3.style.display = 'block'
    Griddish4.style.display = 'none'
    Griddish5.style.display = 'none'
}
Gridlist4.onclick = function()
{
    Gridlist1.classList.remove('activeindicator')
    Gridlist2.classList.remove('activeindicator')
    Gridlist3.classList.remove('activeindicator')
    Gridlist4.classList.add('activeindicator')
    Gridlist5.classList.remove('activeindicator')
    Griddish4.classList.add('Gridanimation')
    Griddish1.style.display = 'none'
    Griddish2.style.display = 'none'
    Griddish3.style.display = 'none'
    Griddish4.style.display = 'block'
    Griddish5.style.display = 'none'
}
Gridlist5.onclick = function()
{
    Gridlist1.classList.remove('activeindicator')
    Gridlist2.classList.remove('activeindicator')
    Gridlist3.classList.remove('activeindicator')
    Gridlist4.classList.remove('activeindicator')
    Gridlist5.classList.add('activeindicator')
    Griddish5.classList.add('Gridanimation')
    Griddish1.style.display = 'none'
    Griddish2.style.display = 'none'
    Griddish3.style.display = 'none'
    Griddish4.style.display = 'none'
    Griddish5.style.display = 'block'
}