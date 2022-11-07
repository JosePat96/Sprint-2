const form=document.querySelector("#formul")
const input=document.querySelectorAll("#formul input")
const correo= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const validar=(evento)=>{
    switch (evento.target.name) {
        case "nombre":
            if (evento.target.value==""){
                document.getElementById("Nomb").classList.add("lineError-mostrar")
                document.getElementById("error1").classList.add("imgError-mostrar")
                document.getElementById("msj1").classList.add("advertencia-mostrar")
            }  else {
                document.getElementById("Nomb").classList.remove("lineError-mostrar")
                document.getElementById("error1").classList.remove("imgError-mostrar")
                document.getElementById("msj1").classList.remove("advertencia-mostrar")
            }

             break;
        case "apellido":
            if (evento.target.value==""){
            document.getElementById("Apell").classList.add("lineError-mostrar")
            document.getElementById("error2").classList.add("imgError-mostrar")
            document.getElementById("msj2").classList.add("advertencia-mostrar")
        }  else {
            document.getElementById("Apell").classList.remove("lineError-mostrar")
            document.getElementById("error2").classList.remove("imgError-mostrar")
            document.getElementById("msj2").classList.remove("advertencia-mostrar")
            }
            
            break;
        case "correo": if (correo.test(evento.target.value)){
            document.getElementById("Correo").classList.remove("lineError-mostrar")
            document.getElementById("error3").classList.remove("imgError-mostrar")
            document.getElementById("msj3").classList.remove("advertencia-mostrar")
        }  else {
            document.getElementById("Correo").classList.add("lineError-mostrar")
            document.getElementById("error3").classList.add("imgError-mostrar")
            document.getElementById("msj3").classList.add("advertencia-mostrar")
            }
                
            break;

        case "contras":if (evento.target.value==""){
            document.getElementById("Contraseña").classList.add("lineError-mostrar")
            document.getElementById("error4").classList.add("imgError-mostrar")
            document.getElementById("msj4").classList.add("advertencia-mostrar")
        }  else {
            document.getElementById("Contraseña").classList.remove("lineError-mostrar")
            document.getElementById("error4").classList.remove("imgError-mostrar")
            document.getElementById("msj4").classList.remove("advertencia-mostrar") 
            }
            break;          
    }
}

input.forEach((inputs)=>{
    console.log(inputs.value);

    inputs.addEventListener("keyup",validar)
    inputs.addEventListener("blur",validar)

})

form.addEventListener("submit",(evento)=>{


let respuestasLS= localStorage.getItem("respuestas")
let respuestas 
if (respuestasLS==undefined){
    respuestas= []
} else {
    respuestas= JSON.parse(respuestasLS)
}
evento.preventDefault()
let formulario={
    nombre: evento.target.nombre.value,
    apellido: evento.target.apellido.value,
    correo: evento.target.correo.value,
    contraseña: evento.target.contras.value,
}
respuestas.push(formulario);
let formularioJSON= JSON.stringify(respuestas)
localStorage.setItem("respuestas", formularioJSON)
console.log(localStorage);


})
