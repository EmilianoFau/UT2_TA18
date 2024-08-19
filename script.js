// Lista de personas
const personas = [
    'Ana Gómez',
    'Luis Martínez',
    'Carlos Fernández',
    'Marta Rodríguez',
    'José Pérez',
    'Laura Sánchez',
    'David García'
];

function renderizarLista() {
    const lista = document.getElementById('lista');
    lista.innerHTML = personas.map(persona => `<li>${persona}</li>`).join('');
}

function filtrarLista() {
    const busqueda = document.getElementById('busqueda').value.toLowerCase();
    const items = document.querySelectorAll('#lista li');
    
    items.forEach(item => {
        const texto = item.textContent.toLowerCase();
        if (texto.includes(busqueda)) {
            item.classList.remove('oculto');
        } else {
            item.classList.add('oculto');
        }
    });
}

