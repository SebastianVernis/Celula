
document.addEventListener("DOMContentLoaded", function() {

    // --- Cargar Header y Footer reutilizables ---
    const headerHTML = `
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="index.html" class="text-2xl font-bold text-white tracking-wider">CÉLULA</a>
            <nav id="main-nav" class="hidden lg:flex space-x-6 items-center">
                <a href="index.html" class="nav-link" data-page="index.html">Inicio</a>
                <a href="nosotros.html" class="nav-link" data-page="nosotros.html">Nosotros</a>
                <a href="servicios.html" class="nav-link" data-page="servicios.html">Paquetes</a>
                <a href="arma-tu-paquete.html" class="nav-link" data-page="arma-tu-paquete.html">Arma tu Paquete</a>
                <a href="galeria.html" class="nav-link" data-page="galeria.html">Galería</a>
                <a href="testimonios.html" class="nav-link" data-page="testimonios.html">Testimonios</a>
                <a href="portal.html" class="nav-link" data-page="portal.html">Portal Clientes</a>
                <a href="contacto.html" class="bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 transition-colors">Contrataciones</a>
            </nav>
            <button id="mobile-menu-button" class="lg:hidden">
                <i data-feather="menu" class="text-white"></i>
            </button>
        </div>
        <div id="mobile-menu" class="hidden lg:hidden bg-gray-900">
            <a href="index.html" class="block py-2 px-6 text-center hover:bg-gray-800">Inicio</a>
            <a href="nosotros.html" class="block py-2 px-6 text-center hover:bg-gray-800">Nosotros</a>
            <a href="servicios.html" class="block py-2 px-6 text-center hover:bg-gray-800">Paquetes</a>
            <a href="arma-tu-paquete.html" class="block py-2 px-6 text-center hover:bg-gray-800">Arma tu Paquete</a>
            <a href="galeria.html" class="block py-2 px-6 text-center hover:bg-gray-800">Galería</a>
            <a href="testimonios.html" class="block py-2 px-6 text-center hover:bg-gray-800">Testimonios</a>
            <a href="portal.html" class="block py-2 px-6 text-center hover:bg-gray-800">Portal Clientes</a>
            <a href="contacto.html" class="block py-4 px-6 text-center bg-yellow-500 text-gray-900 font-bold">Contrataciones</a>
        </div>
    `;

    const footerHTML = `
        <div class="container mx-auto px-6 py-12 text-center text-gray-400">
            <div class="mb-10" data-aos="fade-up">
                <h3 class="text-lg font-bold text-gray-300 mb-6">Aceptamos</h3>
                <div class="flex justify-center items-center flex-wrap gap-x-8 gap-y-4 text-gray-500">
                    <i data-feather="credit-card" class="h-8 w-8 hover:text-white transition"></i>
                    <i data-feather="credit-card" class="h-8 w-8 hover:text-white transition"></i>
                    <i data-feather="credit-card" class="h-8 w-8 hover:text-white transition"></i>
                    <span class="font-bold text-xl hover:text-white transition">CARNET</span>
                    <span class="font-bold text-xl hover:text-white transition">SPEI</span>
                    <i data-feather="dollar-sign" class="h-8 w-8 hover:text-white transition"></i>
                </div>
            </div>
            <div class="flex justify-center space-x-6 mb-4">
                <a href="#" class="hover:text-yellow-400"><i data-feather="facebook"></i></a>
                <a href="#" class="hover:text-yellow-400"><i data-feather="instagram"></i></a>
                <a href="#" class="hover:text-yellow-400"><i data-feather="youtube"></i></a>
            </div>
            <p>&copy; 2025 Grupo Musical Célula. Todos los derechos reservados.</p>
        </div>
    `;
    
    document.getElementById("header-placeholder").innerHTML = headerHTML;
    document.getElementById("footer-placeholder").innerHTML = footerHTML;

    // --- Lógica del Menú Móvil ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if(mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    }

    // --- Marcar enlace activo en la navegación ---
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // --- Inicializar Librerías ---
    AOS.init({ duration: 800, once: false, offset: 50 });
    feather.replace();
});


