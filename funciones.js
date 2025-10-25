 let estudiantes={}
 let resumen=[
  {presente:1},
  {ausente:2}
 ]
 function calcularTotalEstudiantes() {
    let totalEstudiantes=estudiantes.length;
    mostrarTexto("totalEstudiantes",totalEstudiantes);
  }
asistencia=function(){
  let presente=0;
  let ausente=0;
  for(let i = 0; i < resumen.length; i++){
    presente+=resumen[i].presente;
    ausente+=resumen[i].ausente;
  }
  mostrarTexto("totalPresente",presente);
  mostrarTexto("totalAusente",ausente);
}