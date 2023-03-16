const headerTitle = document.querySelector('#header-title');
headerTitle.parentElement.insertAdjacentHTML('afterbegin', '<p>Hello</p>');
const itemsList = document.querySelector('#items');
itemsList.firstElementChild.insertAdjacentHTML('beforebegin', '<li class="list-group-item">Hello</li>');
