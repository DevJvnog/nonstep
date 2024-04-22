
var currentImage = 1; // Inicializa a imagem atual

function changeImage(imageNumber) {
  // Altera a imagem principal com base no número recebido
  var image = document.querySelector('.imageContainer');
  image.src = './image' + imageNumber + '.png';

  // Formata o aside com base no número recebido
  var infoHeading = document.getElementById('infoHeading');
  var infoText = document.getElementById('infoText');
  switch(imageNumber) {
    case 1:
      infoHeading.textContent = "Informações da Imagem 1";
      infoText.textContent = "Informações sobre a primeira imagem.";
      break;
    case 2:
      infoHeading.textContent = "Informações da Imagem 2";
      infoText.textContent = "Informações sobre a segunda imagem.";
      break;
    case 3:
      infoHeading.textContent = "Informações da Imagem 3";
      infoText.textContent = "Informações sobre a terceira imagem.";
      break;
    case 4:
      infoHeading.textContent = "Informações da Imagem 4";
      infoText.textContent = "Informações sobre a quarta imagem.";
      break;
    case 5:
      infoHeading.textContent = "Informações da Imagem 5";
      infoText.textContent = "Informações sobre a quinta imagem.";
      break;
    default:
      infoHeading.textContent = "Informações";
      infoText.textContent = "Clique em um círculo para ver mais informações.";
  }

  // Remove a classe 'selected' de todos os itens da lista
  var circles = document.querySelectorAll('.firstList img');
  circles.forEach(circle => circle.classList.remove('selected'));
  // Adiciona a classe 'selected' ao item clicado
  circles[imageNumber - 1].classList.add('selected');

  currentImage = imageNumber; // Atualiza a imagem atual
}

// Função para atualizar a imagem a cada 10 segundos
setInterval(function() {
  currentImage = currentImage % 5 + 1; // Calcula o próximo número de imagem
  changeImage(currentImage); // Altera para a próxima imagem
}, 5000); // 10 segundos em milissegundos


//Função para fechar os botões flutuantes
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("closeButton").addEventListener("click", function() {
      var floatingButtons = document.querySelectorAll(".float");
      for (var i = 0; i < floatingButtons.length; i++) {
          floatingButtons[i].style.display = "none";
      }
      document.getElementById("closeButton").style.display = "none";
  });
});