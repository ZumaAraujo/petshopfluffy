document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formAgendamento");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      alert("Agendamento realizado com sucesso!");
    });
  }
});