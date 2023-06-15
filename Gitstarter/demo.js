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
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
// items[1].textContent = 'hello 2';
items[0].style.fontWeight = 'bold';
items[1].style.fontWeight = 'bold';
items[2].style.fontWeight = 'bold';
items[3].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'GREEN';
// gives error
// items.style.backgroundColor = '#f4f4f4';

// for(var i=0; i < items.length; i++){
    // items[i].style.backgroundColor ='#f4f4f4'
// }

// GET ELEMENTS BY TAG NAME//