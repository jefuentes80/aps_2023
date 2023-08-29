// Obtener referencia al campo de búsqueda
const buscadorInput = document.querySelector(".buscador");

// Agregar marca de agua al campo de búsqueda
buscadorInput.placeholder = " Buscar recetas...";

const BuscadorInput = document.querySelector(".buscador");
const resultsContainer = document.getElementById("resultsContainer");

BuscadorInput.addEventListener("input", searchNames);

function searchNames() {
    const query = BuscadorInput.value.toLowerCase();
    
    // Limpiar resultados anteriores
    resultsContainer.innerHTML = "";

    if (query.length === 0) {
        return;
    }

    let matchingNames = [];

    // Buscar en la primera base de datos
    matchingNames = findMatches(query, database1);

    // Si no hay coincidencias en la primera, buscar en la segunda
    if (matchingNames.length === 0) {
        matchingNames = findMatches(query, database2);
    }

    // Si no hay coincidencias en la segunda, buscar en la tercera
    if (matchingNames.length === 0) {
        matchingNames = findMatches(query, database3);
    }

    // Si no hay coincidencias en la tercera, buscar en la cuarta
    if (matchingNames.length === 0) {
        matchingNames = findMatches(query, database4);
    }

    // Mostrar resultados
    if (matchingNames.length > 0) {
        matchingNames.forEach(product => {
            const resultItem = document.createElement("div");
            resultItem.textContent = product.nombre;
            resultItem.classList.add("result-item");
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.innerHTML = "<p>No hay resultados</p>";
    }
}

function findMatches(query, database) {
    return database.filter(product =>
        product.nombre.toLowerCase().includes(query)
    );
}