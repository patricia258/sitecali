# Registro de alterações · site CALI

## 2026-10-15 · Claude · valores em roda, pedido da Pati

- Página `/sobre`, seção dos cinco valores: a fileira virou um carrossel em roda. O card do centro fica maior e em
  destaque; os vizinhos aparecem menores dos lados. Setas, bolinhas, teclado (← →) e deslizar no celular trazem o
  próximo valor para o centro.
- Ao passar o mouse (ou tocar, no celular) no card do centro, ele vira e mostra o texto completo em fundo claro, com as
  frases-chave em negrito. O texto é o mesmo de antes; nada foi cortado.
- Fundo bordô, ícones e títulos mantidos. Escopo: `src/App.tsx` (componente `ValuesCarousel`) e `src/style.css`
  (bloco "Valores em roda"). Verificação: `npm run build` e capturas em 1440 e 390 px.

## 2026-10-06 · Codex · aguardando avaliação da Pati

- Página `/sobre`: inseri a seção dos cinco valores entre “Quem está do outro lado” e “De onde vem o nome”.
- Conteúdo: integridade, propósito ligado a Deus e a Jesus, amor pelo que faz, colaboração e excelência técnica, na primeira pessoa. A base cristã foi mantida de forma explícita.
- Visual: fundo bordô com grade discreta, ícones lineares dourados e entrada sequencial de baixo para cima ao rolar. Em preferência por movimento reduzido, o conteúdo aparece sem animação.
- Escopo: somente `src/App.tsx` e `src/style.css`; links e demais seções não foram alterados.
- Verificação local: `npm run build` e `tsc --noEmit` passaram. Pendente: avaliação visual e de texto pela Pati.

## 2026-10-05 · Codex · revisão solicitada pela Pati, aguardando avaliação

- A Pati rejeitou os ícones genéricos e os cards distribuídos em duas linhas.
- Recriei os cinco desenhos da referência enviada como um único recurso transparente e troquei os ícones da seção por esses símbolos, na mesma ordem.
- Os cinco valores agora aparecem lado a lado, sem molduras. Em telas estreitas, permanecem em uma fileira com deslizamento horizontal; a barra de rolagem fica oculta.
- Conteúdo, posição da seção e animação sequencial foram mantidos.

## 2026-10-05 · Codex · Minha atuação, aguardando avaliação da Pati

- A seção “Minha atuação” da página `/sobre` foi refeita após aprovação da fileira de valores.
- Os três cards genéricos foram substituídos por três linhas editoriais, com título e conteúdo específico sobre estrutura de RH, liderança e visão de negócio.
- O CTA agora descreve o destino real: assessoria mensal. A composição se reorganiza em uma coluna no mobile.
- A fileira de valores, seu texto e seus símbolos não foram alterados nesta rodada.
