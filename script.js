function showPage(pageId){

  let pages =
    document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  document
    .getElementById(pageId)
    .classList.add("active");

}

/* FORMULARIO */

const form =
  document.getElementById("appointmentForm");

const successMessage =
  document.getElementById("successMessage");

form.addEventListener("submit", function(e){

  e.preventDefault();

  successMessage.innerHTML = `
  
    Gracias por confiar en A&A Baby Care:)<br><br>
    
    Hemos recibido tu solicitud correctamente.<br>
    
    Muy pronto te llamaremos para confirmar
    la fecha y hora de tu cita médica.
    Cualquier duda contáctanos!
  
  `;

  successMessage.style.display = "block";

  form.reset();

});