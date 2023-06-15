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
var header = document.querySelector('#main-header');
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
}
// query selctor and queryselectorall above//