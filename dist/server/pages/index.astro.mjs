import { c as createComponent, r as renderTemplate, i as renderHead } from '../chunks/astro/server_9jjUVFrS.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="pt-br"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>PHI Lab</title><link rel="stylesheet" href="styles/style.css">${renderHead()}</head> <body> <b> <header> <a href="#sobre"> <h3 id="phiHeader">PHI Lab</h3> </a> <div id="menu"> <div id="menuBTN"> <ul> <li id="hamb1"></li> <li id="hamb2"></li> <li id="hamb3"></li> </ul> </div> <ul id="nav"> <li><a href="#professores">Professores</a></li> <li><a href="#disciplinas">Disciplinas</a></li> <li><a href="#equipamentos">Equipamentos</a></li> </ul> </div> </header> </b> <div class="paginaInicial"> <div class="title"> <h1>Laboratório de Pneumática e Hidráulica</h1> <h4>(PHI Lab)</h4> </div> <div class="imgInicial"> <img class="img1" src="/fundos/1B.jpeg" alt=""> <img class="img2" src="/fundos/2H.jpeg" alt=""> <img class="img2" src="/fundos/3A.jpeg" alt=""> <img class="img1" src="/fundos/4B.jpeg" alt=""> </div> </div> <div id="sobre"> <b> <h2>Sobre o Laboratório</h2> </b> <p> O PHI Lab é um laboratório de ensino do Instituto Federal de São Paulo, campus Itapetininga. Com uma
            finalidade multifuncional, o laboratório tem na flexibilidade uma de suas marcas, onde além de experimentos
            diversos que podem ser realizados em suas diferentes bancadas, aulas teóricas também podem ser realizadas,
            uma vez que possui estrutura adequada para tal. Esta característica permite que vários cursos oferecidos
            pelo campus possam se utilizar de suas instalações.</p> <div class="imgSobre"> <img class="img3" src="/fundos/1A.jpeg" alt=""> <img class="img4" src="/fundos/1B.jpeg" alt=""> <img class="img3" src="/fundos/1C.jpeg" alt=""> </div> </div> <div id="professores"> <b> <h2>Professores</h2> </b> <p class="p"> A equipe é formada por professores da mecânicae atualmente contamos com dois professores e um
            coordenador de curso.</p> <div class="cardProf"> <div class="caixaProf flip"> <div class="caixaProf caixaFront"> <img class="foto" src="/profs/lontra.jpg" alt=""> <div class="infoProfs"> <b> <p>Professor</p> </b> <p class="nome">Dr. Francisco Mateus Faria de Almeida Varasquim</p> <button class="btnFlip">Ver Mais</button> </div> </div> <div class="caixaEnd"> <b><p class="nome">Dr. Francisco</p></b> <p>Curriculum Lattes: <a href="http://lattes.cnpq.br/7016230803272131">Francisco M F A Varasquim</a></p> <p>Contato: <a class="contato">franciscomateus@ifsp.edu.br</a></p> <button class="btnFlip">Ver Menos</button> </div> </div> <div class="caixaProf flip"> <div class="caixaProf caixaFront"> <img class="foto" src="/profs/5.jpeg" alt=""> <div class="infoProfs"> <b> <p>Coordenador</p> </b> <p class="nome">Dr. Cristhiano da Costa Herrera</p> <button class="btnFlip">Ver Mais</button> </div> </div> <div class="caixaEnd"> <b> <p class="nome">Coordenador</p> </b> <p>Curriculum Lattes: <a target="_blank" href="http://lattes.cnpq.br/1445330128135589">Cristhiano C Herrera</a></p> <p>Contato: <a class="contato">cristhiano@ifsp.edu.br</a></p> <button class="btnFlip">Ver Menos</button> </div> </div> <div class="caixaProf flip"> <div class="caixaProf caixaFront"> <img class="foto" src="/profs/6.jpeg" alt=""> <div class="infoProfs"> <b> <p>Professor</p> </b> <p class="nome">Dr. Rafael dos Santos</p> <button class="btnFlip">Ver Mais</button> </div> </div> <div class="caixaEnd"> <b> <p class="nome">Dr. Rafael</p> </b> <p>Curriculum Lattes: <a target="_blank" href="http://lattes.cnpq.br/8741281322705156">Rafael Santos</a></p> <p>Contato: <a class="contato">rafasantos01@ifsp.edu.br</a></p> <button class="btnFlip">Ver Menos</button> </div> </div> </div> </div> <div id="disciplinas"> <h2>Disciplinas que utilizam o PHI Lab</h2> <div class="cursos"> <details> <summary>Curso Técnico em Eletromecânica</summary> <ul> <li> <details> <summary>Eletropneumática e Eletrohidráulica (ITPEPNH)</summary> <p> O componente curricular aborda métodos para elaboração de circuitos e os principais
                                componentes envolvidos nos sistemas eletro-hidráulicos e eletropneumáticos.</p> <a href="https://drive.ifsp.edu.br/s/ad5H11cWbF5XJh2#page=83" target="_blank">Mais
                                informações</a> </details> </li> <li> <details> <summary>Controle e Automação (ITPCOAU)</summary> <p> O componente curricular aborda os sistemas de controle e automação através de
                                controladores lógicos programáveis, sensores industriais e atuadores. Linguagem de
                                Programação.</p> <a href="https://drive.ifsp.edu.br/s/ad5H11cWbF5XJh2#page=81" target="_blank">Mais
                                informações</a> </details> </li> </ul> </details> <details> <summary>Curso Técnico em Eletromecânica Integrado ao Ensino Médio</summary> <ul> <li> <details> <summary>Eletropneumática e Eletrohidráulica (ITPEPEH)</summary> <p>O componente curricular aborda métodos para elaboração de circuitos e os principais
                                componentes envolvidos nos sistemas eletro-hidráulicos e eletropneumáticos.</p> <a href="https://drive.google.com/file/d/1m1i4KZwBb6Wam3WMIVUMKvM2-LEKYyPH/view#page=280" target="_blank">Mais informações</a> </details> </li> <li> <details> <summary>Pneumática e Hidráulica (ITPPHID)</summary> <p>O componente curricular aborda métodos para elaboração de circuitos e os principais
                                componentes envolvidos nos sistemas hidráulicos e pneumáticos.</p> <a href="https://drive.google.com/file/d/1m1i4KZwBb6Wam3WMIVUMKvM2-LEKYyPH/view#page=247" target="_blank">Mais informações</a> </details> </li> <li> <details> <summary>Controle e Automação (ITPCOAU)</summary> <p> O componente curricular aborda os sistemas de controle e automação através de
                                controladores lógicos programáveis, sensores industriais e atuadores. Linguagem de
                                Programação.</p> <a href="https://drive.google.com/file/d/1m1i4KZwBb6Wam3WMIVUMKvM2-LEKYyPH/view#page=249" target="_blank">Mais informações</a> </details> </li> </ul> </details> <details> <summary>Curso Técnico em Mecânica</summary> <ul> <li> <details> <summary>Pneumática e Hidráulica 1 (ITPPHT1)</summary> <p> O componente curricular dispõe sobre a teoria básica da Pneumática eHidráulica,
                                simbologia de válvulas e traçado de circuitos pneumáticos e hidráulicos</p> <a href="https://drive.ifsp.edu.br/s/6lX84rpgCDDen1M#page=78" target="_blank">Mais
                                informações</a> </details> </li> <li> <details> <summary>Pneumática e Hidráulica 2 (ITPPHQ2)</summary> <p> O componente curricular desenvolve conteúdos e habilidades sobre traçado e
                                interpretação de circuitos eletropneumáticos e eletro-hidráulicos.</p> <a href="https://drive.ifsp.edu.br/s/6lX84rpgCDDen1M#page=88" target="_blank">Mais
                                informações</a> </details> </li> <li> <details> <summary>Controle e Automação (ITPCOAT)</summary> <p> O componente curricular desenvolve os fundamentos de Sistemas de Controle
                                e de Controlador Lógico Programável (CLP) na história da Automação e
                                programá-lo em nível básico. Fundamentos de Comandos Elétricos.
                                Contextualizar o CLP na história da automação e fundamentar sobre comandos
                                elétricos.</p> <a href="https://drive.ifsp.edu.br/s/6lX84rpgCDDen1M#page=68" target="_blank">Mais
                                informações</a> </details> </li> </ul> </details> <details> <summary>Curso de Graduação em Engenharia Mecânica</summary> <ul> <li> <details> <summary>Mecânica dos Fluidos (ITPMECF)</summary> <p> O componente curricular aborda o estudo do comportamento dos fluidos e os princípios
                                envolvidos nos diferentes tipos de escoamento.</p> <a href="https://drive.ifsp.edu.br/s/0DzFe7hSLOwPXRC#page=166" target="_blank">Mais
                                informações</a> </details> </li> <li> <details> <summary>Controle e Automação de Processos (ITPCOAP)</summary> <p> O componente curricular aborda a teoria de sistemas de controle e a utilização de
                                tecnologias e
                                equipamentos para controle e automação de processos industriais.</p> <a href="https://drive.ifsp.edu.br/s/0DzFe7hSLOwPXRC#page=164" target="_blank">Mais
                                informações</a> </details> </li> <li> <details> <summary>Máquinas de Fluxo (ITPMAFL)</summary> <p> O componente curricular aborda as principais características, e os sistemas de
                                operação, de
                                máquinas de fluxo, tais como bombas centrífugas, turbinas hidráulicas, entre outros..
