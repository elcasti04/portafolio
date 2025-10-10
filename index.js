document.getElementById('descargar-cv').addEventListener('click', function () {
	const cvUrl =
		'./assets/documents/Curriculum CV Profesional Andres Castro.pdf';

	const link = document.createElement('a');
	link.href = cvUrl;
	link.download = 'Curriculum CV Profesional Andres Castro.pdf';
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
});

/*funcion formulario contacto */
const enviarMensajeBtn = document.getElementById('enviar-mensaje');
const dialogo = document.getElementById('dialogo-mensaje');
const cerrarDialogoBtn = document.getElementById('cerrar-dialogo');

function infoInput(e) {
	e.preventDefault();
	const name = document.getElementById('nombre').value.trim();
	const email = document.getElementById('email').value.trim();
	const mensaje = document.getElementById('mensaje').value.trim();

	if (name && email && mensaje) {
		mostrarMensaje();
		document.getElementById('nombre').value = '';
		document.getElementById('email').value = '';
		document.getElementById('mensaje').value = '';
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
cerrarDialogoBtn.addEventListener('click', () => {
	dialogo.close();
});

/* auto responder mensajes*/

function enviarCorreo(nombre, email, mensaje) {
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
			},
			function (error) {
				console.error('Error al enviar correo', error);
				alert('Hubo un problema al enviar el mensaje, intenta más tarde.');
			},
		);
}

/* cambiar modo claro-oscuro*/
document.getElementById('modo-claro').addEventListener('click', function () {
	document.body.classList.toggle('modo-claro');
});

/* cambiar idioma español - ingles*/
document
	.getElementById('cambiar-idioma')
	.addEventListener('click', function () {
		const currentFile = window.location.pathname.split('/').pop();
		if (currentFile === 'index.html') {
			window.location.href = 'index-en.html';
		} else {
			window.location.href = 'index.html';
		}
	});
