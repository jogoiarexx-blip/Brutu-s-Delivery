/* =========================================================================
   site-config.js — CONFIGURAÇÃO CENTRAL DO SITE
   -------------------------------------------------------------------------
   Este arquivo é lido por index.html, painel.html e painel-produtos.html.
   Serve para trocar rapidamente a identidade visual e a senha dos painéis
   sem precisar editar CSS/JS espalhado em vários arquivos — útil quando
   for clonar este projeto para outro cliente/restaurante.

   NÃO controla o cardápio (produtos, preços, WhatsApp, PIX etc.) — isso
   continua em data/menu.json / data/menu-data.js.
   ========================================================================= */

window.SITE_CONFIG = {

  // Senha de acesso ao painel.html e ao painel-produtos.html (mesma senha
  // para os dois — quem entra em um já fica autenticado no outro também).
  senhaPainel: "5625",

  // Cores principais do tema. Se mudar aqui, atualiza automaticamente o
  // cardápio (index.html) e os dois painéis administrativos.
  tema: {
    accent: "#ff5a1f",       // laranja-chama (cor principal / destaque)
    accentDark: "#d6480f",   // laranja mais escuro (hover, sombras)
    ember: "#ffb100"         // amarelo-brasa (detalhes, avisos)
  }

};
