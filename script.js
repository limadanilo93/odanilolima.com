/* function init() {
const hamburger = document.querySelector(".menu");
  const hamburgerLines = document.querySelectorAll(".menu line");
  const profilePic = document.querySelectorAll('.profilepic')
  const navOpen = document.querySelector(".sidebar-open");
  const bottom = document.querySelector(".bottom");
  const sidebar = document.querySelector(".sidebar");
  const sidebarCollapsed = document.querySelector(".sidebar-collapsed");
  const botaoEmail = document.querySelector(".botao-Email");
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

  sidebar.addEventListener("click", () => {
    tl.reversed() ? tl.play() : tl.reverse();
    
  });
  
}
init(); */