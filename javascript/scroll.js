function scrollToPorcentaje(porcentaje) {
    // Calculamos la altura total del documento
    var documentHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
  
    // Calculamos la posición relativa a la altura total según el porcentaje dado
    var targetScrollTop = (documentHeight * porcentaje) / 100;
  
    // Hacemos el scroll suave hacia la posición deseada
    window.scrollTo({
      top: targetScrollTop,
      behavior: 'smooth'
    });
  }