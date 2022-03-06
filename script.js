const hamburger = document.querySelector(".hamburguer");
const cabecalho = document.querySelector('.cabecalho');
const navigation = document.querySelector(".collapsable");
const options = document.querySelector(".options");
const menu = document.querySelector(".sections__menu");
const menuItens = document.querySelectorAll(".sections__iten");
const mainContent = document.querySelector(".principal");
const botaoEndereco = document.querySelector(".botao-Endereco");
const botaoTelefone = document.querySelector(".botao-Celular");
const tl = new TimelineMax({ paused: true, reversed: true });
function init() {

  if (window.innerWidth<640){
    tl.to(options, 0.5, { y: 0 })
    .fromTo(options, 0.2, { opacity: 0}, { opacity: 1}, "-=0.1")
    .fromTo(
      options,
      0.2,
      { display: 'none' },
      { display: 'flex' },
      "-=1"
    )

    .fromTo(
        options,
        0.2,
        { pointerEvents: 'none' },
        { pointerEvents: 'all' },
        "-=1"
    )

  cabecalho.addEventListener("click", () => {
    tl.reversed() ? tl.play() : tl.reverse();
    

  });


  }

 
}
function reappear(){

  if (window.innerWidth>768){
  options.style.setProperty("display", "flex");
  }

}
init();

screen.orientation.addEventListener('change',  reappear)
window.onresize = init;
window.onresize = reappear;
window.onresize = init;