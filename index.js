/* -------------------- DESCARGAR CV -------------------- */
document.getElementById('descargar-cv').addEventListener('click', function () {
	const cvUrl =
		'./assets/documents/Curriculum CV Profesional Andres Arturo Castro.pdf';
	const link = document.createElement('a');
	link.href = cvUrl;
	link.download = 'Curriculum CV Profesional Andres Arturo Castro.pdf';
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
});

/* -------------------- FORMULARIO DE CONTACTO -------------------- */
const enviarMensajeBtn = document.getElementById('enviar-mensaje');
const dialogo = document.getElementById('dialogo-mensaje');
const cerrarDialogoBtn = document.getElementById('cerrar-dialogo');

function infoInput(e) {
	e.preventDefault();
	const nombre = document.getElementById('nombre').value.trim();
	const email = document.getElementById('email').value.trim();
	const mensaje = document.getElementById('mensaje').value.trim();

	if (nombre && email && mensaje) {
		// Enviar correo y luego limpiar y mostrar mensaje si fue exitoso
		enviarCorreo(nombre, email, mensaje);
	} else {
		alert(
			'Por favor, complete todos los campos del formulario antes de enviar su mensaje.',
		);
	}
}

function mostrarMensaje() {
	dialogo.showModal();
}

enviarMensajeBtn.addEventListener('click', infoInput);
cerrarDialogoBtn.addEventListener('click', () => dialogo.close());

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
	emailjs.init('jxVCfyca7qoNr7htn'); // <-- reemplaza por tu PUBLIC KEY

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
					response.text,
				);

				// Limpiar campos SOLO después de enviar correctamente
				document.getElementById('nombre').value = '';
				document.getElementById('email').value = '';
				document.getElementById('mensaje').value = '';

				// Mostrar mensaje de confirmación
				mostrarMensaje();
			},
			function (error) {
				console.error('Error al enviar correo', error);
				alert('Hubo un problema al enviar el mensaje, intenta más tarde.');
			},
		);
}