</p> <a href="https://drive.ifsp.edu.br/s/0DzFe7hSLOwPXRC#page=204" target="_blank">Mais
                                informações</a> </details> </li> <li> <details> <summary>Sistemas Hidráulicos e Pneumáticos (ITPSHPN)</summary> <p> O componente curricular aborda os conceitos necessários para o projeto, controle
                                ambiental e
                                dimensionamento e segurança de sistemas hidráulicos e pneumáticos.</p> <a href="https://drive.ifsp.edu.br/s/0DzFe7hSLOwPXRC#page=190" target="_blank">Mais
                                informações</a> </details> </li> <li> <details> <summary>Robótica Industrial (ITPROBI)</summary> <p> O componente curricular aborda os diferentes tipos de robôs, seus componentes e
                                programação.</p> <a href="https://drive.ifsp.edu.br/s/0DzFe7hSLOwPXRC#page=218" target="_blank">Mais
                                informações</a> </details> </li> </ul> </details> </div> </div> <div id="equipamentos"> <h2>Equipamentos</h2> <div class="conteudoEquipamentos"> <div class="opcoes"> <button id="bcp" onclick="bcp()">Bancadas de Circuitos Pneumáticos</button> <button id="bch" onclick="bch()">Bancada de Circuitos Hidráulicos</button> <button id="bmf" onclick="bmf()">Bancada de Mecânica dos Fluidos</button> </div> <div class="container"> <div class="imgEquipamento"> <div class="slides"> <input type="radio" name="radio" id="radio1" checked> <input type="radio" name="radio" id="radio2"> <input type="radio" name="radio" id="radio3"> <div class="slidBCP"> <div class="slid first"> <img src="bancadaCP/2A.jpeg" alt=""> </div> <div class="slid"> <img src="bancadaCP/2B.jpeg" alt=""> </div> <div class="slid"> <img src="bancadaCP/2C.jpeg" alt=""> </div> </div> <div class="slidBCH" style="display: none;"> <div class="slid first"> <img src="bancadaCH/3A.jpeg" alt=""> </div> <div class="slid"> <img src="bancadaCH/3B.jpeg" alt=""> </div> <div class="slid"> <img src="bancadaCH/3C.jpeg" alt=""> </div> </div> <div class="slidBMF" style="display: none;"> <div class="slid first"> <img src="bancadaMF/4A.jpeg" alt=""> </div> <div class="slid"> <img src="bancadaMF/4B.jpeg" alt=""> </div> <div class="slid"> <img src="bancadaMF/4C.jpeg" alt=""> </div> </div> </div> <div class="navigation"> <label class="bar" for="radio1"></label> <label class="bar" for="radio2"></label> <label class="bar" for="radio3"></label> </div> </div> <div class="infoBCP"> <h2>Bancadas de Circuitos Pneumáticos</h2> <p> O PHI Lab conta com 3 bancadas duplas para montagem circuitos pneumáticos e eletropneumáticos,
                        as
                        quais podem proporcionar montagens de experimentos para até 6 grupos simultaneamente. Cada
                        bancada
                        conta com um gaveteiro contendo uma série de componentes pneumáticos e eletropneumáticos, de
                        modo a
                        mantê-los organizados e corretamente armazenados.</p> </div> <div class="infoBCH" style="display: none;"> <h2>Bancada de Circuitos Hidráulicos</h2> <p> O PHI Lab conta com 1 bancada dupla para montagem circuitos hidráulicos e eletrohidráulicos,
                        bancada esta que pode proporcionar montagens de experimentos para até 2 grupos simultaneamente.
                        A
                        bancada conta com dois gaveteiros contendo uma série de componentes hidráulicos e
                        eletrohidráulicos,
                        de modo a mantê-los organizados e corretamente armazenados.</p> </div> <div class="infoBMF" style="display: none;"> <h2>Bancada de Mecânica dos Fluidos</h2> <p> O PHI Lab conta com 1 bancada dupla para montagem de experimentos de mecânicas dos fluidos e
                        máquinas de fluxo, bancada esta que pode proporcionar montagens de experimentos para até 2
                        grupos
                        simultaneamente. A bancada conta com aparatos que podem proporcionar, entre outros experimentos,
                        o
                        número de Reynolds, perda de carga distribuída, perda de carga localizada, medição de velocidade
                        de
                        escoamento através de Medidor Venturi e associação de bombas centrífugas.</p> </div> </div> </div> </div> <footer> <div class="fabrica"> <img src="fundos/fabrica.png" alt=""> </div> <div class="if"> <img src="fundos/logo-if.png" alt=""> </div> </footer>  </body> </html>`;
}, "/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/pages/index.astro", void 0);

const $$file = "/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
