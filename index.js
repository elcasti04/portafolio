document.addEventListener('DOMContentLoaded', function () {
	/* -------------------- DESCARGAR CV -------------------- */
	const btnCV = document.getElementById('descargar-cv');
	if (btnCV) {
		btnCV.addEventListener('click', function () {
			const lang = document.documentElement.lang;
			const cvUrl =
				lang === 'en'
					? './assets/documents/CurrículumEngCv.pdf'
					: './assets/documents/CurrículumCv.pdf';
			const link = document.createElement('a');
			link.href = cvUrl;
			link.download =
				lang === 'en'
					? 'Curriculum CV Andres Arturo Castro.pdf'
					: 'Curriculum CV Andres Arturo Castro.pdf';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		});
	}

	/* -------------------- FORMULARIO -------------------- */
	const formDom = document.getElementById('contact-form');
	const dialog = document.getElementById('dialogo-mensaje');
	const cerrarDialogoBtn = document.getElementById('cerrar-dialogo');

	function getInputsData(e) {
		e.preventDefault();

		const infoInputs = {
			name: document.getElementById('name')?.value?.trim(),
			email: document.getElementById('email')?.value?.trim(),
			message: document.getElementById('message')?.value?.trim(),
		};

		if (infoInputs.name && infoInputs.email && infoInputs.message) {
			emailjs
				.send('service_4l0rdvp', 'template_kdtysec', infoInputs)
				.then(
					(response) => {
						console.log('SUCCESS!', response.status, response.text);
						if (typeof formDom?.reset === 'function') formDom.reset();
						if (dialog && typeof dialog.showModal === 'function') dialog.showModal();
					},
					(error) => {
						console.error('FAILED...', error);
						if (dialog && typeof dialog.showModal === 'function') {
							dialog.textContent = 'Error al enviar. Inténtalo nuevamente.';
							dialog.showModal();
						}
					}
				);
		} else {
			console.warn('Por favor completa todos los campos.');
			if (dialog && typeof dialog.showModal === 'function') {
				dialog.textContent = 'Por favor completa todos los campos.';
				dialog.showModal();
			}
		}
	}

	function bindForm() {
		if (!formDom) return;
		formDom.removeEventListener('submit', getInputsData);
		formDom.addEventListener('submit', getInputsData);
	}

	bindForm();
	if (cerrarDialogoBtn && dialog) {
		cerrarDialogoBtn.addEventListener('click', () => dialog.close());
	}

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
		idiomaBtn.addEventListener('click', function (e) {
			e.preventDefault();
			const file = window.location.pathname.split('/').pop() || 'index.html';
			const newUrl =
				file === 'index.html' || file === '' ? 'index-en.html' : 'index.html';
			window.location.href = newUrl;
		});
	}
});
