/* Byron Guerra */

var headerBar = document.createElement('div');
headerBar.id = 'header-bar'; // Puedes asignar un identificador único

// Agregar contenido a la barra superior
headerBar.innerHTML = `
    <div class="logo">Logo</div>
    <nav>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Desayuno</a></li>
            <li><a href="#">Refacción</a></li>
            <li><a href="#">Cena</a></li>
            <li><a href="#">No consumir</a></li>
        </ul>
    </nav>
`;

var headerElement = document.getElementById('header');
headerElement.appendChild(headerBar);