import './page.css/acercademi.css'
export const AcercaDeMi = () => {

    function descargar () {
        const lang = document.documentElement.lang
        const cvUrl = 
        lang === 'en' ? "/public/documents/Currículum.Cv.pdf" : "/public/documents/CurrículumEng.Cv.pdf"
        const link = document.createElement('a')
        link.href = cvUrl 
        link.download = 'Currículum.Cv-Andres-Castro.pdf'
       document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
    }

	return (
		<>
			<div id="acerca-de-mi">
                <main
            
				style={{ minHeight: '95vh' }}
				className="acerca-de-mi section-block container-fluid row col-12"
			>
				<h2 className="text-center">Acerca de mi</h2>
				<div className="col-sm-12 col-md-12 col-lg-6 text-center">
					<p className="valores-list fst-italic mt-4">
						<strong>
							“Primero resuelve el problema, después escribe el código”
						</strong>
					</p>
					<a id="descargar-cv" className="btn btn-primary"
							className="btn btn-primary btn-lg w-10"
                            onClick={descargar}>
						Descargar CV 
					</a>
				</div>
				<div className="col-sm-12 text-center col-md-12 col-lg-6">
					<h4 className="text-center">Motivación</h4>
					<p className="descripcion-general">
						Saber que tu trabajo es valorado, recibir comentarios positivos y
						ver tu código implementado en proyectos reales genera una gran
						satisfacción y motivación para seguir mejorando cada día.
					</p>
					<h4 className="text-center">Formación</h4>
					<ul className="list-unstyled mt-3 text-center">
						<li className="valores-list mb-2">
							Estudiante de <strong>Ingeniería de Software</strong> en la
							Universidad de Cartagena.
						</li>
						<li className="valores-list">
							<strong>Desarrollador Web</strong> formado en Academlo como{' '}
							<strong>Desarrollador Full Stack</strong>.
						</li>
					</ul>
				</div>
				<hr />
			</main>
            </div>
		</>
	);
};
