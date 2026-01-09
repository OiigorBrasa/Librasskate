        // Inicializa os ícones
        lucide.createIcons();

        // Menu Mobile
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        const iconMenu = mobileBtn.querySelector('i');

        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            // Troca ícone (se estivesse usando biblioteca completa, aqui é simplificado)
        });

        // Fecha menu ao clicar em link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Formulário
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const nome = document.getElementById('nome').value;
            alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
            this.reset();
        });