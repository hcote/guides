// Vid 1 - capturing DOM nodes
// DOM is made up of nodes, which you target


// log the DOM
console.dir(document);
// log an HTML collection (basically an array) of all DOM elements
console.log(document.all);
// log HTML collection of all forms
console.log(document.forms);
// doc.links, doc.images, etc.

// GETTING ELEMENTS
// get an el by id
var el = document.getElementById('id_name');
// get els by class name. there is no getElementByClassName
var items = document.getElementsByClassName('li_items');
    items[0].textContent = 'Hi';
    // cannot do items.style.backgroundColor = 'blue';
    // must loop through with for loop & do items[i].backgroundColor...
// get el by HTML tag name
var list = document.getElementsByTagName('li');
// query selector (ONLY GRABS FIRST ONE)
// can use any selector like jQuery ('#id_name'), ('div'), etc
var navBar = document.querySelector('.nav')
var submit = document.querySelector('input[type="submit"]');
    submit.value = 'SEND';
// grabs all instances
var divs = document.querySelectorAll('div');
console.log(divs); // returns node list (similar to array)


// pseudo selectors
var oddItems = document.querySelectorAll('li:nth-child(odd)');
var evenItems = document.querySelectorAll('li:nth-child(even)');
    for (let i = 0; i < odd.length; i++) {
      odd[i].style.backgroundColor = 'gray';
      even[i].style.backgroundColor = 'white';
    }
var lastItem = document.querySelector('li:last-child');
var secondItem = document.querySelector('li:nth-child(2)');


// methods
el.textContent = 'Hello';
el.innerText = 'Goodbye';
el.innerHTML = '<h3>123</h3>'; // puts INSIDE DOM el, does not replace it
el.style.borderBottom = 'solid 3px black'; // must use camelCase, not border-bottom

// vid 2 - Parent, child, sibling nodes

var ulTag = document.querySelector('#items');
console.log(ulTag.parentNode); // return something like a div tag
ulTag.parentNode.style... = ...;
console.log(ulTag.parentElement.parentNode); // can chain these
// parentNode == parentElement
console.log(ulTag.childNodes); // returns node list. line breaks are captured with this and are considered nodes, so dont use childNodes
console.log(ulTag.children); // returns HTML collection (not node list) of children
var first = ulTag.children[0];
first = ulTag.firstElementChild; // same as children[0]
var last = ulTag.lastElementChild;
console.log(ulTag.nextElementSibling); // returns next sibling tag (would not be any of the li's as those are children elements)
console.log(ulTag.previousElementSibling);

var newDiv = document.createElement('div');
newDiv.className = 'addingNewClass';
newDiv.id = 'newID';
newDiv.setAttribute('attrName', 'attrVal');
var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText); // bc it's going inside the div
// at this point, newDiv only exists in our js file, not in the DOM
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
// insertBedore(what we are inserting, what its being inserted before)
container.insertBefore(newDiv, h1);

// OR YOU CAN DO:

var myNode = document.getElementById('someDomNode');
var myElement = document.createElement('div');
myNode.appendChild(myElement);

// to remove an element on click
myNode.addEventListener('click', function(e) {
  e.target.parentNode.removeChild(e.target);
}, false)

// vid 3 - events

// old way - better to use event listener bc keeps html cleaner
// HTML
// <button onClick="buttonClick">Click Here</button>
// JS
// function buttonClick() {
//   console.log('You clicked');
// }

// one way - but better to reference a named function variable not write it out
// var button = document.getElementById('button').addEventListener('click', function() {
//   console.log('You clicked');
// })

var button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(e) {
  console.log(e);
  // returns event with all properties you can track with JS (very interesting and vast)
  console.log(e.target); // returns target (if keydown, gives key pressed, etc.)
  console.log(e.type); // returns whatever event type it is (click, keydown, etc);
  console.log(e.clientX); // returns num pixles from left to right (of window)
  console.log(e.offsetY); // returns num pixles from top down (of element)
  console.log(e.altkey); // returns boolean if the alt key was held down while event ran
  console.log(e.ctrlkey);
  console.log(e.shiftkey);
}

function runEvent(e) {
  console.log('Event type: ' + e.type );
  // event types: click, double click, mousedown, mouseup, mouseenter, mouseleave
  // mouseover (will fire for inner elements hovered over), mouseout (will fire for inner elements)
  // mousemove, keydown, keyup, focus, blur, cut, paste, copy, input (anything you do to a form input: cut, type, etc.)
  // change, submit
  document.body.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+', 40)';
  // change background color as you move the mouse
};

// vid 4

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
