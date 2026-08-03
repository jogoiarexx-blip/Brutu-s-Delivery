# backend/ — Starter da futura API (Node.js + Express)

Esta pasta **não roda sozinha ainda** — é o esqueleto pronto pra quando vocês
montarem a API de verdade do Brutu's Delivery (banco de dados, autenticação
de clientes, etc.). Hoje o app funciona 100% estático (`index.html`,
`painel.html`, `painel-produtos.html` + `data/menu.json`), sem servidor.

## O que já vem pronto aqui

- `middleware/autenticacao.js` — checa token (JWT) e se o usuário é admin.
- `middleware/donoDoRecurso.js` — **proteção contra IDOR**: garante que um
  pedido só pode ser visto/editado pelo cliente dono dele ou por um admin.
- `models/Pedido.js`, `models/Produto.js` — exemplos de schema (Mongoose),
  já com ID em UUID em vez de sequencial.
- `routes/pedidos.js` — rotas de pedido com a proteção aplicada em cada uma.
- `routes/produtos.js` — padrão de rota admin-only (mesmo padrão vale para
  categorias, combos e cupons).
- `docs/protecao-idor-express.md` — guia completo explicando o porquê de
  cada proteção e um checklist de teste antes de subir pra produção.

## Para colocar pra rodar

```bash
cd backend
npm init -y
npm install express mongoose jsonwebtoken uuid
```

Crie um `server.js` na raiz desta pasta plugando as rotas:

```js
const express = require('express');
const app = express();
app.use(express.json());
app.use('/api/pedidos', require('./routes/pedidos'));
app.use('/api/produtos', require('./routes/produtos'));
app.listen(3000, () => console.log('API rodando na porta 3000'));
```

Quando chegar nessa etapa, me chama que eu ajudo a ligar tudo com o banco
de dados que vocês escolherem e a migrar os dados de `data/menu.json` pra lá.
