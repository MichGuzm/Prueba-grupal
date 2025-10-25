// REQUERIMIENTOS
//  PARTE 1: DATOS DEL CURSO Y DOCENTE

function guardarCurso() {
  limpiarErrores();

  const curso = document.getElementById("curso").value.trim();
  const docente = document.getElementById("docente").value.trim();

  let valido = true;

  if (curso === "") {
    mostrarError("error-curso", "El nombre del curso es obligatorio.");
    valido = false;
  }

  if (docente === "") {
    mostrarError("error-docente", "El nombre del docente es obligatorio.");
    valido = false;
  }

  if (valido) {
    const mensaje = `Asistencia del curso ${curso}, pasada por ${docente}.`;
    document.getElementById("mensaje-curso").innerText = mensaje;
  }
}

function mostrarError(id, mensaje) {
  document.getElementById(id).innerText = mensaje;
}

function limpiarErrores() {
  const errores = document.querySelectorAll(".error");
  errores.forEach(e => e.innerText = "");
}
/*termina parte 1*/

/* PARTE 2: MARCAR ASISTENCIA DEL DIA*/
// Marcar asistencia
marcarAsistencia=function() {
  limpiarErrores();

  const id = document.getElementById("id-estudiante").value.trim();
  const estado = document.getElementById("estado").value;

  let valido = true;

  if (id === "") {
    mostrarError("error-id-estudiante", "El ID es obligatorio.");
    valido = false;
  }

  const estudiante = estudiantes.find(e => e.id === id);
  if (!estudiante) {
    mostrarError("error-id-estudiante", "El estudiante no existe.");
    valido = false;
  }

  if (estado === "") {
    mostrarError("error-estado", "Debe seleccionar un estado.");
    valido = false;
  }
  let asistencia = window.asistencia || [];

  if (valido) {
    const existente = asistencia.find(a => a.id === id);
    if (existente) {
      existente.estado = estado;
    } else {
      asistencia.push({ id, nombre: estudiante.nombre, estado });
    }
    actualizarTablaAsistencia();
  }
}

// Mostrar tabla de asistencia
function actualizarTablaAsistencia() {
  const tbody = document.querySelector("#tabla-asistencia tbody");
  tbody.innerHTML = "";

  for (let registro of asistencia) {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${registro.id}</td>
      <td>${registro.nombre}</td>
      <td>${registro.estado}</td>
    `;
    tbody.appendChild(fila);
  }
}

// Generar resumen del día
function generarResumen() {
  const total = asistencia.length;
  const presentes = asistencia.filter(a => a.estado === "Presente").length;
  const ausentes = asistencia.filter(a => a.estado === "Ausente").length;

  const resumen = `
    Curso: ${curso}
    Docente: ${docente}
    Total registrados: ${total}
    Presentes: ${presentes}
    Ausentes: ${ausentes}
  `;

  document.getElementById("resumen-dia").innerText = resumen;
}
// Utilitarios
function mostrarError(id, mensaje) {
  document.getElementById(id).innerText = mensaje;
}

function limpiarErrores() {
  const errores = document.querySelectorAll(".error");
  errores.forEach(e => e.innerText = "");
}





/* final parte 2 */







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




