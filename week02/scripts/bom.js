const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // unordered list reference

button.addEventListener('click', function () {

    if (input.value !== '') {

        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;

        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', 'Remove ' + input.value);

        li.append(deleteButton);

        list.append(li);

        input.value = '';
        input.focus();
    }

});