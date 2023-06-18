//Crea los elementos HTML utilizando el DOM
/*Alejandra Zita*/
function primera_parte(){
  let elementos =
  `  <h1>Galeria de Cenas</h1>

  <div class="main-gallery">
    <article>
      <div class="photo">
        <img src="https://i.pinimg.com/564x/54/5e/d7/545ed7a75d832ea4a7faaab086ee9684.jpg" alt="" />
      </div>
      <p>Cena 1</p>
    </article>
    
    <article>
      <div class="photo">
        <img src="https://i.pinimg.com/564x/fc/ec/ee/fceceee44174a2bd96d21b32d676472a.jpg" alt="" />
      </div>
      <p>Cena 2</p>
    </article>
    
    <article>
      <div class="photo">
        <img src="https://i.pinimg.com/564x/54/5e/d7/545ed7a75d832ea4a7faaab086ee9684.jpg" alt="" />
      </div>
      <p>Cena 3</p>
    </article>
    
    <article>
      <div class="photo">
        <img src="https://i.pinimg.com/564x/fc/ec/ee/fceceee44174a2bd96d21b32d676472a.jpg" alt="" />
      </div>
      <p>Cena 4 </p>
    </article>
    
    <article>
      <div class="photo">
        <img src="https://i.pinimg.com/564x/54/5e/d7/545ed7a75d832ea4a7faaab086ee9684.jpg" alt="" />
      </div>
      <p>Cena 5</p>
    </article>
    
    <article>
      <div class="photo">
        <img src="https://i.pinimg.com/564x/fc/ec/ee/fceceee44174a2bd96d21b32d676472a.jpg" alt="" />
      </div>
      <p>cena 6</p>
    </article>
    
    <article>
      <div class="photo">
        <img src="https://i.pinimg.com/564x/54/5e/d7/545ed7a75d832ea4a7faaab086ee9684.jpg" alt="" />
      </div>
      <p>Cena 7</p>
    </article>
    
    <article>
      <div class="photo">
        <img src="https://i.pinimg.com/564x/fc/ec/ee/fceceee44174a2bd96d21b32d676472a.jpg" alt="" />
      </div>
      <p>Cena 8</p>
    </article>
    
    <article>
      <div class="photo">
        <img src="https://i.pinimg.com/564x/54/5e/d7/545ed7a75d832ea4a7faaab086ee9684.jpg" alt="" />
      </div>
      <p>Cena 9</p>
    </article>
    
    <article>
      <div class="photo">
        <img src="https://i.pinimg.com/564x/fc/ec/ee/fceceee44174a2bd96d21b32d676472a.jpg" alt="" />
      </div>
      <p>Cena 10</p>
    </article>
    
    <article>
      <div class="photo">
        <img src="https://i.pinimg.com/564x/54/5e/d7/545ed7a75d832ea4a7faaab086ee9684.jpg" alt="" />
      </div>
      <p>Cena 11</p>
    </article>
    
    <article>
      <div class="photo">
        <img src="https://i.pinimg.com/564x/57/37/4c/57374cb38802d35fe9e9825a2502ab33.jpg" alt="" />
      </div>
      <p>Cena 12</p>
    </article>
    
    <article>
      <div class="photo">
        <img src="https://i.pinimg.com/564x/fc/ec/ee/fceceee44174a2bd96d21b32d676472a.jpg" alt="" />
      </div>
      <p>Cena 13</p>
    </article>
    
    <article>
      <div class="photo">
        <img src="https://i.pinimg.com/564x/57/37/4c/57374cb38802d35fe9e9825a2502ab33.jpg" alt="" />
      </div>
      <p>Cena 14</p>
    </article>
    
    <article>
      <div class="photo">
        <img src="https://i.pinimg.com/564x/54/5e/d7/545ed7a75d832ea4a7faaab086ee9684.jpg" alt="" />
      </div>
      <p>Cena 15</p>
    </article>
    
    <article>
      <div class="photo">
        <img src="https://i.pinimg.com/564x/fc/ec/ee/fceceee44174a2bd96d21b32d676472a.jpg" alt="" />
      </div>
      <p>Cena 16</p>
    </article>
    <article>
      <div class="photo">
        <img src="https://i.pinimg.com/564x/54/5e/d7/545ed7a75d832ea4a7faaab086ee9684.jpg" alt="" />
      </div>
      <p>Cena 15</p>
    </article>
    
    <article>
      <div class="photo">
        <img src="https://i.pinimg.com/564x/fc/ec/ee/fceceee44174a2bd96d21b32d676472a.jpg" alt="" />
      </div>
      <p>Cena 16</p>
    </article>
  </div>
    `;

    let caja = document.getElementById("cena")


caja.innerHTML = elementos;

}

primera_parte();


