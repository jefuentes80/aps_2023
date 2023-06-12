/// Crea los elementos HTML utilizando el DOM
function primera_parte(){
  let elementos =
  `  <section class="gallery" id="Galería">
        <div class="contenedor">
          <h2 class="subtitulo">Cenas</h2>
          <div class="contenedor-galeria">
            <img src="https://i.pinimg.com/564x/54/5e/d7/545ed7a75d832ea4a7faaab086ee9684.jpg" alt="" class="img-galeria">
            <img src="https://i.pinimg.com/564x/cc/af/74/ccaf74fd55e11d91fe6c50fb8d0b6f38.jpg" alt="" class="img-galeria">
            <img src="https://i.pinimg.com/564x/54/5e/d7/545ed7a75d832ea4a7faaab086ee9684.jpg" alt="" class="img-galeria">
            <img src="https://i.pinimg.com/564x/cc/af/74/ccaf74fd55e11d91fe6c50fb8d0b6f38.jpg" alt="" class="img-galeria">
            <img src="https://i.pinimg.com/564x/54/5e/d7/545ed7a75d832ea4a7faaab086ee9684.jpg" alt="" class="img-galeria">
            <img src="https://i.pinimg.com/564x/cc/af/74/ccaf74fd55e11d91fe6c50fb8d0b6f38.jpg" alt="" class="img-galeria">
            <img src="https://i.pinimg.com/564x/54/5e/d7/545ed7a75d832ea4a7faaab086ee9684.jpg" alt="" class="img-galeria">
            <img src="https://i.pinimg.com/564x/cc/af/74/ccaf74fd55e11d91fe6c50fb8d0b6f38.jpg" alt="" class="img-galeria">
            <img src="https://i.pinimg.com/564x/54/5e/d7/545ed7a75d832ea4a7faaab086ee9684.jpg" alt="" class="img-galeria">
          </div>
        </div>
      </section>
      
      <section class="imagen-light">
        <i class="fas fa-times close"></i>
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ficon-icons.com%2Fes%2Ficono%2Fx-c%25C3%25ADrculo%2F174835&psig=AOvVaw3CtJFE4uvYrp6lfVeJegqD&ust=1686667536133000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCICR-av8vf8CFQAAAAAdAAAAABAE" alt="" class="agregar-imagen">
      </section>
    `;

    let caja = document.getElementById("cena")


caja.innerHTML = elementos;

}

primera_parte();

const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    
    })
})

contenedorLight.addEventListener('click', (e) =>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.remove('show');
        imagenesLight.classList.remove('showImage'); 
    }
})

const aparecerImagen = (imagen) =>{
    imagenesLight.src = imagen;
    contenedorLight.classList.add('show');
    imagenesLight.classList.add('showImage');
}
