


 // Função para alternar a visibilidade da caixa de notificações
 function toggleNotificationBox() {
    const box = document.getElementById("notification-box");
    if (box.style.display === "none" || box.style.display === "") {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  }


  function Notificacoes () {
    const tipo = document.getElementById("TipoDeNotificacao");
        if (tipo.style.display === "none" || tipo.style.display === "") {
            tipo.style.display = "block";
        }else {
            tipo.style.display = "none";
        }
  }


  // Dados que você quer preencher
const atividade = {
    titulo: "Envio de experiência 1 - até 30/04",
    descricao: "Sistemas distribuídos e mobile",
    inicio: "16/04/2025 às 00:00",
    tipo: "Atividade Dissertativa"
  };
  
  // Preenche os elementos do card
  document.getElementById('card-header').innerText = atividade.titulo;
  document.getElementById('card-content').innerHTML = `
    ${atividade.descricao}<br>
    Início: ${atividade.inicio}
  `;
  document.getElementById('card-tag').innerText = atividade.tipo;
  