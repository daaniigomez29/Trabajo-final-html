const textoMovilAgentes = document.getElementById('textoMovilAgentes');

const cargarTexto2 = (entrada, observador) => {
  entrada.forEach((entrada) => {
    if(entrada.isIntersecting){
      entrada.target.classList.add('fade-in-texto2');
    }
  });
}

const observer4 = new IntersectionObserver(cargarTexto2, {
  root: null, 
  rootMargin: '0px',
  threshold: 0.5
  })

observer4.observe(textoMovilAgentes);