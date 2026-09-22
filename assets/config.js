/* Configuração do site promeneum.com. É o único ficheiro a alterar para mudar o destino dos pedidos de contacto. */
window.PROMENEUM_CONFIG = {
  /* Endereço (webhook, método POST) que recebe os pedidos de contacto.
     Vazio: no fim da conversa o visitante envia o pedido a partir do seu próprio programa de e-mail.
     Campos enviados (formulário): nome, empresa, email, telefone, assunto, mensagem, lingua, origem. */
  leadEndpoint: '',

  /* Caixa de correio que recebe os contactos. Confirmar que existe antes de activar o site. */
  contactEmail: 'inquiries@promeneum.com'
};
