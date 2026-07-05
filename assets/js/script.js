/*=========================================================
 Maria Aparecida Constantino
 script.js
 Parte 1
=========================================================*/

"use strict";

/*=========================================================
UTILITÁRIOS
=========================================================*/

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => document.querySelectorAll(selector);

const header = $("#header");

const menuLinks = $$(".menu a");



/*=========================================================
DEBOUNCE
=========================================================*/

function debounce(callback, delay = 120){

    let timeout;

    return (...args)=>{

        clearTimeout(timeout);

        timeout = setTimeout(()=>{

            callback(...args);

        },delay);

    };

}



/*=========================================================
THROTTLE
=========================================================*/

function throttle(callback, wait = 100){

    let waiting = false;

    return (...args)=>{

        if(waiting) return;

        callback(...args);

        waiting = true;

        setTimeout(()=>{

            waiting = false;

        },wait);

    };

}



/*=========================================================
HEADER DINÂMICO
=========================================================*/

function updateHeader(){

    if(window.scrollY > 40){

        header.classList.add("header-scroll");

    }

    else{

        header.classList.remove("header-scroll");

    }

}

window.addEventListener(

    "scroll",

    throttle(updateHeader,60)

);

updateHeader();



/*=========================================================
SMOOTH SCROLL
=========================================================*/

document

.querySelectorAll('a[href^="#"]')

.forEach(link=>{

    link.addEventListener("click",(event)=>{

        const href = link.getAttribute("href");

        if(href==="#") return;

        const target = document.querySelector(href);

        if(!target) return;

        event.preventDefault();

        window.scrollTo({

            top:target.offsetTop-70,

            behavior:"smooth"

        });

    });

});



/*=========================================================
SCROLL SPY
=========================================================*/

const sections = $$("section");

function updateMenu(){

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop-150;

        const height = section.offsetHeight;

        if(scrollY >= top && scrollY < top+height){

            current = section.getAttribute("id");

        }

    });

    menuLinks.forEach(link=>{

        link.classList.remove("active");

        if(

            link.getAttribute("href")

            ===

            `#${current}`

        ){

            link.classList.add("active");

        }

    });

}

window.addEventListener(

    "scroll",

    throttle(updateMenu,80)

);

updateMenu();



/*=========================================================
MENU MOBILE
Preparado para futura expansão
=========================================================*/

const mobileButton = $(".menu-toggle");

const menu = $(".menu");

if(mobileButton){

    mobileButton.addEventListener("click",()=>{

        menu.classList.toggle("open");

        mobileButton.classList.toggle("open");

    });

}



/*=========================================================
FECHAR MENU AO CLICAR
=========================================================*/

menuLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        if(menu){

            menu.classList.remove("open");

        }

        if(mobileButton){

            mobileButton.classList.remove("open");

        }

    });

});



/*=========================================================
SCROLL TOP (estrutura)
Será concluído na Parte 2
=========================================================*/

let scrollButton = null;



/*=========================================================
EVENTOS GLOBAIS
=========================================================*/

window.addEventListener(

    "resize",

    debounce(()=>{

        updateHeader();

        updateMenu();

    })

);



/*=========================================================
DOMContentLoaded
=========================================================*/

document.addEventListener(

    "DOMContentLoaded",

    ()=>{

        updateHeader();

        updateMenu();

        console.log(

            "%cMaria Aparecida Constantino",

            "font-size:18px;color:#6F8669;font-weight:bold;"

        );

    }

);



/*=========================================================
SCRIPT.JS
PARTE 2
=========================================================*/


/*=========================================================
REVEAL
=========================================================*/

const revealElements = document.querySelectorAll(

".card, .sobre-card, .abordagem-grid article, .cta-box, .contato-formulario"

);

revealElements.forEach(el=>{

    el.classList.add("reveal");

});

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},

{

threshold:.18

}

);

revealElements.forEach(el=>{

observer.observe(el);

});



/*=========================================================
FORMULÁRIO
=========================================================*/

const form = $("#contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

let valid=true;



const nome=$("#nome");

const email=$("#email");

const telefone=$("#telefone");

const mensagem=$("#mensagem");



[nome,email,telefone,mensagem]

.forEach(field=>{

field.style.borderColor="";

});



if(nome.value.trim().length<3){

nome.style.borderColor="#d35b5b";

valid=false;

}



const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailRegex.test(email.value)){

email.style.borderColor="#d35b5b";

valid=false;

}



if(telefone.value.replace(/\D/g,"").length<10){

telefone.style.borderColor="#d35b5b";

valid=false;

}



if(mensagem.value.trim().length<10){

mensagem.style.borderColor="#d35b5b";

valid=false;

}



if(!valid){

alert("Por favor, revise os campos do formulário.");

return;

}



alert(

"Sua mensagem foi preparada. Em breve ela poderá ser integrada a um serviço de envio."

);

form.reset();

});

}



/*=========================================================
MÁSCARA TELEFONE
=========================================================*/

const telefone=$("#telefone");

if(telefone){

telefone.addEventListener("input",(e)=>{

let value=e.target.value

.replace(/\D/g,"")

.substring(0,11);

value=value.replace(

/(\d{2})(\d)/,

"($1) $2"

);

value=value.replace(

/(\d{5})(\d)/,

"$1-$2"

);

e.target.value=value;

});

}



/*=========================================================
BOTÃO WHATSAPP
=========================================================*/

const whatsapp=$(".whatsapp-float");

if(whatsapp){

whatsapp.addEventListener("click",(e)=>{

e.preventDefault();

window.open(

"https://wa.me/5535992709819",

"_blank"

);

});

}



/*=========================================================
BOTÃO VOLTAR AO TOPO
=========================================================*/

scrollButton=document.createElement("button");

scrollButton.className="scroll-top";

scrollButton.innerHTML="↑";

document.body.appendChild(scrollButton);

scrollButton.style.display="none";

window.addEventListener("scroll",()=>{

if(window.scrollY>600){

scrollButton.style.display="flex";

}else{

scrollButton.style.display="none";

}

});

scrollButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});



/*=========================================================
LAZY LOADING
=========================================================*/

document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";

img.decoding="async";

});



/*=========================================================
PERFORMANCE
=========================================================*/

window.addEventListener(

"load",

()=>{

document.body.classList.add("loaded");

}

);



/*=========================================================
FINAL
=========================================================*/

console.log(

"%cRev2 carregada com sucesso",

"color:#6F8669;font-weight:bold;font-size:14px;"

);
