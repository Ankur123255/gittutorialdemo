// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.forms);
// console.log(document.images);
// console.log(document.getElementById('header-title'))
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = "hello";
// headerTitle.innerText = 'goodbye'
// console.log(headerTitle.innerText)

// headerTitle.innerHTML = '<h3>Hello</h3>';

// header.style.borderBottom = 'solid 3px #000';
// get elemnts by class name
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello 2';
// items[0].style.fontWeight = 'bold';
// items[1].style.fontWeight = 'bold';
// items[2].style.fontWeight = 'bold';
// items[3].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'brown';
// gives error
// items.style.backgroundColor = '#f4f4f4';

// for(var i=0; i < items.length; i++){
    // items[i].style.backgroundColor ='#f4f4f4'
// }

// GET ELEMENTS BY TAG NAME//
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'hello2';
// li[1].style.fontweight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for(var i=0; i<li.length; i++){
    // li[i],style.backgroundColor = '#f4f4f4'
// }

// QUERY SELECTOR //
/*var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value="SEND"

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';

// QUERY SELECTORALL//
var titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-ChannelSplitterNode(even)');

for(var i = 0; i < odd.length; i++)
{
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}*/
// query selctor and queryselectorall above//

// TRANSVERSING THE DOM //
var itemList = document.querySelector('#items');
// PARENT NODE
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// PARENT ELEMENT//
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// CHILDNODES//
// console.log(itemList.childNodes);

/*console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

// FIRST CHILD//
console.log(itemList.firstChild);

// FIRST ELEMENT CHILD //
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';*/

// LAST CHILD//
// console.log(itemList.lastChild);


// LAST LEMENT CHILD//
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// NEXT SIBLING//
// console.log(itemList.nextSibling);

// NEXT ELEMENT SIBLING//
// console.log(itemList.nextElementSibling);

// PREVIOUS SIBLING
// console.log(itemList.previousSibling);

// PREVIOUS ELEMENT SIBLING
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.computedStyleMap.color = 'green';

// CREATE ELEMENT
// CREATE A DIV
var newDDiv = document.createElement('div');

// add class
newDiv.className= 'hello';

// add id
newDiv.id = 'hello1';

// add attribute
newDiv.setAttribute('title', 'Hello Div');

// create text node
var newDIvTExt = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header.container');
var h1 = docment.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);