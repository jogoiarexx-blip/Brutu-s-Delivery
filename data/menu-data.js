// Dados do cardápio para uso offline (abrir index.html com duplo clique).
// Mantenha este arquivo IDÊNTICO ao menu.json sempre que o cardápio for alterado.
window.MENU_DATA = {
  "restaurante": {
    "nome": "Brutu's Delivery",
    "slogan": "O sabor é bruto, a fome não tem chance!",
    "logo": "icons/icon-512.png",
    "bannerTexto": "COMBO ESQUADRÃO · a partir de R$ 63,90",
    "whatsapp": "5516982090884",
    "pix": {
      "chave": "16982090884",
      "tipo": "telefone",
      "titular": "Joao Vitor Alcides Silva",
      "cidade": "MORRO AGUDO"
    },
    "taxaEntrega": 5,
    "pedidoMinimoEntrega": 0,
    "tempoEstimado": "35-50 min",
    "enderecoRetirada": "Rua das Brasas, 120 - Centro",
    "horario": {
      "abre": "18:00",
      "fecha": "23:30",
      "diasFechado": [
        1
      ]
    }
  },
  "categorias": [
    {
      "id": "combos",
      "nome": "Combos",
      "icone": "🧾"
    },
    {
      "id": "hamburgueres-gourmet",
      "nome": "Hambúrgueres Gourmet",
      "icone": "🍔"
    },
    {
      "id": "especiais",
      "nome": "Especiais Brutu's",
      "icone": "🔥"
    },
    {
      "id": "bebidas",
      "nome": "Bebidas",
      "icone": "🥤"
    }
  ],
  "adicionaisDisponiveis": [
    {
      "id": "add-bacon",
      "nome": "Bacon extra",
      "preco": 8
    },
    {
      "id": "add-cheddar",
      "nome": "Cheddar extra",
      "preco": 6
    },
    {
      "id": "add-ovo",
      "nome": "Ovo",
      "preco": 3
    },
    {
      "id": "add-cebola-caramelizada",
      "nome": "Cebola caramelizada",
      "preco": 4
    },
    {
      "id": "add-hamburguer-extra",
      "nome": "Hambúrguer extra (carne)",
      "preco": 9
    }
  ],
  "produtos": [
    {
      "id": "c001",
      "categoria": "combos",
      "nome": "Combo Esquadrão",
      "descricao": "2 Brutu's Clássico (pão, hambúrguer artesanal, queijo, alface, tomate e molho da casa), 2 batatas fritas (200g) e 1 refrigerante 1L. Perfeito para dividir!",
      "foto": "https://placehold.co/600x450/241c17/ffb703?text=Combo+Esquadrao",
      "preco": 63.9,
      "ingredientes": [
        "2x Brutu's Clássico",
        "2x Batata frita 200g",
        "Refrigerante 1L"
      ],
      "adicionais": [],
      "destaque": false
    },
    {
      "id": "c002",
      "categoria": "combos",
      "nome": "Combo Tropa Bruta",
      "descricao": "3 Brutu's Clássico (pão, hambúrguer artesanal, queijo, alface, tomate e molho da casa), batata frita (200g) e 1 refrigerante 1,5L. Ideal para a galera!",
      "foto": "https://placehold.co/600x450/241c17/ffb703?text=Combo+Tropa+Bruta",
      "preco": 89.9,
      "ingredientes": [
        "3x Brutu's Clássico",
        "Batata frita 200g",
        "Refrigerante 1,5L"
      ],
      "adicionais": [],
      "destaque": true
    },
    {
      "id": "c003",
      "categoria": "combos",
      "nome": "Combo Família Brutu's",
      "descricao": "4 Brutu's Clássico (pão, hambúrguer artesanal, queijo, alface, tomate e molho da casa), batata frita (200g) e 1 refrigerante 2L. O combo completo!",
      "foto": "https://placehold.co/600x450/241c17/ffb703?text=Combo+Familia+Brutus",
      "preco": 117.9,
      "ingredientes": [
        "4x Brutu's Clássico",
        "Batata frita 200g",
        "Refrigerante 2L"
      ],
      "adicionais": [],
      "destaque": false
    },
    {
      "id": "g001",
      "categoria": "hamburgueres-gourmet",
      "nome": "Brutu's Clássico",
      "descricao": "Pão, hambúrguer artesanal, queijo, alface, tomate e molho da casa.",
      "foto": "https://placehold.co/600x450/241c17/ffb703?text=Brutus+Classico",
      "preco": 25.9,
      "ingredientes": [
        "Pão",
        "Hambúrguer artesanal",
        "Queijo",
        "Alface",
        "Tomate",
        "Molho da casa"
      ],
      "adicionais": [
        "add-bacon",
        "add-cheddar",
        "add-ovo",
        "add-cebola-caramelizada",
        "add-hamburguer-extra"
      ],
      "destaque": true
    },
    {
      "id": "g002",
      "categoria": "hamburgueres-gourmet",
      "nome": "Brutu's Bacon",
      "descricao": "Pão, hambúrguer, cheddar cremoso, bacon crocante e molho especial.",
      "foto": "https://placehold.co/600x450/241c17/ffb703?text=Brutus+Bacon",
      "preco": 30.9,
      "ingredientes": [
        "Pão",
        "Hambúrguer",
        "Cheddar cremoso",
        "Bacon crocante",
        "Molho especial"
      ],
      "adicionais": [
        "add-bacon",
        "add-cheddar",
        "add-ovo",
        "add-cebola-caramelizada",
        "add-hamburguer-extra"
      ],
      "destaque": false
    },
    {
      "id": "g003",
      "categoria": "hamburgueres-gourmet",
      "nome": "Brutu's Cheddar Duplo",
      "descricao": "Dois hambúrgueres, muito cheddar, cebola caramelizada e bacon.",
      "foto": "https://placehold.co/600x450/241c17/ffb703?text=Brutus+Cheddar+Duplo",
      "preco": 35.9,
      "ingredientes": [
        "Pão",
        "2x Hambúrguer",
        "Cheddar",
        "Cebola caramelizada",
        "Bacon"
      ],
      "adicionais": [
        "add-bacon",
        "add-cheddar",
        "add-ovo",
        "add-cebola-caramelizada",
        "add-hamburguer-extra"
      ],
      "destaque": false
    },
    {
      "id": "g004",
      "categoria": "hamburgueres-gourmet",
      "nome": "Brutu's Supremo",
      "descricao": "Dois hambúrgueres, queijo prato, cheddar, bacon, onion rings e barbecue.",
      "foto": "https://placehold.co/600x450/241c17/ffb703?text=Brutus+Supremo",
      "preco": 38.9,
      "ingredientes": [
        "Pão",
        "2x Hambúrguer",
        "Queijo prato",
        "Cheddar",
        "Bacon",
        "Onion rings",
        "Molho barbecue"
      ],
      "adicionais": [
        "add-bacon",
        "add-cheddar",
        "add-ovo",
        "add-cebola-caramelizada",
        "add-hamburguer-extra"
      ],
      "destaque": false
    },
    {
      "id": "g005",
      "categoria": "hamburgueres-gourmet",
      "nome": "Brutu's Monster",
      "descricao": "Três hambúrgueres, queijo, cheddar, bacon, alface, tomate, anel de cebola e molho Brutus.",
      "foto": "https://placehold.co/600x450/241c17/ffb703?text=Brutus+Monster",
      "preco": 44.9,
      "ingredientes": [
        "Pão",
        "3x Hambúrguer",
        "Queijo",
        "Cheddar",
        "Bacon",
        "Alface",
        "Tomate",
        "Anel de cebola",
        "Molho Brutus"
      ],
      "adicionais": [
        "add-bacon",
        "add-cheddar",
        "add-ovo",
        "add-cebola-caramelizada",
        "add-hamburguer-extra"
      ],
      "destaque": false
    },
    {
      "id": "g006",
      "categoria": "hamburgueres-gourmet",
      "nome": "Brutu's Insano",
      "descricao": "Quatro hambúrgueres, quatro fatias de queijo, bacon em dobro e molho especial.",
      "foto": "https://placehold.co/600x450/241c17/ffb703?text=Brutus+Insano",
      "preco": 54.9,
      "ingredientes": [
        "Pão",
        "4x Hambúrguer",
        "4x Queijo",
        "Bacon em dobro",
        "Molho especial"
      ],
      "adicionais": [
        "add-bacon",
        "add-cheddar",
        "add-ovo",
        "add-cebola-caramelizada",
        "add-hamburguer-extra"
      ],
      "destaque": true
    },
    {
      "id": "g007",
      "categoria": "hamburgueres-gourmet",
      "nome": "Brutu's Raiz",
      "descricao": "Hambúrguer, catupiry, ovo, presunto, alface, tomate e molho da casa.",
      "foto": "https://placehold.co/600x450/241c17/ffb703?text=Brutus+Raiz",
      "preco": 35.9,
      "ingredientes": [
        "Pão",
        "Hambúrguer",
        "Catupiry",
        "Ovo",
        "Presunto",
        "Alface",
        "Tomate",
        "Molho da casa"
      ],
      "adicionais": [
        "add-bacon",
        "add-cheddar",
        "add-ovo",
        "add-cebola-caramelizada",
        "add-hamburguer-extra"
      ],
      "destaque": false
    },
    {
      "id": "e001",
      "categoria": "especiais",
      "nome": "Duplo Burger Brutos",
      "descricao": "Pão, 2 hambúrguer, bacon, 2 fatias de cheddar, molho da casa.",
      "foto": "https://placehold.co/600x450/241c17/ffb703?text=Duplo+Burger+Brutos",
      "preco": 39.9,
      "ingredientes": [
        "Pão",
        "2x Hambúrguer",
        "Bacon",
        "2x Cheddar",
        "Molho da casa"
      ],
      "adicionais": [
        "add-bacon",
        "add-cheddar",
        "add-ovo",
        "add-cebola-caramelizada",
        "add-hamburguer-extra"
      ],
      "destaque": false
    },
    {
      "id": "e002",
      "categoria": "especiais",
      "nome": "Pappy Burger",
      "descricao": "Pão, hambúrguer, fatia de cheddar, bacon, catupiry, alface e tomate.",
      "foto": "https://placehold.co/600x450/241c17/ffb703?text=Pappy+Burger",
      "preco": 29.99,
      "ingredientes": [
        "Pão",
        "Hambúrguer",
        "Cheddar",
        "Bacon",
        "Catupiry",
        "Alface",
        "Tomate"
      ],
      "adicionais": [
        "add-bacon",
        "add-cheddar",
        "add-ovo",
        "add-cebola-caramelizada",
        "add-hamburguer-extra"
      ],
      "destaque": false
    },
    {
      "id": "e003",
      "categoria": "especiais",
      "nome": "Xtudo Brutus",
      "descricao": "Pão, hambúrguer, salsicha, bacon, ovo, presunto, muçarela, catupiry, cheddar, alface, tomate e molho da casa.",
      "foto": "https://placehold.co/600x450/241c17/ffb703?text=Xtudo+Brutus",
      "preco": 42.9,
      "ingredientes": [
        "Pão",
        "Hambúrguer",
        "Salsicha",
        "Bacon",
        "Ovo",
        "Presunto",
        "Muçarela",
        "Catupiry",
        "Cheddar",
        "Alface",
        "Tomate",
        "Molho da casa"
      ],
      "adicionais": [
        "add-bacon",
        "add-cheddar",
        "add-ovo",
        "add-cebola-caramelizada",
        "add-hamburguer-extra"
      ],
      "destaque": true
    },
    {
      "id": "e004",
      "categoria": "especiais",
      "nome": "Brutus na Chapa",
      "descricao": "Pão, salsicha, bacon, batata palha, molho da casa, ovo, presunto, muçarela, alface e tomate.",
      "foto": "https://placehold.co/600x450/241c17/ffb703?text=Brutus+na+Chapa",
      "preco": 27,
      "ingredientes": [
        "Pão",
        "Salsicha",
        "Bacon",
        "Batata palha",
        "Molho da casa",
        "Ovo",
        "Presunto",
        "Muçarela",
        "Alface",
        "Tomate"
      ],
      "adicionais": [
        "add-bacon",
        "add-cheddar",
        "add-ovo",
        "add-cebola-caramelizada",
        "add-hamburguer-extra"
      ],
      "destaque": false
    },
    {
      "id": "e005",
      "categoria": "especiais",
      "nome": "Brutus Quente",
      "descricao": "Pão, salsicha, bacon, calabresa, ovo, presunto, muçarela, catupiry, batata palha, tomate, alface, molho especial.",
      "foto": "https://placehold.co/600x450/241c17/ffb703?text=Brutus+Quente",
      "preco": 36,
      "ingredientes": [
        "Pão",
        "Salsicha",
        "Bacon",
        "Calabresa",
        "Ovo",
        "Presunto",
        "Muçarela",
        "Catupiry",
        "Batata palha",
        "Tomate",
        "Alface",
        "Molho especial"
      ],
      "adicionais": [
        "add-bacon",
        "add-cheddar",
        "add-ovo",
        "add-cebola-caramelizada",
        "add-hamburguer-extra"
      ],
      "destaque": false
    },
    {
      "id": "e006",
      "categoria": "especiais",
      "nome": "Bruto Power",
      "descricao": "Pão, hambúrguer, bacon, muçarela, catupiry, cebola roxa, tomate, rúcula e molho da casa.",
      "foto": "https://placehold.co/600x450/241c17/ffb703?text=Bruto+Power",
      "preco": 27.99,
      "ingredientes": [
        "Pão",
        "Hambúrguer",
        "Bacon",
        "Muçarela",
        "Catupiry",
        "Cebola roxa",
        "Tomate",
        "Rúcula",
        "Molho da casa"
      ],
      "adicionais": [
        "add-bacon",
        "add-cheddar",
        "add-ovo",
        "add-cebola-caramelizada",
        "add-hamburguer-extra"
      ],
      "destaque": false
    },
    {
      "id": "b001",
      "categoria": "bebidas",
      "nome": "Coca-Cola Lata 350ml",
      "descricao": "Coca-Cola Lata 350ml",
      "foto": "img/produtos/coca-lata-350ml.jpg",
      "preco": 6,
      "ingredientes": [],
      "adicionais": [],
      "destaque": false
    },
    {
      "id": "b002",
      "categoria": "bebidas",
      "nome": "Guaraná Antártica Lata 350ml",
      "descricao": "Guaraná Antártica Lata 350ml",
      "foto": "img/produtos/guarana-lata-350ml-branco.jpg",
      "preco": 5,
      "ingredientes": [],
      "adicionais": [],
      "destaque": false
    },
    {
      "id": "b003",
      "categoria": "bebidas",
      "nome": "Fanta 600ml",
      "descricao": "Fanta 600ml",
      "foto": "img/produtos/fanta-600ml.jpg",
      "preco": 7,
      "ingredientes": [],
      "adicionais": [],
      "destaque": false
    },
    {
      "id": "b004",
      "categoria": "bebidas",
      "nome": "Sprite 600ml",
      "descricao": "Sprite 600ml",
      "foto": "img/produtos/sprite-600ml.jpg",
      "preco": 7,
      "ingredientes": [],
      "adicionais": [],
      "destaque": false
    },
    {
      "id": "b005",
      "categoria": "bebidas",
      "nome": "Coca-Cola 600ml",
      "descricao": "Coca-Cola 600ml",
      "foto": "img/produtos/coca-600ml-branco.jpg",
      "preco": 8,
      "ingredientes": [],
      "adicionais": [],
      "destaque": false
    },
    {
      "id": "b006",
      "categoria": "bebidas",
      "nome": "Guaraná Antártica 1L",
      "descricao": "Guaraná Antártica 1L",
      "foto": "img/produtos/guarana-1l.jpg",
      "preco": 8,
      "ingredientes": [],
      "adicionais": [],
      "destaque": false
    },
    {
      "id": "b007",
      "categoria": "bebidas",
      "nome": "Refrigerante Jaboti 2L",
      "descricao": "Refrigerante Jaboti 2L",
      "foto": "img/produtos/jaboti-2l.jpg",
      "preco": 9,
      "ingredientes": [],
      "adicionais": [],
      "destaque": false
    },
    {
      "id": "b008",
      "categoria": "bebidas",
      "nome": "Coca-Cola 2L",
      "descricao": "Coca-Cola 2L",
      "foto": "img/produtos/coca-2l-branco.jpg",
      "preco": 13,
      "ingredientes": [],
      "adicionais": [],
      "destaque": false
    },
    {
      "id": "b009",
      "categoria": "bebidas",
      "nome": "Suco Frupic Uva 450ml",
      "descricao": "Suco Frupic Uva 450ml",
      "foto": "img/produtos/frupic.jpg",
      "preco": 4,
      "ingredientes": [],
      "adicionais": [],
      "destaque": false
    },
    {
      "id": "b010",
      "categoria": "bebidas",
      "nome": "Suco Frupic Cítrus 450ml",
      "descricao": "Suco Frupic Cítrus 450ml",
      "foto": "img/produtos/frupic.jpg",
      "preco": 4,
      "ingredientes": [],
      "adicionais": [],
      "destaque": false
    },
    {
      "id": "b011",
      "categoria": "bebidas",
      "nome": "Suco Frupic Laranja com Acerola 450ml",
      "descricao": "Suco Frupic Laranja com Acerola 450ml",
      "foto": "img/produtos/frupic.jpg",
      "preco": 4,
      "ingredientes": [],
      "adicionais": [],
      "destaque": false
    },
    {
      "id": "b012",
      "categoria": "bebidas",
      "nome": "Água com Gás",
      "descricao": "Água com Gás",
      "foto": "img/produtos/agua-com-gas.jpg",
      "preco": 4,
      "ingredientes": [],
      "adicionais": [],
      "destaque": false
    }
  ]
}
;
