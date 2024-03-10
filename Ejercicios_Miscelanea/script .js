//AREA DE TRIANGULO
document.getElementById('openModal').onclick = function() {
  document.getElementById('miModal').style.display ="block";
}

document.getElementsByClassName('cerrar')[0].onclick = function() {
  document.getElementById('miModal').style.display = "none";
}

function calcularArea() {
    
    var base = document.getElementById('base').value;
    var altura = document.getElementById('altura').value;
    var area = (base * altura) / 2;
    var area =(base*altura) / 2;
    
document.getElementById('area').textContent = area + ' unidades cuadradas';
  }



//SUMA DE DOS NUMEROS
document.getElementById('openModalSuma').addEventListener('click', function() {
  document.getElementById('modalSuma').style.display = 'block';
});

var cerrarButtons = document.getElementsByClassName('cerrar');
for (let i = 0; i < cerrarButtons.length; i++) {
  cerrarButtons[i].addEventListener('click', function() {
      this.parentElement.parentElement.style.display = 'none';
  });
}
function sumarNumeros() {
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  var suma = num1 + num2;
  document.getElementById('resultadoSumaTexto').textContent = suma;
}


//NUMERO ELEVADO AL CUADRADO
  document.getElementById('openModalElevado').addEventListener('click', function() {
    document.getElementById('modalElevado').style.display = 'block';
});

var cerrarButtons = document.getElementsByClassName('cerrar');
for (let i = 0; i < cerrarButtons.length; i++) {
    cerrarButtons[i].addEventListener('click', function() {
        this.parentElement.parentElement.style.display = 'none';
    });
}
function elevarAlCuadrado() {
    var num = parseFloat(document.getElementById('ingresaNum').value);
    if (!isNaN(num)) { 
        var cuadrado = num ** 2;
        document.getElementById('resultadoNum').textContent = cuadrado;
    } else {
        document.getElementById('resultadoNum').textContent = "Por favor, ingrese un número válido.";
    }
}


  //Conversion euros a dolares
  document.getElementById('openModalConversion').addEventListener('click', function() {
      document.getElementById('modalConversion').style.display = 'block';
  });

  var cerrarButtons = document.getElementsByClassName('cerrar');
  for (let i = 0; i < cerrarButtons.length; i++) {
      cerrarButtons[i].addEventListener('click', function() {
          this.parentElement.parentElement.style.display = 'none';
      });
  }

function eurosADolares() {
  const tasaDeCambio = 1.12; // TASA DE CAMBIO
  var euros = parseFloat(document.getElementById('ingresaTotalEuros').value);
  var dolares = euros * tasaDeCambio;
  document.getElementById('resultadoConversion').textContent = dolares.toFixed(2) + ' USD';
}


  //AREA Y VOLUMEN DE UN CILINDRO
  document.getElementById('openModalCilindro').addEventListener('click', function() {
    document.getElementById('modalCilindro').style.display = 'block';
});

var cerrarButtons = document.getElementsByClassName('cerrar');
for (let i = 0; i < cerrarButtons.length; i++) {
    cerrarButtons[i].addEventListener('click', function() {
        this.parentElement.parentElement.style.display = 'none';
    });
}

function calcularAreaYVolumenCilindro() {
    var radio = parseFloat(document.getElementById('valor1').value);
    var altura = parseFloat(document.getElementById('valor2').value);
    if (!isNaN(radio) && !isNaN(altura)) { 
        var areaBase = Math.PI * radio ** 2;
        var areaLateral = 2 * Math.PI * radio * altura;
        var areaTotal = 2 * areaBase + areaLateral;
        var volumen = areaBase * altura;
        document.getElementById('textoResultado').textContent = "El área del cilindro es: " + areaTotal.toFixed(2) + ". El volumen del cilindro es: " + volumen.toFixed(2);
    } else {
        document.getElementById('textoResultado').textContent = "Por favor, ingrese valores válidos.";
    }
}


//AREA Y PERIMETRO DE CUADRADO
  document.getElementById('openModalCuadrado').addEventListener('click', function(){
    document.getElementById('modalCuadrado').style.display = 'block';
});

Array.from(document.getElementsByClassName('cerrar')).forEach(element => {
    element.addEventListener('click', function() {
        document.getElementById('modalCuadrado').style.display = 'none';
    });
});

function calcularAreaYPerimetroCuadrado() {
    var lado = parseFloat(document.getElementById('ladoCuadrado').value); 
    var area = lado ** 2;
    var perimetro = lado * 4;
    document.getElementById('resultadoCuadradoTexto').textContent = "El área del cuadrado es: " + area + ", El perímetro del cuadrado es: " + perimetro;
}


//LONGITUD Y AREA DE CIRCUNFERENCIA
document.getElementById('openModalCircunferencia').addEventListener('click', function() {
  document.getElementById('modalCircunferencia').style.display = 'block';
});

var cerrarButtons = document.getElementsByClassName('cerrar');
for (let i = 0; i < cerrarButtons.length; i++) {
  cerrarButtons[i].addEventListener('click', function() {
      this.parentElement.parentElement.style.display = 'none';
  });
}
function calcularLongitudYAreaCircunferencia() {
  var radio = parseFloat(document.getElementById('radioCircunferencia').value);
  if (!isNaN(radio)) { 
      var longitud = 2 * Math.PI * radio;
      var area = Math.PI * radio ** 2;
      document.getElementById('resultadoCircunferenciaTexto').textContent = "La longitud de la circunferencia es: " + longitud.toFixed(2) + ". El área de la circunferencia es: " + area.toFixed(2);
  } else {
      document.getElementById('resultadoCircunferenciaTexto').textContent = "Por favor, ingrese un valor válido.";
  }
}


//PROMEDIO DE TRES NUMEROS
document.getElementById('openModalPromedio').addEventListener('click', function() {
  document.getElementById('modalPromedio').style.display = 'block';
});

var cerrarButtons = document.getElementsByClassName('cerrar');
for (let i = 0; i < cerrarButtons.length; i++) {
  cerrarButtons[i].addEventListener('click', function() {
      this.parentElement.parentElement.style.display = 'none';
  });
}
function calcularPromedio() {
  var primerNumero = parseFloat(document.getElementById("primerNumero").value);
  var segundoNumero = parseFloat(document.getElementById("segundoNumero").value);
  var tercerNumero = parseFloat(document.getElementById("tercerNumero").value);
  
  if (!isNaN(primerNumero) && !isNaN(segundoNumero) && !isNaN(tercerNumero)) {
      var promedio = (primerNumero + segundoNumero + tercerNumero) / 3;
      document.getElementById('resultadoPromedioTexto').textContent = promedio.toFixed(2);
  } else {
      document.getElementById('resultadoPromedioTexto').textContent = "Por favor, ingresa números válidos en todos los campos.";
  }
}




//CONDICIONALES
  //NUMERO POSITIVO O NEGATIVO
  document.getElementById('openModalVerificacion').addEventListener('click', function() {
    document.getElementById('modalVerificacion').style.display = 'block';
  });
  
  var cerrarButtons = document.getElementsByClassName('cerrar');
  for (let i = 0; i < cerrarButtons.length; i++) {
    cerrarButtons[i].addEventListener('click', function() {
        this.parentElement.parentElement.style.display = 'none';
    });
  }
  function verificarPositivoNegativo() {
    var num = parseFloat(prompt("Ingrese un número: "));
    if (num > 0) {
      alert("El número es positivo");
    } else if (num < 0) {
      alert("El número es negativo");
    } else {
      alert("El número es cero");
    }
  }




