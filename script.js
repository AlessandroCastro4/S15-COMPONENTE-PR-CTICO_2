function iniciarSesion(event) {
  event.preventDefault();
  const usuario = document.getElementById("usuario").value.trim();
  const clave = document.getElementById("clave").value.trim();

  if (usuario === "sebas" && clave === "1234") {
    alert("Acceso permitido. Bienvenido al modelo IPIDM.");
    // Aquí puedes redirigir o mostrar otra sección
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
}

function toggleClave() {
  const claveInput = document.getElementById("clave");
  claveInput.type = claveInput.type === "password" ? "text" : "password";
}
