// global.js - Lógica compartilhada para todas as páginas do AgendaCar

document.addEventListener('DOMContentLoaded', function() {
    initAuth();
});

function initAuth() {
    const sessaoStr = localStorage.getItem('agendacar_sessao');
    const currentPath = window.location.pathname;
    
    // Lista de páginas protegidas que exigem login
    const protectedPages = ['solicitar-orcamento.html', 'solicitar-servico.html', 'gerenciamento-perfil.html'];
    const isProtected = protectedPages.some(page => currentPath.includes(page));

    if (sessaoStr) {
        const usuario = JSON.parse(sessaoStr);
        
        // Atualiza botões do header institucional (ex: quem somos, termos)
        const btnLogin = document.getElementById('btnLogin');
        const btnPanel = document.getElementById('btnPanel');
        if (btnLogin && btnPanel) {
            btnLogin.style.display = 'none';
            btnPanel.style.display = 'flex';
        }

        // Atualiza header das áreas logadas (ex: solicitar orçamento/serviço)
        const btnHeaderLogged = document.querySelector('header > .btn-header:not(#btnLogin):not(#btnPanel)');
        if (btnHeaderLogged) {
            const nomeSeguro = usuario.nome || 'Usuário';
            const primeiroNome = nomeSeguro.split(' ')[0];
            btnHeaderLogged.innerHTML = `<i class="fa-solid fa-user-check"></i> Olá, ${primeiroNome} (Sair)`;
            btnHeaderLogged.onclick = showLogoutModal;
        }

        // Exibe botão de gerenciamento na sidebar apenas para prestadores
        if (usuario.tipo === 'prestador') {
            const btnGerenciar = document.getElementById('btn-gerenciar-perfil');
            if (btnGerenciar) btnGerenciar.style.display = 'flex';
        }
    } else {
        // Redireciona se tentar acessar página protegida sem login
        if (isProtected) {
            window.location.href = 'login.html';
        }
    }
}

// ================= MODAIS GLOBAIS ================= //

function showLogoutModal(event) {
    if(event) event.preventDefault();
    const modal = document.getElementById('logoutModal');
    if(modal) modal.classList.add('active');
}

function hideLogoutModal() {
    const modal = document.getElementById('logoutModal');
    if(modal) modal.classList.remove('active');
}

function confirmLogout() {
    localStorage.removeItem('agendacar_sessao');
    window.location.href = 'index.html';
}

function showConfirmModal(title, text, isWarning = false) {
    const overlay = document.getElementById('confirmModal');
    if(!overlay) return;
    
    document.getElementById('confirmTitle').textContent = title || '';
    document.getElementById('confirmText').textContent = text || '';
    
    const icon = document.getElementById('confirmIcon');
    const btnConfirm = overlay.querySelector('.btn-confirm');
    
    if (isWarning) {
        if(icon) icon.style.display = 'none';
        if(btnConfirm) btnConfirm.style.display = 'none';
    } else {
        if(icon) icon.style.display = 'block';
        if(btnConfirm) btnConfirm.style.display = 'inline-block';
    }
    overlay.classList.add('active');
}

function hideConfirmModal() {
    const modal = document.getElementById('confirmModal');
    if(modal) modal.classList.remove('active');
}

// Fechar modais ao clicar fora
window.addEventListener('click', function(e) {
    const logoutModal = document.getElementById('logoutModal');
    if (e.target === logoutModal) hideLogoutModal();
});
