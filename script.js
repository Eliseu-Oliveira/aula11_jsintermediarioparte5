const form = document.querySelector('form');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputPhone = document.querySelector('#phone');
const btnSave = document.querySelector('#submit-btn');
const btnFinish = document.querySelector('#btn-finish');
const listContainer = document.querySelector('#list-container');
const list = document.querySelector('#list');

let contacts = [];

btnSave.addEventListener('click', function(event) {
  event.preventDefault();

  if (!inputName.value || !inputEmail.value || !inputPhone.value) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  const contact = {
    name: inputName.value,
    email: inputEmail.value,
    phone: inputPhone.value
  };

  contacts.push(contact);

  inputName.value = '';
  inputEmail.value = '';
  inputPhone.value = '';

  console.log(contacts);
});

btnFinish.addEventListener('click', function(event) {
  event.preventDefault();

  if (contacts.length === 0) {
    alert('Por favor, adicione pelo menos um contato!');
    return;
  }

  form.style.display = 'none';
  listContainer.style.display = 'block';

  let listHTML = '';

  contacts.forEach(function(contact) {
    listHTML += `<li>${contact.name} - ${contact.email} - ${contact.phone}</li>`;
  });

  list.innerHTML = listHTML;
});