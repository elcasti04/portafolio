/* -------------------- DESCARGAR CV -------------------- */
document.getElementById('descargar-cv').addEventListener('click', function () {
	const cvUrl =
		'./assets/documents/Curriculum_CV_Andres_Arturo_Castro.pdf';
	const link = document.createElement('a');
	link.href = cvUrl;
	link.download = 'Curriculum CV Andres Arturo Castro.pdf';
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
});

/* -------------------- FORMULARIO DE CONTACTO -------------------- */
const enviarMensajeBtn = document.getElementById('enviar-mensaje');
const dialogo = document.getElementById('dialogo-mensaje');
const cerrarDialogoBtn = document.getElementById('cerrar-dialogo');

// Función principal para manejar el envío
function infoInput(e) {
	e.preventDefault();

	const nombre = document.getElementById('nombre').value.trim();
	const email = document.getElementById('email').value.trim();
	const mensaje = document.getElementById('mensaje').value.trim();

	if (nombre && email && mensaje) {
		// Enviar correo
		enviarCorreo(nombre, email, mensaje);
	} else {
		alert(
			'Por favor, complete todos los campos del formulario antes de enviar su mensaje.'
		);
	}
}

// Mostrar el cuadro de confirmación (dialog)
function mostrarMensaje() {
	dialogo.showModal();
}

// Cerrar el cuadro de confirmación
cerrarDialogoBtn.addEventListener('click', () => dialogo.close());

// Evento del botón enviar
enviarMensajeBtn.addEventListener('click', infoInput);

/* -------------------- MODO CLARO/OSCURO -------------------- */
document.getElementById('modo-claro').addEventListener('click', function () {
	document.body.classList.toggle('modo-claro');
});

/* -------------------- CAMBIAR IDIOMA -------------------- */
document
	.getElementById('cambiar-idioma')
	.addEventListener('click', function () {
		const currentFile = window.location.pathname.split('/').pop();
		window.location.href =
			currentFile === 'index.html' ? 'index-en.html' : 'index.html';
	});

/* -------------------- ENVIAR CORREO CON EMAILJS -------------------- */
function enviarCorreo(nombre, email, mensaje) {
	// Inicializar EmailJS con tu public key
	emailjs.init('jxVCfyca7qoNr7htn'); // ⚠️ Reemplázala por tu Public Key real desde EmailJS Dashboard

	// Enviar el correo
	emailjs
		.send('service_4l0rdvp', 'template_kdtysec', {
			from_name: nombre,
			from_email: email,
			message: mensaje,
		})
		.then(
			function (response) {
				console.log(
					'Correo enviado exitosamente',
					response.status,
					response.text
				);

				// Limpiar campos después del envío exitoso
				document.getElementById('nombre').value = '';
				document.getElementById('email').value = '';
				document.getElementById('mensaje').value = '';

				// Mostrar el mensaje de confirmación
				mostrarMensaje();
			},
			function (error) {
				console.error('Error al enviar correo', error);
				alert('Hubo un problema al enviar el mensaje, intenta más tarde.');
			}
		);
}

/* -------------------- VERIFICACIÓN EMAILJS -------------------- */
// Asegura que el SDK de EmailJS está cargado antes de usarlo
document.addEventListener('DOMContentLoaded', function () {
	if (typeof emailjs === 'undefined') {
		console.error(
			'❌ Error: EmailJS no está cargado. Asegúrate de haber incluido su script en el HTML.'
		);
	}
});
