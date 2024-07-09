
// Función para encriptar el texto
function encriptarTexto() {
    let inputText = document.getElementById('entradaTexto').value;
    let pivote = 2;
    pivote = validarTexto(inputText);
    console.log(pivote)
    if (inputText === '' || pivote == 1){
        alert('Escribe un texto válido a encriptar!! D:');
        } else {
            let textoEncriptado = inputText.replace(/e/g, "enter")
                                        .replace(/i/g, "imes")
                                        .replace(/a/g, "ai")
                                        .replace(/o/g, "ober")
                                        .replace(/u/g, "ufat");
            
            document.getElementById('salidaTexto').value = textoEncriptado;
            document.getElementById('textoEncriptado').removeAttribute('hidden');
            document.getElementById('avisoMsj').setAttribute('hidden','true');
        }
}

// Función para desencriptar el texto
function desencriptarTexto() {
    let inputText = document.getElementById('entradaTexto').value;
    if (inputText === '') {
        alert('Escribe un texto encriptado!! D:');
    } else{
        let textoDesencriptado = inputText.replace(/enter/g, "e")
                                        .replace(/imes/g, "i")
                                        .replace(/ai/g, "a")
                                        .replace(/ober/g, "o")
                                        .replace(/ufat/g, "u");
        document.getElementById('salidaTexto').value = textoDesencriptado;
        document.getElementById('textoEncriptado').removeAttribute('hidden');
        document.getElementById('avisoMsj').setAttribute('hidden','true');   }
}

function copiarTexto() {
    let outputText = document.getElementById('salidaTexto');
    outputText.select();
    document.execCommand('copy');
    alert("Texto copiado");
    document.getElementById('entradaTexto').value='';
}

function validarTexto(texto) {
    var validacion = /^[a-z\s]+$/;
    let pivote = 2;
    if (validacion.test(texto)) {
        pivote = 0;
    } else {
        pivote = 1;
    }
    return pivote;
}

/*let texto = 'hola';
console.log(validarTexto(texto));
*/