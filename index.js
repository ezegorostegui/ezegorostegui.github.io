//Código para Carrusel
const CARRUSEL = document.querySelector('.carrusel')
const ITEM = document.querySelectorAll('.item')

ITEM.forEach((cadaItem,i)=>{
    ITEM[i].addEventListener('click',()=>{

        let posicion = i
        let operacion = posicion * (-50)

        CARRUSEL.style.transform = `translateX(${operacion}%`

        ITEM.forEach((cadaITEM,i)=>{
            ITEM[i].classList.remove('seleccionado')
        })
        ITEM[i].classList.add('seleccionado')
    })
})


//Código para formulario
function validateForm() {
  //let x = document.forms['formulario']['nombre'].value;//
  var nombre = document.getElementsByName('nombre');
  var apellido = document.getElementsByName('apellido');
  var mail = document.getElementsByName('mail');
  var mensaje = document.getElementsByName('mensaje');

  if (nombre.length == 0) {
    alert('No se agregó el nombre');
    return false;
  }
  if (apellido.length == 0) {
      alert('No se agregó el apellido');
      return false;
  }
  if (mail.length == 0) {
    alert('No se agregó el mail');
    return false;
  }
  if (mensaje.length == 0) {
    alert('No se agregó el mensaje');
    return false;
  }
  return true;
}