document.getElementById('descargar-cv').addEventListener('click', function () {

	const cvUrl = './assets/documents/Curriculum CV Profesional Andres Castro.pdf';


	const link = document.createElement('a');
	link.href = cvUrl;
	link.download = 'Curriculum CV Profesional Andres Castro.pdf';
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
});

