function init() {
  const hamburger = document.querySelector(".hamburguer");
  const cabecalho = document.querySelectorAll('.cabecalho')
  const navigation = document.querySelector(".collapsable");
  const options = document.querySelector(".options");
  const menu = document.querySelector(".sections__menu");
  const menuItens = document.querySelectorAll(".sections__iten");
  const mainContent = document.querySelector(".principal");
  const botaoEndereco = document.querySelector(".botao-Endereco");
  const botaoTelefone = document.querySelector(".botao-Celular");

  const tl = new TimelineMax({ paused: true, reversed: true });

  tl.to(navOpen, 0.5, { x: 0 })
    .fromTo(navOpen, 0.5, { opacity: 0, x: 10 }, { opacity: 1, x: 0 }, "-=0.1")
    
 
    .fromTo(
        hamburgerLines,
        0.2,
        { transform: 'scale(0.8)' },
        { transform: 'scale(1)'},
        "-=1"
      )
    .fromTo(
        sidebar,
        0.2,
        { width: '50px' },
        { width: '250px' },
        "-=1"
      )
      .fromTo(
        navOpen,
        0.2,
        { pointerEvents: 'none' },
        { pointerEvents: 'all' },
        "-=1"
      )
      .fromTo(
        sidebarCollapsed,
        0.2,
        { transform: 'translate(0, 0)', opacity: 1},
        { transform: 'translate(0,-100%)', opacity: 0},
        "-=1"
      )

  cabecalho.addEventListener("click", () => {
    tl.reversed() ? tl.play() : tl.reverse();
    
  });
  
}
init();