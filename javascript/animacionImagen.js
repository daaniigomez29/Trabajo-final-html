const imagen = document.getElementById('imagen');
const imagenMovil = document.getElementById('imagenMovil');

const cargarImagen = (entrada, observador) => {
  entrada.forEach((entrada) => {
    if(entrada.isIntersecting){
      entrada.target.classList.add('fade-in-imagen');
    }
  });
}

const observer = new IntersectionObserver(cargarImagen, {
  root: null, 
  rootMargin: '0px',
  threshold: 0.2
  })


observer.observe(imagen);
observer.observe(imagenMovil);
