
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
                    <svg class="h-8 w-auto hover:text-white transition" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Visa</title><path d="M7.123 16.216h2.532L11.267 9.3H8.735l-1.612 6.916zm-4.288-.008L.417 6.324h2.5l1.18 6.84-.002.008h.002v-.008L5.275 16.208h-2.44zm11.956 0h2.184l-2.4-9.888h-2.184l2.4 9.888zm-5.064 0l1.6-6.832c.112-.48.424-.76.848-.76.24 0 .6.136.784.344l.384-2.04c-.376-.2-.92-.424-1.744-.424-1.16 0-2.024.7-2.424 2.056L9.587 16.2h2.552l-.184.016z"/></svg>
                    <svg class="h-8 w-auto hover:text-white transition" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Mastercard</title><circle cx="7" cy="12" r="7"/><path d="M17 12a7 7 0 11-14 0 7 7 0 0114 0z" fill-opacity=".8"/></svg>
                    <svg class="h-8 w-auto hover:text-white transition" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>American Express</title><path d="M22.016 4H1.984C.888 4 0 4.888 0 5.984v12.032C0 19.112.888 20 1.984 20h20.032C23.112 20 24 19.112 24 18.016V5.984C24 4.888 23.112 4 22.016 4zM8.032 15.488H5.48V8.512h2.552v6.976zm4.64-6.976h2.624v1.888H12.64v1.248h2.24v1.888h-2.24v1.952h2.656V15.52h-5.2V8.512h2.528v.008zm6.912 4.168L18.064 8.512h-2.656l-2.4 4.168 2.4 4.224h2.656l-1.136-2.112z"/></svg>
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


