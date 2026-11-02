# PagBank + publicação automática — implementação em andamento

Este branch inicia a migração do checkout demonstrativo para pagamentos reais. **Não há cobrança real habilitada nesta etapa.**

## Fluxo-alvo
1. Cliente personaliza e visualiza a prévia.
2. Backend salva um rascunho e cria pedido com valor calculado no servidor (24h R$14,99; 1ano R$24,99; definitivo R$39,99).
3. Backend cria Checkout PagBank e redireciona cliente.
4. Webhook autenticado recebe evento; backend consulta a API PagBank para verificar valor, pedido, status e identidade da cobrança.
5. Confirmação válida chama `publish_paid_love_order` uma única vez; link é publicado automaticamente.
6. Rota pública consulta `status` e `expires_at` em toda visita, com cache desabilitado.

## Preparação
- Revisar o esquema existente do Supabase antes de executar `supabase/001_love_commerce.sql` no SQL Editor.
- Criar credenciais de teste PagBank e configurar variáveis de ambiente **somente no servidor**, nunca no JS público.
- Implementar armazenamento privado de fotos/áudio antes de aceitar uploads reais.
- Implementar endpoint seguro para recuperar a página por slug, verificar expiração e não expor rascunhos.
- Implementar webhook com validação da autenticidade conforme a documentação atual do PagBank, reconciliação via API e idempotência.
- Testar Pix, crédito, débito (sujeito à habilitação da conta), duplicidade de webhook, cancelamento, reembolso e expiração.

## Segurança
A função SQL não consulta o PagBank: **somente o backend** pode chamá-la após verificar o pagamento. Não expor a service role key, não confiar em preço/status fornecido pelo navegador e não publicar ao receber apenas a URL de retorno do checkout.

O plano definitivo não possui expiração programada, mas a disponibilidade depende da continuidade do serviço.
