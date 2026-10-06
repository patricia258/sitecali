# Registro de alterações · site CALI

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
