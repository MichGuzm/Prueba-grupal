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






