//caso 1 obtener la cabecera 
let cabecera = document.head
console.log(cabecera)
//caso 2 : obtener body

let body = document.body
console.log(body)


// caso 3 
let lpAntiguo = document.getElementById("antiguo")
console.log(lpAntiguo)

let nodos  = lpAntiguo.childNodes
for(let i = 0 ; i< nodos.length ; i++){
    console.log(nodos[i])
 }
 let arr_nodos = []
 for(let i=0; i < nodos.length; i++ ){
    if(nodo[i].nodeType == document.ELEMENT_NODE){
        arr_nodos.push(nodo[i].textContent)
    }
 }
document.getElementById("rpta1").innerHTML=arr_nodos
//caso 4: lo mismo para lenguaje moderno

let lpmoderno= document.getElementById("moderno")
let arr_nodos2 = []
for(let i=0; i < nodos.length; i++ ){
    if(nodo[i].nodeType == document.ELEMENT_NODE){
        arr_nodos.push(nodo[i].textContent)
    }
 }document.getElementById("rpta2").innerHTML=arr_nodos2

