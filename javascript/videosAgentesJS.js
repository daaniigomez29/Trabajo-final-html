let videos = (video, texto, texto2, colorTexto) =>{
    let cadena = `<video src="${video}" class="tamanoVideoHabilidades" autoplay loop muted></video>`;
    let cadena2 =  `<h2 class="pruebaFuente ${colorTexto} fade-in-habilidad">${texto2}</h2><p class="utilizarFuente letrasBlancasGenerales tamanoFuentePAgentes pruebaFuente pb-5 fade-in-habilidadTexto">${texto}</p>`;
    document.getElementById('videosHabilidades').innerHTML=cadena;
    document.getElementById('textoHabilidades').innerHTML=cadena2;
    }
    
    let videos2 = (video2, texto2, texto22, colorTexto2) =>{
    let cadena3 = `<video src="${video2}" class="tamanoVideoHabilidadesMovil" autoplay loop muted></video>`;
    let cadena4 =  `<h2 class="pruebaFuente ${colorTexto2} fade-in-habilidad">${texto22}</h2><p class="utilizarFuente letrasBlancasGenerales tamanoFuentePAgentes pruebaFuente pb-5 fade-in-habilidadTextoMovil">${texto2}</p>`;
    document.getElementById('videosHabilidadesMovil').innerHTML=cadena3;
    document.getElementById('textoHabilidadesMovil').innerHTML=cadena4;
    }