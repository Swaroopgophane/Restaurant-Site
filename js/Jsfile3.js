// menu section javascript

var Indicator = document.getElementById('indicator');

var Listitem1 = document.getElementById('listitem1');
var Listitem2 = document.getElementById('listitem2');
var Listitem3 = document.getElementById('listitem3');
var Listitem4 = document.getElementById('listitem4');
var Listitem5 = document.getElementById('listitem5');

var Dish1 = document.getElementById('dish1');
var Dish2 = document.getElementById('dish2');
var Dish3 = document.getElementById('dish3');
var Dish4 = document.getElementById('dish4');
var Dish5 = document.getElementById('dish5');



Listitem1.onclick = function()
{
    Listitem1.classList.add('activeindicator')
    Listitem2.classList.remove('activeindicator')
    Listitem3.classList.remove('activeindicator')
    Listitem4.classList.remove('activeindicator')
    Listitem5.classList.remove('activeindicator')
    Dish1.style .display ='block'
    Dish2.style.display = 'none'
    Dish3.style.display = 'none'
    Dish4.style.display = 'none'
    Dish5.style.display = 'none'
}

Listitem2.onclick = function()
{
    Listitem1.classList.remove('activeindicator')
    Listitem2.classList.add('activeindicator')
    Listitem3.classList.remove('activeindicator')
    Listitem4.classList.remove('activeindicator')
    Listitem5.classList.remove('activeindicator')
    Dish1.style .display ='none'
    Dish2.style.display = 'block'
    Dish3.style.display = 'none'
    Dish4.style.display = 'none'
    Dish5.style.display = 'none'
}
Listitem3.onclick = function()
{
    Listitem1.classList.remove('activeindicator')
    Listitem2.classList.remove('activeindicator')
    Listitem3.classList.add('activeindicator')
    Listitem4.classList.remove('activeindicator')
    Listitem5.classList.remove('activeindicator')
    Dish1.style .display ='none'
    Dish2.style.display = 'none'
    Dish3.style.display = 'block'
    Dish4.style.display = 'none'
    Dish5.style.display = 'none'
}
Listitem4.onclick = function()
{
    Listitem1.classList.remove('activeindicator')
    Listitem2.classList.remove('activeindicator')
    Listitem3.classList.remove('activeindicator')
    Listitem3.classList.remove('activeindicator')
    Listitem4.classList.add('activeindicator')
    Listitem5.classList.remove('activeindicator')
    Dish1.style .display ='none'
    Dish2.style.display = 'none'
    Dish3.style.display = 'none'
    Dish4.style.display = 'block'
    Dish5.style.display = 'none'
}
Listitem5.onclick = function()
{
    Listitem1.classList.remove('activeindicator')
    Listitem2.classList.remove('activeindicator')
    Listitem3.classList.remove('activeindicator')
    Listitem4.classList.remove('activeindicator')
    Listitem5.classList.add('activeindicator')
    Dish1.style .display ='none'
    Dish2.style.display = 'none'
    Dish3.style.display = 'none'
    Dish4.style.display = 'none'
    Dish5.style.display = 'block'
}