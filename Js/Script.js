// Atualizar a idade
function anos() {
    const anoNascimento = 1967;
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;
    window.localStorage.setItem('idade', idade);
}
anos();

// Scroll Behavior
const menulinks = document.querySelectorAll('.navbarMenu a[href^="#"]');

menulinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const id = this.getAttribute("href");
        const offsetTop = document.querySelector(id).offsetTop - 140;
        window.scroll({ top: offsetTop, behavior: "smooth" });
    });
});

// Menu Hambúrguer
function abrirfechar() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('ativo');
}


// Mostrar/Ocultar mensagens
function toggleMensagem(numero) {
    const elemento = document.querySelector(`.mensagem${numero}`);
    elemento.style.display = elemento.style.display === 'block' ? 'none' : 'block';
}

// Funções específicas para facilitar chamadas via onclick
for (let i = 1; i <= 10; i++) {
    window[`esconde${i}`] = () => toggleMensagem(i);
}

// Mostrar e fechar mensagens em popup
function mostrarMensagem(id) {
    const mensagem = document.querySelector(`.${id}`);
    const popupContainer = document.getElementById("popup-container");
    const popupContent = document.getElementById("popup-content");

    if (mensagem) {
        popupContent.innerHTML = mensagem.innerHTML;
        popupContainer.style.display = "flex";
    }
}

function fecharPopup(event) {
    if (event.target.id === "popup-container" || event.target.classList.contains("fechar-popup")) {
        document.getElementById("popup-container").style.display = "none";
        document.getElementById("popup-content").innerHTML = "";
    }
}

// SLIDES
// Primerio
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides1(n) {
  showSlides(slideIndex += n);
}

function currentSlide1(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  
}

// Segundo
let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides2");
    if (n > slides.length) {slideIndex2 = 1}    
    if (n < 1) {slideIndex2 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    slides[slideIndex2-1].style.display = "block"; 
    
}

// Terceiro
let slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides3");
    if (n > slides.length) {slideIndex3 = 1}    
    if (n < 1) {slideIndex3 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    slides[slideIndex3-1].style.display = "block"; 
    
}

// Quarto
let slideIndex4 = 1;
showSlides4(slideIndex4);

function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}

function currentSlide4(n) {
  showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides4");
    if (n > slides.length) {slideIndex4 = 1}    
    if (n < 1) {slideIndex4 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    slides[slideIndex4-1].style.display = "block"; 
    
}

// Quinto
let slideIndex5 = 1;
showSlides5(slideIndex5);

function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}

function currentSlide5(n) {
  showSlides5(slideIndex5 = n);
}

function showSlides5(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides5");
    if (n > slides.length) {slideIndex5 = 1}    
    if (n < 1) {slideIndex5 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    slides[slideIndex5-1].style.display = "block"; 
    
}

// Sexto
let slideIndex6 = 1;
showSlides6(slideIndex6);

function plusSlides6(n) {
  showSlides6(slideIndex6 += n);
}

function currentSlide6(n) {
  showSlides6(slideIndex6 = n);
}

function showSlides6(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides6");
    if (n > slides.length) {slideIndex6 = 1}    
    if (n < 1) {slideIndex6 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    slides[slideIndex6-1].style.display = "block"; 
}

// Setimo
let slideIndex7 = 1;
showSlides7(slideIndex7);

function plusSlides7(n) {
  showSlides7(slideIndex7 += n);
}

function currentSlide7(n) {
  showSlides7(slideIndex7 = n);
}

function showSlides7(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides7");
    if (n > slides.length) {slideIndex7 = 1}    
    if (n < 1) {slideIndex7 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    slides[slideIndex7-1].style.display = "block"; 
    
}

// Oitavo
let slideIndex8 = 1;
showSlides8(slideIndex8);

function plusSlides8(n) {
  showSlides8(slideIndex8 += n);
}

function currentSlide8(n) {
  showSlides8(slideIndex8 = n);
}

function showSlides8(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides8");
    if (n > slides.length) {slideIndex8 = 1}    
    if (n < 1) {slideIndex8 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    slides[slideIndex8-1].style.display = "block"; 
    
}

// Nono
let slideIndex9 = 1;
showSlides9(slideIndex9);

function plusSlides9(n) {
  showSlides9(slideIndex9 += n);
}

function currentSlide9(n) {
  showSlides9(slideIndex9 = n);
}

function showSlides9(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides9");
    if (n > slides.length) {slideIndex9 = 1}    
    if (n < 1) {slideIndex9 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    slides[slideIndex9-1].style.display = "block"; 
    
}

// Décimo
let slideIndex10 = 1;
showSlides10(slideIndex10);

function plusSlides10(n) {
  showSlides10(slideIndex10 += n);
}

function currentSlide10(n) {
  showSlides10(slideIndex10 = n);
}

function showSlides10(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides10");
    if (n > slides.length) {slideIndex10 = 1}    
    if (n < 1) {slideIndex10 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    slides[slideIndex10-1].style.display = "block"; 
}

// Décimo Primeiro
let slideIndex11 = 1;
showSlides11(slideIndex11);

function plusSlides11(n) {
  showSlides11(slideIndex11 += n);
}

function currentSlide11(n) {
  showSlides11(slideIndex11 = n);
}

function showSlides11(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides11"); // Corrigido aqui
    if (n > slides.length) {slideIndex11 = 1}    
    if (n < 1) {slideIndex11 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slides[slideIndex11-1].style.display = "block"; 
}

// Décimo Segundo
let slideIndex12 = 1;
showSlides12(slideIndex12);

function plusSlides12(n) {
  showSlides12(slideIndex12 += n);
}

function currentSlide12(n) {
  showSlides12(slideIndex12 = n);
}

function showSlides12(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides12"); // Corrigido aqui
    if (n > slides.length) {slideIndex12 = 1}    
    if (n < 1) {slideIndex12 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slides[slideIndex12-1].style.display = "block"; 
}

// Lightbox - abrir e fechar imagens
function fecharImagem() {
    const lightBox = document.querySelector('.lightBox');
    const slideshows = document.querySelectorAll('[class^="slideshow-container"]');
    if (lightBox.style.display === 'block') {
        lightBox.style.display = 'none';
        slideshows.forEach(slideshow => slideshow.style.display = 'none');
    } else {
        lightBox.style.display = 'block';
    }
}

document.querySelector('.lightBox').addEventListener('click', function (e) {
    const caixaImagem = document.querySelector('.apresentacaoImg');
    if (!caixaImagem.contains(e.target)) {
        fecharImagem();
    }
});

// jQuery - abrir carrossel
$(function () {
    for (let i = 1; i <= 12; i++) {
        $(`.boxClick${i}`).click(function () {
            const lightBox = document.querySelector('.lightBox');
            const carrossel = document.querySelector(`.slideshow-container${i}`);

            if (lightBox.style.display === 'block' && carrossel.style.display === 'block') {
                lightBox.style.display = 'none';
                carrossel.style.display = 'none';
            } else {
                lightBox.style.display = 'block';
                carrossel.style.display = 'block';
            }
        });
    }
});