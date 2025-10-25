let asistencia=[
    {estudiante:"Juan Perez",lista:"A" },
    {estudiante:"Juan Perez",lista:"F" }

];

revisarAsistencia=function(){
    for(let i=0;i<asistencia.length;i++){
        let presente=asistencia[i].lista
        if(presente.lista==="A"){
            let totalPresentes;
            totalPresentes+=presente
        } else if (presente.lista==="F"){
            let totalAusentes;
            totalAusentes
        }
    }
}

function mostrarResumen() {

  let nombreCurso = "Curso de JavaScript";
  let nombreDocente = "Juan Pérez";
  let totalEstudiantes = estudiantes.length;
  let presentes = 0;
  let ausentes = 0;

  // Contar presentes y ausentes
  estudiantes.forEach(est => {
    // Aquí debes agregar la lógica para contar presentes y ausentes
    // Por ahora, asumimos que todos están presentes
    presentes++;
  });

  let resumen = `Nombre del curso: ${nombreCurso}<br>
                 Nombre del docente: ${nombreDocente}<br>
                 Total de estudiantes registrados: ${totalEstudiantes}<br>
                 Presentes: ${presentes}<br>
                 Ausentes: ${ausentes}`;

  document.getElementById("resumen").innerHTML = resumen;
}



