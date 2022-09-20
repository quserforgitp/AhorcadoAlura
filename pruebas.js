var areaTexto = document.querySelector("#areaTexto");
var areaTexto2 = document.querySelector("#areaTexto-2");

areaTexto.addEventListener("keyup", (e) => {
    areaTexto.value = areaTexto.value.toUpperCase()
}) // transformar texto a uppercase (se alcanza a ver el lowercase)

areaTexto2.style.textTransform = "uppercase"; // transformar texto a uppercase