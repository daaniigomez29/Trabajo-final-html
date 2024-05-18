const texto = document.getElementById('texto');
const texto2 = document.getElementById('texto2');
const textoMovil = document.getElementById('textoMovil');

const cargarTexto = (entrada2, observador) => {
  entrada2.forEach((entrada2) => {
    if(entrada2.isIntersecting){
      entrada2.target.classList.add('fade-in-texto');
    }
  });
}

const observer2 = new IntersectionObserver(cargarTexto, {
  root: null, 
  rootMargin: '0px',
  threshold: 0.3
  })

const observer3 = new IntersectionObserver(cargarTexto, {
root: null, 
rootMargin: '0px',
threshold: 0.5
})


observer2.observe(texto);

observer3.observe(textoMovil);