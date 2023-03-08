function agregarArticulo() {
  // Obtener los valores ingresados por el usuario
  const articulo = document.getElementById("articulo").value;
  const precio = document.getElementById("precio").value;

  // Validar que se hayan ingresado ambos valores
  if (articulo.trim() === "" || precio.trim() === "") {
    alert("Por favor ingresa un artículo y un precio válido");
    return;
  }

  // Convertir el precio a número
  const precioNum = parseFloat(precio);

  // Validar que el precio sea un número válido
  if (isNaN(precioNum) || precioNum <= 0) {
    alert("Por favor ingresa un precio válido");
    return;
  }

  // Crear los elementos del ticket
  const li = document.createElement("ion-item");
  const p = document.createElement("p");

  // Agregar el texto del artículo y el precio al elemento p
  p.textContent = `${articulo} - $${precioNum.toFixed(2)}`;

  // Agregar el elemento p al elemento li
  li.appendChild(p);

  // Agregar una clase CSS al elemento li
  li.classList.add("bg-grey");

  // Agregar el elemento li al ticket
  document.getElementById("ticket").appendChild(li);

  // Llamar a la función presentarAlerta()
  presentarAlerta();

  // Calcular el total y actualizar el elemento de total
  const totalPrecio = calcularTotal();
  document.getElementById("total-precio").textContent = totalPrecio.toFixed(2);

  // Limpiar los campos de artículo y precio
  document.getElementById("articulo").value = "";
  document.getElementById("precio").value = "";
}

function calcularTotal() {
  let total = 0;
  // Recorrer todos los elementos del ticket y sumar los precios
  document.querySelectorAll("#ticket p").forEach((p) => {
    const precio = parseFloat(p.textContent.split(" - $")[1]);
    total += precio;
  });
  return total;
}

function presentarAlerta() {
  const alerta = document.createElement("ion-alert");
  alerta.header = "Ok!";
  alerta.subHeader = "Artículo agregado";
  alerta.message = "Se agregó el artículo al ticket correctamente";
  alerta.buttons = ["Cerrar"];

  document.body.appendChild(alerta);
  return alerta.present();
}
