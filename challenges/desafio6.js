/*
  6 - Inclua bacon no final da lista de ingredientes dos sanduíches Big Mac e Quarteirão com Queijo

  6.1 - Crie uma query que faça a inclusão de bacon no final da lista de ingredientes dos sanduíches Big Mac e Quarteirão com Queijo.
*/
db.produtos.updateMany(
  {
    nome: {
      $in: ["Big Mac", "Quarteirão com Queijo"],
    },
  },
  {
    /* Solucao que evita repeticao de ingredientes */
    // $addToSet: {
    //   ingredientes: "bacon",
    // },

    /* Solucao que apenas inclui item ao final de ingredientes, sem checar duplicidade */
    $push: {
      ingredientes: "bacon",
    },
  },
);

/*
  6.2 - Crie uma query que retorne o nome e ingredientes de todos os documentos.
*/
db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    ingredientes: 1,
  },
);