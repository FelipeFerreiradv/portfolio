let navbar = document.querySelector('header');
let navbar_links = document.querySelectorAll('header a');
let navbar_logo = document.querySelector('header p');

window.addEventListener('scroll', () => {
    let currentScroll = window.scrollY;
    let lastScrollTop = window.lastScrollTop || 0;

    // Hide/show navbar
    navbar.style.transform = currentScroll > lastScrollTop ? 'translateY(-100px)' : 'translateY(0)';
    window.lastScrollTop = currentScroll; // Update last scroll
});

//       CURSOR POINTER
// altera o cursor
const cursor = document.querySelector('[data-cursor]'); // seleciona os elementos
const cursor_lazy = document.querySelector('[data-cursor-lazy]');

// atualiza a posição do cursor
window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursor.style.top = `${posY}px`; 
    cursor.style.left = `${posX}px`;

    cursor_lazy.style.top = `${posY}px`;
    cursor_lazy.style.left = `${posX}px`;
  });
  
  // Atualize a posição do cursor
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

// change navbar color
const elementsScrollEfects = document.querySelectorAll('.footer');
const navbarLinks = document.querySelectorAll('header a'); // Substitua pelo seletor correto para seus links de navegação

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        navbarLinks.forEach(link => {
            link.classList.toggle('navbar-black', entry.isIntersecting);
        });
        navbar_logo.classList.toggle('navbar-black', entry.isIntersecting);
    });
});

// Observa cada elemento de footer
elementsScrollEfects.forEach(el => myObserver.observe(el));

// mouseenter
const a_Links = document.querySelectorAll('a'); // Ajuste o seletor se necessário
// console.log(a_Links)// Supondo que você tenha um elemento para o cursor

a_Links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    cursor.innerHTML = 'Link';
    cursor.style.width = '150px';
    cursor.style.height = '47px';
    cursor.style.borderRadius = '50px';
  });

  link.addEventListener('mouseleave', () => {
    cursor.innerHTML = '';
    cursor.style.width = '30px';
    cursor.style.height = '30px';
    cursor.style.borderRadius = '50%';
  });
});

// Itera sobre os elementos de footer
const footer = document.querySelectorAll('.footer');

footer.forEach(footer => {
footer.addEventListener('mouseenter', () => {
  let navBar_mobile_links = document.querySelectorAll('nav.nav-mobile div a');

  cursor.style.backgroundColor = 'black';
  cursor.style.color = 'white';
  cursor_lazy.style.border = '2px solid #000000';

  // if(navBar_mobile_links.style.display === 'block'){
  //   navBar_mobile_links.style.color = 'black'; // Muda a cor do logo
  // }
});

footer.addEventListener('mouseleave', () => {
  cursor.style.backgroundColor = 'white';
  cursor.style.color = 'black';
  cursor_lazy.style.border = '2px solid #ffffff';

  navbar_links.forEach(link => link.style.color = ''); // Reseta a cor dos links do navbar
  navbar_logo.style.color = ''; // Reseta a cor do logo
});
});

// Timer
let timer_footer = document.querySelector('.div-footer-timer p');
let timer = 0;
setInterval(() => {
  timer_footer.innerHTML = (timer++).toFixed(2).replace('.', ':');
}, 1000);

// navbar mobile  
function openNavBar(){
let navBar_mobile = document.querySelector('header .nav-mobile');

if(navBar_mobile.style.display != 'flex'){
  navBar_mobile.style.display = 'flex';
} else{
  navBar_mobile.style.display = 'none';
}  

  // Altera o texto do botão
  document.querySelector('.div-mobile-button p').innerHTML = 
  (navBar_mobile.style.display === 'flex') ? 'Close' : 'Menu';
}

// video toca automaticamente
// Reproduz o vídeo automaticamente ao carregar a página sem som
window.addEventListener("load", () => {
    let video = document.querySelector("video");

    if (video) {
        video.muted = true; // Silencia o vídeo
        video.play().catch(error => {
            console.warn("Reprodução automática bloqueada. Usuário precisa interagir com a página.");
        });
        video.loop = true;
    }
});
