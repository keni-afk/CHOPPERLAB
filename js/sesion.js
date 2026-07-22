function verificarSesion() {
    var usuario = sessionStorage.getItem('CHOPPERLABUsuario');
    if (!usuario) {
        window.location.href = 'iniciar-sesion.html';
    }
}

function actualizarNav() {
    var usuario = sessionStorage.getItem('CHOPPERLABUsuario');
    var navIngresar = document.getElementById('nav-ingresar');
    var navSesion = document.getElementById('nav-sesion');
    var navNombre = document.getElementById('nav-nombre');
    var navPrivados = document.querySelectorAll('.nav-privado');

    if (usuario) {
        if (navIngresar) navIngresar.style.display = 'none';
        if (navSesion) navSesion.style.display = 'flex';
        if (navNombre) navNombre.textContent = usuario;
        navPrivados.forEach(function (enlace) {
            enlace.style.display = '';
        });
    } else {
        if (navIngresar) navIngresar.style.display = '';
        if (navSesion) navSesion.style.display = 'none';
        navPrivados.forEach(function (enlace) {
            enlace.style.display = 'none';
        });
    }
}

function abrirDialogoCierre() {
    document.getElementById('dialogo-cierre').showModal();
}

function cerrarSesion() {
    sessionStorage.removeItem('CHOPPERLABUsuario');
    window.location.href = 'index.html';
}

function toggleMenu() {
    var nav = document.getElementById('nav-principal');
    if (nav.classList.contains('abierto')) {
        nav.classList.remove('abierto');
    } else {
        nav.classList.add('abierto');
    }
}
