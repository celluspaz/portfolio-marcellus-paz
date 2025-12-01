document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  if (form && feedback) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
      const assunto = form.assunto.value.trim();
      const mensagem = form.mensagem.value.trim();

      if (!nome || !email || !assunto || !mensagem) {
        feedback.textContent = "Por favor, preencha todos os campos.";
        feedback.classList.remove("form__feedback--success");
        feedback.classList.add("form__feedback--error");
        return;
      }

      feedback.textContent =
        "Mensagem enviada! Em breve entro em contato com você (simulação no ambiente estático).";
      feedback.classList.remove("form__feedback--error");
      feedback.classList.add("form__feedback--success");

      form.reset();
    });
  }
});


