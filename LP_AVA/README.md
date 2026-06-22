# Aliança Verde Amazônia — site estático completo

HTML/CSS/JS puro, sem build, sem dependências. Funciona abrindo o
`index.html` direto ou hospedando a pasta inteira em qualquer lugar
(Vercel, Netlify, S3, etc.) — todos os caminhos são relativos.

## Conteúdo

- `index.html` — página única com todas as seções (Hero, Manifesto, Tese,
  Pilares, Territorial, Impacto, Equipe, ODS, CTA, Footer, banner de
  cookies LGPD)
- `politica-de-privacidade.html` — página de Política de Privacidade,
  com os dados legais da empresa (CNPJ, razão social, endereço)
- `style.css` — todo o CSS (cores, tipografia, layout, responsivo)
- `main.js` — carrossel do Hero, menu mobile, scroll reveal, banner de
  cookies (localStorage), botão "voltar ao topo"
- `fontes/` — Source Sans 3 Medium e Bold (`.ttf`, referenciadas via
  `@font-face` no `style.css`)
- `fotos/` — as 6 fotos usadas no carrossel do Hero e na seção
  Territorial
- `logotipo/` — logo (versão monocromática usada no menu/footer) e o
  símbolo (usado como favicon)
- `icons/bold/` — os 13 ícones SVG usados nas seções Tese, Pilares e
  Impacto (subconjunto do Phosphor Icons)

## Dados legais já preenchidos

- Razão social: Aliança Verde Amazônia – SPE Ltda
- CNPJ: 67.295.011/0001-17
- Endereço: Estrada Pedra Riscada, s/n, Km 6 Parte, Lumiar, Nova Friburgo
  – RJ, CEP 28.616-080

Esses dados aparecem no rodapé de `index.html` e no topo de
`politica-de-privacidade.html`.

## Como integrar

Esta pasta não depende de WordPress nem de nenhum framework — é só
arrastar pro projeto que for hospedar (ex.: dentro de `public/` de um
projeto Vite/React, ou na raiz de qualquer servidor estático) e ajustar
os caminhos relativos se a estrutura de pastas final for diferente desta.
