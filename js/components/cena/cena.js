// Crea los elementos HTML utilizando el DOM
var h1 = document.createElement('h1');
h1.textContent = 'Cenas Saludables';

var mainGallery = document.createElement('div');
mainGallery.className = 'main-gallery';

// Crea los artículos y añádelos a la galería
for (var i = 1; i <= 18; i++) {
  var article = document.createElement('article');
  
  var div = document.createElement('div');
  div.className = 'photo';
  
  var img = document.createElement('img');
  img.src = 'https://i.pinimg.com/564x/dd/4a/f4/dd4af4fde554819fd5f472a06273ff69.jpg';
  img.alt = '';
  
  var p = document.createElement('p');
  p.textContent = 'Cenas saludables' + i;
  
  div.appendChild(img);
  article.appendChild(div);
  article.appendChild(p);
  
  mainGallery.appendChild(article);
}

// Añade los elementos al documento
document.body.appendChild(h1);
document.body.appendChild(mainGallery);

// Crea el cuadro para la vista de teléfono
var phoneFrame = document.createElement('div');
phoneFrame.style.width = '375px';  // Ancho de la pantalla de un iPhone
phoneFrame.style.height = '667px'; // Alto de la pantalla de un iPhone
phoneFrame.style.border = '1px solid black';
phoneFrame.style.margin = '0 auto';
phoneFrame.style.overflow = 'hidden';

// Envuelve el contenido principal dentro del cuadro para teléfono
phoneFrame.appendChild(h1);
phoneFrame.appendChild(mainGallery);

// Añade el cuadro para teléfono al documento
document.body.innerHTML = '';
document.body.appendChild(phoneFrame);


  