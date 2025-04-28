class ReceberDados {
  constructor(nome, materia, inicio, fim, resumo) {
      this.nome = nome;
      this.materia = materia;
      this.inicio = inicio;
      this.fim = fim;
      this.resumo = resumo;
  }

  mostrarDados() {
      document.getElementById('card').style.display = 'block';
      document.getElementById('card-header').innerText = this.nome;
      document.getElementById('card-content').innerHTML = `${this.materia} <br> Início: ${this.inicio} <br> Fim: ${this.fim}`;
      document.getElementById('card-tag').innerText = this.resumo;
  }
}

function ReceberFormulario(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const materia = document.getElementById('materia').value;
  const inicio = document.getElementById('inicio').value;
  const fim = document.getElementById('fim').value;
  const resumo = document.getElementById('resumo').value;

  const dados = new ReceberDados(nome, materia, inicio, fim, resumo);
  dados.mostrarDados();

  adicionarAtividade(nome, materia, inicio, fim, resumo);
  indicarChegou(fim);
}

function adicionarAtividade(nome, materia, inicio, fim, resumo) {
  const lista = document.getElementById('atividadesLista');

  const novaAtividade = document.createElement('div');
  novaAtividade.className = 'atividade-item';
  novaAtividade.innerHTML = `
      <strong>${nome}</strong><br>
      ${materia} - ${inicio} até ${fim}<br>
      <small>${resumo}</small>
      <hr>
  `;

  
  lista.prepend(novaAtividade);
}

function indicarChegou(fim) {
  const dataFim = new Date(fim);
  if (isNaN(dataFim.getTime())) return;

  const agora = new Date();
  if (agora > dataFim) {
      alert("O evento já terminou!");
  }
}

let intervalo = setInterval(() => {
  
}, 30 * 1000);
