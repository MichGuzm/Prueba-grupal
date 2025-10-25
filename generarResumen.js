let asistencia = [
    { estudiante: "Juan Perez", lista: "A" },
    { estudiante: "Juan Perez", lista: "F" }

];

mostrarResumen = function () {

}

revisarAsistencia = function () {
    let totalAusentes = [];
    let totalPresentes = []
    for (let i = 0; i < asistencia.length; i++) {
        let presente = asistencia[i].lista
        if (presente.lista === "A") {
            totalPresentes += 1
        } else if (presente.lista === "F") {
            totalAusentes += 1
        }
    }
    console.log(totalAusentes);
    console.log(totalPresentes);

}

function mostrarResumen() {

    let cursoEstudiantes = document.getElementById("cursoEstudiantes").value;
    let docente = document.getElementById("txtDocente").value;
    let asistenciaEstudiantes = document.getElementsByClassName("txtAsistencia");

    let totalAsistencia = asistenciaEstudiantes.length;
    let presentes = 0;

 for (let i = 0; i < asistenciaEstudiantes.length; i++) {
    if (asistenciaEstudiantes[i].lista) {
        presentes++;
    }
}
let ausentes = totalAsistencia - presentes;

let resumen = `
        <p><b>Curso:</b> ${cursoEstudiantes}</p>
        <p><b>Docente:</b> ${docente}</p>
        <p><b>Total de estudiantes:</b> ${totalAsistencia}</p>
        <p><b>Presentes:</b> ${presentes}</p>
        <p><b>Ausentes:</b> ${ausentes}</p>
      `;

document.getElementById("resumen-dia").innerHTML = resumen;


}






