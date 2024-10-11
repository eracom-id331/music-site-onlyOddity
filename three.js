document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi réel du formulaire
    document.getElementById("confirmation-message").style.display = "block"; // Afficher le message de confirmation
    this.reset(); // Réinitialiser le formulaire
  });
