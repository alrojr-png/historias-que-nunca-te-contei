// Gerado a partir dos PDFs originais. Não editar à mão.
const CARTAS = {
 "pergunta": [
  {
   "id": "pergunta-01",
   "texto": "Quando tinha 10 anos, o que queria ser quando crescesse?"
  },
  {
   "id": "pergunta-02",
   "texto": "Quem foi a pessoa que mais inspirou você na juventude?"
  },
  {
   "id": "pergunta-03",
   "texto": "Quando era adolescente, o que você fazia quando ﬁcava triste?"
  },
  {
   "id": "pergunta-04",
   "texto": "Que sonho você ainda gostaria de realizar?"
  },
  {
   "id": "pergunta-05",
   "texto": "Qual a matéria que você mais gostava na escola?"
  },
  {
   "id": "pergunta-06",
   "texto": "Quem era seu melhor amigo ou amiga na infância?"
  },
  {
   "id": "pergunta-07",
   "texto": "Qual foi a maior travessura que você já fez?"
  },
  {
   "id": "pergunta-08",
   "texto": "Você já teve um apelido? Qual era a história dele?"
  },
  {
   "id": "pergunta-09",
   "texto": "Qual foi o seu maior medo quando era criança?"
  },
  {
   "id": "pergunta-10",
   "texto": "Que hábito da sua infância você sente falta até hoje?"
  },
  {
   "id": "pergunta-11",
   "texto": "Qual foi a situação mais engraçada que já viveu na escola?"
  },
  {
   "id": "pergunta-12",
   "texto": "Qual era sua brincadeira favorita quando criança?"
  },
  {
   "id": "pergunta-13",
   "texto": "Qual foi a maior aventura que você viveu quando era adolescente?"
  },
  {
   "id": "pergunta-14",
   "texto": "Qual foi o primeiro show ou evento marcante que você participou?"
  },
  {
   "id": "pergunta-15",
   "texto": "O que você mais gostava de fazer nas férias?"
  },
  {
   "id": "pergunta-16",
   "texto": "Como era um dia comum na sua adolescência?"
  },
  {
   "id": "pergunta-17",
   "texto": "Qual foi a viagem mais inesquecível da sua vida?"
  },
  {
   "id": "pergunta-18",
   "texto": "Quem foi seu primeiro grande amigo fora da família?"
  },
  {
   "id": "pergunta-19",
   "texto": "Qual foi o lugar mais bonito que você já conheceu?"
  },
  {
   "id": "pergunta-20",
   "texto": "Conte uma história sobre você que quase ninguém da família conhece."
  },
  {
   "id": "pergunta-21",
   "texto": "Qual foi o momento mais feliz da sua juventude?"
  },
  {
   "id": "pergunta-22",
   "texto": "Qual foi o melhor conselho que alguém já deu para você?"
  },
  {
   "id": "pergunta-23",
   "texto": "Qual foi a primeira grande responsabilidade que você teve?"
  },
  {
   "id": "pergunta-24",
   "texto": "Qual foi o momento em que você se sentiu mais orgulhoso de si mesmo?"
  },
  {
   "id": "pergunta-25",
   "texto": "O que você aprendeu com um erro que cometeu?"
  },
  {
   "id": "pergunta-26",
   "texto": "Qual foi o presente mais especial que já ganhou?"
  },
  {
   "id": "pergunta-27",
   "texto": "O que você gostaria de dizer para o seu \"eu\" de 15 anos?"
  },
  {
   "id": "pergunta-28",
   "texto": "Qual foi uma diﬁculdade que acabou trazendo um aprendizado importante?"
  },
  {
   "id": "pergunta-29",
   "texto": "Qual decisão mudou completamente o rumo da sua vida?"
  },
  {
   "id": "pergunta-30",
   "texto": "Qual foi a pessoa mais importante que você conheceu e por quê?"
  },
  {
   "id": "pergunta-31",
   "texto": "Qual tradição da sua família você mais valoriza?"
  },
  {
   "id": "pergunta-32",
   "texto": "O que faz você sentir saudade?"
  },
  {
   "id": "pergunta-33",
   "texto": "Qual história da sua vida que você gostaria que seus ﬁlhos nunca esquecessem?"
  },
  {
   "id": "pergunta-34",
   "texto": "Qual pergunta você gostaria que alguém tivesse te feito há muitos anos?"
  },
  {
   "id": "pergunta-35",
   "texto": "Se você pudesse reviver um único dia da sua vida, qual escolheria?"
  },
  {
   "id": "pergunta-36",
   "texto": "O que você acredita que seus ﬁlhos não sabem sobre você?"
  },
  {
   "id": "pergunta-37",
   "texto": "O que você gostaria que as próximas gerações da família aprendessem com sua história?"
  },
  {
   "id": "pergunta-38",
   "texto": "Que valor você faz questão de transmitir para sua família?"
  },
  {
   "id": "pergunta-39",
   "texto": "Qual lembrança faz você sorrir instantaneamente?"
  },
  {
   "id": "pergunta-40",
   "texto": "Quando foi a primeira vez que você percebeu que estava crescendo?"
  }
 ],
 "curinga": [
  {
   "id": "curinga-01",
   "texto": "Escolha alguém para aprofundar uma história contada anteriormente. Conte Mais!"
  },
  {
   "id": "curinga-02",
   "texto": "Se pudesse voltar para qualquer fase da sua vida por um dia, qual seria? Viagem no Tempo"
  },
  {
   "id": "curinga-03",
   "texto": "Mostre uma foto antiga do celular ou conte uma história sobre uma foto marcante. Mostra a Foto!"
  },
  {
   "id": "curinga-04",
   "texto": "Dê um conselho para os participantes mais jovens da roda. Conselho para o Futuro"
  },
  {
   "id": "curinga-05",
   "texto": "Troque sua pergunta por outra carta. Troca de Pergunta"
  },
  {
   "id": "curinga-06",
   "texto": "Todos devem responder à mesma pergunta. Resposta Coletiva"
  },
  {
   "id": "curinga-07",
   "texto": "Conte uma situação engraçada ou embaraçosa que hoje faz você sorrir. Momento Vergonha"
  },
  {
   "id": "curinga-08",
   "texto": "Fale sobre uma pessoa que marcou sua vida. Gratidão"
  },
  {
   "id": "curinga-09",
   "texto": "Compartilhe um ensinamento ou costume que gostaria de manter vivo na família. Herança de Família"
  },
  {
   "id": "curinga-10",
   "texto": "Escolha uma música que represente uma fase importante da sua vida e explique o motivo. Trilha Sonora da Vida"
  },
  {
   "id": "curinga-11",
   "texto": "Conte um sonho que você ainda pretende realizar. História Inacabada"
  },
  {
   "id": "curinga-12",
   "texto": "Após uma resposta, todos devem dizer algo em que se identiﬁcaram com aquela história. Ponto em Comum"
  },
  {
   "id": "curinga-13",
   "texto": "Conte uma história sem revelar quem participou. Os outros tentam adivinhar. Descubra Quem"
  },
  {
   "id": "curinga-14",
   "texto": "Faça qualquer pergunta respeitosa para qualquer participante. Super Curiosidade"
  },
  {
   "id": "curinga-15",
   "texto": "O participante responde à pergunta original ou conta uma história que ninguém conhece. Verdade ou Detalhe?"
  }
 ],
 "ouro": [
  {
   "id": "ouro-01",
   "texto": "Conte algo sobre você que sua família provavelmente não conhece. O que ninguém sabe?"
  },
  {
   "id": "ouro-02",
   "texto": "Qual foi um acontecimento que mudou sua forma de enxergar a vida? Momento que mudou tudo"
  },
  {
   "id": "ouro-03",
   "texto": "Qual sonho você realizou e que parecia impossível? Sonho Realizado"
  },
  {
   "id": "ouro-04",
   "texto": "Qual momento da sua vida fez/faz você sentir mais orgulho? Orgulho"
  },
  {
   "id": "ouro-05",
   "texto": "O que você gostaria que sua família lembrasse de você daqui a alguns anos? Legado"
  }
 ]
};
