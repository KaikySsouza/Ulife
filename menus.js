


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

  function EnviarNotif () {
    const enviar = document.getElementById("EnviarNotificacao");
        if (enviar.style.display === "none" || enviar.style.display === "") {
            enviar.style.display = "block";
        }else {
            enviar.style.display = "none";
        }
  }


  
  function CadastroNotif () {
    const cadastro = document.getElementById("CadastrarNotificacao");
        if (cadastro.style.display === "none" || cadastro.style.display === "") {
            cadastro.style.display = "block";
        }else {
            cadastro.style.display = "none";
        }
  }

