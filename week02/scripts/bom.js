const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // unordered list reference

button.addEventListener('click', function () {

    // Check that input is not blank
    if (input.value.trim() === '') {
        input.focus();
        return;
    }

    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = input.value;

    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', 'Remove ' + input.value);

    li.append(deleteButton);
    list.append(li);

    // Event listener to remove chapter
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
    });

    // Clear input field
    input.value = '';

    // Return focus to input
    input.focus();
});