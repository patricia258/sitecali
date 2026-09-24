# CALI RH — site institucional

Adaptação da arquitetura visual do repositório `azudoka/azumi-site-v1` para a identidade e as ofertas atuais da CALI. A navegação reúne a assessoria recorrente e o CALI Build em `/assessoria` e os projetos de escopo definido em `/projetos`.

## Mapeamento de conteúdo

| Referência Azumi | Decisão para a CALI |
| --- | --- |
| Menu flutuante, hero com luz e gradiente, cartões fotográficos, seções claras/escuras, processo e FAQ | Mantidos como linguagem de design, com bordô, marfim, dourado e tipografia editorial CALI. |
| Página HRaaS | Adaptada para Assessoria Estratégica Mensal: Partner (8 meses) e Full (12 meses). |
| Página de soluções | Reorganizada por problema em projetos especializados; o CALI Build está junto da assessoria como implantação assistida. |
| Quem somos | Reescrita para a história e a atuação pessoal de Patrícia Lima. |
| Raio X, soluções para pessoa física, Team Azumi, recrutamento e depoimentos sem fonte confirmada | Removidos do fluxo CALI. O Mapa de People continua como entrada gratuita. |

O conteúdo comercial foi conferido com o site CALI no `main` em 24/09/2026. O escopo detalhado e os valores continuam sujeitos à proposta; o site não promete execução ilimitada. A política de privacidade existente foi mantida. Fotos reutilizadas da referência Azumi pertencente à mesma proprietária foram otimizadas e hospedadas no próprio projeto.

## Desenvolvimento

`npm install` e `npm run dev`. Para verificar a versão de produção: `npm run build` e `npx tsc --noEmit`.
