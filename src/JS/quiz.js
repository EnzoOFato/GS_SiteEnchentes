const perguntas = [
  { texto: "1. Como as emchentes começam?", 
    opcoes: ["Com um dia de sol", "com um dia de chuva forte", "Forte ventania ao longo de um mês", "Ano com neve"], 
    correta: 1 },
  { texto: "2. Onde é comum ocorrer enchentes?", 
    opcoes: ["Desertos", "Montanhas", "Áreas urbanas", "Picos nevados"], 
    correta: 2 },
  { texto: "3. Qual atitude ajuda a evitar enchentes?", 
    opcoes: ["Desmatar", "Construir sobre rios", "Plantar árvores", "Jogar lixo na rua"], 
    correta: 2 },
  { texto: "4. O que entope bueiros?", 
    opcoes: ["Chuva limpa", "Neve", "Lixo", "Areia"], 
    correta: 2 },
  { texto: "5. Enchentes podem causar:", 
    opcoes: ["Fome", "Calor", "Alagamentos", "Neve"], 
    correta: 2 },
  { texto: "6. Qual órgão pode alertar sobre enchentes?", 
    opcoes: ["Correios", "Defesa Civil", "Banco Central", "Escola"], 
    correta: 1 },
  { texto: "7. O que é uma enchente?", 
    opcoes: ["Terremoto", "Falta de água", "Excesso de água", "Deserto"], 
    correta: 2 },
  { texto: "8. Jogar lixo na rua contribui para:", 
    opcoes: ["Evitar enchentes", "Causar enchentes", "Secar rios", "Aumentar árvores"], 
    correta: 1 },
  { texto: "9. Qual estação tem mais enchentes?", 
    opcoes: ["Verão", "Inverno", "Outono", "Primavera"], 
    correta: 0 },
  { texto: "10. Enchentes podem prejudicar:", 
    opcoes: ["Ruas e casas", "A lua", "Internet apenas", "Montanhas"], 
    correta: 0 }
];

let atual = 0;
let acertos = 0;

const pergunta = document.getElementById("pergunta");
const opcoes = document.getElementById("opcoes");
const resultado = document.getElementById("resultado");

function mostrarPergunta() {
  const p = perguntas[atual];
  pergunta.textContent = p.texto;
  opcoes.innerHTML = "";

  p.opcoes.forEach((texto, i) => {
    const botao = document.createElement("button");
    botao.textContent = texto;
    botao.onclick = () => {
      if (i === p.correta) acertos++;
      atual++;
      if (atual < perguntas.length) {
        mostrarPergunta();
      } else {
        pergunta.textContent = "";
        opcoes.innerHTML = "";
        resultado.textContent = `Você acertou ${acertos} de ${perguntas.length} perguntas.`;
      }
    };
    opcoes.appendChild(botao);
  });
}

mostrarPergunta();