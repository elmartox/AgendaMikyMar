const listaCitas = document.getElementById("listaCitas");
const citas = JSON.parse(localStorage.getItem("citas")) || [];

// 🔹 Mostrar citas existentes
function mostrarCitas() {
  listaCitas.innerHTML = "";
  citas.forEach((cita, index) => {
    const div = document.createElement("div");
    div.classList.add("cita");
    div.innerHTML = `
      <strong>${cita.fecha}</strong><br>
      <b>${cita.titulo}</b><br>
      ${cita.descripcion}<br>
      <button onclick="eliminarCita(${index})">Eliminar</button>
    `;
    listaCitas.appendChild(div);
  });
}

// 🔹 Agregar una cita
document.getElementById("agregarCita").addEventListener("click", () => {
  const fecha = document.getElementById("fechaCita").value;
  const titulo = document.getElementById("tituloCita").value;
  const descripcion = document.getElementById("descripcionCita").value;

  if (!fecha || !titulo) return alert("Por favor completa la fecha y el título 💕");

  citas.push({ fecha, titulo, descripcion });
  localStorage.setItem("citas", JSON.stringify(citas));
  mostrarCitas();

  document.getElementById("tituloCita").value = "";
  document.getElementById("descripcionCita").value = "";
});

// 🔹 Eliminar cita
function eliminarCita(i) {
  citas.splice(i, 1);
  localStorage.setItem("citas", JSON.stringify(citas));
  mostrarCitas();
}

mostrarCitas();
