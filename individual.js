// Lista de estudiantes
let estudiantes = [];

// Función para validar nombre
function validarNombre(nombre) {
  if (nombre.trim() === "") return "El nombre es obligatorio.";
  if (!/^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/.test(nombre)) return "El nombre solo puede contener letras y espacios.";
  if (!/^[A-ZÁÉÍÓÚÑ]/.test(nombre)) return "La primera letra debe ser mayúscula.";
  return "";
}

// Función para validar correo
function validarCorreo(correo) {
  if (correo.trim() === "") return "Ingrese un correo válido.";  
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(correo)) return "Ingrese un correo válido.";
  return "";
}
// Función para validar ID
function validarID(id) {
  if (id.trim() === "") return "El ID es obligatorio.";
  if (!/^\d+$/.test(id)) return "El ID debe tener solo números.";
  return "";
}

// Función para limpiar errores
function limpiarErrores() {
  document.getElementById("error-nombre").textContent = "";
  document.getElementById("error-correo").textContent = "";
  document.getElementById("error-id").textContent = "";
  document.getElementById("error-eliminar").textContent = "";
}
// Función para guardar o actualizar estudiante
function guardarEstudiante() {
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const id = document.getElementById("id").value;

  const errorNombre = validarNombre(nombre);
  const errorCorreo = validarCorreo(correo);
  const errorID = validarID(id);

  document.getElementById("error-nombre").textContent = errorNombre;
  document.getElementById("error-correo").textContent = errorCorreo;
  document.getElementById("error-id").textContent = errorID;

  if (errorNombre || errorCorreo || errorID) return;

  const existe = estudiantes.findIndex(e => e.id === id);

  if (existe >= 0) {
    estudiantes[existe].nombre = nombre;
    estudiantes[existe].correo = correo;
  } else {
    estudiantes.push({ id, nombre, correo });
  }

  document.getElementById("nombre").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("id").value = "";
  limpiarErrores();
  mostrarEstudiantes();
}
// Función para mostrar la lista en pantalla
function mostrarEstudiantes() {
  const tabla = document.querySelector("#tabla-estudiantes tbody");
  tabla.innerHTML = "";

  estudiantes.forEach(est => {
    const fila = document.createElement("tr");
    fila.innerHTML = `<td>${est.id}</td><td>${est.nombre}</td><td>${est.correo}</td>`;
    tabla.appendChild(fila);
  });
}
// Función para eliminar estudiante por ID
function eliminarEstudiante() {
  const idEliminar = document.getElementById("id-eliminar").value;
  const errorEliminar = document.getElementById("error-eliminar");

  if (idEliminar.trim() === "") {
    errorEliminar.textContent = "Ingresa un ID para eliminar.";
    return;
  }

  const index = estudiantes.findIndex(e => e.id === idEliminar);

  if (index === -1) {
    errorEliminar.textContent = "No se encontró un estudiante con ese ID.";
    return;
  }

  estudiantes.splice(index, 1);
  document.getElementById("id-eliminar").value = "";
  errorEliminar.textContent = "";
  mostrarEstudiantes();
  alert("Estudiante eliminado correctamente.");
}
// Inicializar la tabla al cargar la página
document.addEventListener("DOMContentLoaded", mostrarEstudiantes);
