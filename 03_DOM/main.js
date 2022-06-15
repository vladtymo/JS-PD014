// ----------- DOM -----------

// add HTML code to the end
document.write('<p>Blabla text...</p>')

// get elements from DOM

const list = document.getElementById('main-list');
//document.getSelection('#main-list');

// add new list item
// 1
//list.innerHTML += `<li class="styled" title="my item">new item from JS</li>`

// 2
// const newItem = document.createElement('li');
// newItem.innerHTML = 'inner text...';
// newItem.classList.add('styled');

// newItem.setAttribute('title', 'my item');

// list.appendChild(newItem);

// ----------- events -----------

const addBtn = document.getElementById('add-button');
const textInput = document.getElementById('text-input');

addBtn.addEventListener('click', () => {
    console.log("Clicked");

    // add new item
    const text = textInput.value;
    list.innerHTML += `<li class="styled" title="my item">${text}</li>`;
});