
const fechaInicio = new Date("2024-08-05");

function actualizarContador() {
  const hoy = new Date();
  const diferencia = hoy - fechaInicio; // en milisegundos
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  document.getElementById("contador").textContent = `${dias} días 💖`;
}

actualizarContador();

// 🌸 corazones flotando
function crearCorazon() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 4 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}

setInterval(crearCorazon, 500);

// 📆 Botón: días para el próximo 5 del mes
document.getElementById("btnProximoMes").addEventListener("click", () => {
  const hoy = new Date();

  // Creamos una fecha para el 5 de este mes
  let proximo5 = new Date(hoy.getFullYear(), hoy.getMonth(), 5);

  // Si ya pasó el día 5, saltamos al 5 del siguiente mes
  if (hoy.getDate() > 5) {
    proximo5 = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 5);
  }

  // Calculamos la diferencia en días
  const diff = Math.ceil((proximo5 - hoy) / (1000 * 60 * 60 * 24));

  alert(`💖 Faltan ${diff} días para el próximo 5 💞`);
});


// 🗓️ Botón: ir al calendario
document.getElementById("btnCalendario").addEventListener("click", () => {
  window.location.href = "calendario.html";
});