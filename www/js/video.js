 var db = openDatabase('db', '1.0', 'Banco de vídeos', 2 * 1024 * 1024);

 db.transaction(function (tx) {
      tx.executeSql('CREATE TABLE IF NOT EXISTS bancoVideos (id unique,nome,link,conteudo,tempo,categoria,resumo)');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (1, "Matemática nas Brincadeiras", "https://www.youtube.com/embed/Q9_KNEwdu1w", "ap",14,"apl","Mais que mero entretenimento, os jogos e as brincadeiras sempre despertaram o interesse dos matemáticos. Essa curiosidade auxiliou muito no desenvolvimento do conhecimento científico, especialmente nos estudos de estatística, probabilidade e análise combinatória. O professor Leo Akio Yokoyama põe seus conhecimentos matemáticos à prova para desafiar os jogadores Carlos Batista Domingues e Carlos Mavca no jogo de porrinha e no pôquer. Será que ele teve sucesso? ")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (2, "Logaritmos e Música", "https://www.youtube.com/embed/8fR5iOFtY2c", "p",4,"cur","Vídeo que relaciona logaritmos com a música.")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (3, "Curiosidades do Triângulo de Pascal", "https://www.youtube.com/embed/HymLc234bko","ap",4,"cur","Observe o Triângulo de Pascal, descoberto na verdade por um matemático chinês chamado Yang Hui. Nele há vários fatos curiosos, como a sequência dos números naturais, números triangulares, potência de 2, potência de 11 e a fascinante Sequência Fibonacci.")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (4, "O número de Ouro: a mágica por detrás do belo", "https://www.youtube.com/embed/XM-o0HsjkV8","gp",11,"cur","Vídeo sobre o número de ouro.")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (5, "Progressões Aritméticas", "https://www.youtube.com/embed/8TY5zYNSDYg","p",14,"vid","A noção de sequência está ligada à progressão aritmética. Você aprenderá a determinar a razão desse tipo de progressão e, também, como se calculam seus termos.")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (6, "História do PI", "https://www.youtube.com/embed/zHIcJXZ22zc", "gp",11,"cur","Vídeo que conta a história do número PI.")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (7, "História do PI", "https://www.youtube.com/embed/zHIcJXZ22zc", "ga",null,null,"Vídeo que conta a história do número PI.")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (8, "O Teorema de Pitágoras", "https://www.youtube.com/embed/aPZkRW7F_RQ", "gp",14,"vid","O Teorema de Pitágoras funciona para qualquer triângulo retângulo. Você acompanhará uma demonstração gráfica disso com o quebra-cabeça dos quatro triângulos e verá como o teorema resolverá um problema utilizando um outro tipo de triângulo retângulo.")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (9, "Progressão Geométrica", "https://www.youtube.com/embed/CFhdoJjsm6w", "p",12,"vid","Depois de estudar as progressões aritméticas em teleaulas anteriores, você vai aprender a identificar e construir progressões geométricas. Além disso, saberá como determinar a razão delas e como descobrir qualquer um de seus termos." )');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (10, "Matemática no Zoológico", "https://www.youtube.com/embed/7UIh3KZagAY", "c",12,"apl","Os zoológicos são locais para manter animais para orientação ao público e para estudos de preservação. Neles trabalham profissionais especializados na alimentação, no acolhimento e na saúde dos animais. O professor Leo Akio Yokoyama encontra o veterinário Fernando Troccoli e o biólogo Rodrigo de Cerqueira para entender como a matemática é a base para organizar os animais em conjuntos de espécies e para monitorar os níveis de ameaça a espécies sob risco de extinção." )'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (11,"Matemática na Comunicação", "https://www.youtube.com/embed/JfAOhEclvkg", "ap",12,"apl","Comunicar é uma necessidade do ser humano. Em toda comunicação alguém emite uma mensagem a um receptor através de um meio. Há mensagens que são criadas justamente para que não sejam facilmente decifradas, como é o caso de Joana César, artista plástica que o professor Leo Akio Yokoyama encontra, que inventou um alfabeto próprio, usando técnicas de criptografia. Já o blogueiro Diego Dukão, por outro lado, quer mais é se comunicar com muita gente com seu blog." )'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (12,"Matemática na Alimentação", "https://www.youtube.com/embed/eAAy6rPH0Oc", "mf",14,"apl","Quem não gosta de desfrutar de uma bela refeição, seja a comidinha caseira da vovó ou um almoço com os amigos no restaurante favorito? Entre panelas, pratos e ingredientes, o professor Leo Akio Yokoyama se reúne com os cozinheiros Fred Dieckmann e Luiz Antonio de Moraes Filho para mostrar como a matemática ajuda a executar receitas com precisão, evitando desperdícios, e a administrar um restaurante, equilibrando custos e receita e mantendo o negócio viável." )'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (13,"Embalagens", "https://www.youtube.com/embed/iOcdL33DOKs", "fp",10,"vid","Daniela, que inicia o trabalho numa empresa de embalagens para velas, quer orientação para recortar folhas de papelão para montar caixas de embalagem." )'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (14,"A Incrível Piritipoca da Serra", "https://www.youtube.com/embed/I6CVCDDkAD0", "mf",11,"vid","Luíza mudou-se com seus pais para uma cidadezinha de interior. Lá chegando, estranha o comércio local, baseado na troca de mercadorias e serviços sem a presença de dinheiro. Intrigada com a situação, escreve cartas ao seu amigo da cidade grande Alcides, que tenta explicar-lhe o que está acontecendo." )'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (15,"Juros divididos, dívida crescente", "https://www.youtube.com/embed/Pgh5eLVTjg4", "mf",11,"vid","O Zé Henrique deseja montar seu próprio estúdio musical, mas não tem dinheiro para isso. Preocupada com a situação do filho, dona Zoraide, sua mãe, sugere-lhe que faça um empréstimo para montar seu negócio, explicando ao filho os pormenores da transação." )'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (16, "Juros divididos, dívida crescente", "https://www.youtube.com/embed/Pgh5eLVTjg4", "fe",null,null,"O Zé Henrique deseja montar seu próprio estúdio musical, mas não tem dinheiro para isso. Preocupada com a situação do filho, dona Zoraide, sua mãe, sugere-lhe que faça um empréstimo para montar seu negócio, explicando ao filho os pormenores da transação." )'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (17, "Terremoto Brasileiro", "https://www.youtube.com/embed/Q6c_LR8-qqg", "p",10,"vid","Um jovem documentarista solicita informações a respeito de abalos sísmicos a um geólogo. No desenrolar da conversa, o rapaz acaba aprendendo como se mede a magnitude dos tremores, e qual é a escala usual adotada para tali medição." )'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (18, "A Cooperativa de Leite","https://www.youtube.com/embed/AXiNp1o88jA","mds",11,"vid","Uma cooperativa de produtores de leite decide construir um tanque de refrigeração para uso coletivo, mas ainda precisa decidir em qual fazenda construí-lo. Essa questão é respondida com auxílio da representação dos dados na forma de uma tabela." )'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (19, "Coisa de passarinho", "https://www.youtube.com/embed/EuPGf5ul6y0","ap", 11, "vid", "Caio se acha um rapaz sem sorte. Através de uma conversa com o pai, é abordado o conceito de probabilidade de um evento e sua importância em previsão de fenômenos aleatórios.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (21, "Análise Combinatória: diferença entre arranjo e combinação","https://www.youtube.com/embed/TWukUF9qS6s","ap",4,"vid","Você já sabe o que saladas de frutas e palavras cruzadas têm em comum? Descubra agora mesmo e aproveite para estudar um pouco de Análise Combinatória!")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (22,"Matemática na profissão: Agrimensor e Geólogo","https://www.youtube.com/embed/07IZg3AM1Fs", "gp", 9, "apl", "A Matemática está presente em todo lugar e nas profissões, nesse vídeo será apresentado a Matemática na profissão do Agrimensor e do Geólogo."  )'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (23,"Matemática na profissão: Agrimensor e Geólogo","https://www.youtube.com/embed/07IZg3AM1Fs", "ge", null, null, "A Matemática está presente em todo lugar e nas profissões, nesse vídeo será apresentado a Matemática na profissão do Agrimensor e do Geólogo."  )'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (24,"Esfera, trigonometria, paralelismo, ângulo entre retas no plano", "https://www.youtube.com/embed/GtfETjKn_Qo", "ft",11,"vid","Esse vídeo tem como objetivo revisar o conceito de ângulos e de retas paralelas. Trabalhar com a trigonometria do triângulo retângulo e iniciar o conceito das inversas das funções trigonométricas")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (25,"Esfera, trigonometria, paralelismo, ângulo entre retas no plano", "https://www.youtube.com/embed/GtfETjKn_Qo", "t",null,null,"Esse vídeo tem como objetivo revisar o conceito de ângulos e de retas paralelas. Trabalhar com a trigonometria do triângulo retângulo e iniciar o conceito das inversas das funções trigonométricas")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (26,"Esfera, trigonometria, paralelismo, ângulo entre retas no plano", "https://www.youtube.com/embed/GtfETjKn_Qo", "ge",null,null,"Esse vídeo tem como objetivo revisar o conceito de ângulos e de retas paralelas. Trabalhar com a trigonometria do triângulo retângulo e iniciar o conceito das inversas das funções trigonométricas")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (27,"Matemática na profissão: Médico e Dentista", "https://www.youtube.com/embed/GXzz02u4Gnk","gp",11,"apl","A Matemática está presente em todo lugar e nas profissões, nesse vídeo será apresentado a Matemática na profissão do Dentista e do Médico."  )'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (28, "Conceito de Função exponencial","https://www.youtube.com/embed/6FWc7eFFCHM","fe",11,"vid","Esse vídeo tem como objetivo introduzir o conteúdo de Função Exponencial"  )'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (29,"Cresicmento populacional: função e gráfico","https://www.youtube.com/embed/j8lq6XPn868","fe",11,"vid","Dona Laura se lamenta com o aumento da população no Brasil aumentou. Muitas pessoas em todos os lugares! Ela liga a TV e um demógrafo lhe explica sobre o crescimento populacional no Brasil e a sua taxa de crescimento. Dona Laura, dorme em frente à TV e quando acorda tem a sensação de que esta conversa tinha sido um sonho. A série Matemática na Escola aborda o conteúdo de matemática do ensino médio através de situações, ficções e contextualizações.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (30,"Cresicmento populacional: função e gráfico","https://www.youtube.com/embed/j8lq6XPn868",null,null,"apl","Dona Laura se lamenta com o aumento da população no Brasil aumentou. Muitas pessoas em todos os lugares! Ela liga a TV e um demógrafo lhe explica sobre o crescimento populacional no Brasil e a sua taxa de crescimento. Dona Laura, dorme em frente à TV e quando acorda tem a sensação de que esta conversa tinha sido um sonho. A série Matemática na Escola aborda o conteúdo de matemática do ensino médio através de situações, ficções e contextualizações.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (31,"Matriz inversa, multiplicação de matrizes","https://www.youtube.com/embed/z9hC99RhTHU","mds",11,"vid","Uma jovem, estudando para uma prova de Matemática, se depara com algumas matrizes que parecem ser uma mensagem criptografada contendo as respostas da tal prova. Com a ajuda do irmão, ela tenta decodificar a mensagem e acaba aprendendo um pouco sobre matrizes."  )'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (32,"Matriz inversa, multiplicação de matrizes","https://www.youtube.com/embed/z9hC99RhTHU",null,null,"apl","Uma jovem, estudando para uma prova de Matemática, se depara com algumas matrizes que parecem ser uma mensagem criptografada contendo as respostas da tal prova. Com a ajuda do irmão, ela tenta decodificar a mensagem e acaba aprendendo um pouco sobre matrizes."  )'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (33,"Bombons a granel", "https://www.youtube.com/embed/3nOqZWYU5rk", "mds", 11, "vid", "Dona Ioná vende bombons em caixinhas, mas tem dificuldade em colocar o preço em cada uma delas. Para resolver seu problema, ela conta com a ajuda de Jorge, que através do uso de matrizes, ajuda Dona Ioná a calcular o preço de cada caixa."  )');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (34,"Me Salva! Intensivo ENEM: Conjuntos","https://www.youtube.com/embed/cwF61UXQcK4","c",12,"vid","Nesse vídeo é apresentado o conteúdo de conjuntos.")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (35,"Matemática: conjuntos (operações)","https://www.youtube.com/embed/As2-ltErW1I","c",5,"vid","O professor de matemática Vitor Israel dá aula sobre os conjuntos." )');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (36,"PENSI - Matemática - Função Polinomial do 1º Grau","https://www.youtube.com/embed/75DC8LN-cFs","fp",36,"vid","Professor Anderson Goulart resolve exercícios sobre o assunto: Função Polinomial do 1º Grau.")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (38,"Função Polinomial do 2º grau","https://www.youtube.com/embed/c1Z7VIWn2RE","fp",15,"vid","Estudo sobre a função polinomial do 2o. grau.")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (39,"Matemática - Função Modular - Definição","https://www.youtube.com/embed/0VDVcxG-Ki4","fm",5,"vid","Aprenda sobre Função Modular com o prof. Daniel.")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (40,"Função Modular - Aula 1 - Definição de Módulo","https://www.youtube.com/embed/SODQUF2IJos","fm",6,"vid","Nesse vídeo o professor Abraão Lincoln define módulo e resolve exercícios.")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (41,"Função Modular - Aula 2 - Equações Modulares","https://www.youtube.com/embed/4HrJLyI-adk","fm",8,"vid","Nesse vídeo o professor Abraão Lincoln define equações modulares e resolve exercícios.")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (42,"Função Exponencial: Revisão de Potenciação","https://www.youtube.com/embed/n5NRv2cWQIg","fe",28,"vid","Nessa videoaula será iniciado o assunto da função exponencial. Mas primeiramente, ocorrerá fazer uma breve revisão acerca da potenciação.")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (43,"Função Exponencial: Introdução","https://www.youtube.com/embed/9FGtZt84w6U","fe",12,"vid"," Essa videoaula irá tratar da definição da função exponencial.")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (44,"Função Exponencial: Gráfico","https://www.youtube.com/embed/SXkjJZHM5UU","fe",25,"vid","Nessa videoaula será mostrado o gráfico da função exponencial, suas características e importantes conclusões.")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (45,"Função Exponencial: Gráfico","https://www.youtube.com/embed/31N3orMcdVU","fe",26,"vid","Nessa videoaula será mostrado o gráfico da função exponencial, suas características e importantes conclusões.")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (46,"Função Exponencial: Equações Exponenciais","https://www.youtube.com/embed/3EXISt9iVqg","fe",32,"vid","Essa videoaula é sobre as equações exponenciais.")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (47,"Função Exponencial: Equações Exponenciais","https://www.youtube.com/embed/NPBry6hE3NA","fe",27,"vid","Essa videoaula é sobre as equações exponenciais." )');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (48,"Função Exponencial: Inequações Exponenciais","https://www.youtube.com/embed/Y7gaJoRnLAY","fe",31,"vid","Essa videoaula é sobre as inequações exponenciais! Lembra como se resolve uma inequação exponencial? Essa é a sua oportunidade de aprender de vez esse assunto")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (49,"Funções logaritmicas","https://www.youtube.com/embed/LyumzT6br2A","fl",6,"vid","Videoaula sobre funções logaritmicas.")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (37,"O desafio das correlações espúrias","https://www.youtube.com/embed/jMXsAQTOMD0","e",10,"apl","Mulheres com mais filhos têm pressão mais alta. A causa disto são os filhos? Cidades com mais cegonhas têm mais nascimentos. As cegonhas é que trazem as crianças? Um repentista responde esta e outras perguntas para uma estudante.")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (50,"O desafio das correlações espúrias","https://www.youtube.com/embed/jMXsAQTOMD0",null,null,"vid","Mulheres com mais filhos têm pressão mais alta. A causa disto são os filhos? Cidades com mais cegonhas têm mais nascimentos. As cegonhas é que trazem as crianças? Um repentista responde esta e outras perguntas para uma estudante.")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (20, "Análise combinatória: arranjo, combinação simples e princípio multiplicativo","https://www.youtube.com/embed/RZlYuDv0byw", "ap",11,"vid","Rafael convida Júlia para almoçar em sua casa e ambos conversam sobre uma refeição saudável. Tudo acontece após assistirem a uma palestra com uma nutricionista que lhes apresenta uma pirâmide alimentar. Na casa de Rafael, ao se depararem com certa variedade de alimentos com os quais pode compor sua refeição, Rafael e Júlia conversam sobre a composição de um prato considerado saudável, segundo as orientações da nutricionista. Os amigos, considerando os alimentos feitos pela mãe de Rafael,investigam, então, possibilidades de composições de refeições consideradas saudáveis,utilizando conceitos relacionados à análise combinatória. Por meio da Matemática, eles conseguem determinar o número de possibilidades que têm para compor sua refeição sem precisar pensar em todas as combinações.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (71,"Matemática - Funções Trigonométricas","https://www.youtube.com/embed/Jf579Sgn1BE","ft",11,"vid","Nessa videoaula o professor Rogério explica as funções trigonométricas.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (72,"Matemática - Progressão Geométrica","https://www.youtube.com/embed/hK4KzkjoZnM","p",12,"vid","Nessa videoaula o professor Nando explica a progressão geométrica.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (51,"Números Complexos","https://www.youtube.com/embed/FvAYQHyaRFA","npe",30,"vid","Nesta aula, o prof. Jairo irá ensinar, de uma forma muito simples, como resolver problemas envolvendo números complexos")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (52,"Matemática - Progressão Aritmética","https://www.youtube.com/embed/6V-Hjl7Ptmw","p",10,"vid","O professor Nando ensina progressão aritmética.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (53,"Matemática - Sistemas Lineares","https://www.youtube.com/embed/h3gYYPOlx24","mds",23,"vid","O professor Gabs ensina como resolver exercícios de sistemas lineares.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (54,"Matemática Em Toda Parte - Matemática No Parque","https://www.youtube.com/embed/WnQmbHo9-I8","t",24,"apl","Os parques das cidades são locais criados para dar tranquilidade, espaço de lazer e também para a prática de esportes. Porém, eles não são apenas um espaço lotado de árvores. No Parque do Ibirapuera, em São Paulo, além da vegetação, a arquitetura, o paisagismo e as esculturas presentes dão grandes possibilidades para se discutir a matemática. O professor Bigode e a professora Luciana vão até o parque explorar conceitos matemáticos relativos à forma como o homem ocupa e organiza esse espaço.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (55,"Matemática Em Toda Parte - Matemática Na Construção","https://www.youtube.com/embed/1rd18w0WL_I","gp",42,"apl","Dos arranha-céus às casinhas de taipa, não há construção que saia do papel sem muita matemática. Os cálculos envolvidos são precisos, até porque naqueles lugares teremos vidas humanas e é preciso cuidar delas com afinco. O professor Bigode leva a professora Lilian Spalding até um conjunto de edifícios em construção para, neles, avaliar conceitos de razão, cálculos de estimativas e proporções. Sem esquecer, claro, de toda a geometria envolvida nesse trabalho. Entre cimento, areia, engenheiros e pedreiros, eles mostram que uma boa aula de matemática também pode ser dada em um canteiro de obras.")');       
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (56,"Matemática Em Toda Parte - Matemática Na Arte","https://www.youtube.com/embed/yUDH9O7iE6k","gp",26,"apl","Ao olhar para a Monalisa, de Leonardo da Vinci, o sorriso enigmático não é a única parte interessante. Por trás disso -- e em todas as obras de arte, sejam quadros ou monumentos arquitetônicos --, há muita matemática. O professor Bigode, junto da professora Simone, saem, nesse episódio, explorando os conceitos matemáticos que existem na arte. Entre formas geométricas e noções de proporcionalidade, eles ensinam como olhar além do que está nos quadros em obras de artistas como Antonio Peticov, Maurithius Escher e Max Bill.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (57,"Matemática Em Toda Parte - Matemática Na Escola","https://www.youtube.com/embed/OMOL4C0i_k0","gp",25,"apl","O professore Bigode foi às ruas e, nelas, procurou encontrar diversos pontos nos quais a matemática existe no cotidiano. Nesse episódio, ele vai até Salvador, na Bahia, e conversa com a professora Cicília para, juntos, aprenderem que existem muitas possibilidades de conhecer mais sobre esse universo dentro da escola. E isso também fora da sala de aula! Conversando com os alunos, eles comentam questões que envolvem medidas, cálculos e geometria.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (58,"Matemática Em Toda Parte - Matemática Na Escola","https://www.youtube.com/embed/OMOL4C0i_k0","ap",null,null,"O professore Bigode foi às ruas e, nelas, procurou encontrar diversos pontos nos quais a matemática existe no cotidiano. Nesse episódio, ele vai até Salvador, na Bahia, e conversa com a professora Cicília para, juntos, aprenderem que existem muitas possibilidades de conhecer mais sobre esse universo dentro da escola. E isso também fora da sala de aula! Conversando com os alunos, eles comentam questões que envolvem medidas, cálculos e geometria.")');  
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (59,"História dos Números Complexos","https://www.youtube.com/embed/Vus2XSSIqFo","npe",4,"cur","Vídeo produzido por um grupo de alunos do 3º ano do Ensino Médio do Colégio Graccho que conta a história dos números complexos.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (60,"Esse Tal de Bhaskara","https://www.youtube.com/embed/dw6wD5bP5vw","fp",12,"cur","Este vídeo proporciona um passeio histórico desde a Mesopotâmia até a Europa do século XVI mostrando como diversas civilizações utilizavam diferentes métodos para resolver equações quadráticas. ")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (61,"Introdução aos números complexos - Forma algébrica","https://www.youtube.com/embed/4VsK52AxpuI","npe",10,"vid","Vamos começar hoje o estudo dos números complexos! Veremos, neste vídeo, a notação na forma algébrica, a história por trás da criação desses números e alguns exercícios para provas e vestibulares.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (62,"Gauss e Números Complexos","https://www.youtube.com/embed/M_wA023mnhI","npe",2,"cur","Uma parte de um documentário que fala sobre Gauss e os números imaginários.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (63,"Pi - o que é, para que serve e como calcular","https://www.youtube.com/embed/l5n0vs9Fw30","ga",6,"vid","Nesse vídeo você irá aprender sobre o PI.")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (64,"Quem inventou a Matemática?","https://www.youtube.com/embed/JB4X9UJHQPc","npe",12,"cur","Nesse vídeo é explicado o que é a Matemática e questiona se ela é descoberta ou inventada.")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (65,"Quem inventou a Matemática?","https://www.youtube.com/embed/JB4X9UJHQPc","c",null,null,"Nesse vídeo é explicado o que é a Matemática e questiona se ela é descoberta ou inventada.")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (66,"Números Reais ","https://www.youtube.com/embed/k2f2dQvyUmk","c",5,"vid","Você sabe dizer o que é número? Onde usamos as frações no nosso dia-a-dia? O que são números reais? Entenda como é formado o conjunto dos números reais.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (67,"A Importância da Matemática na História","https://www.youtube.com/embed/s4W3vqCvr00","gp",7,"cur","Nesse vídeo os alunos do Colégio Estadual Luiz Tarquínio falam da importância da Matemática na História.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (68,"A Importância da Matemática na História","https://www.youtube.com/embed/s4W3vqCvr00","ga",null,null,"Nesse vídeo os alunos do Colégio Estadual Luiz Tarquínio falam da importância da Matemática na História.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (69,"A Importância da Matemática na História","https://www.youtube.com/embed/s4W3vqCvr00","npe",null,null,"Nesse vídeo os alunos do Colégio Estadual Luiz Tarquínio falam da importância da Matemática na História.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (70,"Que Mágica é essa?! Os números e a invenção do computador","https://www.youtube.com/embed/vO3h9LLwOIk",null,49,"apl"," No final do século XX os computadores pessoais revolucionaram a vida em todo o planeta. Trabalho, educação, lazer e entretenimento são alguns exemplos de atividades que estão cada vez mais dependentes da informática. Mas, apesar dessa onipresença, poucas pessoas sabem que essa revolução nasceu do casamento da Matemática com a Física, da linguagem dos números com a eletrônica. No programa Sala de Professor, o professor Leo Akio e a professora Cristiane Tavolaro propõem uma série de jogos e desafios que desvendam os números binários e a digitalização de dados.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (73,"Que Mágica é essa?! Os números e a invenção do computador","https://www.youtube.com/embed/vO3h9LLwOIk",null,null,"cur"," No final do século XX os computadores pessoais revolucionaram a vida em todo o planeta. Trabalho, educação, lazer e entretenimento são alguns exemplos de atividades que estão cada vez mais dependentes da informática. Mas, apesar dessa onipresença, poucas pessoas sabem que essa revolução nasceu do casamento da Matemática com a Física, da linguagem dos números com a eletrônica. No programa Sala de Professor, o professor Leo Akio e a professora Cristiane Tavolaro propõem uma série de jogos e desafios que desvendam os números binários e a digitalização de dados.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (74,"Números Complexos - Teoria","https://www.youtube.com/embed/Wl0F0uUKvH4","npe",9,"vid","Nessa aula o professor Vandeir ensina como utilizar os números complexos.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (75,"Conexão Matemática 06 - A matemática na Engenharia Civil","https://www.youtube.com/embed/-MDxLLy_tLE","ap",12,"apl","A sexta edição do Conexão Matemática trata da importância da matemática para a formação e para a profissão de engenheiro civil. Curiosidades, depoimentos de professores, estudantes e engenheiros, abordam o uso da matemática no cotidiano dos profissionais da engenharia civil.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (76,"Conexão Matemática 06 - A matemática na Engenharia Civil","https://www.youtube.com/embed/-MDxLLy_tLE","gp",null,null,"A sexta edição do Conexão Matemática trata da importância da matemática para a formação e para a profissão de engenheiro civil. Curiosidades, depoimentos de professores, estudantes e engenheiros, abordam o uso da matemática no cotidiano dos profissionais da engenharia civil.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (77,"Curiosidades da Geometria Analítica","https://www.youtube.com/embed/HaLuxxiLtxk","ga",1,"cur","Nesse vídeo são apresentadas curiosidades da geometria analítica, além de sua história.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (78,"Descartes e a Geometria Analítica","https://www.youtube.com/embed/5_j3fRa8G9o","ga",6,"cur","Nessa parte do documentário History of Maths vemos a história de Descartes.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (79,"Geometria Plana e Geometria analítica","https://www.youtube.com/embed/xElUR6Jv_Hw","gp",6,"apl","Este vídeo apresenta a atividade na qual o aluno construirá diversos polígonos usando papelão e areia. O objetivo é construir o que chamaremos de Montanhas Geométricas. Esses polígonos possuem diversos traços peculiares, que são, na verdade, o conjunto de pontos que são centros de circunferências que tangenciam, ao menos, dois lados. A proposta é que, sem conhecerem esse resultado, os alunos construam hipóteses sobre a formação de areia. Por fim, o professor deverá discutir as hipóteses criadas pelos alunos buscando formalizá-las, utilizando para isso o conhecimento prévio que eles possuem.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (80,"Geometria Plana e Geometria analítica","https://www.youtube.com/embed/xElUR6Jv_Hw","ge",null,null,"Este vídeo apresenta a atividade na qual o aluno construirá diversos polígonos usando papelão e areia. O objetivo é construir o que chamaremos de Montanhas Geométricas. Esses polígonos possuem diversos traços peculiares, que são, na verdade, o conjunto de pontos que são centros de circunferências que tangenciam, ao menos, dois lados. A proposta é que, sem conhecerem esse resultado, os alunos construam hipóteses sobre a formação de areia. Por fim, o professor deverá discutir as hipóteses criadas pelos alunos buscando formalizá-las, utilizando para isso o conhecimento prévio que eles possuem.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (81,"Juros Simples - Parte 1","https://www.youtube.com/embed/YHFAeGkBHZI","mf",22,"vid","Nessa primeira aula de juros simples o professor Ferretto ensina como resolver os exerícios mais básicos de juros simples.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (82,"Juros Simples - Parte 2","https://www.youtube.com/embed/X9xTZ7_QZV4","mf",17,"vid","Nessa segunda aula de juros simples o professor Ferretto resolve exercícios de vestibulares.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (83,"Geometria Espacial, Geometria Plana, Semelhança e Homotetia","https://www.youtube.com/embed/Xipqe1kAk04","gp",11,"apl","O jovem Pedro recebe de presente em seu aniversário uma máquina fotográfica e, sendo muito curioso, deseja saber como funciona. Gabriel, fotógrafo profissional de moda, aparece para ajudá-lo a entender o princípio de funcionamento da máquina e mostrar sua origem.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (84,"Geometria Espacial, Geometria Plana, Semelhança e Homotetia","https://www.youtube.com/embed/Xipqe1kAk04","ge",null,null,"O jovem Pedro recebe de presente em seu aniversário uma máquina fotográfica e, sendo muito curioso, deseja saber como funciona. Gabriel, fotógrafo profissional de moda, aparece para ajudá-lo a entender o princípio de funcionamento da máquina e mostrar sua origem.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (85,"Geometria Espacial, Geometria Plana, Semelhança e Homotetia","https://www.youtube.com/embed/Xipqe1kAk04",null,null,"vid","O jovem Pedro recebe de presente em seu aniversário uma máquina fotográfica e, sendo muito curioso, deseja saber como funciona. Gabriel, fotógrafo profissional de moda, aparece para ajudá-lo a entender o princípio de funcionamento da máquina e mostrar sua origem.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (86,"Geometria Espacial em nosso Cotidiano","https://www.youtube.com/embed/kMK36SVdUj8","ge",4,"apl","A geometria espacial está presente ao nosso redor e muitos não percebem, através desse vídeo relatamos situações reais, onde objetos ocupam um lugar no espaço, então a geometria espacial é responsável pelo cálculo do volume (medida do espaço ocupado por um sólido) dessas figuras e o estudo das estruturas das figuras espaciais.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (87,"A Cartomante","https://www.youtube.com/embed/sBZQOGEtyT0","ap",11,"apl","Uma menina quer ser uma cartomante como sua tia e para tanto deve aprender um pouco sobre combinatórios, arranjos, fatorial e permutações.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (88,"A mancha","https://www.youtube.com/embed/hz4BDf7sZbM","mds",11,"apl","Preoucupado com uma mancha de poluentes químicos que se aproxima de sua cidade, um agricultor procura a ajuda de um amigo para evitar uma catástrofe. O amigo por sua vez sugere um modelo matemático para analisar o problema.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (89,"A parte do Leão","https://www.youtube.com/embed/Vl1duxB_jEs","fp",11,"apl","Um recém-formado recebe um aumento salarial e quer saber o imposto que será descontado de seu novo salário.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (90,"A parte do Leão","https://www.youtube.com/embed/Vl1duxB_jEs","fm",null,null,"Um recém-formado recebe um aumento salarial e quer saber o imposto que será descontado de seu novo salário.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (91,"A Cartomante","https://www.youtube.com/embed/sBZQOGEtyT0",null,null,"vid","Uma menina quer ser uma cartomante como sua tia e para tanto deve aprender um pouco sobre combinatórios, arranjos, fatorial e permutações.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (92,"A mancha","https://www.youtube.com/embed/hz4BDf7sZbM",null,null,"vid","Preoucupado com uma mancha de poluentes químicos que se aproxima de sua cidade, um agricultor procura a ajuda de um amigo para evitar uma catástrofe. O amigo por sua vez sugere um modelo matemático para analisar o problema.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (93,"A parte do Leão","https://www.youtube.com/embed/Vl1duxB_jEs",null,null,"vid","Um recém-formado recebe um aumento salarial e quer saber o imposto que será descontado de seu novo salário.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (94,"Sem discriminação","https://www.youtube.com/embed/1NqJvNA57UM","e",12,"apl","Uma conhecida universidade aparentemente favorece os homens em seu processo de admissão. Será que isto é o que de fato está acontecendo?")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (95,"Sem discriminação","https://www.youtube.com/embed/1NqJvNA57UM",null,null,"vid","Uma conhecida universidade aparentemente favorece os homens em seu processo de admissão. Será que isto é o que de fato está acontecendo?")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (96,"A velha história das multidões","https://www.youtube.com/embed/dlqVJTQoiY4","gp",10,"apl","Gilberto escreve uma matéria sobre o Círio de Nazaré, mas acredita que a estimativa de pessoas presentes no evento esteja errada e, por isso, pede a ajuda de uma amiga.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (97,"A velha história das multidões","https://www.youtube.com/embed/dlqVJTQoiY4",null,null,"vid","Gilberto escreve uma matéria sobre o Círio de Nazaré, mas acredita que a estimativa de pessoas presentes no evento esteja errada e, por isso, pede a ajuda de uma amiga.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (98,"Alice e a lei dos cossenos","https://www.youtube.com/embed/qSa4Bv039jk","t",11,"apl","A jovem Alice sonha com o senhor Josué, que demonstra no a lei dos cossenos de uma maneira divertida. No sonho também aparece um cantor que ajuda Josué na demonstração com uma linda melodia. Alice acorda e percebe que entendeu a demonstração da lei dos cossenos.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (99,"Alice e a lei dos cossenos","https://www.youtube.com/embed/qSa4Bv039jk",null,null,"vid","A jovem Alice sonha com o senhor Josué, que demonstra no a lei dos cossenos de uma maneira divertida. No sonho também aparece um cantor que ajuda Josué na demonstração com uma linda melodia. Alice acorda e percebe que entendeu a demonstração da lei dos cossenos.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (100,"Amuleto mágico","https://www.youtube.com/embed/KQqO400olEI","p",10,"apl","Uma jovem recebe um belo amuleto de presente de um amigo que explica algumas propriedades do quadrado mágico que o amuleto ostenta.")'); 
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (101,"Amuleto mágico","https://www.youtube.com/embed/KQqO400olEI",null,null,"vid","Uma jovem recebe um belo amuleto de presente de um amigo que explica algumas propriedades do quadrado mágico que o amuleto ostenta.")'); 
     
});

 function cc(nome){
    window.location.replace("videos.html?var="+nome);
}

function tt(nome){
    window.location.replace("videos2.html?var="+nome);
}
function ca(nome){
    window.location.replace("videos3.html?var="+nome);
}


function conteudo(nome){    
    db.transaction(function (tx) {
      tx.executeSql('SELECT * FROM bancoVideos WHERE conteudo =? ORDER BY nome',[nome], function (tx, results) {
         var len = results.rows.length, i;
         var msg;
         var tr = '';
         for (i = 0; i < len; i++){
            tr += '<div class="c13">';
            tr += '<label class="c11">' + 'Título: '+  results.rows.item(i).nome + '</label>';
            tr += '<p class="c14">' + 'Resumo: '+ results.rows.item(i).resumo + '</p>';
            tr += '<p class="text-center"><iframe class="c1 c2 c3" src="'+ results.rows.item(i).link + '"></iframe></p>';
            tr += '</div>';  
            
      }
      document.querySelector('#l1').innerHTML =  tr;
}, null);
});

}

function tempoDuracao(nome){     
    var tempo;
    var tempo2;   
    if(nome=="a"){
        tempo=0;
        tempo2=10;
  }
  if(nome=="b"){
        tempo=11;
        tempo2=20;
  }
  if(nome=="c"){
        tempo=21;
        tempo2=25; 
  }
  if(nome=="d"){
   tempo=26;
   tempo2=40;
}
if(nome=="e"){
   tempo=41;
   tempo2=500;
}

db.transaction(function (tx) {
   tx.executeSql('SELECT * FROM bancoVideos WHERE tempo>=? and tempo<=? ORDER BY nome',[tempo,tempo2], function (tx, results) {
         var len = results.rows.length, i;
         var msg;
         var tr = '';
         for (i = 0; i < len; i++){
               tr += '<div class="c13">';
               tr += '<label class="c11">' + 'Título: '+  results.rows.item(i).nome + '</label>';
               tr += '<p class="c14">' + 'Resumo: '+ results.rows.item(i).resumo + '</p>';
               tr += '<p class="text-center"><iframe class="c1 c2 c3" src="'+ results.rows.item(i).link + '"></iframe></p>';
               tr += '</div>';  
               
         }
         document.querySelector('#l1').innerHTML =  tr;
   }, null);
});

}

function categorias(nome){        
    db.transaction(function (tx) {
      tx.executeSql('SELECT * FROM bancoVideos WHERE categoria =? ORDER BY nome',[nome], function (tx, results) {
         var len = results.rows.length, i;
         var msg;
         var tr = '';
         for (i = 0; i < len; i++){
            tr += '<div class="c13">';
            tr += '<label class="c11">' + 'Título: '+  results.rows.item(i).nome + '</label>';
            tr += '<p class="c14">' + 'Resumo: '+ results.rows.item(i).resumo + '</p>';
            tr += '<p class="text-center"><iframe class="c1 c2 c3" src="'+ results.rows.item(i).link + '"></iframe></p>';
            tr += '</div>';  
            
      }
      document.querySelector('#l1').innerHTML =  tr;
}, null);
});
}

function w (){
    var variavel = queryString("var");
    conteudo(variavel);
}
function x(){
    var variavel = queryString("var");
    tempoDuracao(variavel);
}

function y (){
    var variavel = queryString("var");
    categorias(variavel);
}


function queryString(parameter) {  
    var loc = location.search.substring(1, location.search.length);   
    var param_value = false;   
    var params = loc.split("&");   
    for (i=0; i<params.length;i++) {   
        param_name = params[i].substring(0,params[i].indexOf('='));   
        if (param_name == parameter) {                                          
            param_value = params[i].substring(params[i].indexOf('=')+1)   
      }   
}   
if (param_value) {   

  return param_value;   
}   
else {   
  return false;   
}   

}
