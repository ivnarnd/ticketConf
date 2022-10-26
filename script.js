const precio = 200;
let btnResumen= document.querySelector("#btn-resumen");
function imprimir(){
    let resultado = document.querySelector(".resultado")
    let cantidad = document.querySelector("#inputCantidad").value;
    let categoria = document.querySelector("#inputCategoria").value;
    let valor = 0;
    let desc = 0;
    if(categoria=="Estudiante"){
        desc = 0.20;
    }else{
        if (categoria == "Trainee"){
            desc = 0.50;
        }else{
            if(categoria == "Junior"){
                desc = 0.85;
            }
        }
    }
    valor = precio * cantidad * desc;
    let msj="Total a Pagar: $ "+ valor;
    resultado.textContent = msj;
}
btnResumen.addEventListener('click',imprimir);
