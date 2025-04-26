document.addEventListener("DOMContentLoaded", () => {
  const destinos = [
    {
      id: 1,
      nome: "Serra do Rio do Rastro",
      regiao: "Serra",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Serra_do_Rio_do_Rastro_%28SC-390%29.jpg/1920px-Serra_do_Rio_do_Rastro_%28SC-390%29.jpg",
      descricao:
        "Estrada espetacular com curvas sinuosas e vistas panorâmicas; desafio para motoristas e ciclistas.",
      avaliacao: 4.9,
      melhorEpoca: "Maio – Set (Inverno)",
      atividades: ["Mirantes", "Fotografia", "Ciclismo", "Apreciar a vista"],
    },
    {
      id: 2,
      nome: "Praia da Joaquina",
      regiao: "Florianópolis – Litoral",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Joaquina_centro.JPG/1280px-Joaquina_centro.JPG",
      descricao:
        "Famosa por suas dunas imponentes e ondas perfeitas para o surf, atraindo surfistas e amantes de sandboard.",
      avaliacao: 4.7,
      melhorEpoca: "Dez – Mar",
      atividades: ["Surf", "Sandboard", "Relaxar", "Fotos"],
    },
    {
      id: 3,
      nome: "Morro da Igreja",
      regiao: "Serra",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Pedra_Furada_Urubici.JPG/1920px-Pedra_Furada_Urubici.JPG",
      descricao:
        "Localizada no Parque Nacional de São Joaquim, a Pedra Furada pode ser vista do mirante do Morro da Igreja, onde são registradas baixas temperaturas no inverno, com possibilidade de neve. O acesso é gratuito, mas requer autorização prévia para visitação",
      avaliacao: 4.9,
      melhorEpoca: "Mai – Set (Inverno)",
      atividades: ["Mirantes, Fotografia, Ciclismo, Apreciar a vista"],
    },
    {
      id: 4,
      nome: "Guarda do Embaú",
      regiao: "Palhoça – Grande Florianópolis",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/0/0f/Guarda_do_embau.jpg",
      descricao:
        "Reserva mundial de surf, com rio que encontra o mar e vibe tranquila; acesso por canoas.",
      avaliacao: 4.8,
      melhorEpoca: "Nov – Abr",
      atividades: ["Surf", "Trilhas", "Passeio de Canoa", "Relaxar"],
    },
    {
      id: 5,
      nome: "Parque Nacional da Serra do Itajaí",
      regiao: "Vale do Itajaí",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/1/11/SpitzkopfPNSI2.jpg",
      descricao:
        "O Parque Nacional da Serra do Itajaí, localizado no nordeste de Santa Catarina, abrange diversos municípios e protege a maior área contínua de Mata Atlântica do estado. Possui atrações como, rafting, rapel e trilhas desafiadoras. O parque não oferece alojamento, mas há opções de hospedagem nas cidades próximas. O acesso ao parque é gratuito, mas requer autorização prévia para visitação.",
      avaliacao: 4.7,
      melhorEpoca: "Ano todo",
      atividades: [
        "Rafting",
        "Rapel",
        "Trekking",
        "Cicloturismo",
        "Voo livre",
        "Visitação de caverna",
        "Cavalgadas",
      ],
    },
    {
      id: 6,
      nome: "Blumenau – Vila Germânica",
      regiao: "Vale Europeu",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Parque_Vila_Germ%C3%A2nica.jpg/1920px-Parque_Vila_Germ%C3%A2nica.jpg",
      descricao:
        "Centro da cultura alemã em SC, famoso pela Oktoberfest e arquitetura típica.",
      avaliacao: 4.6,
      melhorEpoca: "Out (Oktoberfest), Ano todo",
      atividades: [
        "Oktoberfest",
        "Culinária Alemã",
        "Compras",
        "Eventos Culturais",
      ],
    },
    {
      id: 7,
      nome: "Serra do Corvo Branco",
      regiao: "Serra",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Paisagem_na_Serra_do_Corvo_Branco.jpg/1920px-Paisagem_na_Serra_do_Corvo_Branco.jpg",
      descricao:
        "A Serra do Corvo Branco é um dos principais atrativos do estado de Santa Catarina, localizada na região Serrana, entre os municípios de Grão Pará e Urubici. Famosa pela sua impressionante estrada sinuosa que corta as montanhas, a serra oferece vistas deslumbrantes da região, com paredões rochosos e vales.",
      avaliacao: 4.8,
      melhorEpoca: "Mai - Set (Inverno)",
      atividades: ["Mirantes, Fotografia, Ciclismo, Apreciar a vista"],
    },
    {
      id: 8,
      nome: "Beto Carrero World",
      regiao: "Penha – Litoral Norte",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Castelo_das_Na%C3%A7%C3%B5es_no_Beto_Carrero_World%2C_Penha_SC.JPG/1920px-Castelo_das_Na%C3%A7%C3%B5es_no_Beto_Carrero_World%2C_Penha_SC.JPG",
      descricao:
        "Maior parque temático da América Latina, com montanhas-russas, shows e apresentações automobilísticas.",
      avaliacao: 4.7,
      melhorEpoca: "Mar – Jun, Ago – Nov",
      atividades: ["Montanhas-russas", "Shows", "Áreas Temáticas"],
    },
  ];

  const grid = document.querySelector(".grid-container");
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const modalClose = document.getElementById("modal-close");

  destinos.forEach((dest) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.id = dest.id;
    card.innerHTML = `
          <img src="${dest.imagem}" alt="${dest.nome}">
          <div class="card-content">
            <h2>${dest.nome}</h2>
            <p>${dest.regiao}</p>
          </div>
        `;
    grid.appendChild(card);
  });

  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    const dest = destinos.find((d) => d.id === +card.dataset.id);
    modalBody.innerHTML = `
          <h2>${dest.nome}</h2>
          <img src="${dest.imagem}" alt="${dest.nome}">
          <p>${dest.descricao}</p>
          <p><strong>Região:</strong> ${dest.regiao}</p>
          <p><strong>Avaliação:</strong> ${dest.avaliacao} ⭐</p>
          <p><strong>Melhor época:</strong> ${dest.melhorEpoca}</p>
          <p><strong>Atividades:</strong> ${dest.atividades.join(", ")}</p>
        `;
    modal.classList.remove("hidden");
  });

  modalClose.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
});
