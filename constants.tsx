
import React from 'react';
import { DayData } from './types';

export const TOTAL_DAYS = 42;
export const DAYS_PER_WEEK = 7;
export const TOTAL_WEEKS = 6;

const weekTitles: Record<number, string> = {
  1: "Tudo começa na raiz",
  2: "Resistir ao velho homem",
  3: "O Espírito guia, o corpo obedece",
  4: "Consistência gera Liberdade",
  5: "Identidade restaurada: eu sou livre",
  6: "Vigilância e Perseverança"
};

export const generateDefaultDays = (): DayData[] => {
  const data: Partial<DayData>[] = [
    // SEMANA 1
    {
      id: 1, dayTitle: "O primeiro passo é a entrega",
      verse: "“Portanto, não permitam que o pecado reine no corpo mortal de vocês, levando-os a obedecer os desejos malignos dele.” Romanos 6:12",
      devotional: "O vício governa quem se entrega a ele. Hoje você declara: “Cristo é meu Senhor”",
      spiritualAction: "Oração de entrega - início do plano. Leitura de Romanos 6",
      challenge: "Renunciar hoje a um pequeno prazer nocivo (ex.doce, cigarro, celular após determinado horário)",
      physicalAction: "Caminhada leve de 20min. em silêncio, refletindo : Quem está no controle do meu corpo?",
      notesPrompt: "O que foi mais difícil ? Como me senti ao resistir ?"
    },
    {
      id: 2, dayTitle: "Não sou escravo do meu corpo",
      verse: "“Contudo, esmurro meu corpo e faço dele meu escravo, para que, depois de ter pregado aos outros, eu mesmo não venha a ser desqualificado.” 1 Coríntios 9:27",
      devotional: "O corpo é servo, não senhor. Hoje, você pratica o domínio.",
      spiritualAction: "Oração declarando domínio sobre o corpo. Leitura de 1Coríntios 9:24-27",
      challenge: "Anotar toda e qualquer vontade de ceder a um hábito ruim e não ceder a nenhuma.",
      physicalAction: "Cada vez que a vontade vier você fará 5 Flexões de braços/10 agachamentos e 15 Polichinelos declarando mentalmente: “Eu domino não sou dominado.”",
      notesPrompt: "Quantas vezes senti vontade ? Como reagi ?"
    },
    {
      id: 3, dayTitle: "Cuidado com a porta de entrada",
      verse: "“Se você fizer o bem, não se levantará ? Se, porém, não o fizer, saiba que o pecado o espreita à porta; ele deseja governá-lo, mas você deve dominá-lo.” Gênesis 4:7",
      devotional: "O vício começa com uma pequena brecha. Feche todas as brechas hoje.",
      spiritualAction: "Jejum de 1 refeição ou de uma distração digital. Leitura Gênesis 4",
      challenge: "Identifique um “gatilho” do vício e crie uma barreira prática contra ele.",
      physicalAction: "Subir e descer escadas por 7min. Ou marcha no lugar (representa “fechar a porta” e não se acomodar)",
      notesPrompt: "Qual porta preciso fechar ?"
    },
    {
      id: 4, dayTitle: "Alimentando o espírito, não a carne",
      verse: "“Por isso, digo: vivam pelo Espírito, e de modo nenhum satisfarão os desejos da carne” Gálatas 5:16",
      devotional: "Se você alimentar o espírito, a carne enfraquece. Escolha o alimento certo hoje.",
      spiritualAction: "Oração de renúncia aos vícios. Leitura de Gálatas 5",
      challenge: "Evitar qualquer prazer rápido (guloseimas, redes sociais, impulsos) até o pôr do Sol.",
      physicalAction: "Jejum intermitente parcial. 15min. de alongamentos em oração (pescoço, ombros, quadril)",
      notesPrompt: "Qual foi a “fome” mais difícil de controlar ?"
    },
    {
      id: 5, dayTitle: "Vontade não é ordem",
      verse: "“Cada um, porém, é tentado pelo seu próprio desejo, sendo por este arrastado e seduzido. Então, esse desejo, tendo sido concebido, dá à luz o pecado, e o pecado, uma vez consumado, gera a morte.” Tiago 1:14-15",
      devotional: "A tentação não manda em você. Você que decide.",
      spiritualAction: "Oração de sabedoria para reconhecer tentações. Leitura Tiago 1",
      challenge: "Toda vez que a vontade vier, anote e reaja com oração ou exercício",
      physicalAction: "Cada vez que a vontade vier você fará 2 rodadas de 5 Flexões de braços/10 agachamentos e 15 Polichinelos declarando mentalmente: “Eu domino não sou dominado”",
      notesPrompt: "Em quais momentos a vontade veio mais forte ?"
    },
    {
      id: 6, dayTitle: "Você é templo, cuide da Casa",
      verse: "“Acaso não sabem que o corpo de vocês é templo do Espírito Santo, que está em você” 1 Coríntios 6: 19",
      devotional: "O que você está permitindo entrar no templo ?",
      spiritualAction: "Oração pedindo limpeza espiritual. Jejum de redes sociais",
      challenge: "Eliminar algo físico que represente o vício (bituca de cigarro, aplicativo, comida etc)",
      physicalAction: "15min. de limpeza em algum cômodo da casa (simbolizando a limpeza do templo)",
      notesPrompt: "O que eu preciso “expulsar do templo” ?"
    },
    {
      id: 7, dayTitle: "Dia do Senhor, dia de avaliação",
      verse: "“Sonda-me, ó Deus, e conhece o meu coração; prova-me, e conhece as minhas inquietações. Vê se em minha conduta algo que te ofende, e dirige-me pelo caminho eterno.” Salmos 139:23,24",
      devotional: "Deus te mostra quem você é e quem você pode ser n’Ele.",
      spiritualAction: "Oração de avaliação e compromisso. Leitura Salmos 139",
      challenge: "Escrever uma breve carta a si mesmo: “Quem eu quero ser daqui a 40 dias ?”",
      physicalAction: "20min. Caminhada leve e consciente com louvor ou meditação",
      notesPrompt: "O que aprendi sobre mim nesta semana ?"
    },
    // SEMANA 2
    {
      id: 8, dayTitle: "O velho Eu quer voltar",
      verse: "“Quanto à antiga maneira de viver, vocês foram ensinados a despir-se do velho homem... renovados no modo de pensar e a revestir-se do novo homem...” Efésios 4:22-24",
      devotional: "O velho “eu” sempre tenta voltar. Você agora sabe como resistir",
      spiritualAction: "Oração de renúncia. Leitura Efésios 4:17-32",
      challenge: "Quando o velho hábito chamar, diga em voz alta: “Eu não sou mais escravo disso”",
      physicalAction: "3 rodadas de 5 Flexões de braços/10 agachamentos/15 polichinelos e 30seg. de prancha",
      notesPrompt: "Que padrão antigo reapareceu hoje ?"
    },
    {
      id: 9, dayTitle: "A nova natureza precisa de alimento",
      verse: "“e se revestiram do novo, o qual está sendo renovado em conhecimento, à imagem do seu Criador.” Colossenses 3:10",
      devotional: "Se o novo homem não for nutrido, o velho voltará.",
      spiritualAction: "Louvor silencioso. Leitura de Colossenses 3",
      challenge: "Ler e meditar em 2 versículos que te ajudam a resistir ao vício",
      physicalAction: "Caminhada com ritmo moderado ouvindo louvor ou versículos",
      notesPrompt: "O que fortaleceu meu “novo eu” hoje ?"
    },
    {
      id: 10, dayTitle: "Vontade é teste, não sentença",
      verse: "“pois não temos um sumo sacerdote que não possa compadecer-se das nossas fraquezas, mas sim alguém que... passou por todo tipo de tentação, porém, sem pecado.” Hebreus 4:15",
      devotional: "Ser tentado não é pecado. Ceder é. Hoje, resista como Jesus resistiu.",
      spiritualAction: "Oração para resistir à tentação. Leitura Hebreus 4",
      challenge: "Registre toda tentação que vier e ore 1min. a cada vez.",
      physicalAction: "3 rodadas de 5 Flexões de braços/10 agachamentos/15 polichinelos e 30seg. de prancha (ao sentir vontade de desistir)",
      notesPrompt: "Em qual momento eu venci claramente hoje ?"
    },
    {
      id: 11, dayTitle: "A mente é o campo de batalha",
      verse: "“Não se amoldem ao padrão deste mundo, mas transformem-se pela renovação da sua mente...” Romanos 12:2",
      devotional: "Onde sua mente vai, seu corpo segue. Hoje, renove o pensamento",
      spiritualAction: "Meditação guiada (leitura seguido de silêncio com Romanos 12)",
      challenge: "Toda vez que um pensamento negativo surgir, substitua por um versículo.",
      physicalAction: "Caminhada rápida ou corrida leve (20-30min) com foco no versículo do dia",
      notesPrompt: "Quais pensamentos precisei combater ?"
    },
    {
      id: 12, dayTitle: "O domínio está em ti",
      verse: "“Como a cidade com seus muros derrubados, assim é quem não sabe dominar se.” Provérbios 25:28",
      devotional: "Você é o guardião do seu território. Fortaleça seus muros hoje.",
      spiritualAction: "Oração declarando autoridade espiritual. Leitura Provérbios 25",
      challenge: "Não reclamar, não ceder, e agradecer a cada impulso vencido.",
      physicalAction: "Exercícios em Isometria Prancha, apoio na parede, pendurado, sustentando algo",
      notesPrompt: "Qual foi meu maior ataque ?"
    },
    {
      id: 13, dayTitle: "O Espírito dá força",
      verse: "“Pois a carne deseja o que é contrário ao Espírito; e o Espírito, o que é contrário à carne...” Gálatas 5:17",
      devotional: "A guerra é real. Mas o Espírito Santo luta com você.",
      spiritualAction: "Oração espontânea e louvor",
      challenge: "Evitar completamente o hábito negativo por 24h, focando no Espírito",
      physicalAction: "Movimento corporal livre ao som de louvor (pular corda, polichinelos, burpees, corrida…)",
      notesPrompt: "Onde o Espírito me fortaleceu hoje ?"
    },
    {
      id: 14, dayTitle: "Avaliação e Alinhamento",
      verse: "“Examinem-se para ver se vocês estão na fé; provem-se a si mesmos...” 2 Coríntios 13:5",
      devotional: "Deus não quer perfeição, mas entrega e alinhamento.",
      spiritualAction: "Revisar semana com oração, confissão e gratidão",
      challenge: "Fazer um balanço: o que melhorou ? o que ainda domina ?",
      physicalAction: "Caminhada leve ou Alongamentos enquanto ora",
      notesPrompt: "Como reagi ao velho homem ? Estou mais forte hoje do que há 7 dias ?"
    },
    // SEMANA 3
    {
      id: 15, dayTitle: "O corpo precisa ser treinado",
      verse: "“O exercício físico é de pouco proveito; a piedade, porém, para tudo é proveitosa...” 1 Timóteo 4:8",
      devotional: "O corpo também precisa de disciplina. Ele não pode ser mimado.",
      spiritualAction: "Oração pedindo disciplina integral. Leitura 1 Timóteo 4",
      challenge: "Escolher um horário fixo para oração e segui-lo hoje (domínio da agenda)",
      physicalAction: "Caminhada Rápida (20min.) depois realizar 4 rodadas de 15 agachamentos",
      notesPrompt: "Como o corpo reagiu ao comando do Espírito Santo hoje ?"
    },
    {
      id: 16, dayTitle: "Não confunda vontade com necessidade",
      verse: "“Sei o que é passar necessidade e sei o que é ter fartura. Aprendi o segredo de viver contente...” Filipenses 4:12",
      devotional: "Nem tudo que o corpo quer, ele precisa. Você decide.",
      spiritualAction: "Jejum de algo que você costuma fazer por impulso. Leitura Filipenses 4",
      challenge: "Dizer não a toda sugestão da carne por um período de 3h",
      physicalAction: "Exercícios em Isometria Prancha, apoio na parede, pendurado, sustentando algo 3x 20-30s.",
      notesPrompt: "Em que momento percebi que era só vontade ?"
    },
    {
      id: 17, dayTitle: "A prática constante gera domínio",
      verse: "“Mas o alimento sólido é para os adultos, os quais, pelo exercício constante, tornaram-se aptos...” Hebreus 5:14",
      devotional: "É a repetição consciente que se forma o domínio (hábito)",
      spiritualAction: "Repetição de versículo durante o dia. Oração rápida ao lembrar dele",
      challenge: "Escolher um microhábito saudável e repeti-lo 3x hoje",
      physicalAction: "2 rodadas de 5 Flexões / 10 agachamentos / 15 polichinelos 3x ao dia (manhã-tarde-noite)",
      notesPrompt: "Como o hábito saudável agiu contra o vício ?"
    },
    {
      id: 18, dayTitle: "O corpo é servo, não senhor",
      verse: "“Não ofereçam os membros dos seus corpos ao pecado... antes ofereçam-se a Deus...” Romanos 6:13",
      devotional: "O corpo é um instrumento, uma ferramenta - quem manda é o Espírito",
      spiritualAction: "Oração consagrando mãos, olhos, boca, pés a Deus",
      challenge: "Controlar totalmente o que entra pelos olhos hoje (jejum visual)",
      physicalAction: "Exercícios de alongamento, foco total no movimento consciente, em oração",
      notesPrompt: "Qual parte do corpo tem sido mais “rebelde”?"
    },
    {
      id: 19, dayTitle: "O Espírito Santo habita em mim",
      verse: "“o Espírito da verdade... Mas vocês o conhecem, pois ele vive com vocês e estará em vocês.” João 14:17",
      devotional: "Se o Espírito está em mim, tudo em mim deve ser lugar santo.",
      spiritualAction: "Tempo de louvor pessoal. Leitura João 14",
      challenge: "Eliminar da rotina algo que entristece o Espírito Santo",
      physicalAction: "Caminhada 20-30min. com louvor nos ouvidos, em adoração",
      notesPrompt: "O que não combina com a presença dEle em mim?"
    },
    {
      id: 20, dayTitle: "Reação controlada, corpo alinhado",
      verse: "“Melhor é o homem paciente do que o guerreiro, mais vale controlar o seu espírito do que conquistar uma cidade.” Provérbios 16:32",
      devotional: "Dominar o impulso é mais nobre que qualquer conquista externa",
      spiritualAction: "Oração pedindo autocontrole nas reações. Leitura Provérbios 16",
      challenge: "Ao ser provocado, respire, ore e escolha responder com mansidão",
      physicalAction: "Caminhada leve em silêncio, meditando em situações que provocam reações impulsivas",
      notesPrompt: "Tive alguma vitória no autocontrole hoje ?"
    },
    {
      id: 21, dayTitle: "Avaliação e Alinhamento",
      verse: "“Dirige os meus passos, conforme a tua palavra; não permitas que nenhum pecado me domine.” Salmos 119:133",
      devotional: "Seus passos estão sendo guiados pela carne ou pela Palavra?",
      spiritualAction: "Oração de realinhamento e avaliação espiritual. Leitura Salmo 119 parcelada",
      challenge: "Revisar o progresso das 3 semanas: qual área ainda governa?",
      physicalAction: "Escolha um exercício da semana e repita em ritmo de gratidão",
      notesPrompt: "O que preciso ajustar no meu ritmo de obediência ?"
    },
    // SEMANA 4
    {
      id: 22, dayTitle: "A Liberdade começa na constância",
      verse: "“Se vocês permanecerem firmes na minha palavra, verdadeiramente serão meus discípulos. E conhecerão a verdade, e a verdade os libertará.” João 8:31,32",
      devotional: "Só é livre quem permanece. Liberdade é consequência da permanência.",
      spiritualAction: "Oração de entrega da semana. Leitura de João 8",
      challenge: "Manter 100% do plano do dia (espiritual e físico)",
      physicalAction: "20-30min. Caminhada rápida ou corrida leve com constância de ritmo",
      notesPrompt: "O que hoje mostrou que estou mais consistente ?"
    },
    {
      id: 23, dayTitle: "Não se volta atrás",
      verse: "“Ninguém que põe a mão no arado e olha para trás é apto para o Reino de Deus.” Lucas 9:62",
      devotional: "Olhar para trás enfraquece o presente. Hoje, olhe para o alvo",
      spiritualAction: "Oração focado e olhando para o propósito. Leitura de Filipenses 3:12-14",
      challenge: "Eliminar da sua casa um símbolo do antigo hábito",
      physicalAction: "Faça o treino anterior (flexão, agachamento e polichinelo) sem as pausas curtas",
      notesPrompt: "Onde eu quis voltar atrás e não voltei ?"
    },
    {
      id: 24, dayTitle: "Repetir é maturar",
      verse: "“E não nos cansemos de fazer o bem, pois no tempo próprio colheremos, se não desanimarmos.” Gálatas 6:9",
      devotional: "O bem, para firmar raízes, precisa ser repetido até amadurecer.",
      spiritualAction: "Seja grato pelas mudanças já vividas. Leitura de Gálatas 6",
      challenge: "Fazer 3x hoje o que antes era impossível resistir (ex. negar comida, celular…)",
      physicalAction: "Repetir o exercício mais difícil da semana anterior",
      notesPrompt: "Qual atitude repetida hoje me deixou mais forte ?"
    },
    {
      id: 25, dayTitle: "Controle começa no pensamento",
      verse: "“Destruímos argumentos e toda pretensão... e levamos cativo todo pensamento, para torná-lo obediente a Cristo.” 2 Coríntios 10:5",
      devotional: "Domínio começa na mente. O corpo só segue o que ela ordena",
      spiritualAction: "Oração com foco na mente. Leitura e meditação de 2 Coríntios 10",
      challenge: "Toda vez que um pensamento destrutivo surgir, diga “ Cativo a Cristo”",
      physicalAction: "Caminhada (mental) 20min. refletindo sobre pensamentos automáticos",
      notesPrompt: "Qual pensamento foi o mais difícil de cativar hoje ?"
    },
    {
      id: 26, dayTitle: "Liberdade tem responsabilidade",
      verse: "“Tudo me é permitido, mas nem tudo convém. Tudo me é permitido, mas eu não deixarei que nada domine.” 1 Coríntios 6:12",
      devotional: "Ser livre não é fazer tudo, mas escolher o que edifica.",
      spiritualAction: "Oração de alinhamento com o que convém. Leitura de 1 Coríntios 6",
      challenge: "Renunciar hoje algo que “poderia” mas “não convém”",
      physicalAction: "O mesmo Circuito anterior porém nas pausas fazer uma oração curta",
      notesPrompt: "Que liberdade verdadeira experimentei ao dizer “não” ?"
    },
    {
      id: 27, dayTitle: "A força vem da fidelidade",
      verse: "“Muito bem, servo bom e fiel! Você foi fiel no pouco; eu o porei sobre o muito...” Mateus 25:21",
      devotional: "O que você faz hoje com fidelidade é o que te tornará forte amanhã",
      spiritualAction: "Oração de consagração dos hábitos. Leitura Mateus 25",
      challenge: "Fazer o plano de hoje com atenção e excelência em cada detalhe",
      physicalAction: "Circuito leve, técnico com postura impecável",
      notesPrompt: "Em que área fui fiel no pouco hoje ?"
    },
    {
      id: 28, dayTitle: "Avaliação e celebração",
      verse: "“Sim, coisas grandiosas fez o Senhor por nós, por isso estamos alegres.” Salmos 126:3",
      devotional: "Você resistiu, persistiu e venceu até aqui. Celebre a jornada.",
      spiritualAction: "Escute louvores e oração de gratidão. Leitura do Salmo 126",
      challenge: "Compartilhe com alguém o que Deus está fazendo em você",
      physicalAction: "Movimento livre com música de vitória (corrida, caminhada, dança)",
      notesPrompt: "O que Deus já transformou em mim nesse mês ?"
    },
    // SEMANA 5
    {
      id: 29, dayTitle: "Eu sou nova criatura",
      verse: "“Portanto, se alguém está em Cristo, é nova criação. As coisas antigas já passaram; eis que surgiram coisas novas!” 2 Coríntios 5:17",
      devotional: "Você não está lutando para se tornar alguém melhor. Você já é alguém novo.",
      spiritualAction: "Oração declarando sua nova identidade. Leitura de 2 Coríntios 5",
      challenge: "Escrever uma carta curta para si mesmo (antigo eu), se despedindo dele",
      physicalAction: "Caminhada ou corrida afirmando: “Eu sou nova criatura em Cristo”",
      notesPrompt: "O que hoje provou que eu não sou mais como antes ?"
    },
    {
      id: 30, dayTitle: "Eu sou templo do Espírito",
      verse: "“Vocês não sabem que são santuário de Deus e que o Espírito de Deus habita em vocês?” 1 Coríntios 3:16",
      devotional: "Sua casa espiritual está sendo cuidada? Santidade também é zelo com o corpo",
      spiritualAction: "Oração de consagração do corpo. Leitura de 1 Coríntios 3",
      challenge: "Alimentação e pensamentos hoje devem refletir essa verdade",
      physicalAction: "Treino completo com foco em consciência corporal e reverência",
      notesPrompt: "O que preciso limpar no meu “templo”?"
    },
    {
      id: 31, dayTitle: "Eu sou livre do jugo",
      verse: "“Foi para a liberdade que Cristo nos libertou. Portanto, permaneçam firmes...” Gálatas 5:1",
      devotional: "Viver com culpa e medo é voltar ao jugo. Hoje viva leve, livre, guiado.",
      spiritualAction: "Louvor e celebração. Leitura Gálatas 5",
      challenge: "Fazer algo hoje que antes o vício impedia",
      physicalAction: "Atividade ao ar livre com liberdade no corpo",
      notesPrompt: "Qual jugo foi tirado dos meus ombros?"
    },
    {
      id: 32, dayTitle: "Eu tenho domínio próprio",
      verse: "“Mas o fruto do Espírito é amor, alegria, paz... e domínio próprio. Contra essas coisas não há lei.” Gálatas 5:22,23",
      devotional: "Domínio próprio não é ausência de vontade, mas presença de autoridade espiritual",
      spiritualAction: "Oração pedindo fruto do Espírito. Releia Gálatas 5",
      challenge: "Diga não a um prazer momentâneo só para dizer “sim” a algo maior",
      physicalAction: "Treino muscular em ritmo cronometrado (acelera, desacelera, resiste)",
      notesPrompt: "Onde hoje o Espírito falou mais alto que a carne?"
    },
    {
      id: 33, dayTitle: "Eu não volto mais",
      verse: "“Como o cão volta ao seu vômito, assim o insensato repete a sua insensatez.” Provérbios 26:11",
      devotional: "Recaídas não são o plano. O passado não é mais opção.",
      spiritualAction: "Oração com firmeza: “Não volto mais”. Leitura de Provérbios 26",
      challenge: "Desinstalar, remover ou descartar qualquer porta que volta ao vício",
      physicalAction: "Repetir os exercícios que antes eram difíceis, agora com autoridade",
      notesPrompt: "O que eliminei hoje que pode me impedir de recair?"
    },
    {
      id: 34, dayTitle: "Eu sou exemplo",
      verse: "“Assim brilhe a luz de vocês diante dos homens, para que vejam as suas boas obras...” Mateus 5:16",
      devotional: "Alguém está se inspirando em você - mesmo que você não saiba.",
      spiritualAction: "Oração por pessoas próximas que também lutam. Leitura Mateus 5",
      challenge: "Compartilhar seu progresso com alguém que precisa",
      physicalAction: "Treine junto com outra pessoa ou grave um vídeo incentivando alguém",
      notesPrompt: "Quem hoje viu a luz de Deus através de mim?"
    },
    {
      id: 35, dayTitle: "Avaliação e identidade firmada",
      verse: "“Porque somos criação de Deus realizada em Cristo Jesus para fazermos boas obras...” Efésios 2:10",
      devotional: "Você é resultado da obra de Deus, não dos seus erros passados.",
      spiritualAction: "Oração de identidade. Leitura Efésios 2",
      challenge: "Reescrever quem você é agora em Cristo - 5 afirmações",
      physicalAction: "Caminhada leve com contemplação (oração e escuta)",
      notesPrompt: "O que mudou definitivamente em mim ?"
    },
    // SEMANA 6
    {
      id: 36, dayTitle: "Vigiai",
      verse: "“Vigiem e orem para que não caiam em tentação. O espírito está pronto, mas a carne é fraca”. Mateus 26:41",
      devotional: "Vencer uma vez não é o fim da guerra. Quem vigia, permanece de pé.",
      spiritualAction: "Oração de vigilância (olhos abertos). Leitura Mateus 16",
      challenge: "Anotar as tentações que surgirem ao longo do dia",
      physicalAction: "Caminhada com atenção total no ambiente",
      notesPrompt: "Em qual momento do dia fui mais tentado?"
    },
    {
      id: 37, dayTitle: "A tentação não é pecado",
      verse: "“pois não temos um sumo sacerdote que não possa compadecer-se das nossas fraquezas...” Hebreus 4:15",
      devotional: "Ser tentado não é falhar. A resposta é que define o resultado",
      spiritualAction: "Oração de reconhecimento das vulnerabilidades. Leitura Hebreus 4",
      challenge: "Reconhecer e anotar 3 padrões de tentação",
      physicalAction: "Fazer os exercícios até a exaustão leve (simbolizando luta)",
      notesPrompt: "Como reagi hoje quando fui tentado ?"
    },
    {
      id: 38, dayTitle: "Armas Espirituais",
      verse: "“As armas com as quais lutamos não são humanas; pelo contrário, são poderosas em Deus...” 2 Coríntios 10:4",
      devotional: "Não lutamos sozinhos. Temos armas invisíveis, mas reais.",
      spiritualAction: "Oração de guerra espiritual. Leitura 2 Coríntios 10",
      challenge: "Repetir em voz alta ao menos 5 vezes: “Minha arma é espiritual”",
      physicalAction: "Treino com foco em postura firme (isometrias)",
      notesPrompt: "Em que momento precisei usar minhas armas hoje?"
    },
    {
      id: 39, dayTitle: "Fugir também é vitória",
      verse: "“Não sobreveio a vocês tentação que não fosse comum... quando forem tentados, ele lhes providenciará um escape...” 1 Coríntios 10:13",
      devotional: "Às vezes, a vitória está em sair da situação. Fugir não é fraqueza - é sabedoria.",
      spiritualAction: "Oração de discernimento e fuga. Leitura 1 Coríntios 10",
      challenge: "Evitar uma situação/ambiente que antes alimentava seu vício",
      physicalAction: "Caminhada rápida ou corrida leve (simbolizando fuga)",
      notesPrompt: "O que eu precisei evitar hoje?"
    },
    {
      id: 40, dayTitle: "Não retroceda",
      verse: "“Nós, porém, não somos dos que retrocedem e são destruídos, mas dos que creem e são salvos.” Hebreus 10:39",
      devotional: "Voltar atrás é negar tudo que já foi vencido. Você não é dos que retrocedem.",
      spiritualAction: "Declaração de Fé contra recaídas. Releitura de Hebreus 10",
      challenge: "Olhar para trás e escrever 3 situações vencidas com fé",
      physicalAction: "Repetição do treino mais difícil das semanas anteriores",
      notesPrompt: "O que me mantém firme para não recuar?"
    },
    {
      id: 41, dayTitle: "Perseverança traz recompensa",
      verse: "“Feliz é o homem que persevera na provação, porque depois de aprovado receberá a coroa da vida...” Tiago 1:12",
      devotional: "Cada dia resistido é uma semente para um futuro de vitória.",
      spiritualAction: "Oração por perseverança até o fim. Leitura de Tiago 1",
      challenge: "Escolher um novo hábito para iniciar como continuidade",
      physicalAction: "Exercício de resistência (tempo fixo, mesmo que doa)",
      notesPrompt: "Que área da minha vida será meu próximo desafio ?"
    },
    {
      id: 42, dayTitle: "Celebre, mas continue",
      verse: "“Este é o dia em que o Senhor agiu; alegremo-nos e exultemos neste dia.” Salmos 118:24",
      devotional: "Você chegou até aqui. Comemore com gratidão, mas siga vigilante.",
      spiritualAction: "Oração de encerramento de ciclo. Louvor espontâneo",
      challenge: "Compartilhar publicamente ou com alguém de confiança o marco de 42 dias",
      physicalAction: "Movimento livre e respiração consciente em gratidão",
      notesPrompt: "O que aprendi sobre mim e sobre Deus nesses dias ?"
    }
  ];

  return data.map((d, i) => ({
    id: d.id!,
    week: Math.ceil((d.id!) / DAYS_PER_WEEK),
    weekTitle: weekTitles[Math.ceil((d.id!) / DAYS_PER_WEEK)],
    dayTitle: d.dayTitle!,
    verse: d.verse!,
    devotional: d.devotional!,
    spiritualAction: d.spiritualAction!,
    challenge: d.challenge!,
    physicalAction: d.physicalAction!,
    notes: "",
    notesPrompt: d.notesPrompt!,
    completed: false
  }));
};

export const Icons = {
  Home: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  Calendar: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  CheckCircle: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Lock: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  )
};
