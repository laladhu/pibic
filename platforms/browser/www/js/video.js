 var db = openDatabase('db', '1.0', 'Banco de vídeos', 2 * 1024 * 1024);
      
   db.transaction(function (tx) {
      tx.executeSql('DROP TABLE bancoVideos');
      tx.executeSql('CREATE TABLE IF NOT EXISTS bancoVideos (id unique,nome,link,conteudo,tempo,categoria,resumo)');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (1, "Matemática nas Brincadeiras", "https://www.youtube.com/embed/Q9_KNEwdu1w", "ap",14,"apl","Mais que mero entretenimento, os jogos e as brincadeiras sempre despertaram o interesse dos matemáticos. Essa curiosidade auxiliou muito no desenvolvimento do conhecimento científico, especialmente nos estudos de estatística, probabilidade e análise combinatória. O professor Leo Akio Yokoyama põe seus conhecimentos matemáticos à prova para desafiar os jogadores Carlos Batista Domingues e Carlos Mavca no jogo de porrinha e no pôquer. Será que ele teve sucesso? ")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (2, "Logaritmos e Música", "https://www.youtube.com/embed/8fR5iOFtY2c", "p",4,"cur","Vídeo que relaciona logaritmos com a música.")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (3, "Curiosidades do Triângulo de Pascal", "https://www.youtube.com/embed/HymLc234bko","ap",4,"cur","Observe o Triângulo de Pascal, descoberto na verdade por um matemático chinês chamado Yang Hui. Nele há vários fatos curiosos, como a sequência dos números naturais, números triangulares, potência de 2, potência de 11 e a fascinante Sequência Fibonacci.")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (4, "O número de Ouro: a mágica por detrás do belo", "https://www.youtube.com/embed/XM-o0HsjkV8","gp",11,"cur","Vídeo sobre o número de ouro.")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (5, "Progressões Aritméticas", "https://www.youtube.com/embed/8TY5zYNSDYg","p",14,"vid","A noção de sequência está ligada à progressão aritmética. Você aprenderá a determinar a razão desse tipo de progressão e, também, como se calculam seus termos.")');
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (6, "História do PI", "https://www.youtube.com/embed/zHIcJXZ22zc", "gp",11,"hist","Vídeo que conta a história do número PI.")');
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
      tx.executeSql('INSERT INTO bancoVideos (id, nome,link,conteudo,tempo,categoria,resumo) VALUES (38,"Função Polinomial do 2o grau","https://www.youtube.com/embed/c1Z7VIWn2RE","fp",15,"vid","Estudo sobre a função polinomial do 2o. grau.")');
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