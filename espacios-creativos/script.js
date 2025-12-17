document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevenir la acción predeterminada del enlace
        
        const url = event.currentTarget.getAttribute('href');
        const protocol = new URL(url).protocol; // Obtener el protocolo de la URL

        // Comprobar si es un protocolo que abre una aplicación
        if (protocol === 'mailto:' || protocol === 'tel:' || protocol === 'app:') {
            window.location.href = url; // Abre la aplicación asociada
        } else {
            window.open(url, '_blank'); // Abre en una nueva pestaña
        }
    });
});
