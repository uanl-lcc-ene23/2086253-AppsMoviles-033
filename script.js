function cerrarCaja(id) {
    var cajaACerrar = document.getElementById(id);
    cajaACerrar.parentNode.removeChild(cajaACerrar);
  
    let mensaje = document.createElement('p');
    mensaje.innerHTML = "La notificacion se elimino correctamente";
    mensaje.style.color = "black"; 
    document.getElementById("contenido").appendChild(mensaje);
}

let items = [];

function agregarArticulo() {
  const articulo = document.getElementById("articulo").value;
  const precio = document.getElementById("precio").value;
  const verde = document.getElementById("verde");

  items.push({ articulo: articulo, precio: precio });

  document.getElementById("articulo").value = "";
  document.getElementById("precio").value = "";

  verde.style.display = "block";

  const mensaje = document.getElementById("verde");
  mensaje.style.display = "block";
  setTimeout(() => {
    mensaje.style.display = "none";
  }, 3000);

  const ticket = document.getElementById("ticket");
  ticket.innerHTML = `
    <p>========TU TICKET========</p>
    ${items.map((item) => `
      <br><p><span class="texto-izquierda">${item.articulo}</span><span class="texto-derecha">$ ${item.precio}</span></p>
    `).join("")}
  `;
}

function calcularTotal() {
  const ticket = document.getElementById("ticket");
  const totalPrecio = document.getElementById("total-precio");

  let total = 0;

  ticket.innerHTML = `
    <p>========TU TICKET========</p>
    ${items.map((item) => `
      <br><p><span class="texto-izquierda">${item.articulo}</span><span class="texto-derecha">$ ${item.precio}</span></p>
    `).join("")}
  `;

  items.forEach((item) => {
    total += Number(item.precio);
  });

  totalPrecio.innerText = total.toFixed(2);
}