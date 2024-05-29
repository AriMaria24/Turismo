document.addEventListener('DOMContentLoaded'), function () { 
    document.getElementById('add-button').addEventListener('click',
addLugar);
    };

    function addLugar() {
        const novoLugarInput = 
    document.getElementById('novo-lugar');

        const novoLugar = 
        novoLugarInput.value.trim();

    if (novoLugar !== '') { 
        const lugaresList = 
    document.querySelector('#lugares-list ul');
        const novoLugarItem =
    document.createElement('li');
    novoLugarItem.textContent =
    novoLugar;
        
    lugaresList.appendChild(novoLugarItem);
    novoLugarInput.value = '';
    }
}