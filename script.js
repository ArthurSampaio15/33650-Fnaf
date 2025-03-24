const botao = document.getElementById("meuBotao");

botao.addEventListener("mouseover", () => {
  botao.style.backgroundColor = "darkblue";
  botao.style.color = "white";
});

botao.addEventListener("mouseout", () => {
  botao.style.backgroundColor = "lightblue";
  botao.style.color = "black";
});
