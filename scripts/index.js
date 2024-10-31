// SCROLL CONTAINER
let titleScroll = document.querySelector('.div-main-scroll-auto');
let navbar = document.querySelector('header');
let navbar_links = document.querySelectorAll('header a');
let navbar_logo = document.querySelector('header p');

// Change scroll direction
const changeScroll = () => {
    titleScroll.style.animation = window.scrollY > 50 ? 'scrollText2 40s infinite linear' : 'scrollText 40s infinite linear';
    navbar.classList.toggle('blur-navbar', window.scrollY > 1500);
};

window.addEventListener('scroll', () => {
    changeScroll();
    
    let currentScroll = window.scrollY;
    let lastScrollTop = window.lastScrollTop || 0;

    // Hide/show navbar
    navbar.style.transform = currentScroll > lastScrollTop ? 'translateY(-100px)' : 'translateY(0)';
    window.lastScrollTop = currentScroll; // Update last scroll
});

// Infinite Scroll
document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.querySelector("main");

    const infiniteScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
            const clone = mainContent.cloneNode(true);
            document.body.appendChild(clone);
        }
    };

    window.addEventListener("scroll", infiniteScroll);
});

// Scroll effects
const elementsScrollEfects = document.querySelectorAll('.hidden');
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting);
    });
});

elementsScrollEfects.forEach(el => myObserver.observe(el));

// change theme
// Change theme
const checkboxChange = document.querySelector('.checkbox');
checkboxChange.addEventListener('change', () => {
    document.body.classList.toggle('sun');
    navbar_links.forEach(link => link.classList.toggle('sun-p'));
    navbar_logo.classList.toggle('sun-p');
});

//       CURSOR POINTER
// altera o cursor
const cursor = document.querySelector('[data-cursor]'); // seleciona os elementos
const cursor_lazy = document.querySelector('[data-cursor-lazy]');
const cursor_images = document.querySelector('[data-div-projects-cursor]');
const cursor_images_src = document.querySelector('.div-projects-cursor img');

// atualiza a posição do cursor
window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursor.style.top = `${posY}px`; 
    cursor.style.left = `${posX}px`;

    cursor_lazy.style.top = `${posY}px`;
    cursor_lazy.style.left = `${posX}px`;

    cursor_images.style.top = `${posY}px`;
    cursor_images.style.left = `${posX}px`;
  });
  
  // Atualize a posição do cursor
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;

    cursor_images.style.top = `${e.pageY}px`;
    cursor_images.style.top = `${e.pageY}px`;
});

 // troca a cor do cursor para o elemento que passou por cima
// Detectar os elementos sobre os quais o cursor passa
const sections = document.querySelectorAll('.img-hover');
const footer = document.querySelectorAll('.footer');

sections.forEach(section => {
  section.addEventListener('mouseenter', (e) => {
    // Pega a cor de fundo da seção atual
    const backgroundColor = getComputedStyle(e.target).backgroundColor;
    
    // Muda a cor do cursor para a cor de fundo da seção
    cursor.style.backgroundColor = backgroundColor;
    
    // atualiza a imagem exxibida
    // Obtém o caminho da imagem do atributo data-image
    const imageSrc = e.target.getAttribute('data-image');
    
    cursor_images_src.src = imageSrc;

    if(cursor_images_src.src === 'images/blog-image.png'){
      cursor_images.style.background = 'black';
    }
    
    // mostra a imagem da div cursor
    cursor_images.style.opacity= '1';
    
    // Verifica se a section tem um atributo data-bgcolor
    const sectionBgColor = e.target.getAttribute('data-bgcolor');
    
    // Se existir data-bgcolor, altera o fundo da div com a imagem
    if (sectionBgColor) {
      cursor_images.style.backgroundColor = sectionBgColor;
    }
  });
  
  section.addEventListener('mouseleave', () => {
    // Volta a cor do cursor para a cor padrão (ex: preto) quando sai da seção
    cursor.style.backgroundColor = 'white';
    
    // mostra a imagem da div cursor
    cursor_images.style.opacity= '0';
  });
});

  const a_Links = document.querySelectorAll('a'); // Ajuste o seletor se necessário
  console.log(a_Links)// Supondo que você tenha um elemento para o cursor

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
footer.forEach(footer => {
  footer.addEventListener('mouseenter', () => {
    console.log('bxjdbs')
    let navBar_mobile_links = document.querySelectorAll('nav.nav-mobile div a');

    cursor.style.backgroundColor = 'black';
    cursor.style.color = 'white';
    cursor_lazy.style.border = '2px solid #000000';

    navbar_links.forEach(link => link.style.color = 'black'); // Muda a cor de todos os links do navbar
    navbar_logo.style.color = 'black'; // Muda a cor do logo

    if(navBar_mobile_links.style.opacity === '1'){
      navBar_mobile_links.style.color = 'black'; // Muda a cor do logo
    }
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
let timer_footer = document.querySelector('.div-footer-timer');
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

  // PROJECT OPEN
// Project open
document.addEventListener('DOMContentLoaded', () => {
  let projectSection = document.querySelector('.section-task-automation');
  document.querySelectorAll('.a-button')[0]?.addEventListener('click', () => {
    projectSection.style.display = 'flex';
  });
});

// Video control
const videoBackend = document.querySelector('.div-video video');
const [svgPlayVideo, svgPlayVideoSecond] = document.querySelectorAll('.div-video div svg');

const toggleVideo = () => {
  const isPlaying = !videoBackend.paused;
  if (isPlaying) {
    videoBackend.pause();
    svgPlayVideo.style.display = 'block';
    svgPlayVideoSecond.style.display = 'none';
  } else {
    videoBackend.play();
    svgPlayVideo.style.display = 'none';
    svgPlayVideoSecond.style.display = 'block';
  }
};

svgPlayVideo.addEventListener('click', toggleVideo);
svgPlayVideoSecond.addEventListener('click', toggleVideo);

// closer
let projectSection = document.querySelector('.section-task-automation');
const divCloser = document.querySelector('.div-svg-arrow');

divCloser.addEventListener('click', () =>{
  projectSection.style.display = 'none';
});