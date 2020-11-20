/* For Testing Purposes */
//Justin Wilson

//1) Select the section with an id of container without using querySelector and store in elContainer.

const elContainer = document.getElementById('container');

//2) Select the section with an id of container using querySelector and store in elContainer.

elContainer = document.querySelector('#container');

//3) Select all of the list items with a class of "second" and store in elSecond.

const elSecond = document.getElementsByClassName("second");

//4) Select a list item with a class of third, but only the list item inside of the ol tag and store in elThird.

const elThird = document.getElementsByTagName('ol')[0];

//5) Give the header the text "Hello!".

const header = document.getElementsByTagName('header').innerHTML = '<p>Hello!</p>';

//6) Add the class main to the <footer>.

const footer = document.querySelector('footer');
footer.classList.add('main');

//7) Remove the class main on the <footer>.

footer.classList.remove('main');

//8a) Create a new li element and store in elLi.

var elList = document.createElement('li');

//8b) Give the new li the text "four".

var four = document.createTextNode('four');

//8c) Append the new li to the ul element.

elList.appendChild(four);

//9) Loop over all of the lis inside the ol tag and give them a background color of "green".


//10) Remove the <footer>

var rem = document.getElementsByTagName('footer')[0];
rem.parentNode.removeChild(rem);

