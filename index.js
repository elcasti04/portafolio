document.addEventListener('DOMContentLoaded', function () {

  /* -------------------- DESCARGAR CV -------------------- */
  const btnCV = document.getElementById('descargar-cv');
  if (btnCV) {
    btnCV.addEventListener('click', function () {
      const cvUrl = './assets/documents/Curriculum_CV_Andres_Arturo_Castro.pdf';
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'Curriculum CV Andres Arturo Castro.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  /* -------------------- FORMULARIO -------------------- */
  const enviarMensajeBtn = document.getElementById('enviar-mensaje');
  const dialogo = document.getElementById('dialogo-mensaje');
  const cerrarDialogoBtn = document.getElementById('cerrar-dialogo');

  function infoInput(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre && email && mensaje) {
      enviarCorreo(nombre, email, mensaje);
      dialogo.showModal();
    } else {
      alert('Por favor complete todos los campos.');
    }
  }

  if (enviarMensajeBtn) enviarMensajeBtn.addEventListener('click', infoInput);
  if (cerrarDialogoBtn) cerrarDialogoBtn.addEventListener('click', () => dialogo.close());

  /* -------------------- MODO CLARO -------------------- */
  const modoBtn = document.getElementById('modo-claro');

  if (modoBtn) {
    modoBtn.addEventListener('click', function () {
      document.body.classList.toggle('modo-claro');

      const img = modoBtn.querySelector('img');
      img.src = document.body.classList.contains('modo-claro')
        ? 'https://img.icons8.com/external-glyph-silhouettes-icons-papa-vector/18/external-Light-Mode-interface-glyph-silhouettes-icons-papa-vector.png'
        : 'https://img.icons8.com/external-glyph-silhouettes-icons-papa-vector/18/external-Light-Mode-interface-glyph-silhouettes-icons-papa-vector.png';
    });
  }

  /* -------------------- CAMBIAR IDIOMA -------------------- */
  const idiomaBtn = document.getElementById('cambiar-idioma');

  if (idiomaBtn) {
    idiomaBtn.addEventListener('click', function () {
      const file = window.location.pathname.split('/').pop();
      window.location.href = file === 'index.html' ? 'index-en.html' : 'index.html';
    });
  }

});
