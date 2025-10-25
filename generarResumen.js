let asistencia=[
    {estudiante:"Juan Perez",lista:"A" },
    {estudiante:"Juan Perez",lista:"F" }

];

mostrarResumen = function () {

}

revisarAsistencia=function(){
    let totalAusentes=[];
    let totalPresentes=[]
    for(let i=0;i<asistencia.length;i++){
        let presente=asistencia[i].lista
        if(presente.lista==="A"){
            totalPresentes+=1
        } else if (presente.lista==="F"){
            totalAusentes+=1
        }
    }
    console.log(totalAusentes);
    console.log(totalPresentes);

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






