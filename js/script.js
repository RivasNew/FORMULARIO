document.getElementById("boton").addEventListener("click", function(){   
  var nombre = document.getElementById("nombre").value;
  var apellidos = document.getElementById("apellidos").value;
  var edad = document.getElementById("edad").value;
  var sexo = document.getElementById("sexo").value;
  var pais = document.getElementById("pais").value;
  var fecha = document.getElementById("fecha").value;
  var color = document.getElementById("col").value;
  var foto = document.getElementById("foto").value;
  var cuenta = document.getElementById("cuenta").value;
  var contraseña = document.getElementById("contraseña").value;
  var preferencias = document.getElementById("preferencias").value;
  var comentarios = document.getElementById("comentarios").value;
  
  //mandar Valores
  document.getElementById("no").innerHTML = nombre;
  document.getElementById("ap").innerHTML = apellidos;
  document.getElementById("ed").innerHTML = edad;
  document.getElementById("sx").innerHTML = sexo;
  document.getElementById("p").innerHTML = pais;
  document.getElementById("fn").innerHTML = fecha;
  document.getElementById("cl").innerHTML = color;
  document.getElementById("ft").innerHTML = foto;
  document.getElementById("cu").innerHTML = cuenta;
  document.getElementById("con").innerHTML = contraseña;
  document.getElementById("pref").innerHTML = preferencias;
  document.getElementById("com").innerHTML = comentarios;



alert('Nombre: ' + nombre + ' Apellidos: ' + apellidos + ' Edad: ' + edad + ' Sexo: ' + sexo + ' Pais: ' + pais + ' Fecha de nacimiento: ' + fecha + ' Color: ' + color + ' foto: ' + foto + ' Cuenta: ' + cuenta + ' Cuenta: ' + contraseña);

 });