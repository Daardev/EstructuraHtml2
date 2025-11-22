//seleccionamos la clase de nuestro html
const app =  document.querySelector('.app');
//creamos nuestro botón
const boton = document.createElement('button');
//creamos un icono para el boton
const icono = document.createElement('i');

//agregamos el icono dentro del boton
boton.append(icono)

//agregamos clases al icono
icono.classList.add('fa-solid', 'fa-arrow-up');
//agregamos clases bootstrap
boton.classList.add('boton','btn', 'btn-primary', 'rounded-circle')
//renderizamos el boton en el html
app.append(boton);

//logica para que funcione el boton
boton.addEventListener('click', ()=> {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});