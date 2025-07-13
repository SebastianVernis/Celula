AOS.init({ duration: 800, once: false, offset: 50 });
feather.replace();

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
}

const mobilePageLinks = document.querySelectorAll('#mobile-menu a');
mobilePageLinks.forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

// Package Builder
if (document.getElementById('page-build-package')) {
    initializePackageBuilder();
}

function initializePackageBuilder() {
    const packageBuilderPage = document.getElementById('page-build-package');
    if (!packageBuilderPage) return;
    const inputs = packageBuilderPage.querySelectorAll('input[name="hours"], input[name="addon"]');
    const summaryList = document.getElementById('summary-list');
    const totalPriceEl = document.getElementById('total-price');
    const requestQuoteBtn = document.getElementById('request-quote-btn');
    function updatePackageSummary() {
        let total = 0;
        let summaryHTML = '';
        let selectedItems = [];
        const selectedHours = packageBuilderPage.querySelector('input[name="hours"]:checked');
        if (selectedHours) {
            const price = parseFloat(selectedHours.dataset.price);
            const name = selectedHours.dataset.name;
            total += price;
            selectedItems.push({ name, price });
        }
        const selectedAddons = packageBuilderPage.querySelectorAll('input[name="addon"]:checked');
        selectedAddons.forEach(addon => {
            const price = parseFloat(addon.dataset.price);
            const name = addon.dataset.name;
            total += price;
            selectedItems.push({ name, price });
        });
        if (selectedItems.length > 0) {
            summaryHTML = selectedItems.map(item => `<div class="flex justify-between text-gray-300"><span>${item.name}</span><span class="font-semibold text-white">$${item.price.toLocaleString('es-MX')}</span></div>`).join('');
            requestQuoteBtn.disabled = false;
        } else {
            summaryHTML = '<p class="text-gray-500 text-center">Selecciona una opción para empezar.</p>';
            requestQuoteBtn.disabled = true;
        }
        summaryList.innerHTML = summaryHTML;
        totalPriceEl.textContent = `$${total.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    inputs.forEach(input => input.addEventListener('change', updatePackageSummary));
    requestQuoteBtn.addEventListener('click', () => {
        const selectedItems = [];
        const selectedHours = packageBuilderPage.querySelector('input[name="hours"]:checked');
        if (selectedHours) selectedItems.push(selectedHours.dataset.name);
        const selectedAddons = packageBuilderPage.querySelectorAll('input[name="addon"]:checked');
        selectedAddons.forEach(addon => selectedItems.push(addon.dataset.name));
        const totalPrice = totalPriceEl.textContent;
        let message = "Hola, me gustaría cotizar el siguiente paquete personalizado que armé en su sitio web:\n\n";
        message += "SERVICIOS SELECCIONADOS:\n";
        message += "--------------------------\n";
        message += selectedItems.join('\n');
        message += `\n--------------------------\n`;
        message += `TOTAL ESTIMADO: ${totalPrice}\n\n`;
        message += "Por favor, quedo en espera de su contacto. ¡Gracias!";

        // Redirect to contacto.html and pass the message in the URL
        window.location.href = `contacto.html?message=${encodeURIComponent(message)}`;
    });
    updatePackageSummary();
}

// Contact Form on contacto.html
if (window.location.pathname.endsWith('contacto.html')) {
    const params = new URLSearchParams(window.location.search);
    const message = params.get('message');
    if (message) {
        const messageTextarea = document.getElementById('message');
        if (messageTextarea) {
            messageTextarea.value = decodeURIComponent(message);
        }
    }
}

// Portal Login
if (document.getElementById('login-form')) {
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const eventCode = document.getElementById('event-code').value;
        const password = document.getElementById('password').value;
        const loginView = document.getElementById('portal-login');
        const loadingView = document.getElementById('portal-loading');
        const adminView = document.getElementById('admin-panel');
        const clientView = document.getElementById('client-panel');

        loginView.style.display = 'none';
        loadingView.style.display = 'block';

        setTimeout(() => {
            loadingView.style.display = 'none';
            if (eventCode === 'admin' && password === 'admin') {
                adminView.style.display = 'block';
                adminView.innerHTML = `<h2 class="text-3xl font-bold text-white text-center">Panel de Administrador</h2><p class="text-center mt-2 text-gray-400">Bienvenido, Admin. Aquí puedes gestionar todos los eventos.</p>`;
            } else if (eventCode === 'boda-ana-juan' && password === '1234') {
                clientView.style.display = 'block';
                clientView.innerHTML = `
                    <div class="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <h2 class="text-3xl font-bold text-white mb-2">Boda de Ana y Juan</h2>
                        <p class="text-yellow-400 mb-6">Fecha: 25 de Diciembre, 2024</p>
                        <div class="space-y-4">
                            <div><h3 class="font-bold text-lg">Paquete Contratado:</h3><p class="text-gray-300">Fiesta y Live</p></div>
                            <div><h3 class="font-bold text-lg">Timeline del Evento:</h3><p class="text-gray-300">8:00 PM - Inicio de música | 1:00 AM - Fin</p></div>
                            <div><h3 class="font-bold text-lg">Playlist Especial:</h3><p class="text-gray-300">'Perfect' - Ed Sheeran (Vals), 'Vivir mi Vida' (Para abrir pista)</p></div>
                            <a href="#" class="inline-block mt-4 text-yellow-500 hover:underline">Descargar Contrato &rarr;</a>
                        </div>
                    </div>
                `;
            } else {
                alert('Código de evento o contraseña incorrectos.');
                loginView.style.display = 'block';
            }
            feather.replace();
        }, 1500);
    });
}
