// =========================================================
// Maria Aparecida Constantino — Psicóloga
// Interações: menu mobile, header ao rolar, revelação suave
// de seções e envio do formulário de contato.
// =========================================================

document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".site-header");
  var navToggle = document.getElementById("navToggle");

  // Header muda de aparência ao rolar a página
  function onScroll() {
    if (window.scrollY > 12) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Menu mobile
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      header.classList.toggle("nav-open");
    });

    document.querySelectorAll(".nav a").forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("nav-open");
      });
    });
  }

  // Revelação suave dos blocos ao entrar na tela
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // Formulário de contato
  // OBS. para o(a) administrador(a) do site: este formulário usa o
  // serviço gratuito Formspree para enviar as mensagens por e-mail,
  // já que o GitHub Pages não processa formulários no servidor.
  // Veja o passo a passo de configuração no guia enviado junto do site.
  var form = document.getElementById("contactForm");
  var note = document.getElementById("formNote");

  if (form) {
    form.addEventListener("submit", function (event) {
      var action = form.getAttribute("action") || "";

      // Enquanto o Formspree não for configurado, evita um envio
      // silencioso que pareceria funcionar sem realmente chegar a lugar nenhum.
      if (action.indexOf("SEU_ID_AQUI") !== -1) {
        event.preventDefault();
        note.textContent =
          "Formulário ainda não configurado. Veja o guia de configuração do Formspree.";
        return;
      }

      event.preventDefault();
      note.textContent = "Enviando...";

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
        .then(function (response) {
          if (response.ok) {
            note.textContent = "Mensagem enviada! Retornarei o contato em breve.";
            form.reset();
          } else {
            note.textContent =
              "Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.";
          }
        })
        .catch(function () {
          note.textContent =
            "Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.";
        });
    });
  }
});
